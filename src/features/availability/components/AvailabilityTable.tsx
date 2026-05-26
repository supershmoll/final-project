import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import formatDisplayDate from "@/lib/format-display-date";
import { useTranslation } from "@/i18n/use-translation";
import { catalogTableSx } from "@/shared/styles";
import type { TeamAvailabilityRow } from "../types";
import { formatEmployeeName } from "../utils/availability.utils";
import { availabilitySx } from "../styles/availability.styles";
import { AvailabilityStatusChip } from "./AvailabilityStatusChip";

type AvailabilityTableProps = {
  rows: TeamAvailabilityRow[];
};

function updatedByLabelKey(
  updatedBy: TeamAvailabilityRow["updatedBy"],
):
  | "availability.updatedBy.bot"
  | "availability.updatedBy.user"
  | "availability.updatedBy.admin" {
  if (updatedBy === "BOT") return "availability.updatedBy.bot";
  if (updatedBy === "ADMIN") return "availability.updatedBy.admin";
  return "availability.updatedBy.user";
}

export function AvailabilityTable({ rows }: AvailabilityTableProps) {
  const { t } = useTranslation();

  if (rows.length === 0) {
    return (
      <Typography
        sx={{ color: "var(--app-text-muted)", py: 4, textAlign: "center" }}
        data-testid="availability-empty"
      >
        {t("availability.empty")}
      </Typography>
    );
  }

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={[catalogTableSx.tableContainer, availabilitySx.tableContainer]}
      data-testid="availability-table"
    >
      <Table
        sx={[catalogTableSx.table, availabilitySx.table]}
        aria-label="team availability table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={catalogTableSx.headFirstNameCell}>
              {t("availability.table.employee")}
            </TableCell>
            <TableCell
              sx={{
                ...catalogTableSx.headEmailCell,
                ...catalogTableSx.headEmailCellMobileHidden,
              }}
            >
              {t("table.department")}
            </TableCell>
            <TableCell
              sx={[
                catalogTableSx.headEmailCell,
                availabilitySx.tableHeadStatus,
              ]}
            >
              {t("availability.table.status")}
            </TableCell>
            <TableCell
              sx={{
                ...catalogTableSx.headEmailCell,
                ...catalogTableSx.headEmailCellMobileHidden,
              }}
            >
              {t("availability.table.updated")}
            </TableCell>
            <TableCell
              sx={{
                ...catalogTableSx.headEmailCell,
                ...catalogTableSx.headEmailCellMobileHidden,
              }}
            >
              {t("availability.table.updatedBy")}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.userId} sx={catalogTableSx.row}>
              <TableCell sx={availabilitySx.employeeCell}>
                <Typography sx={availabilitySx.employeeName}>
                  {formatEmployeeName(row)}
                </Typography>
                <Typography sx={availabilitySx.employeeMeta}>
                  {row.department || "—"}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  color: "var(--app-text-muted)",
                  ...catalogTableSx.headEmailCellMobileHidden,
                }}
              >
                {row.department || "—"}
              </TableCell>
              <TableCell sx={availabilitySx.statusCell}>
                <AvailabilityStatusChip status={row.status} />
              </TableCell>
              <TableCell
                sx={{
                  color: "var(--app-text-muted)",
                  ...catalogTableSx.headEmailCellMobileHidden,
                }}
              >
                {formatDisplayDate(row.updatedAt)}
              </TableCell>
              <TableCell
                sx={{
                  color: "var(--app-text-muted)",
                  ...catalogTableSx.headEmailCellMobileHidden,
                }}
              >
                {t(updatedByLabelKey(row.updatedBy))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
