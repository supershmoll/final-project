import type { AvailabilityStatus } from "../types";

export const AVAILABILITY_POLL_INTERVAL_MS = 30_000;

export const AVAILABILITY_STATUSES: AvailabilityStatus[] = [
  "OFFICE",
  "REMOTE",
  "SICK_DAY",
  "SICK_LIST",
  "VACATION",
  "UNKNOWN",
];

export const STATUS_CHIP_COLORS: Record<
  AvailabilityStatus,
  { bg: string; color: string; border: string }
> = {
  OFFICE: {
    bg: "rgba(76, 175, 80, 0.18)",
    color: "#81c784",
    border: "rgba(76, 175, 80, 0.45)",
  },
  REMOTE: {
    bg: "rgba(33, 150, 243, 0.18)",
    color: "#64b5f6",
    border: "rgba(33, 150, 243, 0.45)",
  },
  SICK_DAY: {
    bg: "rgba(223, 77, 77, 0.18)",
    color: "#ffb4b4",
    border: "rgba(223, 77, 77, 0.5)",
  },
  SICK_LIST: {
    bg: "rgba(244, 67, 54, 0.22)",
    color: "#ff8a80",
    border: "rgba(244, 67, 54, 0.55)",
  },
  VACATION: {
    bg: "rgba(255, 193, 7, 0.15)",
    color: "#ffd54f",
    border: "rgba(255, 193, 7, 0.45)",
  },
  UNKNOWN: {
    bg: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.5)",
    border: "rgba(255,255,255,0.12)",
  },
};
