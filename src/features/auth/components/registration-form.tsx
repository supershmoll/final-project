"use client";
import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Alert,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createSignupSchema,
  type SignupFormValues,
} from "../schemas/signup.schema";
import useRegistration from "../hooks/use-registration";
import { authFormStyles } from "../styles/auth-form.styles";
import AuthFormBody from "./auth-form-body";
import AuthFormTabs from "./auth-form-tabs";
import { useMemo, useState } from "react";
import { useTranslation } from "@/i18n/use-translation";

function RegistrationForm() {
  const { loading, error, registerUser } = useRegistration();
  const { t } = useTranslation();
  const signupSchema = useMemo(() => createSignupSchema(t), [t]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
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

  const togglePasswordVisibility = () => {
    setShowPassword((current) => !current);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((current) => !current);
  };

  return (
    <Stack
      sx={authFormStyles.form}
      onSubmit={handleSubmit(registerUser)}
      component="form"
      noValidate
    >
      <AuthFormTabs active="registration" />
      <AuthFormBody>
        <Box sx={authFormStyles.headerText}>
          <Typography variant="h2" component="h1" sx={authFormStyles.title}>
            {t("auth.signUp")}
          </Typography>
          <Typography sx={authFormStyles.subtitle}>
            {t("auth.createAccountSubtitle")}
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
        />
        <TextField
          sx={authFormStyles.textField}
          type={passwordInputType}
          placeholder={t("auth.passwordPlaceholder")}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
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
          placeholder={t("auth.confirmPasswordPlaceholder")}
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
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
          disabled={isPending}
        >
          {isPending ? <CircularProgress size={20} /> : t("auth.signUp")}
        </Button>
        <Link component={NextLink} href="/login" sx={authFormStyles.textAction}>
          {t("auth.iHaveAccount")}
        </Link>
        {error && (
          <Alert sx={authFormStyles.formAlert} severity="error">
            {error.message}
          </Alert>
        )}
      </AuthFormBody>
    </Stack>
  );
}

export default RegistrationForm;
