import { useMemo } from "react";
import { useTranslation } from "@/i18n/use-translation";

export function useUserLanguageDialogLabels() {
  const { t } = useTranslation();

  return useMemo(
    () => ({
      add: {
        title: t("userLanguages.dialog.addTitle"),
        languageField: t("common.language"),
        proficiencyField: t("common.proficiency"),
        cancel: t("common.cancel"),
        confirm: t("common.confirm"),
        loading: t("userLanguages.loadingLanguages"),
        noLanguagesAvailable: t("userLanguages.dialog.noLanguagesAvailable"),
        selectLanguage: t("common.selectLanguage"),
      },
      update: {
        title: t("userLanguages.dialog.updateTitle"),
        languageField: t("common.language"),
        proficiencyField: t("common.proficiency"),
        cancel: t("common.cancel"),
        confirm: t("common.confirm"),
      },
      bulkRemove: {
        title: t("userLanguages.dialog.deleteTitle"),
        cancel: t("common.cancel"),
        delete: t("common.delete"),
        one: t("userLanguages.bulkRemove.one"),
        manyPrefix: t("userLanguages.bulkRemove.manyPrefix"),
        manySuffix: t("userLanguages.bulkRemove.manySuffix"),
      },
      addButton: t("userLanguages.addButton"),
      removeButton: t("userLanguages.removeButton"),
    }),
    [t],
  );
}
