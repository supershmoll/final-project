import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { FORM_INPUT_LABEL_SLOT_PROPS } from "@/shared/constants/formDialog.constants";
import { LANGUAGE_PROFICIENCY_OPTIONS } from "@/features/users/constants/userLanguages.constants";
import { useUpdateUserLanguageDialog } from "@/features/users/hooks/useUpdateUserLanguageDialog";
import { formDialogSx } from "@/shared/styles/formDialog.styles";
import { useUserLanguageDialogLabels } from "@/i18n/hooks/use-user-language-dialog-labels";
import { useTranslation } from "@/i18n/use-translation";
import type { UpdateUserLanguageDialogProps } from "./userLanguageDialogs.types";

function UpdateUserLanguageDialogContent({
  userId,
  language,
  onClose,
  onCompleted,
}: {
  userId: string;
  language: NonNullable<UpdateUserLanguageDialogProps["language"]>;
  onClose: () => void;
  onCompleted: () => Promise<unknown> | void;
}) {
  const labels = useUserLanguageDialogLabels();
  const { t } = useTranslation();
  const { proficiency, setProficiency, submitError, saving, handleSubmit } =
    useUpdateUserLanguageDialog({
      userId,
      language,
      onClose,
      onCompleted,
    });

  return (
    <>
      <DialogTitle component="div" sx={formDialogSx.dialogTitleRoot}>
        <Box sx={formDialogSx.dialogTitleRow}>
          <Box component="span" sx={formDialogSx.dialogTitleText}>
            {labels.update.title}
          </Box>
          <IconButton
            type="button"
            aria-label={t("common.closeDialog")}
            onClick={onClose}
            size="small"
            sx={formDialogSx.dialogCloseBtn}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={formDialogSx.dialogContent}>
        <TextField
          variant="outlined"
          label={labels.update.languageField}
          value={language.name}
          fullWidth
          sx={formDialogSx.dialogField}
          slotProps={{
            input: { readOnly: true },
            inputLabel: { shrink: true },
          }}
        />
        <TextField
          select
          variant="outlined"
          label={labels.update.proficiencyField}
          value={proficiency}
          onChange={(e) => setProficiency(e.target.value)}
          fullWidth
          sx={formDialogSx.dialogField}
          slotProps={FORM_INPUT_LABEL_SLOT_PROPS}
        >
          {LANGUAGE_PROFICIENCY_OPTIONS.map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </TextField>
        {submitError ? <Alert severity="error">{submitError}</Alert> : null}
      </DialogContent>
      <DialogActions sx={formDialogSx.dialogActions}>
        <Button
          variant="outlined"
          onClick={onClose}
          disabled={saving}
          sx={formDialogSx.dialogCancelBtn}
        >
          {labels.update.cancel}
        </Button>
        <Button
          variant="contained"
          disableElevation
          onClick={() => void handleSubmit()}
          disabled={saving || proficiency === language.proficiency}
          sx={formDialogSx.dialogConfirmBtn}
        >
          {labels.update.confirm}
        </Button>
      </DialogActions>
    </>
  );
}

export function UpdateUserLanguageDialog({
  open,
  onClose,
  userId,
  language,
  onCompleted,
}: UpdateUserLanguageDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={formDialogSx.languageDialog}
    >
      {open && language ? (
        <UpdateUserLanguageDialogContent
          key={language.name}
          userId={userId}
          language={language}
          onClose={onClose}
          onCompleted={onCompleted}
        />
      ) : null}
    </Dialog>
  );
}
