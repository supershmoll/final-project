import {
  countByStatus,
  filterAvailabilityRows,
  formatEmployeeName,
  isValidTelegramUsername,
  normalizeTelegramUsername,
} from "./availability.utils";
import type { TeamAvailabilityRow } from "../types";

const sampleRows: TeamAvailabilityRow[] = [
  {
    userId: "1",
    status: "OFFICE",
    updatedAt: "2026-05-26T09:00:00Z",
    updatedBy: "BOT",
    firstName: "Anna",
    lastName: "Smith",
    email: "anna@example.com",
    department: "Engineering",
  },
  {
    userId: "2",
    status: "SICK_DAY",
    updatedAt: "2026-05-26T09:05:00Z",
    updatedBy: "BOT",
    firstName: "Bob",
    lastName: "Lee",
    email: "bob@example.com",
    department: "Design",
  },
];

describe("availability.utils", () => {
  it("formats employee name with email fallback", () => {
    expect(formatEmployeeName(sampleRows[0])).toBe("Anna Smith");
    expect(
      formatEmployeeName({ ...sampleRows[0], firstName: "", lastName: "" }),
    ).toBe("anna@example.com");
  });

  it("filters rows by search and status", () => {
    expect(filterAvailabilityRows(sampleRows, "anna", "ALL")).toHaveLength(1);
    expect(filterAvailabilityRows(sampleRows, "", "SICK_DAY")).toHaveLength(1);
    expect(filterAvailabilityRows(sampleRows, "design", "ALL")).toHaveLength(1);
  });

  it("counts statuses", () => {
    expect(countByStatus(sampleRows)).toEqual({
      OFFICE: 1,
      REMOTE: 0,
      SICK_DAY: 1,
      SICK_LIST: 0,
      VACATION: 0,
      UNKNOWN: 0,
    });
  });

  it("normalizes and validates telegram usernames", () => {
    expect(normalizeTelegramUsername("@My_User")).toBe("My_User");
    expect(isValidTelegramUsername("@valid_user123")).toBe(true);
    expect(isValidTelegramUsername("bad")).toBe(false);
  });
});
