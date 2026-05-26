"use client";

import Box from "@mui/material/Box";
import { AppSidebar } from "./AppSidebar";
import { sidebarMainSx, sidebarPageLayoutSx } from "./sidebar.styles";
import { SidebarCollapseProvider } from "./SidebarCollapseContext";
import { useSidebarLayout } from "./useSidebarLayout";

function AppPageLayoutInner({ children }: { children: React.ReactNode }) {
  const { effectiveCollapsed } = useSidebarLayout();

  return (
    <Box sx={sidebarPageLayoutSx(effectiveCollapsed)}>
      <AppSidebar />
      <Box component="main" sx={sidebarMainSx}>
        {children}
      </Box>
    </Box>
  );
}

export function AppPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarCollapseProvider>
      <AppPageLayoutInner>{children}</AppPageLayoutInner>
    </SidebarCollapseProvider>
  );
}
