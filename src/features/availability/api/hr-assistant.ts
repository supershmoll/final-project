import { gql } from "@apollo/client";
import { useLazyQuery } from "@apollo/client/react";
import { useCallback } from "react";
import type { Locale } from "@/lib/preferences/types";

export const ASK_HR_ASSISTANT = gql`
  query AskHrAssistant($input: AskHrAssistantInput!) {
    askHrAssistant(input: $input) {
      answer
      source
    }
  }
`;

type AskHrAssistantResponse = {
  askHrAssistant: {
    answer: string;
    source: "AI" | "RULES";
  };
};

type AskHrAssistantVariables = {
  input: {
    question: string;
    locale?: string;
  };
};

function mapLocale(locale: Locale): "en" | "ru" {
  return locale === "ru" ? "ru" : "en";
}

export function useHrAssistantQuery() {
  const [execute, query] = useLazyQuery<
    AskHrAssistantResponse,
    AskHrAssistantVariables
  >(ASK_HR_ASSISTANT, {
    fetchPolicy: "no-cache",
  });

  const ask = useCallback(
    (question: string, locale: Locale) =>
      execute({
        variables: {
          input: {
            question,
            locale: mapLocale(locale),
          },
        },
      }),
    [execute],
  );

  return {
    ask,
    loading: query.loading,
    error: query.error,
    answer: query.data?.askHrAssistant ?? null,
  };
}
