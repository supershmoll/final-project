"use client";

import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  getProjectMaxDate,
  PROJECT_MIN_DATE,
} from "@/features/cvs/projects/utils/project-form-dates";
import { CATALOG_PROJECT_LIMITS } from "../constants";
import type { CatalogProjectFormDialogProps } from "../types";
import ProjectEnvironmentField from "./project-environment-field";
import { ProjectAiSuggestSection } from "./project-ai-suggest-section";
import { cvsStyles } from "@/features/cvs/styles/cvs.styles";
import { useTranslation } from "@/i18n/use-translation";

function CatalogProjectFormDialog({
  open,
  mode,
  control,
  register,
  errors,
  skills,
  isSubmitting,
  canSubmit,
  onClose,
  onSubmit,
  onApplySuggestion,
}: CatalogProjectFormDialogProps) {
  const { t } = useTranslation();
  const title =
    mode === "create"
      ? t("projects.dialog.createTitle")
      : t("projects.dialog.editTitle");
  const submitLabel =
    mode === "create" ? t("common.create") : t("common.update");
  const maxDate = getProjectMaxDate();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={[cvsStyles.dialog, cvsStyles.dialogForm]}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle sx={cvsStyles.dialogTitle}>
        {title}
        <IconButton
          type="button"
          onClick={onClose}
          aria-label={t("common.close")}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stack
          component="form"
          id="catalog-project-form"
          spacing={2.5}
          noValidate
          onSubmit={onSubmit}
          sx={cvsStyles.dialogContent}
        >
          {mode === "create" && onApplySuggestion ? (
            <ProjectAiSuggestSection onApply={onApplySuggestion} />
          ) : null}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              label={t("projects.field.name")}
              sx={cvsStyles.formField}
              fullWidth
              autoFocus
              error={!!errors.name}
              helperText={errors.name?.message}
              slotProps={{
                htmlInput: { maxLength: CATALOG_PROJECT_LIMITS.name.maxLength },
              }}
              {...register("name")}
            />
            <TextField
              label={t("table.domain")}
              sx={cvsStyles.formField}
              fullWidth
              error={!!errors.domain}
              helperText={errors.domain?.message}
              slotProps={{
                htmlInput: {
                  maxLength: CATALOG_PROJECT_LIMITS.domain.maxLength,
                },
              }}
              {...register("domain")}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              label={t("table.startDate")}
              type="date"
              sx={cvsStyles.formField}
              fullWidth
              slotProps={{
                inputLabel: { shrink: true },
                htmlInput: {
                  min: PROJECT_MIN_DATE,
                  max: maxDate,
                },
              }}
              error={!!errors.startDate}
              helperText={errors.startDate?.message}
              {...register("startDate")}
            />
            <TextField
              label={t("table.endDate")}
              type="date"
              sx={cvsStyles.formField}
              fullWidth
              slotProps={{
                inputLabel: { shrink: true },
                htmlInput: {
                  min: PROJECT_MIN_DATE,
                  max: maxDate,
                },
              }}
              error={!!errors.endDate}
              helperText={
                errors.endDate?.message ?? t("projects.field.ongoingHint")
              }
              {...register("endDate")}
            />
          </Stack>
          <TextField
            label={t("projects.field.description")}
            sx={cvsStyles.formField}
            fullWidth
            multiline
            minRows={4}
            error={!!errors.description}
            helperText={errors.description?.message}
            slotProps={{
              htmlInput: {
                maxLength: CATALOG_PROJECT_LIMITS.description.maxLength,
              },
            }}
            {...register("description")}
          />
          <ProjectEnvironmentField
            control={control}
            errors={errors}
            skills={skills}
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={cvsStyles.dialogActions}>
        <Button type="button" onClick={onClose} sx={cvsStyles.cancelButton}>
          {t("common.cancel")}
        </Button>
        <Button
          type="submit"
          form="catalog-project-form"
          sx={
            canSubmit ? cvsStyles.primaryButton : cvsStyles.primaryButtonMuted
          }
          disabled={!canSubmit}
        >
          {isSubmitting ? (
            <CircularProgress size={18} color="inherit" />
          ) : (
            submitLabel
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CatalogProjectFormDialog;
