import { gql } from "@apollo/client";
import { useLazyQuery } from "@apollo/client/react";
import { useCallback } from "react";
import type { AvailabilityStatus } from "@/features/availability/types";
import type { Locale } from "@/lib/preferences/types";

export const PROJECT_CANDIDATES = gql`
  query ProjectCandidates($input: ProjectCandidatesInput!) {
    projectCandidates(input: $input) {
      userId
      fullName
      email
      department
      position
      matchScore
      matchedSkills
      missingSkills
      availabilityStatus
      age
      education
      summary
      source
    }
  }
`;

export type ProjectCandidate = {
  userId: string;
  fullName: string;
  email: string;
  department: string | null;
  position: string | null;
  matchScore: number;
  matchedSkills: string[];
  missingSkills: string[];
  availabilityStatus: AvailabilityStatus;
  age: number | null;
  education: string | null;
  summary: string;
  source: "AI" | "RULES";
};

export type ProjectCandidatesFilters = {
  projectId: string;
  minAge?: number;
  maxAge?: number;
  educationHint?: string;
  departmentId?: string;
  positionId?: string;
  availabilityStatuses?: AvailabilityStatus[];
  limit?: number;
};

type ProjectCandidatesResponse = {
  projectCandidates: ProjectCandidate[];
};

type ProjectCandidatesVariables = {
  input: ProjectCandidatesFilters & { locale?: string };
};

function mapLocale(locale: Locale): "en" | "ru" {
  return locale === "ru" ? "ru" : "en";
}

export function useProjectCandidatesQuery() {
  const [execute, query] = useLazyQuery<
    ProjectCandidatesResponse,
    ProjectCandidatesVariables
  >(PROJECT_CANDIDATES, {
    fetchPolicy: "no-cache",
  });

  const findCandidates = useCallback(
    (filters: ProjectCandidatesFilters, locale: Locale) =>
      execute({
        variables: {
          input: {
            ...filters,
            locale: mapLocale(locale),
          },
        },
      }),
    [execute],
  );

  return {
    findCandidates,
    loading: query.loading,
    error: query.error,
    candidates: query.data?.projectCandidates ?? null,
  };
}
