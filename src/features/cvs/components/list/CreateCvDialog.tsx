"use client";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { CreateCvFormValues } from "../../list/schemas/create-cv.schema";
import CvDetailsFormFields from "../details/CvDetailsFormFields";
import { cvsStyles } from "../../styles/cvs.styles";
import { useTranslation } from "@/i18n/use-translation";

type CreateCvDialogProps = {
  open: boolean;
  onClose: () => void;
  register: UseFormRegister<CreateCvFormValues>;
  errors: FieldErrors<CreateCvFormValues>;
  isPending: boolean;
  hasChanges: boolean;
  canCreate: boolean;
  errorMessage?: string;
  onSubmit: () => void;
};

function CreateCvDialog({
  open,
  onClose,
  register,
  errors,
  isPending,
  hasChanges,
  canCreate,
  errorMessage,
  onSubmit,
}: CreateCvDialogProps) {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="body"
      sx={[cvsStyles.dialog, cvsStyles.dialogCreateCv]}
      maxWidth={false}
    >
      <DialogTitle sx={cvsStyles.dialogTitle}>
        {t("cvs.dialog.createTitle")}
        <IconButton
          type="button"
          onClick={onClose}
          aria-label={t("common.close")}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={cvsStyles.dialogCreateCvContent}>
        <Box
          component="form"
          id="create-cv-form"
          noValidate
          onSubmit={onSubmit}
          sx={cvsStyles.dialogCreateCvForm}
        >
          <CvDetailsFormFields
            register={register}
            errors={errors}
            autoFocusName
            compact
          />

          {errorMessage ? (
            <Alert severity="error" sx={cvsStyles.detailsFormAlert}>
              {errorMessage}
            </Alert>
          ) : null}

          <Stack
            direction="row"
            spacing={1.5}
            sx={cvsStyles.dialogCreateCvActions}
          >
            <Button
              type="button"
              onClick={onClose}
              sx={cvsStyles.dialogCreateCvCancelButton}
              disabled={isPending}
            >
              {t("common.cancel")}
            </Button>
            <Button
              type="submit"
              sx={[
                cvsStyles.dialogCreateCvCreateButton,
                hasChanges
                  ? cvsStyles.updateButtonActive
                  : cvsStyles.updateButtonMuted,
              ]}
              disabled={!canCreate}
            >
              {isPending ? (
                <CircularProgress size={18} color="inherit" />
              ) : (
                t("common.create")
              )}
            </Button>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default CreateCvDialog;
