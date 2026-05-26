"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { resetApolloCache } from "@/lib/apollo/client";
import { clearAuthTokens } from "../lib/auth-storage";
import isAuthFailure from "../lib/is-auth-failure";
import {
  extractAuthErrorMessage,
  isTelegramSessionEndMessage,
  setSessionEndReason,
} from "../lib/session-end-reason";

function useAuthErrorRedirect(error: unknown) {
  const router = useRouter();

  useEffect(() => {
    if (!error || !isAuthFailure(error)) {
      return;
    }

    const message = extractAuthErrorMessage(error);
    if (message && isTelegramSessionEndMessage(message)) {
      setSessionEndReason(message);
    }

    clearAuthTokens();
    void resetApolloCache();
    router.replace("/login");
  }, [error, router]);
}

export default useAuthErrorRedirect;
