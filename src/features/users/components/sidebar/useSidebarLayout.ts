"use client";

import useMediaQuery from "@mui/material/useMediaQuery";
import {
  SIDEBAR_COMPACT_DESKTOP_QUERY,
  SIDEBAR_MOBILE_QUERY,
} from "./sidebar.constants";
import { useSidebarCollapse } from "./SidebarCollapseContext";

export function useSidebarLayout() {
  const { collapsed, toggle } = useSidebarCollapse();
  const isMobile = useMediaQuery(SIDEBAR_MOBILE_QUERY);
  const isCompactDesktop = useMediaQuery(SIDEBAR_COMPACT_DESKTOP_QUERY);

  const effectiveCollapsed = collapsed || isCompactDesktop;
  const iconOnly = isMobile || effectiveCollapsed;

  return {
    collapsed,
    toggle,
    isMobile,
    isCompactDesktop,
    effectiveCollapsed,
    iconOnly,
    showCollapseControl: !isMobile && !isCompactDesktop,
  };
}
