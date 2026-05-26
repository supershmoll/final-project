import type { GraphQLFormattedError } from "graphql";

function getGraphQLErrorCode(error: GraphQLFormattedError): string | undefined {
  const extensions = error.extensions;
  if (
    extensions &&
    typeof extensions === "object" &&
    "code" in extensions &&
    typeof extensions.code === "string"
  ) {
    return extensions.code;
  }
  return undefined;
}

function isUnauthorizedGraphqlError(error: GraphQLFormattedError): boolean {
  const code = getGraphQLErrorCode(error);
  const message = (error.message ?? "").toLowerCase();
  return code === "UNAUTHENTICATED" || message === "unauthorized";
}

function isExpectedOperationError(
  operationName: string | undefined,
  error: GraphQLFormattedError,
): boolean {
  const message = (error.message ?? "").toLowerCase();
  const operation = operationName ?? "";

  if (operation === "Login" && message.includes("invalid credentials")) {
    return true;
  }

  if (
    operation === "ForgotPassword" &&
    message.includes("failed to send email")
  ) {
    return true;
  }

  if (
    operation === "Signup" &&
    (message.includes("already exists") || message.includes("duplicate"))
  ) {
    return true;
  }

  return false;
}

export function shouldLogGraphqlError(
  operationName: string | undefined,
  errors: readonly GraphQLFormattedError[],
): boolean {
  if (errors.length === 0) return false;

  return !errors.every(
    (error) =>
      isUnauthorizedGraphqlError(error) ||
      isExpectedOperationError(operationName, error),
  );
}

export function shouldLogHttpGraphqlResponse(
  status: number,
  body: string,
): boolean {
  if (status < 400) return false;
  const normalized = body.toLowerCase();
  if (status === 401 || status === 403) return false;
  if (
    normalized.includes("unauthenticated") ||
    normalized.includes("unauthorized")
  ) {
    return false;
  }
  if (normalized.includes("invalid credentials")) return false;
  return true;
}
