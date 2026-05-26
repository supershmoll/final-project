import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { CombinedGraphQLErrors } from "@apollo/client/errors";
import { ErrorLink } from "@apollo/client/link/error";
import { Observable } from "@apollo/client/utilities";
import {
  clearAuthTokens,
  getAccessToken,
} from "@/features/auth/lib/auth-storage";
import isAuthFailure from "@/features/auth/lib/is-auth-failure";
import {
  extractAuthErrorMessage,
  isTelegramSessionEndMessage,
  setSessionEndReason,
} from "@/features/auth/lib/session-end-reason";
import tryRefreshSession from "@/features/auth/lib/try-refresh-session";
import {
  shouldLogGraphqlError,
  shouldLogHttpGraphqlResponse,
} from "./should-log-graphql-error";

function rememberSessionEndReason(error: unknown) {
  const message = extractAuthErrorMessage(error);
  if (message && isTelegramSessionEndMessage(message)) {
    setSessionEndReason(message);
  }
}

function getGraphqlUri() {
  return (
    process.env.NEXT_PUBLIC_GRAPHQL_URL ??
    process.env.VITE_GRAPHQL_URL ??
    "/api/graphql"
  );
}

function resolveGraphqlUri(uri: string) {
  if (uri.startsWith("http://") || uri.startsWith("https://")) {
    return uri;
  }
  if (typeof window !== "undefined") {
    return new URL(uri, window.location.origin).toString();
  }
  return uri;
}

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => {
    const existingAuthorization =
      headers.Authorization ?? headers.authorization;
    const token = getAccessToken();
    return {
      headers: {
        ...headers,
        ...(existingAuthorization || !token
          ? {}
          : { Authorization: `Bearer ${token}` }),
      },
    };
  });
  return forward(operation);
});

const loggingErrorLink = new ErrorLink(({ error, operation }) => {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  if (CombinedGraphQLErrors.is(error)) {
    const graphQLErrors = error.errors.map((graphQLError) => ({
      message: graphQLError.message,
      path: graphQLError.path,
      extensions: graphQLError.extensions,
    }));

    if (!shouldLogGraphqlError(operation.operationName, graphQLErrors)) {
      return;
    }

    console.error("GraphQL errors", {
      operation: operation.operationName,
      variables: operation.variables,
      graphQLErrors,
    });
    return;
  }

  if (error) {
    console.error("GraphQL network error", {
      operation: operation.operationName,
      variables: operation.variables,
      networkError: error,
    });
  }
});

const authErrorLink = new ErrorLink(({ error, operation, forward }) => {
  if (!isAuthFailure(error)) {
    return;
  }

  if (operation.getContext().authRetry) {
    rememberSessionEndReason(error);
    clearAuthTokens();
    void client.clearStore();
    return;
  }

  return new Observable((observer) => {
    let retrySubscription: { unsubscribe: () => void } | undefined;

    void tryRefreshSession().then((isRefreshed) => {
      if (!isRefreshed) {
        rememberSessionEndReason(error);
        clearAuthTokens();
        void client.clearStore();
        observer.error(error);
        return;
      }

      const context = operation.getContext();
      operation.setContext({ ...context, authRetry: true });
      retrySubscription = forward(operation).subscribe(observer);
    });

    return () => {
      retrySubscription?.unsubscribe();
    };
  });
});

const httpLink = new HttpLink({
  uri: resolveGraphqlUri(getGraphqlUri()),
  fetch: async (input, init) => {
    const res = await fetch(input, init);
    if (!res.ok) {
      try {
        const text = await res.clone().text();
        if (
          process.env.NODE_ENV === "development" &&
          shouldLogHttpGraphqlResponse(res.status, text)
        ) {
          console.error("GraphQL HTTP error", res.status, text);
        }
      } catch {
        if (process.env.NODE_ENV === "development") {
          console.error("GraphQL HTTP error", res.status);
        }
      }
    }
    return res;
  },
});

const client = new ApolloClient({
  link: loggingErrorLink
    .concat(authErrorLink)
    .concat(authLink)
    .concat(httpLink),
  cache: new InMemoryCache(),
});

export async function resetApolloCache(): Promise<void> {
  await client.clearStore();
}

export default client;
