"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createResetPasswordSchema,
  type ResetPasswordFormValues,
} from "../schemas/reset-password.schema";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import NextLink from "next/link";
import useResetPassword from "../hooks/use-reset-password";
import { authFormStyles } from "../styles/auth-form.styles";
import AuthFormBody from "./auth-form-body";
import { useMemo, useState } from "react";
import { useTranslation } from "@/i18n/use-translation";

function ResetPasswordForm() {
  const { loading, error, resetPasswordUser, isSuccess, token } =
    useResetPassword();
  const { t } = useTranslation();
  const resetPasswordSchema = useMemo(() => createResetPasswordSchema(t), [t]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { newPassword: "", confirmNewPassword: "" },
  });

  const isPending = isSubmitting || loading;
  const passwordInputType = showPassword ? "text" : "password";
  const confirmPasswordInputType = showConfirmPassword ? "text" : "password";
  const passwordVisibilityLabel = showPassword
    ? t("auth.hidePassword")
    : t("auth.showPassword");
  const confirmPasswordVisibilityLabel = showConfirmPassword
    ? t("auth.hidePassword")
    : t("auth.showPassword");
  const isSubmitDisabled = isPending || !token || isSuccess;

  const togglePasswordVisibility = () => {
    setShowPassword((current) => !current);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((current) => !current);
  };

  return (
    <Stack
      sx={authFormStyles.form}
      component="form"
      onSubmit={handleSubmit(resetPasswordUser)}
      noValidate
    >
      <AuthFormBody standalone>
        <Box sx={authFormStyles.headerText}>
          <Typography variant="h2" component="h1" sx={authFormStyles.title}>
            {t("auth.resetPassword")}
          </Typography>
          <Typography sx={authFormStyles.subtitle}>
            {t("auth.resetPasswordSubtitle")}
          </Typography>
        </Box>
        <TextField
          sx={authFormStyles.textField}
          type={passwordInputType}
          placeholder={t("auth.newPasswordPlaceholder")}
          {...register("newPassword")}
          error={!!errors.newPassword}
          helperText={errors.newPassword?.message}
          autoComplete="new-password"
          slotProps={{
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
        <TextField
          sx={authFormStyles.textField}
          type={confirmPasswordInputType}
          placeholder={t("auth.confirmNewPasswordPlaceholder")}
          {...register("confirmNewPassword")}
          error={!!errors.confirmNewPassword}
          helperText={errors.confirmNewPassword?.message}
          autoComplete="new-password"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="button"
                    aria-label={confirmPasswordVisibilityLabel}
                    edge="end"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
          disabled={isSubmitDisabled}
        >
          {isPending ? (
            <CircularProgress size={20} />
          ) : (
            t("auth.resetPasswordSubmit")
          )}
        </Button>
        <Link component={NextLink} href="/login" sx={authFormStyles.textAction}>
          {t("auth.signIn")}
        </Link>
        {isSuccess && (
          <Alert sx={authFormStyles.formAlert} severity="success">
            {t("auth.resetPasswordSuccess")}
          </Alert>
        )}
        {error && (
          <Alert sx={authFormStyles.formAlert} severity="error">
            {error.message}
          </Alert>
        )}
        {!token && (
          <Alert sx={authFormStyles.formAlert} severity="error">
            {t("auth.tokenRequired")}
          </Alert>
        )}
      </AuthFormBody>
    </Stack>
  );
}

export default ResetPasswordForm;
