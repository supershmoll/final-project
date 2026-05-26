export type AvailabilityStatus =
  | "OFFICE"
  | "REMOTE"
  | "SICK_DAY"
  | "SICK_LIST"
  | "VACATION"
  | "UNKNOWN";

export type AvailabilityUpdatedBy = "USER" | "BOT" | "ADMIN";

export type TeamAvailabilityRow = {
  userId: string;
  status: AvailabilityStatus;
  updatedAt: string;
  updatedBy: AvailabilityUpdatedBy;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
};

export type TelegramLinkStatus = {
  linked: boolean;
  telegramUsername?: string | null;
  botUsername: string;
};

export type AvailabilityStatusFilter = AvailabilityStatus | "ALL";
