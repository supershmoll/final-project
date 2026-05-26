const SESSION_END_REASON_KEY = "hrm_session_end_reason";

export function setSessionEndReason(message: string): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(SESSION_END_REASON_KEY, message);
}

export function consumeSessionEndReason(): string | null {
  if (typeof window === "undefined") return null;
  const message = sessionStorage.getItem(SESSION_END_REASON_KEY);
  if (message) {
    sessionStorage.removeItem(SESSION_END_REASON_KEY);
  }
  return message;
}

export function isTelegramSessionEndMessage(message: string): boolean {
  const normalized = message.toLowerCase();
  return (
    normalized.includes("telegram") ||
    normalized.includes("status was not confirmed") ||
    normalized.includes("session was ended")
  );
}

export function extractAuthErrorMessage(error: unknown): string | null {
  if (!error || typeof error !== "object") return null;

  const candidate = error as {
    message?: string;
    graphQLErrors?: Array<{ message?: string }>;
  };

  const gqlMessage = candidate.graphQLErrors?.[0]?.message;
  if (typeof gqlMessage === "string" && gqlMessage.trim()) {
    return gqlMessage.trim();
  }

  if (typeof candidate.message === "string" && candidate.message.trim()) {
    return candidate.message.trim();
  }

  return null;
}
