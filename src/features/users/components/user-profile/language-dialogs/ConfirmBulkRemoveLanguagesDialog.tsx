import { useUserLanguageDialogLabels } from "@/i18n/hooks/use-user-language-dialog-labels";
import { bulkRemoveMessage } from "@/i18n/utils/bulk-remove-message";
import { ProfileBulkRemoveDialog } from "../ProfileBulkRemoveDialog";
import type { ConfirmBulkRemoveLanguagesDialogProps } from "./userLanguageDialogs.types";

export function ConfirmBulkRemoveLanguagesDialog({
  open,
  selectedCount,
  onClose,
  onConfirm,
  submitting,
  errorMessage,
}: ConfirmBulkRemoveLanguagesDialogProps) {
  const labels = useUserLanguageDialogLabels();

  return (
    <ProfileBulkRemoveDialog
      open={open}
      title={labels.bulkRemove.title}
      cancelLabel={labels.bulkRemove.cancel}
      deleteLabel={labels.bulkRemove.delete}
      message={bulkRemoveMessage(
        selectedCount,
        labels.bulkRemove.one,
        labels.bulkRemove.manyPrefix,
        labels.bulkRemove.manySuffix,
      )}
      submitting={submitting}
      errorMessage={errorMessage}
      onClose={onClose}
      onConfirm={onConfirm}
    />
  );
}
