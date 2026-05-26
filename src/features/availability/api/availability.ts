import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { AVAILABILITY_POLL_INTERVAL_MS } from "../constants/availability.constants";
import type {
  AvailabilityStatus,
  AvailabilityUpdatedBy,
  TeamAvailabilityRow,
} from "../types";

export const TEAM_AVAILABILITY = gql`
  query TeamAvailability($filter: TeamAvailabilityFilter) {
    teamAvailability(filter: $filter) {
      userId
      status
      updatedAt
      updatedBy
      user {
        email
        department_name
        profile {
          first_name
          last_name
        }
      }
    }
  }
`;

export const MY_AVAILABILITY = gql`
  query MyAvailability {
    myAvailability {
      status
      updatedAt
      updatedBy
    }
  }
`;

type TeamAvailabilityResponse = {
  teamAvailability: Array<{
    userId: string;
    status: AvailabilityStatus;
    updatedAt: string;
    updatedBy: AvailabilityUpdatedBy;
    user: {
      email: string;
      department_name?: string | null;
      profile?: {
        first_name?: string | null;
        last_name?: string | null;
      } | null;
    };
  }>;
};

type TeamAvailabilityVariables = {
  filter?: {
    status?: AvailabilityStatus;
  };
};

function mapTeamAvailabilityRow(
  item: TeamAvailabilityResponse["teamAvailability"][number],
): TeamAvailabilityRow {
  return {
    userId: item.userId,
    status: item.status,
    updatedAt: item.updatedAt,
    updatedBy: item.updatedBy,
    firstName: (item.user.profile?.first_name ?? "").trim(),
    lastName: (item.user.profile?.last_name ?? "").trim(),
    email: item.user.email,
    department: item.user.department_name ?? "",
  };
}

export function useTeamAvailabilityQuery(statusFilter?: AvailabilityStatus) {
  const query = useQuery<TeamAvailabilityResponse, TeamAvailabilityVariables>(
    TEAM_AVAILABILITY,
    {
      variables: statusFilter
        ? { filter: { status: statusFilter } }
        : undefined,
      pollInterval: AVAILABILITY_POLL_INTERVAL_MS,
      fetchPolicy: "cache-and-network",
    },
  );

  const rows = (query.data?.teamAvailability ?? []).map(mapTeamAvailabilityRow);

  return { ...query, rows };
}

type MyAvailabilityResponse = {
  myAvailability: {
    status: AvailabilityStatus;
    updatedAt: string;
    updatedBy: AvailabilityUpdatedBy;
  };
};

export function useMyAvailabilityQuery() {
  const query = useQuery<MyAvailabilityResponse>(MY_AVAILABILITY, {
    pollInterval: AVAILABILITY_POLL_INTERVAL_MS,
    fetchPolicy: "cache-and-network",
  });

  return {
    ...query,
    myAvailability: query.data?.myAvailability ?? null,
  };
}
