"use client";

import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { PageLoader } from "@/components/PageLoader";
import { UserProfileEditSection } from "@/features/users/components/user-profile/UserProfileEditSection";
import { UserProfileTabs } from "@/features/users/components/user-profile/UserProfileTabs";
import { userProfileSx } from "@/features/users/components/user-profile/userProfile.styles";
import { useUserProfilePage } from "@/features/users/hooks/useUserProfilePage";
import { useTranslation } from "@/i18n/use-translation";

export function UserProfilePage() {
  const { t } = useTranslation();
  const {
    user,
    loading,
    error,
    refetch,
    breadcrumbName,
    memberSinceText,
    canEditProfile,
    isOwnProfile,
  } = useUserProfilePage();

  return (
    <Box sx={userProfileSx.container}>
      <Breadcrumbs aria-label="breadcrumb" sx={userProfileSx.breadcrumbs}>
        <Link
          component={NextLink}
          href="/users"
          underline="hover"
          sx={userProfileSx.breadcrumbLink}
        >
          {t("nav.employees")}
        </Link>
        <Typography component="span" sx={userProfileSx.breadcrumbActive}>
          {breadcrumbName}
        </Typography>
      </Breadcrumbs>
      <UserProfileTabs />
      {loading ? <PageLoader /> : null}
      {!loading && error ? (
        <Typography color="error.main">{t("profile.loadError")}</Typography>
      ) : null}
      {!loading && !error && !user ? (
        <Typography sx={userProfileSx.email}>
          {t("profile.notFound")}
        </Typography>
      ) : null}
      {!loading && !error && user ? (
        <UserProfileEditSection
          key={`${user.id}:${user.avatarUrl ?? ""}`}
          user={user}
          memberSinceText={memberSinceText}
          canEditProfile={canEditProfile}
          isOwnProfile={isOwnProfile}
          onUserUpdated={refetch}
        />
      ) : null}
    </Box>
  );
}
