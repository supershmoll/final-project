"use client";

import Box from "@mui/material/Box";
import { CatalogPageShell } from "@/shared/ui/catalog/CatalogPageShell";
import { useTranslation } from "@/i18n/use-translation";
import { AvailabilityFilters } from "../components/AvailabilityFilters";
import { AvailabilityLiveIndicator } from "../components/AvailabilityStatusChip";
import { AvailabilityStatsBar } from "../components/AvailabilityStatsBar";
import { AvailabilityTable } from "../components/AvailabilityTable";
import { HrAssistantPanel } from "../components/HrAssistantPanel";
import { MyAvailabilityStatus } from "../components/MyAvailabilityStatus";
import { useAvailabilityPage } from "../hooks/useAvailabilityPage";
import { availabilitySx } from "../styles/availability.styles";

export function AvailabilityPage() {
  const { t } = useTranslation();
  const {
    rows,
    allRows,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
  } = useAvailabilityPage();

  return (
    <CatalogPageShell
      title={t("nav.availability")}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      filter={
        <AvailabilityFilters
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />
      }
      errorMessage={error?.message}
      loading={loading && allRows.length === 0}
    >
      <Box sx={availabilitySx.pageMetaRow}>
        <AvailabilityLiveIndicator />
      </Box>
      <MyAvailabilityStatus />
      <HrAssistantPanel />
      {!loading || allRows.length > 0 ? (
        <AvailabilityStatsBar rows={allRows} />
      ) : null}
      <AvailabilityTable rows={rows} />
    </CatalogPageShell>
  );
}
