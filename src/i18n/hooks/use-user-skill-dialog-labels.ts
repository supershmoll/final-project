import { useMemo } from "react";
import { useTranslation } from "@/i18n/use-translation";

export function useUserSkillDialogLabels() {
  const { t } = useTranslation();

  return useMemo(
    () => ({
      add: {
        title: t("userSkills.dialog.addTitle"),
        skillField: t("common.skill"),
        masteryField: t("common.skillMastery"),
        cancel: t("common.cancel"),
        confirm: t("common.confirm"),
        noSkillsAvailable: t("userSkills.dialog.noSkillsAvailable"),
      },
      update: {
        title: t("userSkills.dialog.updateTitle"),
        skillField: t("common.skill"),
        masteryField: t("common.skillMastery"),
        cancel: t("common.cancel"),
        confirm: t("common.confirm"),
      },
      bulkRemove: {
        title: t("userSkills.dialog.deleteTitle"),
        cancel: t("common.cancel"),
        delete: t("common.delete"),
        one: t("userSkills.bulkRemove.one"),
        manyPrefix: t("userSkills.bulkRemove.manyPrefix"),
        manySuffix: t("userSkills.bulkRemove.manySuffix"),
      },
      addButton: t("userSkills.addButton"),
      removeButton: t("userSkills.removeButton"),
      empty: t("userSkills.empty"),
      deleteSelected: t("userSkills.manager.delete"),
    }),
    [t],
  );
}
