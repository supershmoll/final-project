"use client";

import { useCallback, useEffect, useState } from "react";
import { formatMutationError } from "@/shared/utils/formatMutationError";
import {
  useLinkTelegramMutation,
  useTelegramLinkStatusQuery,
  useUnlinkTelegramMutation,
} from "../api/telegram";
import {
  isValidTelegramUsername,
  normalizeTelegramUsername,
} from "../utils/availability.utils";

const LINK_POLL_INTERVAL_MS = 3_000;
const LINK_POLL_TIMEOUT_MS = 15 * 60_000;

export function useTelegramLink(enabled = true) {
  const [username, setUsername] = useState("");
  const [actionError, setActionError] = useState<string | null>(null);
  const [isLinking, setIsLinking] = useState(false);
  const [isUnlinking, setIsUnlinking] = useState(false);
  const [pendingUsername, setPendingUsername] = useState<string | null>(null);

  const { linkStatus, loading, refetch } = useTelegramLinkStatusQuery(enabled);
  const [linkTelegram] = useLinkTelegramMutation();
  const [unlinkTelegram] = useUnlinkTelegramMutation();

  const isLinked = Boolean(linkStatus?.linked);
  const isWaitingForTelegram =
    Boolean(pendingUsername) && !isLinked && !loading;

  useEffect(() => {
    if (!pendingUsername || isLinked) {
      return;
    }

    const poll = window.setInterval(() => {
      void refetch();
    }, LINK_POLL_INTERVAL_MS);

    const timeout = window.setTimeout(() => {
      setPendingUsername(null);
    }, LINK_POLL_TIMEOUT_MS);

    const onFocus = () => {
      void refetch();
    };

    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onFocus);

    return () => {
      window.clearInterval(poll);
      window.clearTimeout(timeout);
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onFocus);
    };
  }, [pendingUsername, isLinked, refetch]);

  const handleConnect = useCallback(async () => {
    setActionError(null);

    const normalized = normalizeTelegramUsername(username);
    if (!isValidTelegramUsername(normalized)) {
      setActionError("telegram.validation.username");
      return;
    }

    setIsLinking(true);
    try {
      const result = await linkTelegram({
        variables: { username: normalized },
      });
      const deepLink = result.data?.linkTelegramAccount.deepLink;
      if (deepLink) {
        setPendingUsername(normalized);
        window.open(deepLink, "_blank", "noopener,noreferrer");
      }
      setUsername("");
      await refetch();
    } catch (error) {
      setActionError(formatMutationError(error));
    } finally {
      setIsLinking(false);
    }
  }, [linkTelegram, refetch, username]);

  const handleDisconnect = useCallback(async () => {
    setActionError(null);
    setIsUnlinking(true);
    try {
      await unlinkTelegram();
      setPendingUsername(null);
      await refetch();
    } catch (error) {
      setActionError(formatMutationError(error));
    } finally {
      setIsUnlinking(false);
    }
  }, [refetch, unlinkTelegram]);

  const handleRefreshStatus = useCallback(() => {
    void refetch();
  }, [refetch]);

  const connectedUsername =
    linkStatus?.telegramUsername ?? pendingUsername ?? null;

  return {
    username,
    setUsername,
    linkStatus,
    connectedUsername,
    loading,
    actionError,
    isLinking,
    isUnlinking,
    isWaitingForTelegram,
    pendingUsername,
    isLinked,
    handleConnect,
    handleDisconnect,
    handleRefreshStatus,
  };
}
