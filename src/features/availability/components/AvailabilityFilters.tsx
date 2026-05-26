import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useTranslation } from "@/i18n/use-translation";
import { AVAILABILITY_STATUSES } from "../constants/availability.constants";
import type { AvailabilityStatusFilter } from "../types";
import { AvailabilityStatusChip } from "./AvailabilityStatusChip";

type AvailabilityFiltersProps = {
  statusFilter: AvailabilityStatusFilter;
  onStatusFilterChange: (value: AvailabilityStatusFilter) => void;
};

export function AvailabilityFilters({
  statusFilter,
  onStatusFilterChange,
}: AvailabilityFiltersProps) {
  const { t } = useTranslation();

  return (
    <TextField
      select
      size="small"
      value={statusFilter}
      onChange={(event) =>
        onStatusFilterChange(event.target.value as AvailabilityStatusFilter)
      }
      sx={{
        minWidth: 180,
        "& .MuiInputLabel-root": { color: "var(--app-text-muted)" },
        "& .MuiOutlinedInput-root": {
          color: "var(--app-text)",
          "& fieldset": { borderColor: "var(--app-control-border)" },
        },
      }}
      data-testid="availability-status-filter"
      slotProps={{
        select: {
          renderValue: (value) => {
            const filter = value as AvailabilityStatusFilter;
            if (filter === "ALL") {
              return t("availability.filter.all");
            }
            return (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AvailabilityStatusChip status={filter} />
              </Box>
            );
          },
        },
      }}
    >
      <MenuItem value="ALL">{t("availability.filter.all")}</MenuItem>
      {AVAILABILITY_STATUSES.map((status) => (
        <MenuItem key={status} value={status}>
          <AvailabilityStatusChip status={status} />
        </MenuItem>
      ))}
    </TextField>
  );
}
