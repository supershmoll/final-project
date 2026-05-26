import { gql } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client/react";
import type { TelegramLinkStatus } from "../types";

export const TELEGRAM_LINK_STATUS = gql`
  query TelegramLinkStatus {
    telegramLinkStatus {
      linked
      telegramUsername
      botUsername
    }
  }
`;

export const LINK_TELEGRAM = gql`
  mutation LinkTelegram($username: String!) {
    linkTelegramAccount(input: { username: $username }) {
      deepLink
      botUsername
      telegramUsername
      expiresAt
    }
  }
`;

export const UNLINK_TELEGRAM = gql`
  mutation UnlinkTelegram {
    unlinkTelegramAccount {
      affected
    }
  }
`;

type TelegramLinkStatusResponse = {
  telegramLinkStatus: TelegramLinkStatus;
};

type LinkTelegramResponse = {
  linkTelegramAccount: {
    deepLink: string;
    botUsername: string;
    telegramUsername: string;
    expiresAt: string;
  };
};

type LinkTelegramVariables = {
  username: string;
};

export function useTelegramLinkStatusQuery(enabled = true) {
  const query = useQuery<TelegramLinkStatusResponse>(TELEGRAM_LINK_STATUS, {
    skip: !enabled,
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
  });

  return {
    ...query,
    linkStatus: query.data?.telegramLinkStatus ?? null,
  };
}

export function useLinkTelegramMutation() {
  return useMutation<LinkTelegramResponse, LinkTelegramVariables>(
    LINK_TELEGRAM,
    {
      refetchQueries: [{ query: TELEGRAM_LINK_STATUS }],
    },
  );
}

export function useUnlinkTelegramMutation() {
  return useMutation(UNLINK_TELEGRAM, {
    refetchQueries: [{ query: TELEGRAM_LINK_STATUS }],
  });
}
