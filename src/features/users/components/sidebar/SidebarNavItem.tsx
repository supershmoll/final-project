import * as React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useTranslation } from "@/i18n/use-translation";
import type { SidebarNavItem as SidebarNavItemConfig } from "./sidebar.constants";
import { navItemClassName, resolveHref } from "./sidebarNav.utils";

export type SidebarNavItemProps = {
  item: SidebarNavItemConfig;
  pathname: string;
  userId: string | null;
  iconOnly: boolean;
  isMobile: boolean;
};

export function SidebarNavItem({
  item,
  pathname,
  userId,
  iconOnly,
  isMobile,
}: SidebarNavItemProps) {
  const { t } = useTranslation();
  const label = t(item.labelKey);
  const navigable = item.navigable ?? false;
  const href = resolveHref(item.href, userId);
  const active = item.isActive(pathname, userId);
  const Icon = item.icon;
  const className = navItemClassName(active, !navigable);

  const itemContent = (
    <>
      <Icon aria-hidden />
      <Typography component="span" className="sidebar-nav-item__label">
        {label}
      </Typography>
    </>
  );

  const link = navigable ? (
    <Box
      component={Link}
      href={href}
      className={className}
      aria-current={active ? "page" : undefined}
      aria-label={iconOnly ? label : undefined}
      title={iconOnly ? label : undefined}
      data-testid={`nav-${item.id}`}
    >
      {itemContent}
    </Box>
  ) : (
    <Box
      component="span"
      className={className}
      aria-disabled="true"
      aria-label={iconOnly ? label : undefined}
      title={iconOnly ? label : undefined}
    >
      {itemContent}
    </Box>
  );

  if (iconOnly) {
    return (
      <Tooltip title={label} placement={isMobile ? "top" : "right"}>
        <Box component="span" sx={{ display: "flex", flexShrink: 0 }}>
          {link}
        </Box>
      </Tooltip>
    );
  }

  return link;
}
