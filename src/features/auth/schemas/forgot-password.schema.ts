import { z } from "zod";
import type { TranslateFn } from "@/i18n/messages";

export function createForgotPasswordSchema(t: TranslateFn) {
  return z.object({
    email: z.email(t("auth.validation.invalidEmail")),
  });
}

export type ForgotPasswordFormValues = z.infer<
  ReturnType<typeof createForgotPasswordSchema>
>;
