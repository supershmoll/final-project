import type { MessageKey, TranslateFn } from "@/i18n/messages";

export function roleLabel(role: string, t: TranslateFn): string {
  if (role === "Admin") {
    return t("users.role.admin");
  }

  if (role === "Employee") {
    return t("users.role.employee");
  }

  return role;
}

export function roleMessageKey(role: string): MessageKey {
  return role === "Admin" ? "users.role.admin" : "users.role.employee";
}
