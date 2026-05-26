import { z } from "zod";
import type { TranslateFn } from "@/i18n/messages";

export function createResetPasswordSchema(t: TranslateFn) {
  return z
    .object({
      newPassword: z
        .string()
        .min(8, t("auth.validation.passwordMin"))
        .max(20, t("auth.validation.passwordMax")),
      confirmNewPassword: z
        .string()
        .min(8, t("auth.validation.passwordMin"))
        .max(20, t("auth.validation.passwordMax")),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
      path: ["confirmNewPassword"],
      message: t("auth.validation.passwordsMismatch"),
    });
}

export type ResetPasswordFormValues = z.infer<
  ReturnType<typeof createResetPasswordSchema>
>;
