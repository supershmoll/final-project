import { z } from "zod";
import type { TranslateFn } from "@/i18n/messages";

export function createLoginSchema(t: TranslateFn) {
  return z.object({
    email: z.email(t("auth.validation.invalidEmail")),
    password: z
      .string()
      .min(8, t("auth.validation.passwordMin"))
      .max(20, t("auth.validation.passwordMax")),
  });
}

export type LoginFormValues = z.infer<ReturnType<typeof createLoginSchema>>;
