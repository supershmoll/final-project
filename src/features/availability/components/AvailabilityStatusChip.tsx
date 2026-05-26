import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { useTranslation } from "@/i18n/use-translation";
import { STATUS_CHIP_COLORS } from "../constants/availability.constants";
import type { AvailabilityStatus } from "../types";
import { availabilityStatusMessageKey } from "../utils/availability.utils";

type AvailabilityStatusChipProps = {
  status: AvailabilityStatus;
  size?: "small" | "medium";
};

export function AvailabilityStatusChip({
  status,
  size = "small",
}: AvailabilityStatusChipProps) {
  const { t } = useTranslation();
  const colors = STATUS_CHIP_COLORS[status];

  return (
    <Chip
      label={t(availabilityStatusMessageKey(status))}
      size={size}
      data-testid={`availability-status-${status.toLowerCase()}`}
      sx={{
        bgcolor: colors.bg,
        color: colors.color,
        border: `1px solid ${colors.border}`,
        fontWeight: 600,
        letterSpacing: 0.3,
        textTransform: "uppercase",
        fontSize: size === "small" ? 11 : 12,
        height: size === "small" ? 26 : 30,
        "& .MuiChip-label": {
          px: 1.25,
        },
      }}
    />
  );
}

export function AvailabilityLiveIndicator() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        color: "var(--app-text-muted)",
        fontSize: 13,
      }}
      data-testid="availability-live-indicator"
    >
      <Box
        component="span"
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          bgcolor: "#4caf50",
          boxShadow: "0 0 0 0 rgba(76,175,80,0.6)",
          animation: "availabilityPulse 2s infinite",
          "@keyframes availabilityPulse": {
            "0%": { boxShadow: "0 0 0 0 rgba(76,175,80,0.5)" },
            "70%": { boxShadow: "0 0 0 8px rgba(76,175,80,0)" },
            "100%": { boxShadow: "0 0 0 0 rgba(76,175,80,0)" },
          },
        }}
      />
      {t("availability.liveIndicator")}
    </Box>
  );
}
