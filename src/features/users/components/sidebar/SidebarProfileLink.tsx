import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { navItemClassName } from "./sidebarNav.utils";
import { sidebarSx } from "./sidebar.styles";

export type SidebarProfileLinkProps = {
  profileHref: string;
  profileActive: boolean;
  displayName: string;
  initial: string;
  avatarUrl?: string | null;
  iconOnly: boolean;
  isMobile: boolean;
  className?: string;
};

export function SidebarProfileLink({
  profileHref,
  profileActive,
  displayName,
  initial,
  avatarUrl,
  iconOnly,
  isMobile,
  className = "",
}: SidebarProfileLinkProps) {
  const profileLink = (
    <Box
      component={Link}
      href={profileHref}
      className={[
        navItemClassName(profileActive, false),
        "sidebar-nav-item--profile",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={displayName}
      title={iconOnly ? displayName : undefined}
    >
      <Avatar
        src={avatarUrl ?? undefined}
        alt={displayName}
        sx={sidebarSx.userAvatar}
      >
        {initial}
      </Avatar>
      <Typography component="span" noWrap className="sidebar-nav-item__label">
        {displayName}
      </Typography>
    </Box>
  );

  if (iconOnly) {
    return (
      <Tooltip title={displayName} placement={isMobile ? "top" : "right"}>
        <Box component="span" sx={{ display: "flex", minWidth: 0 }}>
          {profileLink}
        </Box>
      </Tooltip>
    );
  }

  return profileLink;
}
