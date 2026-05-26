"use client";
import {
  TextField,
  Button,
  Stack,
  Typography,
  CircularProgress,
  Alert,
  Box,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { authFormStyles } from "../styles/auth-form.styles";
import { useForm } from "react-hook-form";
import NextLink from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createLoginSchema,
  type LoginFormValues,
} from "../schemas/login.schema";
import useLogin from "../hooks/use-login";
import AuthFormBody from "./auth-form-body";
import AuthFormTabs from "./auth-form-tabs";
import { useMemo, useState } from "react";
import {
  consumeSessionEndReason,
  isTelegramSessionEndMessage,
} from "../lib/session-end-reason";
import { useTranslation } from "@/i18n/use-translation";

function LoginForm() {
  const { loading, error, loginUser } = useLogin();
  const { t } = useTranslation();
  const loginSchema = useMemo(() => createLoginSchema(t), [t]);
  const [showPassword, setShowPassword] = useState(false);
  const [sessionReason] = useState(() => consumeSessionEndReason());

  const sessionNotice = sessionReason
    ? isTelegramSessionEndMessage(sessionReason)
      ? t("auth.sessionExpired.telegram")
      : sessionReason
    : null;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isPending = isSubmitting || loading;
  const passwordInputType = showPassword ? "text" : "password";
  const passwordVisibilityLabel = showPassword
    ? t("auth.hidePassword")
    : t("auth.showPassword");

  const togglePasswordVisibility = () => {
    setShowPassword((current) => !current);
  };

  return (
    <Stack
      sx={authFormStyles.form}
      onSubmit={handleSubmit(loginUser)}
      component="form"
      noValidate
      data-testid="login-form"
    >
      <AuthFormTabs active="login" />
      <AuthFormBody>
        <Box sx={authFormStyles.headerText}>
          <Typography variant="h2" component="h1" sx={authFormStyles.title}>
            {t("auth.signIn")}
          </Typography>
          <Typography sx={authFormStyles.subtitle}>
            {t("auth.welcomeBack")}
          </Typography>
        </Box>
        <TextField
          sx={authFormStyles.textField}
          type="email"
          placeholder={t("auth.emailPlaceholder")}
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          autoComplete="email"
          slotProps={{
            htmlInput: { "data-testid": "login-email" },
          }}
        />
        <TextField
          sx={authFormStyles.textField}
          type={passwordInputType}
          placeholder={t("auth.passwordPlaceholder")}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          autoComplete="current-password"
          slotProps={{
            htmlInput: { "data-testid": "login-password" },
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="button"
                    aria-label={passwordVisibilityLabel}
                    edge="end"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <Button
          sx={authFormStyles.submitButton}
          type="submit"
          variant="contained"
          color="primary"
          disabled={isPending}
          data-testid="login-submit"
        >
          {isPending ? <CircularProgress size={20} /> : t("auth.signIn")}
        </Button>
        <Link
          component={NextLink}
          href="/forgot-password"
          sx={authFormStyles.textAction}
        >
          {t("auth.forgotPassword")}
        </Link>
        {sessionNotice ? (
          <Alert
            sx={authFormStyles.formAlert}
            severity="warning"
            data-testid="login-session-notice"
          >
            {sessionNotice}
          </Alert>
        ) : null}
        {error && (
          <Alert
            sx={authFormStyles.formAlert}
            severity="error"
            data-testid="login-error"
          >
            {error.message}
          </Alert>
        )}
      </AuthFormBody>
    </Stack>
  );
}

export default LoginForm;
