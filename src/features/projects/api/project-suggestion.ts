import { gql } from "@apollo/client";
import { useLazyQuery } from "@apollo/client/react";
import { useCallback } from "react";
import type { Locale } from "@/lib/preferences/types";

export const SUGGEST_PROJECT = gql`
  query SuggestProject($input: SuggestProjectInput!) {
    suggestProject(input: $input) {
      name
      domain
      description
      environment
      source
    }
  }
`;

export type ProjectSuggestion = {
  name: string;
  domain: string;
  description: string;
  environment: string[];
  source: "AI" | "RULES";
};

type SuggestProjectResponse = {
  suggestProject: ProjectSuggestion;
};

type SuggestProjectVariables = {
  input: {
    brief: string;
    locale?: string;
  };
};

function mapLocale(locale: Locale): "en" | "ru" {
  return locale === "ru" ? "ru" : "en";
}

export function useSuggestProjectQuery() {
  const [execute, query] = useLazyQuery<
    SuggestProjectResponse,
    SuggestProjectVariables
  >(SUGGEST_PROJECT, {
    fetchPolicy: "no-cache",
  });

  const suggest = useCallback(
    (brief: string, locale: Locale) =>
      execute({
        variables: {
          input: {
            brief,
            locale: mapLocale(locale),
          },
        },
      }),
    [execute],
  );

  return {
    suggest,
    loading: query.loading,
    error: query.error,
    suggestion: query.data?.suggestProject ?? null,
  };
}
