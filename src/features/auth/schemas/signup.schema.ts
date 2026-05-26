import { z } from "zod";
import type { TranslateFn } from "@/i18n/messages";

export function createSignupSchema(t: TranslateFn) {
  return z
    .object({
      email: z.email(t("auth.validation.invalidEmail")),
      password: z
        .string()
        .min(8, t("auth.validation.passwordMin"))
        .max(20, t("auth.validation.passwordMax")),
      confirmPassword: z
        .string()
        .min(8, t("auth.validation.passwordMin"))
        .max(20, t("auth.validation.passwordMax")),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: t("auth.validation.passwordsMismatch"),
    });
}

export type SignupFormValues = z.infer<ReturnType<typeof createSignupSchema>>;
