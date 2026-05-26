import * as React from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import NextLink from "next/link";
import { useParams, usePathname } from "next/navigation";
import { userProfileSx } from "./userProfile.styles";
import { useTranslation } from "@/i18n/use-translation";
import type { MessageKey } from "@/i18n/messages";

const PROFILE_TAB_KEYS = [
  "profile.tab.profile",
  "profile.tab.skills",
  "profile.tab.languages",
] as const satisfies readonly MessageKey[];

function profileHref(userId: string) {
  return `/users/${userId}/profile`;
}

function skillsHref(userId: string) {
  return `/users/${userId}/skills`;
}

function languagesHref(userId: string) {
  return `/users/${userId}/languages`;
}

export function UserProfileTabs() {
  const { t } = useTranslation();
  const params = useParams<{ userId: string }>();
  const pathname = usePathname();
  const userId = params?.userId ?? "";

  const tabValue = React.useMemo(() => {
    if (!pathname || !userId) return 0;
    if (pathname.includes("/languages")) return 2;
    if (pathname.includes("/skills")) return 1;
    return 0;
  }, [pathname, userId]);

  if (!userId) {
    return (
      <Tabs value={0} sx={userProfileSx.tabs} aria-label="user profile tabs">
        {PROFILE_TAB_KEYS.map((key) => (
          <Tab key={key} label={t(key)} sx={userProfileSx.tab} disabled />
        ))}
      </Tabs>
    );
  }

  return (
    <Tabs
      value={tabValue}
      sx={userProfileSx.tabs}
      aria-label="user profile tabs"
    >
      <Tab
        label={t(PROFILE_TAB_KEYS[0])}
        sx={userProfileSx.tab}
        component={NextLink}
        href={profileHref(userId)}
        scroll={false}
      />
      <Tab
        label={t(PROFILE_TAB_KEYS[1])}
        sx={userProfileSx.tab}
        component={NextLink}
        href={skillsHref(userId)}
        scroll={false}
      />
      <Tab
        label={t(PROFILE_TAB_KEYS[2])}
        sx={userProfileSx.tab}
        component={NextLink}
        href={languagesHref(userId)}
        scroll={false}
      />
    </Tabs>
  );
}
