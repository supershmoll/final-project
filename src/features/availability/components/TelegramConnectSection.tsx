import TelegramIcon from "@mui/icons-material/Telegram";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslation } from "@/i18n/use-translation";
import { userProfileSx } from "@/features/users/components/user-profile/userProfile.styles";
import { useTelegramLink } from "../hooks/useTelegramLink";
import { availabilitySx } from "../styles/availability.styles";
import { MyAvailabilityStatus } from "./MyAvailabilityStatus";

type TelegramConnectSectionProps = {
  enabled?: boolean;
};

export function TelegramConnectSection({
  enabled = true,
}: TelegramConnectSectionProps) {
  const { t } = useTranslation();
  const {
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
  } = useTelegramLink(enabled);

  const isBusy = loading || isLinking || isUnlinking;

  return (
    <Box
      sx={availabilitySx.telegramSection}
      data-testid="telegram-connect-section"
    >
      <Box sx={availabilitySx.telegramHeader}>
        <Box sx={availabilitySx.telegramIconWrap}>
          <TelegramIcon sx={{ fontSize: 28, color: "#29b6f6" }} />
        </Box>
        <Box>
          <Typography sx={availabilitySx.telegramTitle}>
            {t("telegram.title")}
          </Typography>
          <Typography sx={availabilitySx.telegramDescription}>
            {t("telegram.description")}
          </Typography>
        </Box>
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
          <CircularProgress size={28} color="primary" />
        </Box>
      ) : isLinked ? (
        <Box sx={availabilitySx.telegramLinkedBox}>
          <Typography sx={{ color: "var(--app-text)" }}>
            {t("telegram.connectedAs")}{" "}
            <Box component="span" sx={{ color: "#29b6f6", fontWeight: 600 }}>
              @{connectedUsername ?? linkStatus?.botUsername ?? "telegram"}
            </Box>
          </Typography>
          <Typography sx={availabilitySx.telegramHelp}>
            {t("telegram.help")}
          </Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => void handleDisconnect()}
              disabled={isBusy}
              data-testid="telegram-disconnect-button"
              sx={availabilitySx.disconnectButton}
            >
              {isUnlinking ? (
                <CircularProgress size={18} color="inherit" />
              ) : (
                t("telegram.disconnect")
              )}
            </Button>
          </Box>
        </Box>
      ) : isWaitingForTelegram ? (
        <Box sx={availabilitySx.telegramPendingBox}>
          <Typography sx={{ color: "var(--app-text)" }}>
            {t("telegram.pending")}
          </Typography>
          {pendingUsername ? (
            <Typography sx={{ ...availabilitySx.telegramHelp, mt: 1 }}>
              @{pendingUsername}
            </Typography>
          ) : null}
          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleRefreshStatus}
              disabled={isBusy}
              data-testid="telegram-refresh-status-button"
              sx={availabilitySx.disconnectButton}
            >
              {t("telegram.refreshStatus")}
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={availabilitySx.telegramForm}>
          <TextField
            label={t("telegram.usernameLabel")}
            placeholder={t("telegram.usernamePlaceholder")}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            fullWidth
            sx={userProfileSx.field}
            data-testid="telegram-username-input"
          />
          <Typography sx={availabilitySx.telegramHelp}>
            {t("telegram.help")}
          </Typography>
          <Box sx={userProfileSx.updateBtnWrap}>
            <Button
              variant="contained"
              onClick={() => void handleConnect()}
              disabled={isBusy || !username.trim()}
              data-testid="telegram-connect-button"
              sx={[
                userProfileSx.updateBtn,
                username.trim() && !isBusy
                  ? userProfileSx.updateBtnActive
                  : userProfileSx.updateBtnDisabled,
              ]}
            >
              {isLinking ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                t("telegram.connect")
              )}
            </Button>
          </Box>
        </Box>
      )}

      {actionError ? (
        <Typography sx={userProfileSx.formError} role="alert">
          {actionError.startsWith("telegram.")
            ? t(actionError as "telegram.validation.username")
            : actionError}
        </Typography>
      ) : null}

      <MyAvailabilityStatus compact />
    </Box>
  );
}
