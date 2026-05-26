import { translate } from "@/i18n/messages";
import type { MessageKey } from "@/i18n/messages";
import { createForgotPasswordSchema } from "./forgot-password.schema";

const t = (key: MessageKey) => translate("en", key);
const forgotPasswordSchema = createForgotPasswordSchema(t);

describe("forgotPasswordSchema", () => {
  it("accepts valid email", () => {
    const result = forgotPasswordSchema.safeParse({
      email: "user@example.com",
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = forgotPasswordSchema.safeParse({
      email: "not-an-email",
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe(
        "Please enter a valid email address.",
      );
    }
  });
});
