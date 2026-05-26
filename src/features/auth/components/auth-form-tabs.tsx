"use client";

import { Button, Stack } from "@mui/material";
import NextLink from "next/link";
import { authFormStyles } from "../styles/auth-form.styles";
import { useTranslation } from "@/i18n/use-translation";

type AuthFormTabsProps = {
  active: "login" | "registration";
};

function AuthFormTabs({ active }: AuthFormTabsProps) {
  const { t } = useTranslation();
  const isLoginActive = active === "login";
  const isSignUpActive = active === "registration";

  return (
    <Stack direction="row" spacing={0} sx={authFormStyles.tabs}>
      <Button
        type="button"
        component={NextLink}
        href="/login"
        sx={[authFormStyles.tab, isLoginActive && authFormStyles.activeTab]}
      >
        {t("auth.signIn")}
      </Button>
      <Button
        type="button"
        component={NextLink}
        href="/registration"
        sx={[authFormStyles.tab, isSignUpActive && authFormStyles.activeTab]}
      >
        {t("auth.signUp")}
      </Button>
    </Stack>
  );
}

export default AuthFormTabs;
