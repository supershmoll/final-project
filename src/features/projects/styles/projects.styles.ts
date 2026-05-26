import type { SxProps, Theme } from "@mui/material/styles";

export const projectsStyles = {
  environmentBox: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 1,
    minHeight: 56,
    px: 1.5,
    py: 1.25,
    border: "1px solid var(--app-control-border)",
    borderRadius: 0,
    bgcolor: "transparent",
    "&:focus-within": {
      borderColor: "var(--color-primary)",
    },
  },

  environmentChip: {
    bgcolor: "var(--app-overlay-12)",
    color: "var(--app-text)",
    fontSize: 12,
    maxWidth: 200,
    "& .MuiChip-deleteIcon": {
      color: "var(--app-text-muted)",
    },
  },

  environmentSelect: {
    minWidth: 120,
    flex: "1 1 120px",
    maxWidth: 200,
    height: 32,
    color: "var(--app-text-muted)",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiSelect-select": {
      py: 0.5,
      px: 1,
    },
  },

  environmentAddLabel: {
    color: "var(--app-text-muted)",
    fontSize: 14,
  },

  aiSuggestSection: {
    p: 2,
    borderRadius: 2,
    border: "1px dashed rgba(186, 104, 200, 0.45)",
    bgcolor: "rgba(186, 104, 200, 0.08)",
  },

  aiSuggestHeader: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "var(--app-text)",
    mb: 0.5,
  },

  aiSuggestTitle: {
    fontSize: 15,
    fontWeight: 600,
  },

  aiSuggestHint: {
    color: "var(--app-text-muted)",
    fontSize: 13,
    mb: 1.5,
  },

  aiSuggestField: {
    mb: 1.5,
  },

  aiSuggestActions: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 1.5,
    mb: 1,
  },

  aiSuggestSource: {
    color: "var(--app-text-muted)",
    fontSize: 12,
  },

  aiSuggestError: {
    color: "#ffb4b4",
    fontSize: 13,
    mb: 1,
  },

  aiSuggestFootnote: {
    color: "var(--app-text-muted)",
    fontSize: 12,
  },

  candidatesDialogTitle: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },

  candidatesProjectName: {
    fontSize: 16,
    fontWeight: 600,
    mb: 0.5,
  },

  candidatesHint: {
    color: "var(--app-text-muted)",
    fontSize: 13,
    mb: 2,
  },

  candidatesFilters: {
    mb: 2,
  },

  candidatesLoading: {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    py: 3,
    color: "var(--app-text-muted)",
  },

  candidatesEmpty: {
    color: "var(--app-text-muted)",
    py: 2,
  },

  candidatesResults: {
    mt: 1,
  },

  candidateCard: {
    p: 2,
    borderRadius: 2,
    border: "1px solid var(--app-control-border)",
    bgcolor: "rgba(186, 104, 200, 0.04)",
  },

  candidateHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 2,
    mb: 1,
  },

  candidateName: {
    fontSize: 15,
    fontWeight: 600,
  },

  candidateMeta: {
    color: "var(--app-text-muted)",
    fontSize: 13,
  },

  candidateScoreWrap: {
    textAlign: "right",
    flexShrink: 0,
  },

  candidateScore: {
    fontSize: 22,
    fontWeight: 700,
    color: "var(--color-primary)",
    lineHeight: 1.1,
  },

  candidateScoreLabel: {
    fontSize: 11,
    color: "var(--app-text-muted)",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },

  candidateSummary: {
    fontSize: 14,
    mb: 1,
  },

  candidateMetaRow: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 1,
    mb: 1,
  },

  candidateMetaItem: {
    fontSize: 12,
    color: "var(--app-text-muted)",
  },

  candidateSource: {
    fontSize: 11,
    color: "var(--app-text-muted)",
    fontStyle: "italic",
  },

  candidateSkills: {
    mt: 1,
  },

  candidateSkillsLabel: {
    fontSize: 12,
    color: "var(--app-text-muted)",
    mb: 0.5,
  },

  candidateChips: {
    display: "flex",
    flexWrap: "wrap",
    gap: 0.75,
  },

  candidateChipMatch: {
    bgcolor: "rgba(76, 175, 80, 0.15)",
    color: "var(--app-text)",
    fontSize: 11,
  },

  candidateChipGap: {
    bgcolor: "rgba(255, 152, 0, 0.12)",
    color: "var(--app-text)",
    fontSize: 11,
  },
} satisfies Record<string, SxProps<Theme>>;
