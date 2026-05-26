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
import { useAddUserLanguageDialog } from "@/features/users/hooks/useAddUserLanguageDialog";
import { formDialogSx } from "@/shared/styles/formDialog.styles";
import { useUserLanguageDialogLabels } from "@/i18n/hooks/use-user-language-dialog-labels";
import { useTranslation } from "@/i18n/use-translation";
import type { AddUserLanguageDialogProps } from "./userLanguageDialogs.types";

function AddUserLanguageDialogContent({
  userId,
  currentLanguages,
  onClose,
  onCompleted,
}: Omit<AddUserLanguageDialogProps, "open">) {
  const labels = useUserLanguageDialogLabels();
  const { t } = useTranslation();
  const {
    selectedLanguageName,
    setLanguageName,
    proficiency,
    setProficiency,
    submitError,
    catalogLoading,
    addable,
    canSubmit,
    saving,
    handleSubmit,
  } = useAddUserLanguageDialog({
    userId,
    currentLanguages,
    onClose,
    onCompleted,
  });

  return (
    <>
      <DialogTitle component="div" sx={formDialogSx.addLanguageDialogTitleRoot}>
        <Box sx={formDialogSx.dialogTitleRow}>
          <Box component="span" sx={formDialogSx.dialogTitleText}>
            {labels.add.title}
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
      <DialogContent sx={formDialogSx.addLanguageDialogContent}>
        {catalogLoading ? (
          <Alert severity="info">{labels.add.loading}</Alert>
        ) : null}
        {!catalogLoading && addable.length === 0 ? (
          <Alert severity="warning">{labels.add.noLanguagesAvailable}</Alert>
        ) : null}
        {!catalogLoading && addable.length > 0 ? (
          <>
            <TextField
              select
              variant="outlined"
              label={labels.add.languageField}
              value={selectedLanguageName}
              onChange={(e) => setLanguageName(e.target.value)}
              fullWidth
              sx={formDialogSx.dialogField}
              slotProps={{
                ...FORM_INPUT_LABEL_SLOT_PROPS,
                select: { displayEmpty: true },
              }}
            >
              <MenuItem value="">
                <em>{labels.add.selectLanguage}</em>
              </MenuItem>
              {addable.map((item) => (
                <MenuItem key={item.id ?? item.name} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              variant="outlined"
              label={labels.add.proficiencyField}
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
          </>
        ) : null}
        {submitError ? <Alert severity="error">{submitError}</Alert> : null}
      </DialogContent>
      <DialogActions sx={formDialogSx.dialogActions}>
        <Button
          variant="outlined"
          onClick={onClose}
          disabled={saving}
          sx={formDialogSx.dialogCancelBtn}
        >
          {labels.add.cancel}
        </Button>
        <Button
          variant="contained"
          disableElevation
          onClick={() => void handleSubmit()}
          disabled={saving || !canSubmit || addable.length === 0}
          sx={formDialogSx.dialogConfirmBtn}
        >
          {labels.add.confirm}
        </Button>
      </DialogActions>
    </>
  );
}

export function AddUserLanguageDialog({
  open,
  onClose,
  userId,
  currentLanguages,
  onCompleted,
}: AddUserLanguageDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={false}
      sx={[formDialogSx.languageDialog, formDialogSx.addLanguageDialog]}
    >
      {open ? (
        <AddUserLanguageDialogContent
          key={userId}
          userId={userId}
          currentLanguages={currentLanguages}
          onClose={onClose}
          onCompleted={onCompleted}
        />
      ) : null}
    </Dialog>
  );
}
