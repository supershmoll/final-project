import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "@/i18n/use-translation";
import { AVAILABILITY_STATUSES } from "../constants/availability.constants";
import type { TeamAvailabilityRow } from "../types";
import {
  availabilityStatusMessageKey,
  countByStatus,
} from "../utils/availability.utils";
import { AvailabilityStatusChip } from "./AvailabilityStatusChip";

type AvailabilityStatsBarProps = {
  rows: TeamAvailabilityRow[];
};

export function AvailabilityStatsBar({ rows }: AvailabilityStatsBarProps) {
  const { t } = useTranslation();
  const counts = countByStatus(rows);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, minmax(0, 1fr))",
          sm: "repeat(3, minmax(0, 1fr))",
          lg: "repeat(6, minmax(0, 1fr))",
        },
        gap: 1.5,
        mb: 3,
      }}
      data-testid="availability-stats-bar"
    >
      {AVAILABILITY_STATUSES.map((status) => (
        <Box
          key={status}
          sx={{
            borderRadius: 2,
            border: "1px solid var(--app-control-border)",
            bgcolor: "rgba(255,255,255,0.03)",
            px: 2,
            py: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <AvailabilityStatusChip status={status} />
          <Typography
            sx={{
              color: "var(--app-text)",
              fontSize: 28,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            {counts[status]}
          </Typography>
          <Typography sx={{ color: "var(--app-text-muted)", fontSize: 12 }}>
            {t(availabilityStatusMessageKey(status))}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
