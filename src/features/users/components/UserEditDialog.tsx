import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import type { UserRow } from "../types";
import { UserEditDialogForm } from "./UserEditDialogForm";
import { editDialogSx } from "./styles/editDialog.styles";
import { useTranslation } from "@/i18n/use-translation";

type UserEditDialogProps = {
  open: boolean;
  user: UserRow | null;
  onClose: () => void;
  onSaved: () => void;
};

export function UserEditDialog({
  open,
  user,
  onClose,
  onSaved,
}: UserEditDialogProps) {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={editDialogSx.editDialogRoot}
    >
      <DialogTitle sx={editDialogSx.editDialogTitle}>
        {t("users.dialog.editTitle")}
        <IconButton
          onClick={onClose}
          aria-label={t("common.close")}
          sx={editDialogSx.editDialogCloseBtn}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {open && user ? (
        <UserEditDialogForm
          key={user.id}
          user={user}
          onClose={onClose}
          onSaved={onSaved}
        />
      ) : null}
    </Dialog>
  );
}
