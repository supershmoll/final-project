"use client";

import { useMemo, useState } from "react";
import useAuthErrorRedirect from "@/features/auth/hooks/use-auth-error-redirect";
import { useTeamAvailabilityQuery } from "../api/availability";
import type { AvailabilityStatusFilter } from "../types";
import { filterAvailabilityRows } from "../utils/availability.utils";

export function useAvailabilityPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<AvailabilityStatusFilter>("ALL");

  const serverStatusFilter = statusFilter === "ALL" ? undefined : statusFilter;

  const { rows, loading, error, refetch } =
    useTeamAvailabilityQuery(serverStatusFilter);

  useAuthErrorRedirect(error);

  const filteredRows = useMemo(
    () => filterAvailabilityRows(rows, searchQuery, "ALL"),
    [rows, searchQuery],
  );

  return {
    rows: filteredRows,
    allRows: rows,
    loading,
    error,
    refetch,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
  };
}
