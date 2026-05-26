"use client";

import { useState } from "react";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AvailabilityStatusChip } from "@/features/availability/components/AvailabilityStatusChip";
import { useUserEditOptionsQuery } from "@/features/users/api/updateUser";
import { cvsStyles } from "@/features/cvs/styles/cvs.styles";
import { useTranslation } from "@/i18n/use-translation";
import type { MessageKey } from "@/i18n/messages";
import { usePreferences } from "@/lib/preferences/PreferencesProvider";
import type { AvailabilityStatus } from "@/features/availability/types";
import type { ProjectCandidate } from "../api/project-candidates";
import { useProjectCandidatesQuery } from "../api/project-candidates";
import { projectsStyles } from "../styles/projects.styles";
import type { Project } from "../types";

type ProjectCandidatesDialogProps = {
  open: boolean;
  project: Project | null;
  onClose: () => void;
};

type CandidateAvailabilityFilter = Extract<
  AvailabilityStatus,
  "OFFICE" | "REMOTE" | "UNKNOWN"
>;

const CANDIDATE_AVAILABILITY_OPTIONS: CandidateAvailabilityFilter[] = [
  "OFFICE",
  "REMOTE",
  "UNKNOWN",
];

const AVAILABILITY_LABEL_KEYS: Record<CandidateAvailabilityFilter, MessageKey> =
  {
    OFFICE: "availability.status.office",
    REMOTE: "availability.status.remote",
    UNKNOWN: "availability.status.unknown",
  };

type FilterState = {
  minAge: string;
  maxAge: string;
  educationHint: string;
  departmentId: string;
  positionId: string;
  availabilityStatuses: CandidateAvailabilityFilter[];
};

const EMPTY_FILTERS: FilterState = {
  minAge: "",
  maxAge: "",
  educationHint: "",
  departmentId: "",
  positionId: "",
  availabilityStatuses: [],
};

function parseOptionalInt(value: string): number | undefined {
  const trimmed = value.trim();
  if (!trimmed) {
    return undefined;
  }
  const parsed = Number.parseInt(trimmed, 10);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function CandidateCard({ candidate }: { candidate: ProjectCandidate }) {
  const { t } = useTranslation();

  return (
    <Box sx={projectsStyles.candidateCard} data-testid="project-candidate-card">
      <Box sx={projectsStyles.candidateHeader}>
        <Box>
          <Typography sx={projectsStyles.candidateName}>
            {candidate.fullName}
          </Typography>
          <Typography sx={projectsStyles.candidateMeta}>
            {[candidate.department, candidate.position]
              .filter(Boolean)
              .join(" · ") || candidate.email}
          </Typography>
        </Box>
        <Box sx={projectsStyles.candidateScoreWrap}>
          <Typography sx={projectsStyles.candidateScore}>
            {candidate.matchScore}%
          </Typography>
          <Typography sx={projectsStyles.candidateScoreLabel}>
            {t("projects.candidates.matchScore")}
          </Typography>
        </Box>
      </Box>

      <Typography sx={projectsStyles.candidateSummary}>
        {candidate.summary}
      </Typography>

      <Box sx={projectsStyles.candidateMetaRow}>
        {candidate.age != null ? (
          <Typography sx={projectsStyles.candidateMetaItem}>
            {t("projects.candidates.age")}: {candidate.age}
          </Typography>
        ) : null}
        {candidate.education ? (
          <Typography sx={projectsStyles.candidateMetaItem}>
            {t("projects.candidates.education")}: {candidate.education}
          </Typography>
        ) : null}
        <AvailabilityStatusChip status={candidate.availabilityStatus} />
        <Typography sx={projectsStyles.candidateSource}>
          {candidate.source === "AI"
            ? t("projects.candidates.source.ai")
            : t("projects.candidates.source.rules")}
        </Typography>
      </Box>

      {candidate.matchedSkills.length > 0 ? (
        <Box sx={projectsStyles.candidateSkills}>
          <Typography sx={projectsStyles.candidateSkillsLabel}>
            {t("projects.candidates.matchedSkills")}
          </Typography>
          <Box sx={projectsStyles.candidateChips}>
            {candidate.matchedSkills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                size="small"
                sx={projectsStyles.candidateChipMatch}
              />
            ))}
          </Box>
        </Box>
      ) : null}

      {candidate.missingSkills.length > 0 ? (
        <Box sx={projectsStyles.candidateSkills}>
          <Typography sx={projectsStyles.candidateSkillsLabel}>
            {t("projects.candidates.missingSkills")}
          </Typography>
          <Box sx={projectsStyles.candidateChips}>
            {candidate.missingSkills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                size="small"
                sx={projectsStyles.candidateChipGap}
              />
            ))}
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}

export function ProjectCandidatesDialog({
  open,
  project,
  onClose,
}: ProjectCandidatesDialogProps) {
  const { t } = useTranslation();
  const { locale } = usePreferences();
  const { findCandidates, loading, error, candidates } =
    useProjectCandidatesQuery();
  const { data: optionsData } = useUserEditOptionsQuery();
  const [filters, setFilters] = useState<FilterState>(EMPTY_FILTERS);
  const [hasSearched, setHasSearched] = useState(false);

  const handleClose = () => {
    setFilters(EMPTY_FILTERS);
    setHasSearched(false);
    onClose();
  };

  const handleSearch = async () => {
    if (!project || loading) {
      return;
    }

    setHasSearched(true);
    await findCandidates(
      {
        projectId: project.id,
        minAge: parseOptionalInt(filters.minAge),
        maxAge: parseOptionalInt(filters.maxAge),
        educationHint: filters.educationHint.trim() || undefined,
        departmentId: filters.departmentId || undefined,
        positionId: filters.positionId || undefined,
        availabilityStatuses:
          filters.availabilityStatuses.length > 0
            ? filters.availabilityStatuses
            : undefined,
        limit: 10,
      },
      locale,
    );
  };

  const toggleAvailabilityStatus = (status: CandidateAvailabilityFilter) => {
    setFilters((current) => ({
      ...current,
      availabilityStatuses: current.availabilityStatuses.includes(status)
        ? current.availabilityStatuses.filter((item) => item !== status)
        : [...current.availabilityStatuses, status],
    }));
  };

  const departmentOptions = optionsData?.departments ?? [];
  const positionOptions = optionsData?.positions ?? [];

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={[cvsStyles.dialog, cvsStyles.dialogForm]}
      fullWidth
      maxWidth="md"
      data-testid="project-candidates-dialog"
    >
      <DialogTitle sx={cvsStyles.dialogTitle}>
        <Box sx={projectsStyles.candidatesDialogTitle}>
          <AutoAwesomeOutlinedIcon fontSize="small" />
          <span>{t("projects.candidates.title")}</span>
        </Box>
        <IconButton
          aria-label={t("common.close")}
          onClick={handleClose}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={cvsStyles.dialogContent}>
        {project ? (
          <Box sx={{ mb: 1 }}>
            <Typography sx={projectsStyles.candidatesProjectLabel}>
              {t("projects.candidates.projectLabel")}
            </Typography>
            <Typography sx={projectsStyles.candidatesProjectName}>
              {project.name}
            </Typography>
          </Box>
        ) : null}
        <Typography sx={projectsStyles.candidatesHint}>
          {t("projects.candidates.description")}
        </Typography>

        <Stack spacing={2} sx={projectsStyles.candidatesFilters}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              label={t("projects.candidates.minAge")}
              value={filters.minAge}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  minAge: event.target.value,
                }))
              }
              type="number"
              fullWidth
              slotProps={{ htmlInput: { min: 16, max: 80 } }}
            />
            <TextField
              label={t("projects.candidates.maxAge")}
              value={filters.maxAge}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  maxAge: event.target.value,
                }))
              }
              type="number"
              fullWidth
              slotProps={{ htmlInput: { min: 16, max: 80 } }}
            />
          </Stack>

          <TextField
            label={t("projects.candidates.educationHint")}
            placeholder={t("projects.candidates.educationHintPlaceholder")}
            value={filters.educationHint}
            onChange={(event) =>
              setFilters((current) => ({
                ...current,
                educationHint: event.target.value,
              }))
            }
            fullWidth
          />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              select
              label={t("projects.candidates.department")}
              value={filters.departmentId}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  departmentId: event.target.value,
                }))
              }
              fullWidth
            >
              <MenuItem value="">
                {t("projects.candidates.anyDepartment")}
              </MenuItem>
              {departmentOptions.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label={t("projects.candidates.position")}
              value={filters.positionId}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  positionId: event.target.value,
                }))
              }
              fullWidth
            >
              <MenuItem value="">
                {t("projects.candidates.anyPosition")}
              </MenuItem>
              {positionOptions.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Stack>

          <Box sx={projectsStyles.candidatesAvailabilitySection}>
            <Typography sx={projectsStyles.candidatesAvailabilityLabel}>
              {t("projects.candidates.availabilityFilter")}
            </Typography>
            <Box sx={projectsStyles.candidatesAvailabilityOptions}>
              {CANDIDATE_AVAILABILITY_OPTIONS.map((status) => (
                <FormControlLabel
                  key={status}
                  control={
                    <Checkbox
                      checked={filters.availabilityStatuses.includes(status)}
                      onChange={() => toggleAvailabilityStatus(status)}
                    />
                  }
                  label={t(AVAILABILITY_LABEL_KEYS[status])}
                />
              ))}
            </Box>
          </Box>
        </Stack>

        {error ? (
          <Typography sx={projectsStyles.aiSuggestError} role="alert">
            {error.message}
          </Typography>
        ) : null}

        {loading ? (
          <Box sx={projectsStyles.candidatesLoading}>
            <CircularProgress size={28} />
            <Typography>{t("projects.candidates.searching")}</Typography>
          </Box>
        ) : null}

        {!loading && hasSearched && candidates?.length === 0 ? (
          <Typography sx={projectsStyles.candidatesEmpty}>
            {t("projects.candidates.empty")}
          </Typography>
        ) : null}

        {!loading && candidates && candidates.length > 0 ? (
          <Stack spacing={1.5} sx={projectsStyles.candidatesResults}>
            {candidates.map((candidate) => (
              <CandidateCard key={candidate.userId} candidate={candidate} />
            ))}
          </Stack>
        ) : null}
      </DialogContent>

      <DialogActions sx={cvsStyles.dialogActions}>
        <Button type="button" onClick={handleClose} sx={cvsStyles.cancelButton}>
          {t("common.cancel")}
        </Button>
        <Button
          type="button"
          onClick={() => void handleSearch()}
          disabled={!project || loading}
          sx={cvsStyles.primaryButton}
          data-testid="project-candidates-search-button"
        >
          {loading ? (
            <CircularProgress size={18} color="inherit" />
          ) : (
            t("projects.candidates.search")
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
