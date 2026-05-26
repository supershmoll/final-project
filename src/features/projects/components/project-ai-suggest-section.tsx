"use client";

import { useState } from "react";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslation } from "@/i18n/use-translation";
import { usePreferences } from "@/lib/preferences/PreferencesProvider";
import type { ProjectSuggestion } from "../api/project-suggestion";
import { useSuggestProjectQuery } from "../api/project-suggestion";
import { projectsStyles } from "../styles/projects.styles";

type ProjectAiSuggestSectionProps = {
  onApply: (suggestion: ProjectSuggestion) => void;
};

export function ProjectAiSuggestSection({
  onApply,
}: ProjectAiSuggestSectionProps) {
  const { t } = useTranslation();
  const { locale } = usePreferences();
  const { suggest, loading, error } = useSuggestProjectQuery();
  const [brief, setBrief] = useState("");
  const [lastSource, setLastSource] = useState<
    ProjectSuggestion["source"] | null
  >(null);

  const handleSuggest = async () => {
    const trimmed = brief.trim();
    if (!trimmed || loading) {
      return;
    }

    const result = await suggest(trimmed, locale);
    const suggestion = result.data?.suggestProject;
    if (!suggestion) {
      return;
    }

    setLastSource(suggestion.source);
    onApply(suggestion);
  };

  return (
    <Box sx={projectsStyles.aiSuggestSection} data-testid="project-ai-suggest">
      <Box sx={projectsStyles.aiSuggestHeader}>
        <AutoAwesomeOutlinedIcon fontSize="small" />
        <Typography sx={projectsStyles.aiSuggestTitle}>
          {t("projects.ai.title")}
        </Typography>
      </Box>
      <Typography sx={projectsStyles.aiSuggestHint}>
        {t("projects.ai.description")}
      </Typography>
      <TextField
        label={t("projects.ai.briefLabel")}
        placeholder={t("projects.ai.briefPlaceholder")}
        value={brief}
        onChange={(event) => setBrief(event.target.value)}
        fullWidth
        multiline
        minRows={2}
        disabled={loading}
        sx={projectsStyles.aiSuggestField}
        slotProps={{
          htmlInput: { "data-testid": "project-ai-brief" },
        }}
      />
      <Box sx={projectsStyles.aiSuggestActions}>
        <Button
          type="button"
          variant="outlined"
          onClick={() => void handleSuggest()}
          disabled={loading || brief.trim().length < 3}
          data-testid="project-ai-suggest-button"
          startIcon={
            loading ? <CircularProgress size={16} color="inherit" /> : undefined
          }
        >
          {loading ? t("projects.ai.generating") : t("projects.ai.generate")}
        </Button>
        {lastSource ? (
          <Typography sx={projectsStyles.aiSuggestSource}>
            {lastSource === "AI"
              ? t("projects.ai.source.ai")
              : t("projects.ai.source.rules")}
          </Typography>
        ) : null}
      </Box>
      {error ? (
        <Typography sx={projectsStyles.aiSuggestError} role="alert">
          {error.message}
        </Typography>
      ) : null}
      <Typography sx={projectsStyles.aiSuggestFootnote}>
        {t("projects.ai.footnote")}
      </Typography>
    </Box>
  );
}
