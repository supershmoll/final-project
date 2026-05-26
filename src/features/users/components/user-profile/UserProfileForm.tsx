import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useUserProfileForm } from "@/features/users/hooks/useUserProfileForm";
import type { UserRow } from "@/features/users/types";
import type { AvatarUploadState } from "@/features/users/types/userProfile.types";
import { userProfileSx } from "./userProfile.styles";
import { useTranslation } from "@/i18n/use-translation";

export {
  formatMutationError,
  formatProfileSubmitError,
} from "@/shared/utils/formatMutationError";

type UserProfileFormProps = {
  user: UserRow;
  canEditProfile: boolean;
  avatarUpload?: AvatarUploadState;
  onUpdated: () => Promise<unknown> | void;
};

export function UserProfileForm({
  user,
  canEditProfile,
  avatarUpload,
  onUpdated,
}: UserProfileFormProps) {
  const { t } = useTranslation();
  const {
    form,
    submitError,
    canSubmit,
    departmentOptions,
    positionOptions,
    selectedDepartmentId,
    selectedPositionId,
    handleFieldChange,
    handleSubmit,
  } = useUserProfileForm({ user, canEditProfile, avatarUpload, onUpdated });

  return (
    <>
      <Box sx={userProfileSx.formGrid}>
        <TextField
          label={t("table.firstName")}
          value={form.firstName}
          onChange={handleFieldChange("firstName")}
          slotProps={{ htmlInput: { readOnly: !canEditProfile } }}
          sx={[
            userProfileSx.field,
            !canEditProfile ? userProfileSx.fieldReadOnly : {},
          ]}
        />
        <TextField
          label={t("table.lastName")}
          value={form.lastName}
          onChange={handleFieldChange("lastName")}
          slotProps={{ htmlInput: { readOnly: !canEditProfile } }}
          sx={[
            userProfileSx.field,
            !canEditProfile ? userProfileSx.fieldReadOnly : {},
          ]}
        />
        {canEditProfile ? (
          <TextField
            select
            label={t("table.department")}
            value={selectedDepartmentId}
            onChange={handleFieldChange("departmentId")}
            sx={userProfileSx.field}
          >
            <MenuItem value="">{t("common.unassigned")}</MenuItem>
            {departmentOptions.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        ) : (
          <TextField
            label={t("table.department")}
            value={user.department}
            slotProps={{ htmlInput: { readOnly: true } }}
            sx={[userProfileSx.field, userProfileSx.fieldReadOnly]}
          />
        )}
        {canEditProfile ? (
          <TextField
            select
            label={t("table.position")}
            value={selectedPositionId}
            onChange={handleFieldChange("positionId")}
            sx={userProfileSx.field}
          >
            <MenuItem value="">{t("common.unassigned")}</MenuItem>
            {positionOptions.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        ) : (
          <TextField
            label={t("table.position")}
            value={user.position}
            slotProps={{ htmlInput: { readOnly: true } }}
            sx={[userProfileSx.field, userProfileSx.fieldReadOnly]}
          />
        )}
        <TextField
          label={t("profile.birthDate")}
          type="date"
          value={form.birthDate}
          onChange={handleFieldChange("birthDate")}
          slotProps={{
            htmlInput: { readOnly: !canEditProfile },
            inputLabel: { shrink: true },
          }}
          sx={[
            userProfileSx.field,
            !canEditProfile ? userProfileSx.fieldReadOnly : {},
          ]}
        />
        <TextField
          label={t("table.education")}
          value={form.education}
          onChange={handleFieldChange("education")}
          slotProps={{ htmlInput: { readOnly: !canEditProfile } }}
          sx={[
            userProfileSx.field,
            !canEditProfile ? userProfileSx.fieldReadOnly : {},
          ]}
        />
      </Box>
      {submitError ? (
        <Typography sx={userProfileSx.formError}>{submitError}</Typography>
      ) : null}
      <Box sx={userProfileSx.updateBtnWrap}>
        <Button
          variant="contained"
          disabled={!canSubmit}
          onClick={() => void handleSubmit()}
          sx={[
            userProfileSx.updateBtn,
            canSubmit
              ? userProfileSx.updateBtnActive
              : userProfileSx.updateBtnDisabled,
          ]}
        >
          {t("common.update")}
        </Button>
      </Box>
    </>
  );
}
