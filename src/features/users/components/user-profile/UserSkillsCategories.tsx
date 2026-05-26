import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserSkillCard } from "@/features/users/components/user-profile/UserSkillCard";
import { profileRemoveModeSx } from "@/features/users/components/user-profile/profileRemoveMode.styles";
import { userSkillsSx } from "@/features/users/components/user-profile/userSkills.styles";
import { useUserSkillDialogLabels } from "@/i18n/hooks/use-user-skill-dialog-labels";
import { useTranslation } from "@/i18n/use-translation";
import type {
  UserSkill,
  UserSkillCategory,
} from "@/features/users/types/userSkills.types";
import { skillRowKey } from "@/features/users/components/user-profile/userSkills.utils";

export type UserSkillsCategoriesProps = {
  categories: UserSkillCategory[];
  canManage: boolean;
  hasSkills: boolean;
  removeMode: boolean;
  selectedKeys: Set<string>;
  selectedCount: number;
  onSkillClick: (skill: UserSkill) => void;
  onAdd: () => void;
  onStartRemove: () => void;
  onExitRemove: () => void;
  onOpenBulkConfirm: () => void;
};

export function UserSkillsCategories({
  categories,
  canManage,
  hasSkills,
  removeMode,
  selectedKeys,
  selectedCount,
  onSkillClick,
  onAdd,
  onStartRemove,
  onExitRemove,
  onOpenBulkConfirm,
}: UserSkillsCategoriesProps) {
  const { t } = useTranslation();
  const labels = useUserSkillDialogLabels();

  return (
    <Box sx={userSkillsSx.mainColumn}>
      <Typography component="h2" sx={userSkillsSx.sectionTitle}>
        {t("profile.tab.skills")}
      </Typography>
      {!hasSkills ? (
        <Typography sx={userSkillsSx.emptyState}>{labels.empty}</Typography>
      ) : (
        <Box sx={userSkillsSx.categoriesStack}>
          {categories.map((category) => (
            <Box
              key={category.id}
              component="section"
              aria-labelledby={`skill-category-${category.id}`}
              sx={userSkillsSx.categoryBlock}
            >
              <Typography
                id={`skill-category-${category.id}`}
                component="h3"
                sx={userSkillsSx.categoryTitle}
              >
                {category.title}
              </Typography>
              <Box
                component="ul"
                sx={userSkillsSx.skillsGrid}
                aria-label={category.title}
                aria-multiselectable={removeMode ? true : undefined}
              >
                {category.skills.map((skill) => (
                  <Box
                    component="li"
                    key={skill.id}
                    sx={userSkillsSx.skillListItem}
                  >
                    <UserSkillCard
                      skill={skill}
                      disabled={!canManage}
                      selected={
                        removeMode && selectedKeys.has(skillRowKey(skill))
                      }
                      onClick={
                        canManage ? () => onSkillClick(skill) : undefined
                      }
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      )}
      {canManage ? (
        <Box sx={profileRemoveModeSx.toolbarActionsRow}>
          {removeMode ? (
            <>
              <Button
                type="button"
                variant="outlined"
                onClick={onExitRemove}
                sx={profileRemoveModeSx.toolbarCancelBtn}
              >
                {labels.bulkRemove.cancel}
              </Button>
              <Button
                type="button"
                variant="contained"
                disableElevation
                disabled={selectedCount === 0}
                onClick={onOpenBulkConfirm}
                sx={profileRemoveModeSx.toolbarDeleteBtn}
              >
                <Box
                  component="span"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1.25,
                  }}
                >
                  <Box component="span">{labels.bulkRemove.delete}</Box>
                  <Box
                    component="span"
                    sx={profileRemoveModeSx.toolbarCountBadge}
                  >
                    {selectedCount}
                  </Box>
                </Box>
              </Button>
            </>
          ) : (
            <>
              <Button
                type="button"
                variant="text"
                startIcon={<AddIcon />}
                sx={userSkillsSx.addSkillBtn}
                onClick={onAdd}
              >
                {labels.addButton}
              </Button>
              <Button
                type="button"
                variant="text"
                startIcon={<DeleteIcon />}
                sx={userSkillsSx.removeSkillsBtn}
                disabled={!hasSkills}
                onClick={onStartRemove}
              >
                {labels.removeButton}
              </Button>
            </>
          )}
        </Box>
      ) : null}
    </Box>
  );
}
