import { useUserSkillDialogLabels } from "@/i18n/hooks/use-user-skill-dialog-labels";
import { bulkRemoveMessage } from "@/i18n/utils/bulk-remove-message";
import { ProfileBulkRemoveDialog } from "../ProfileBulkRemoveDialog";
import type { ConfirmBulkRemoveSkillsDialogProps } from "./userSkillDialogs.types";

export function ConfirmBulkRemoveSkillsDialog({
  open,
  selectedCount,
  onClose,
  onConfirm,
  submitting,
  errorMessage,
}: ConfirmBulkRemoveSkillsDialogProps) {
  const labels = useUserSkillDialogLabels();

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
