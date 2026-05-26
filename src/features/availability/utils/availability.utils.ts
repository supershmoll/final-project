import type { MessageKey } from "@/i18n/messages";
import type {
  AvailabilityStatus,
  AvailabilityStatusFilter,
  TeamAvailabilityRow,
} from "../types";

export function availabilityStatusMessageKey(
  status: AvailabilityStatus,
): MessageKey {
  const map: Record<AvailabilityStatus, MessageKey> = {
    OFFICE: "availability.status.office",
    REMOTE: "availability.status.remote",
    SICK_DAY: "availability.status.sickDay",
    SICK_LIST: "availability.status.sickList",
    VACATION: "availability.status.vacation",
    UNKNOWN: "availability.status.unknown",
  };
  return map[status];
}

export function availabilityFilterMessageKey(
  filter: AvailabilityStatusFilter,
): MessageKey {
  if (filter === "ALL") return "availability.filter.all";
  return availabilityStatusMessageKey(filter);
}

export function formatEmployeeName(row: TeamAvailabilityRow): string {
  const full = `${row.firstName} ${row.lastName}`.trim();
  return full || row.email;
}

export function filterAvailabilityRows(
  rows: TeamAvailabilityRow[],
  query: string,
  statusFilter: AvailabilityStatusFilter,
): TeamAvailabilityRow[] {
  const normalizedQuery = query.trim().toLowerCase();

  return rows.filter((row) => {
    if (statusFilter !== "ALL" && row.status !== statusFilter) {
      return false;
    }

    if (!normalizedQuery) return true;

    const haystack = [row.firstName, row.lastName, row.email, row.department]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function countByStatus(rows: TeamAvailabilityRow[]) {
  return rows.reduce(
    (acc, row) => {
      acc[row.status] += 1;
      return acc;
    },
    {
      OFFICE: 0,
      REMOTE: 0,
      SICK_DAY: 0,
      SICK_LIST: 0,
      VACATION: 0,
      UNKNOWN: 0,
    } satisfies Record<AvailabilityStatus, number>,
  );
}

export function normalizeTelegramUsername(value: string): string {
  return value.trim().replace(/^@+/, "");
}

export function isValidTelegramUsername(value: string): boolean {
  return /^[a-zA-Z0-9_]{5,32}$/.test(normalizeTelegramUsername(value));
}
