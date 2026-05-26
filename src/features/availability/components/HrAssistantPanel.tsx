"use client";

import { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import { usePreferences } from "@/lib/preferences/PreferencesProvider";
import { useTranslation } from "@/i18n/use-translation";
import { useHrAssistantQuery } from "../api/hr-assistant";
import { availabilitySx } from "../styles/availability.styles";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  source?: "AI" | "RULES";
};

const SUGGESTIONS = [
  "assistant.suggestion.office",
  "assistant.suggestion.remote",
  "assistant.suggestion.vacation",
] as const;

export function HrAssistantPanel() {
  const { t } = useTranslation();
  const { locale } = usePreferences();
  const { ask, loading, error } = useHrAssistantQuery();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const submitQuestion = useCallback(
    async (question: string) => {
      const trimmed = question.trim();
      if (!trimmed || loading) {
        return;
      }

      const userMessage: ChatMessage = {
        id: `${Date.now()}-user`,
        role: "user",
        text: trimmed,
      };

      setMessages((current) => [...current, userMessage]);
      setInput("");

      const result = await ask(trimmed, locale);
      const answer = result.data?.askHrAssistant;

      if (answer) {
        setMessages((current) => [
          ...current,
          {
            id: `${Date.now()}-assistant`,
            role: "assistant",
            text: answer.answer,
            source: answer.source,
          },
        ]);
      }
    },
    [ask, loading, locale],
  );

  return (
    <Box sx={availabilitySx.assistantPanel} data-testid="hr-assistant-panel">
      <Box sx={availabilitySx.assistantHeader}>
        <SmartToyOutlinedIcon fontSize="small" />
        <Typography sx={availabilitySx.assistantTitle}>
          {t("assistant.title")}
        </Typography>
      </Box>
      <Typography sx={availabilitySx.assistantHint}>
        {t("assistant.description")}
      </Typography>

      <Box sx={availabilitySx.assistantSuggestions}>
        {SUGGESTIONS.map((key) => (
          <Button
            key={key}
            size="small"
            variant="outlined"
            onClick={() => submitQuestion(t(key))}
            disabled={loading}
            sx={availabilitySx.assistantSuggestionButton}
          >
            {t(key)}
          </Button>
        ))}
      </Box>

      <Box sx={availabilitySx.assistantMessages}>
        {messages.length === 0 ? (
          <Typography sx={availabilitySx.assistantEmpty}>
            {t("assistant.empty")}
          </Typography>
        ) : (
          messages.map((message) => (
            <Box
              key={message.id}
              sx={
                message.role === "user"
                  ? availabilitySx.assistantUserMessage
                  : availabilitySx.assistantBotMessage
              }
            >
              <Typography sx={availabilitySx.assistantMessageText}>
                {message.text}
              </Typography>
              {message.role === "assistant" && message.source ? (
                <Typography sx={availabilitySx.assistantSource}>
                  {message.source === "AI"
                    ? t("assistant.source.ai")
                    : t("assistant.source.rules")}
                </Typography>
              ) : null}
            </Box>
          ))
        )}
      </Box>

      {error ? (
        <Typography sx={availabilitySx.assistantError} role="alert">
          {error.message}
        </Typography>
      ) : null}

      <Box
        component="form"
        sx={availabilitySx.assistantForm}
        onSubmit={(event) => {
          event.preventDefault();
          void submitQuestion(input);
        }}
      >
        <TextField
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={t("assistant.placeholder")}
          size="small"
          fullWidth
          disabled={loading}
          sx={availabilitySx.assistantFormField}
          slotProps={{
            htmlInput: { "data-testid": "hr-assistant-input" },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={loading || !input.trim()}
          data-testid="hr-assistant-submit"
          sx={availabilitySx.assistantFormSubmit}
        >
          {loading ? t("assistant.sending") : t("assistant.send")}
        </Button>
      </Box>
    </Box>
  );
}
