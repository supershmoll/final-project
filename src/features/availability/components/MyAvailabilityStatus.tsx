"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import formatDisplayDate from "@/lib/format-display-date";
import { useTranslation } from "@/i18n/use-translation";
import { useMyAvailabilityQuery } from "../api/availability";
import { availabilitySx } from "../styles/availability.styles";
import { AvailabilityStatusChip } from "./AvailabilityStatusChip";

type MyAvailabilityStatusProps = {
  compact?: boolean;
};

export function MyAvailabilityStatus({
  compact = false,
}: MyAvailabilityStatusProps) {
  const { t } = useTranslation();
  const { myAvailability, loading } = useMyAvailabilityQuery();

  if (loading && !myAvailability) {
    return null;
  }

  const status = myAvailability?.status ?? "UNKNOWN";
  const updatedAt = myAvailability?.updatedAt;

  return (
    <Box
      sx={compact ? availabilitySx.myStatusCompact : availabilitySx.myStatusBox}
      data-testid="my-availability-status"
    >
      <Typography sx={availabilitySx.myStatusLabel}>
        {t("availability.myStatus")}
      </Typography>
      <Box sx={availabilitySx.myStatusRow}>
        <AvailabilityStatusChip status={status} size="medium" />
        {updatedAt ? (
          <Typography sx={availabilitySx.myStatusMeta}>
            {t("availability.updatedAt")} {formatDisplayDate(updatedAt)}
          </Typography>
        ) : null}
      </Box>
      {status === "UNKNOWN" ? (
        <Typography sx={availabilitySx.myStatusHint}>
          {t("availability.noStatusYet")}
        </Typography>
      ) : null}
    </Box>
  );
}
