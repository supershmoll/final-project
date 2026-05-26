import type { Locale } from "@/lib/preferences/types";

export type MessageKey =
  | "settings.title"
  | "settings.appearance"
  | "settings.appearance.system"
  | "settings.appearance.dark"
  | "settings.appearance.light"
  | "settings.language"
  | "settings.language.en"
  | "settings.language.ru"
  | "settings.language.de"
  | "nav.profile"
  | "nav.settings"
  | "nav.logout"
  | "nav.employees"
  | "nav.skills"
  | "nav.languages"
  | "nav.cvs"
  | "nav.projects"
  | "nav.departments"
  | "nav.positions"
  | "nav.availability"
  | "availability.filter.all"
  | "availability.status.office"
  | "availability.status.remote"
  | "availability.status.sickDay"
  | "availability.status.sickList"
  | "availability.status.vacation"
  | "availability.status.unknown"
  | "availability.table.employee"
  | "availability.table.status"
  | "availability.table.updated"
  | "availability.table.updatedBy"
  | "availability.empty"
  | "availability.liveIndicator"
  | "availability.myStatus"
  | "availability.updatedAt"
  | "availability.noStatusYet"
  | "availability.updatedBy.bot"
  | "availability.updatedBy.user"
  | "availability.updatedBy.admin"
  | "assistant.title"
  | "assistant.description"
  | "assistant.placeholder"
  | "assistant.send"
  | "assistant.sending"
  | "assistant.empty"
  | "assistant.source.ai"
  | "assistant.source.rules"
  | "assistant.suggestion.office"
  | "assistant.suggestion.remote"
  | "assistant.suggestion.vacation"
  | "telegram.title"
  | "telegram.description"
  | "telegram.usernameLabel"
  | "telegram.usernamePlaceholder"
  | "telegram.connect"
  | "telegram.disconnect"
  | "telegram.connectedAs"
  | "telegram.pending"
  | "telegram.refreshStatus"
  | "telegram.help"
  | "telegram.validation.username"
  | "auth.sessionExpired.telegram"
  | "auth.signIn"
  | "auth.signUp"
  | "auth.welcomeBack"
  | "auth.createAccountSubtitle"
  | "auth.emailPlaceholder"
  | "auth.passwordPlaceholder"
  | "auth.confirmPasswordPlaceholder"
  | "auth.newPasswordPlaceholder"
  | "auth.confirmNewPasswordPlaceholder"
  | "auth.forgotPassword"
  | "auth.forgotPasswordTitle"
  | "auth.forgotPasswordSubtitle"
  | "auth.sent"
  | "auth.forgotPasswordSuccess"
  | "auth.resetPassword"
  | "auth.resetPasswordSubtitle"
  | "auth.resetPasswordSubmit"
  | "auth.resetPasswordSuccess"
  | "auth.tokenRequired"
  | "auth.iHaveAccount"
  | "auth.showPassword"
  | "auth.hidePassword"
  | "auth.validation.invalidEmail"
  | "auth.validation.passwordMin"
  | "auth.validation.passwordMax"
  | "auth.validation.passwordsMismatch"
  | "common.cancel"
  | "common.create"
  | "common.update"
  | "common.delete"
  | "common.edit"
  | "common.confirm"
  | "common.search"
  | "common.name"
  | "common.close"
  | "common.closeDialog"
  | "common.loading"
  | "common.add"
  | "common.password"
  | "common.confirmPassword"
  | "common.role"
  | "common.unassigned"
  | "common.description"
  | "common.environment"
  | "common.responsibilities"
  | "common.proficiency"
  | "common.language"
  | "common.skill"
  | "common.skillMastery"
  | "common.noMasteryLevels"
  | "common.noCategories"
  | "common.selectSkill"
  | "common.selectLanguage"
  | "common.noResults"
  | "common.project"
  | "common.tillNow"
  | "common.validation.enterName"
  | "table.firstName"
  | "table.lastName"
  | "table.email"
  | "table.department"
  | "table.position"
  | "table.education"
  | "table.employee"
  | "table.domain"
  | "table.startDate"
  | "table.endDate"
  | "table.usersNotFound"
  | "table.languagesNotFound"
  | "table.departmentsNotFound"
  | "table.positionsNotFound"
  | "table.skillsNotFound"
  | "departments.createButton"
  | "departments.dialog.createTitle"
  | "departments.dialog.editTitle"
  | "departments.dialog.deleteTitle"
  | "departments.deleteConfirm"
  | "positions.createButton"
  | "positions.dialog.createTitle"
  | "positions.dialog.editTitle"
  | "positions.dialog.deleteTitle"
  | "positions.deleteConfirm"
  | "languages.createButton"
  | "languages.dialog.createTitle"
  | "languages.dialog.editTitle"
  | "languages.dialog.deleteTitle"
  | "languages.field.nativeName"
  | "languages.field.iso2"
  | "languages.deleteConfirm"
  | "languages.validation.enterName"
  | "languages.validation.enterNativeName"
  | "languages.validation.enterIso2"
  | "languages.validation.iso2Length"
  | "skills.createButton"
  | "skills.dialog.createTitle"
  | "skills.dialog.editTitle"
  | "skills.dialog.deleteTitle"
  | "skills.field.skillName"
  | "skills.field.category"
  | "skills.table.category"
  | "skills.validation.enterName"
  | "skills.validation.selectCategory"
  | "skills.deleteConfirm"
  | "skills.dialog.addTitle"
  | "skills.dialog.updateTitle"
  | "skills.manager.addButton"
  | "sidebar.expand"
  | "sidebar.collapse"
  | "sidebar.mainNavigation"
  | "users.createButton"
  | "users.viewProfile"
  | "users.dialog.editTitle"
  | "users.dialog.createTitle"
  | "users.dialog.deleteTitle"
  | "users.deleteConfirm"
  | "users.role.employee"
  | "users.role.admin"
  | "cvs.createButton"
  | "cvs.dialog.createTitle"
  | "cvs.dialog.deleteTitle"
  | "cvs.deleteConfirm"
  | "cvs.empty"
  | "cvs.searchEmpty"
  | "cvs.field.name"
  | "cvs.field.description"
  | "cvs.field.responsibilitiesPlaceholder"
  | "cvs.details.readOnlyNotice"
  | "cvs.exportPdf"
  | "cvs.projects.addTitle"
  | "cvs.projects.updateTitle"
  | "cvs.projects.addButton"
  | "cvs.projects.removeTitle"
  | "cvs.projects.removeConfirm"
  | "cvs.projects.empty"
  | "cvs.preview.education"
  | "cvs.preview.languageProficiency"
  | "cvs.preview.domains"
  | "cvs.preview.professionalSkills"
  | "cvs.preview.skills"
  | "cvs.preview.experienceYears"
  | "cvs.preview.lastUsed"
  | "cvs.preview.projects"
  | "cvs.preview.projectRoles"
  | "cvs.preview.period"
  | "cvs.preview.responsibilities"
  | "profile.tab.profile"
  | "profile.tab.skills"
  | "profile.tab.languages"
  | "profile.birthDate"
  | "profile.notFound"
  | "profile.loadError"
  | "profile.avatar.sizeError"
  | "profile.avatar.typeError"
  | "profile.avatar.uploadHint"
  | "profile.avatar.discardSelection"
  | "profile.avatar.removePhoto"
  | "profile.memberSinceFallback"
  | "userSkills.addButton"
  | "userSkills.removeButton"
  | "userSkills.empty"
  | "userSkills.manager.delete"
  | "userSkills.dialog.addTitle"
  | "userSkills.dialog.updateTitle"
  | "userSkills.dialog.deleteTitle"
  | "userSkills.dialog.noSkillsAvailable"
  | "userSkills.bulkRemove.one"
  | "userSkills.bulkRemove.manyPrefix"
  | "userSkills.bulkRemove.manySuffix"
  | "userLanguages.addButton"
  | "userLanguages.removeButton"
  | "userLanguages.empty"
  | "userLanguages.dialog.addTitle"
  | "userLanguages.dialog.updateTitle"
  | "userLanguages.dialog.deleteTitle"
  | "userLanguages.loadingLanguages"
  | "userLanguages.dialog.noLanguagesAvailable"
  | "userLanguages.bulkRemove.one"
  | "userLanguages.bulkRemove.manyPrefix"
  | "userLanguages.bulkRemove.manySuffix"
  | "projects.dialog.deleteTitle"
  | "projects.dialog.createTitle"
  | "projects.dialog.editTitle"
  | "projects.createButton"
  | "projects.deleteConfirm"
  | "projects.empty"
  | "projects.field.name"
  | "projects.field.description"
  | "projects.field.ongoingHint"
  | "projects.field.responsibilitiesPlaceholder"
  | "projects.field.addSkill"
  | "projects.ai.title"
  | "projects.ai.description"
  | "projects.ai.briefLabel"
  | "projects.ai.briefPlaceholder"
  | "projects.ai.generate"
  | "projects.ai.generating"
  | "projects.ai.source.ai"
  | "projects.ai.source.rules"
  | "projects.ai.footnote"
  | "projects.candidates.menuItem"
  | "projects.candidates.title"
  | "projects.candidates.description"
  | "projects.candidates.minAge"
  | "projects.candidates.maxAge"
  | "projects.candidates.educationHint"
  | "projects.candidates.educationHintPlaceholder"
  | "projects.candidates.department"
  | "projects.candidates.position"
  | "projects.candidates.anyDepartment"
  | "projects.candidates.anyPosition"
  | "projects.candidates.projectLabel"
  | "projects.candidates.availabilityFilter"
  | "projects.candidates.search"
  | "projects.candidates.searching"
  | "projects.candidates.empty"
  | "projects.candidates.matchScore"
  | "projects.candidates.age"
  | "projects.candidates.education"
  | "projects.candidates.matchedSkills"
  | "projects.candidates.missingSkills"
  | "projects.candidates.source.ai"
  | "projects.candidates.source.rules";

type Messages = Record<MessageKey, string>;

const en: Messages = {
  "settings.title": "Settings",
  "settings.appearance": "Appearance",
  "settings.appearance.system": "Device settings",
  "settings.appearance.dark": "Dark",
  "settings.appearance.light": "Light",
  "settings.language": "Language",
  "settings.language.en": "English",
  "settings.language.ru": "Russian",
  "settings.language.de": "German",
  "nav.profile": "Profile",
  "nav.settings": "Settings",
  "nav.logout": "Logout",
  "nav.employees": "Employees",
  "nav.skills": "Skills",
  "nav.languages": "Languages",
  "nav.cvs": "CVs",
  "nav.projects": "Projects",
  "nav.departments": "Departments",
  "nav.positions": "Positions",
  "nav.availability": "Team availability",
  "availability.filter.all": "All statuses",
  "availability.status.office": "Office",
  "availability.status.remote": "Remote",
  "availability.status.sickDay": "Sick day",
  "availability.status.sickList": "Sick leave",
  "availability.status.vacation": "Vacation",
  "availability.status.unknown": "Unknown",
  "availability.table.employee": "Employee",
  "availability.table.status": "Status",
  "availability.table.updated": "Updated",
  "availability.table.updatedBy": "Source",
  "availability.empty": "No team members match your filters.",
  "availability.liveIndicator": "Live · refreshes every 30s",
  "availability.myStatus": "Your status",
  "availability.updatedAt": "Updated",
  "availability.noStatusYet": "Set your status in Telegram to see it here.",
  "availability.updatedBy.bot": "Telegram bot",
  "availability.updatedBy.user": "Web app",
  "availability.updatedBy.admin": "Admin",
  "assistant.title": "HR assistant",
  "assistant.description":
    "Ask about your team's availability. Answers use live data from this page.",
  "assistant.placeholder": "Who is working remotely today?",
  "assistant.send": "Ask",
  "assistant.sending": "Thinking…",
  "assistant.empty": "Ask a question or pick a suggestion above.",
  "assistant.source.ai": "AI answer",
  "assistant.source.rules": "Rule-based answer",
  "assistant.suggestion.office": "Who is in the office?",
  "assistant.suggestion.remote": "Who is working remotely?",
  "assistant.suggestion.vacation": "Who is on vacation?",
  "telegram.title": "Telegram status bot",
  "telegram.description":
    "Connect Telegram to receive daily status prompts and confirm your availability.",
  "telegram.usernameLabel": "Telegram username",
  "telegram.usernamePlaceholder": "your_username",
  "telegram.connect": "Connect Telegram",
  "telegram.disconnect": "Disconnect",
  "telegram.connectedAs": "Connected as",
  "telegram.pending":
    "Finish in Telegram — open the bot chat and tap Start. This page updates automatically.",
  "telegram.refreshStatus": "Check again",
  "telegram.help":
    "Daily prompts arrive at 9:00 MSK. Confirm before 12:00 or your session will end.",
  "telegram.validation.username":
    "Enter a valid Telegram username (5–32 characters, letters, numbers, underscore).",
  "auth.sessionExpired.telegram":
    "Your session ended because today's work status was not confirmed in Telegram. Please sign in again.",
  "auth.signIn": "Sign in",
  "auth.signUp": "Sign up",
  "auth.welcomeBack": "Welcome back. Sign in to continue",
  "auth.createAccountSubtitle": "Create an account to continue",
  "auth.emailPlaceholder": "Email",
  "auth.passwordPlaceholder": "Password",
  "auth.confirmPasswordPlaceholder": "Confirm Password",
  "auth.newPasswordPlaceholder": "New Password",
  "auth.confirmNewPasswordPlaceholder": "Confirm New Password",
  "auth.forgotPassword": "Forgot password",
  "auth.forgotPasswordTitle": "Forgot password",
  "auth.forgotPasswordSubtitle":
    "We will send you an email with further instructions",
  "auth.sent": "Sent",
  "auth.forgotPasswordSuccess":
    "If an account with this email exists, password reset instructions have been sent.",
  "auth.resetPassword": "Reset password",
  "auth.resetPasswordSubtitle": "Enter your new password to continue",
  "auth.resetPasswordSubmit": "Reset Password",
  "auth.resetPasswordSuccess":
    "Password reset successfully. You can now sign in with your new password.",
  "auth.tokenRequired": "Token is required",
  "auth.iHaveAccount": "I have an account",
  "auth.showPassword": "Show password",
  "auth.hidePassword": "Hide password",
  "auth.validation.invalidEmail": "Please enter a valid email address.",
  "auth.validation.passwordMin": "Password must be at least 8 characters long.",
  "auth.validation.passwordMax": "Password is too long.",
  "auth.validation.passwordsMismatch": "Passwords do not match.",
  "common.cancel": "Cancel",
  "common.create": "Create",
  "common.update": "Update",
  "common.delete": "Delete",
  "common.edit": "Edit",
  "common.confirm": "Confirm",
  "common.search": "Search",
  "common.name": "Name",
  "common.close": "Close",
  "common.closeDialog": "Close dialog",
  "common.loading": "Loading…",
  "common.add": "Add",
  "common.password": "Password",
  "common.confirmPassword": "Confirm Password",
  "common.role": "Role",
  "common.unassigned": "Unassigned",
  "common.description": "Description",
  "common.environment": "Environment",
  "common.responsibilities": "Responsibilities",
  "common.proficiency": "Proficiency",
  "common.language": "Language",
  "common.skill": "Skill",
  "common.skillMastery": "Skill mastery",
  "common.noMasteryLevels": "No mastery levels",
  "common.noCategories": "No categories",
  "common.selectSkill": "Select skill",
  "common.selectLanguage": "Select language",
  "common.noResults": "No results found",
  "common.project": "Project",
  "common.tillNow": "Till now",
  "common.validation.enterName": "Enter a name.",
  "table.firstName": "First Name",
  "table.lastName": "Last Name",
  "table.email": "Email",
  "table.department": "Department",
  "table.position": "Position",
  "table.education": "Education",
  "table.employee": "Employee",
  "table.domain": "Domain",
  "table.startDate": "Start Date",
  "table.endDate": "End Date",
  "table.usersNotFound": "Users not found",
  "table.languagesNotFound": "Languages not found",
  "table.departmentsNotFound": "Departments not found",
  "table.positionsNotFound": "Positions not found",
  "table.skillsNotFound": "Skills not found",
  "departments.createButton": "+ CREATE DEPARTMENT",
  "departments.dialog.createTitle": "Create department",
  "departments.dialog.editTitle": "Edit department",
  "departments.dialog.deleteTitle": "Delete department",
  "departments.deleteConfirm": "Are you sure you want to delete department",
  "positions.createButton": "+ CREATE POSITION",
  "positions.dialog.createTitle": "Create position",
  "positions.dialog.editTitle": "Edit position",
  "positions.dialog.deleteTitle": "Delete position",
  "positions.deleteConfirm": "Are you sure you want to delete position",
  "languages.createButton": "+ CREATE LANGUAGE",
  "languages.dialog.createTitle": "Create language",
  "languages.dialog.editTitle": "Update language",
  "languages.dialog.deleteTitle": "Delete language",
  "languages.field.nativeName": "Native name",
  "languages.field.iso2": "ISO2 code",
  "languages.deleteConfirm": "Are you sure you want to delete language",
  "languages.validation.enterName": "Enter a language name.",
  "languages.validation.enterNativeName": "Enter a native name.",
  "languages.validation.enterIso2": "Enter an ISO2 code.",
  "languages.validation.iso2Length": "ISO2 code must be exactly 2 characters.",
  "skills.createButton": "+ CREATE SKILL",
  "skills.dialog.createTitle": "Create skill",
  "skills.dialog.editTitle": "Edit skill",
  "skills.dialog.deleteTitle": "Delete skill",
  "skills.field.skillName": "Skill name",
  "skills.field.category": "Category",
  "skills.table.category": "Category",
  "skills.validation.enterName": "Enter a skill name.",
  "skills.validation.selectCategory": "Select a category.",
  "skills.deleteConfirm": "Are you sure you want to delete skill",
  "skills.dialog.addTitle": "Add skill",
  "skills.dialog.updateTitle": "Update skill",
  "skills.manager.addButton": "+ Add skill",
  "sidebar.expand": "Expand sidebar",
  "sidebar.collapse": "Collapse sidebar",
  "sidebar.mainNavigation": "Main navigation",
  "users.createButton": "+ Create user",
  "users.viewProfile": "View profile",
  "users.dialog.createTitle": "Add user",
  "users.dialog.editTitle": "Edit user",
  "users.dialog.deleteTitle": "Delete user",
  "users.deleteConfirm": "Are you sure you want to delete user",
  "users.role.employee": "Employee",
  "users.role.admin": "Admin",
  "cvs.createButton": "+ CREATE CV",
  "cvs.dialog.createTitle": "Create CV",
  "cvs.dialog.deleteTitle": "Delete CV",
  "cvs.deleteConfirm": "Are you sure you want to delete CV",
  "cvs.empty": "No CVs found.",
  "cvs.searchEmpty": "No CVs match your search.",
  "cvs.field.name": "Name",
  "cvs.field.description": "Description",
  "cvs.field.responsibilitiesPlaceholder": "One responsibility per line",
  "cvs.details.readOnlyNotice": "You can view this CV but cannot edit it.",
  "cvs.exportPdf": "Export PDF",
  "cvs.projects.addTitle": "Add project",
  "cvs.projects.updateTitle": "Update project",
  "cvs.projects.addButton": "+ ADD PROJECT",
  "cvs.projects.removeTitle": "Remove project",
  "cvs.projects.removeConfirm": "Are you sure you want to remove project",
  "cvs.projects.empty": "No projects found.",
  "cvs.preview.education": "Education",
  "cvs.preview.languageProficiency": "Language proficiency",
  "cvs.preview.domains": "Domains",
  "cvs.preview.professionalSkills": "Professional skills",
  "cvs.preview.skills": "Skills",
  "cvs.preview.experienceYears": "Experience in years",
  "cvs.preview.lastUsed": "Last used",
  "cvs.preview.projects": "Projects",
  "cvs.preview.projectRoles": "Project roles",
  "cvs.preview.period": "Period",
  "cvs.preview.responsibilities": "Responsibilities",
  "profile.tab.profile": "Profile",
  "profile.tab.skills": "Skills",
  "profile.tab.languages": "Languages",
  "profile.birthDate": "Birth date",
  "profile.notFound": "User not found.",
  "profile.loadError": "Failed to load user data.",
  "profile.avatar.sizeError": "Photo must not exceed 500 KB.",
  "profile.avatar.typeError": "Please use a PNG, JPG, or GIF image.",
  "profile.avatar.uploadHint": "png, jpg or gif no more than 0.5MB",
  "profile.avatar.discardSelection": "Discard selected photo",
  "profile.avatar.removePhoto": "Remove profile photo",
  "profile.memberSinceFallback": "A member",
  "userSkills.addButton": "Add skill",
  "userSkills.removeButton": "Remove skills",
  "userSkills.empty": "No skills added yet.",
  "userSkills.manager.delete": "Delete",
  "userSkills.dialog.addTitle": "Add skill",
  "userSkills.dialog.updateTitle": "Update skill",
  "userSkills.dialog.deleteTitle": "Delete skills",
  "userSkills.dialog.noSkillsAvailable":
    "No skills available to add, or the list is empty.",
  "userSkills.bulkRemove.one":
    "Remove this skill from the profile? This cannot be undone.",
  "userSkills.bulkRemove.manyPrefix": "Remove",
  "userSkills.bulkRemove.manySuffix":
    "skills from the profile? This cannot be undone.",
  "userLanguages.addButton": "Add language",
  "userLanguages.removeButton": "Remove languages",
  "userLanguages.empty": "No languages listed yet.",
  "userLanguages.dialog.addTitle": "Add language",
  "userLanguages.dialog.updateTitle": "Update language",
  "userLanguages.dialog.deleteTitle": "Delete languages",
  "userLanguages.loadingLanguages": "Loading languages…",
  "userLanguages.dialog.noLanguagesAvailable":
    "No languages available to add, or the list is empty.",
  "userLanguages.bulkRemove.one":
    "Remove this language from the profile? This cannot be undone.",
  "userLanguages.bulkRemove.manyPrefix": "Remove",
  "userLanguages.bulkRemove.manySuffix":
    "languages from the profile? This cannot be undone.",
  "projects.createButton": "+ CREATE PROJECT",
  "projects.dialog.createTitle": "Create project",
  "projects.dialog.editTitle": "Update project",
  "projects.dialog.deleteTitle": "Delete project",
  "projects.deleteConfirm": "Are you sure you want to delete project",
  "projects.empty": "No projects found.",
  "projects.field.name": "Name",
  "projects.field.description": "Description",
  "projects.field.ongoingHint": "Leave empty if the project is ongoing",
  "projects.field.responsibilitiesPlaceholder": "One responsibility per line",
  "projects.field.addSkill": "Add skill",
  "projects.ai.title": "AI project assistant",
  "projects.ai.description":
    "Describe the project in a few words and AI will suggest a name, domain, description, and tech stack from your skills catalog.",
  "projects.ai.briefLabel": "Project idea",
  "projects.ai.briefPlaceholder":
    "e.g. Mobile e-commerce app for fashion retail with React and Node.js",
  "projects.ai.generate": "Suggest fields",
  "projects.ai.generating": "Generating…",
  "projects.ai.source.ai": "AI suggestion applied",
  "projects.ai.source.rules": "Rule-based suggestion applied",
  "projects.ai.footnote":
    "Review and edit every field before creating the project. Stack items must exist in Skills.",
  "projects.candidates.menuItem": "Find candidates",
  "projects.candidates.title": "Find project candidates",
  "projects.candidates.description":
    "Match employees by skills, availability, age, education, and org fit. Optional AI summaries for top matches.",
  "projects.candidates.minAge": "Min age",
  "projects.candidates.maxAge": "Max age",
  "projects.candidates.educationHint": "Education keywords",
  "projects.candidates.educationHintPlaceholder":
    "e.g. computer science, MBA, bachelor",
  "projects.candidates.department": "Department",
  "projects.candidates.position": "Position",
  "projects.candidates.anyDepartment": "Any department",
  "projects.candidates.anyPosition": "Any position",
  "projects.candidates.projectLabel": "Project",
  "projects.candidates.availabilityFilter": "Availability",
  "projects.candidates.search": "Find candidates",
  "projects.candidates.searching": "Matching…",
  "projects.candidates.empty": "No candidates match these filters.",
  "projects.candidates.matchScore": "Match",
  "projects.candidates.age": "Age",
  "projects.candidates.education": "Education",
  "projects.candidates.matchedSkills": "Matched skills",
  "projects.candidates.missingSkills": "Missing skills",
  "projects.candidates.source.ai": "AI summary",
  "projects.candidates.source.rules": "Rule-based summary",
};

const ru: Messages = {
  "settings.title": "Настройки",
  "settings.appearance": "Оформление",
  "settings.appearance.system": "Как на устройстве",
  "settings.appearance.dark": "Тёмная",
  "settings.appearance.light": "Светлая",
  "settings.language": "Язык",
  "settings.language.en": "Английский",
  "settings.language.ru": "Русский",
  "settings.language.de": "Немецкий",
  "nav.profile": "Профиль",
  "nav.settings": "Настройки",
  "nav.logout": "Выйти",
  "nav.employees": "Сотрудники",
  "nav.skills": "Навыки",
  "nav.languages": "Языки",
  "nav.cvs": "Резюме",
  "nav.projects": "Проекты",
  "nav.departments": "Отделы",
  "nav.positions": "Должности",
  "nav.availability": "Доступность команды",
  "availability.filter.all": "Все статусы",
  "availability.status.office": "В офисе",
  "availability.status.remote": "Удалённо",
  "availability.status.sickDay": "Болею",
  "availability.status.sickList": "На больничном",
  "availability.status.vacation": "В отпуске",
  "availability.status.unknown": "Неизвестно",
  "availability.table.employee": "Сотрудник",
  "availability.table.status": "Статус",
  "availability.table.updated": "Обновлено",
  "availability.table.updatedBy": "Источник",
  "availability.empty": "Нет сотрудников по выбранным фильтрам.",
  "availability.liveIndicator": "Онлайн · обновление каждые 30 с",
  "availability.myStatus": "Ваш статус",
  "availability.updatedAt": "Обновлено",
  "availability.noStatusYet":
    "Укажите статус в Telegram, чтобы он отображался здесь.",
  "availability.updatedBy.bot": "Telegram-бот",
  "availability.updatedBy.user": "Веб-приложение",
  "availability.updatedBy.admin": "Админ",
  "assistant.title": "HR-ассистент",
  "assistant.description":
    "Задавайте вопросы о доступности команды. Ответы строятся на актуальных данных этой страницы.",
  "assistant.placeholder": "Кто сегодня работает удалённо?",
  "assistant.send": "Спросить",
  "assistant.sending": "Думаю…",
  "assistant.empty": "Задайте вопрос или выберите подсказку выше.",
  "assistant.source.ai": "Ответ ИИ",
  "assistant.source.rules": "Ответ по правилам",
  "assistant.suggestion.office": "Кто в офисе?",
  "assistant.suggestion.remote": "Кто работает удалённо?",
  "assistant.suggestion.vacation": "Кто в отпуске?",
  "telegram.title": "Telegram-бот статуса",
  "telegram.description":
    "Подключите Telegram для ежедневных запросов статуса и подтверждения доступности.",
  "telegram.usernameLabel": "Имя пользователя Telegram",
  "telegram.usernamePlaceholder": "ваш_username",
  "telegram.connect": "Подключить Telegram",
  "telegram.disconnect": "Отключить",
  "telegram.connectedAs": "Подключено как",
  "telegram.pending":
    "Завершите в Telegram — откройте чат с ботом и нажмите Start. Страница обновится автоматически.",
  "telegram.refreshStatus": "Проверить снова",
  "telegram.help":
    "Запросы приходят в 9:00 МСК. Подтвердите до 12:00, иначе сессия будет завершена.",
  "telegram.validation.username":
    "Введите корректное имя пользователя Telegram (5–32 символа: буквы, цифры, _).",
  "auth.sessionExpired.telegram":
    "Сессия завершена, так как сегодняшний рабочий статус не был подтверждён в Telegram. Войдите снова.",
  "auth.signIn": "Войти",
  "auth.signUp": "Регистрация",
  "auth.welcomeBack": "С возвращением. Войдите, чтобы продолжить",
  "auth.createAccountSubtitle": "Создайте аккаунт, чтобы продолжить",
  "auth.emailPlaceholder": "Email",
  "auth.passwordPlaceholder": "Пароль",
  "auth.confirmPasswordPlaceholder": "Подтвердите пароль",
  "auth.newPasswordPlaceholder": "Новый пароль",
  "auth.confirmNewPasswordPlaceholder": "Подтвердите новый пароль",
  "auth.forgotPassword": "Забыли пароль",
  "auth.forgotPasswordTitle": "Забыли пароль",
  "auth.forgotPasswordSubtitle":
    "Мы отправим вам письмо с дальнейшими инструкциями",
  "auth.sent": "Отправлено",
  "auth.forgotPasswordSuccess":
    "Если аккаунт с этим email существует, инструкции по сбросу пароля отправлены.",
  "auth.resetPassword": "Сброс пароля",
  "auth.resetPasswordSubtitle": "Введите новый пароль, чтобы продолжить",
  "auth.resetPasswordSubmit": "Сбросить пароль",
  "auth.resetPasswordSuccess":
    "Пароль успешно изменён. Теперь вы можете войти с новым паролем.",
  "auth.tokenRequired": "Требуется токен",
  "auth.iHaveAccount": "У меня уже есть аккаунт",
  "auth.showPassword": "Показать пароль",
  "auth.hidePassword": "Скрыть пароль",
  "auth.validation.invalidEmail": "Введите корректный email.",
  "auth.validation.passwordMin": "Пароль должен содержать не менее 8 символов.",
  "auth.validation.passwordMax": "Пароль слишком длинный.",
  "auth.validation.passwordsMismatch": "Пароли не совпадают.",
  "common.cancel": "Отмена",
  "common.create": "Создать",
  "common.update": "Обновить",
  "common.delete": "Удалить",
  "common.edit": "Редактировать",
  "common.confirm": "Подтвердить",
  "common.search": "Поиск",
  "common.name": "Название",
  "common.close": "Закрыть",
  "common.closeDialog": "Закрыть диалог",
  "common.loading": "Загрузка…",
  "common.add": "Добавить",
  "common.password": "Пароль",
  "common.confirmPassword": "Подтвердите пароль",
  "common.role": "Роль",
  "common.unassigned": "Не назначен",
  "common.description": "Описание",
  "common.environment": "Окружение",
  "common.responsibilities": "Обязанности",
  "common.proficiency": "Уровень владения",
  "common.language": "Язык",
  "common.skill": "Навык",
  "common.skillMastery": "Уровень навыка",
  "common.noMasteryLevels": "Нет уровней владения",
  "common.noCategories": "Нет категорий",
  "common.selectSkill": "Выберите навык",
  "common.selectLanguage": "Выберите язык",
  "common.noResults": "Ничего не найдено",
  "common.project": "Проект",
  "common.tillNow": "По настоящее время",
  "common.validation.enterName": "Введите название.",
  "table.firstName": "Имя",
  "table.lastName": "Фамилия",
  "table.email": "Email",
  "table.department": "Отдел",
  "table.position": "Должность",
  "table.education": "Образование",
  "table.employee": "Сотрудник",
  "table.domain": "Домен",
  "table.startDate": "Дата начала",
  "table.endDate": "Дата окончания",
  "table.usersNotFound": "Пользователи не найдены",
  "table.languagesNotFound": "Языки не найдены",
  "table.departmentsNotFound": "Отделы не найдены",
  "table.positionsNotFound": "Должности не найдены",
  "table.skillsNotFound": "Навыки не найдены",
  "departments.createButton": "+ СОЗДАТЬ ОТДЕЛ",
  "departments.dialog.createTitle": "Создать отдел",
  "departments.dialog.editTitle": "Редактировать отдел",
  "departments.dialog.deleteTitle": "Удалить отдел",
  "departments.deleteConfirm": "Вы уверены, что хотите удалить отдел",
  "positions.createButton": "+ СОЗДАТЬ ДОЛЖНОСТЬ",
  "positions.dialog.createTitle": "Создать должность",
  "positions.dialog.editTitle": "Редактировать должность",
  "positions.dialog.deleteTitle": "Удалить должность",
  "positions.deleteConfirm": "Вы уверены, что хотите удалить должность",
  "languages.createButton": "+ СОЗДАТЬ ЯЗЫК",
  "languages.dialog.createTitle": "Создать язык",
  "languages.dialog.editTitle": "Обновить язык",
  "languages.dialog.deleteTitle": "Удалить язык",
  "languages.field.nativeName": "Родное название",
  "languages.field.iso2": "Код ISO2",
  "languages.deleteConfirm": "Вы уверены, что хотите удалить язык",
  "languages.validation.enterName": "Введите название языка.",
  "languages.validation.enterNativeName": "Введите родное название.",
  "languages.validation.enterIso2": "Введите код ISO2.",
  "languages.validation.iso2Length":
    "Код ISO2 должен содержать ровно 2 символа.",
  "skills.createButton": "+ СОЗДАТЬ НАВЫК",
  "skills.dialog.createTitle": "Создать навык",
  "skills.dialog.editTitle": "Редактировать навык",
  "skills.dialog.deleteTitle": "Удалить навык",
  "skills.field.skillName": "Название навыка",
  "skills.field.category": "Категория",
  "skills.table.category": "Категория",
  "skills.validation.enterName": "Введите название навыка.",
  "skills.validation.selectCategory": "Выберите категорию.",
  "skills.deleteConfirm": "Вы уверены, что хотите удалить навык",
  "skills.dialog.addTitle": "Добавить навык",
  "skills.dialog.updateTitle": "Обновить навык",
  "skills.manager.addButton": "+ Добавить навык",
  "sidebar.expand": "Развернуть боковую панель",
  "sidebar.collapse": "Свернуть боковую панель",
  "sidebar.mainNavigation": "Основная навигация",
  "users.createButton": "+ Создать пользователя",
  "users.viewProfile": "Открыть профиль",
  "users.dialog.createTitle": "Добавить пользователя",
  "users.dialog.editTitle": "Редактировать пользователя",
  "users.dialog.deleteTitle": "Удалить пользователя",
  "users.deleteConfirm": "Вы уверены, что хотите удалить пользователя",
  "users.role.employee": "Сотрудник",
  "users.role.admin": "Админ",
  "cvs.createButton": "+ СОЗДАТЬ РЕЗЮМЕ",
  "cvs.dialog.createTitle": "Создать резюме",
  "cvs.dialog.deleteTitle": "Удалить резюме",
  "cvs.deleteConfirm": "Вы уверены, что хотите удалить резюме",
  "cvs.empty": "Резюме не найдены.",
  "cvs.searchEmpty": "По вашему запросу резюме не найдены.",
  "cvs.field.name": "Имя",
  "cvs.field.description": "Описание",
  "cvs.field.responsibilitiesPlaceholder": "Одна обязанность на строку",
  "cvs.details.readOnlyNotice":
    "Вы можете просматривать это резюме, но не редактировать его.",
  "cvs.exportPdf": "Экспорт PDF",
  "cvs.projects.addTitle": "Добавить проект",
  "cvs.projects.updateTitle": "Обновить проект",
  "cvs.projects.addButton": "+ ДОБАВИТЬ ПРОЕКТ",
  "cvs.projects.removeTitle": "Удалить проект",
  "cvs.projects.removeConfirm": "Вы уверены, что хотите удалить проект",
  "cvs.projects.empty": "Проекты не найдены.",
  "cvs.preview.education": "Образование",
  "cvs.preview.languageProficiency": "Владение языками",
  "cvs.preview.domains": "Домены",
  "cvs.preview.professionalSkills": "Профессиональные навыки",
  "cvs.preview.skills": "Навыки",
  "cvs.preview.experienceYears": "Опыт (лет)",
  "cvs.preview.lastUsed": "Последнее использование",
  "cvs.preview.projects": "Проекты",
  "cvs.preview.projectRoles": "Роли в проекте",
  "cvs.preview.period": "Период",
  "cvs.preview.responsibilities": "Обязанности",
  "profile.tab.profile": "Профиль",
  "profile.tab.skills": "Навыки",
  "profile.tab.languages": "Языки",
  "profile.birthDate": "Дата рождения",
  "profile.notFound": "Пользователь не найден.",
  "profile.loadError": "Не удалось загрузить данные пользователя.",
  "profile.avatar.sizeError": "Фото не должно превышать 500 КБ.",
  "profile.avatar.typeError": "Используйте изображение PNG, JPG или GIF.",
  "profile.avatar.uploadHint": "png, jpg или gif не более 0.5 МБ",
  "profile.avatar.discardSelection": "Отменить выбранное фото",
  "profile.avatar.removePhoto": "Удалить фото профиля",
  "profile.memberSinceFallback": "Участник",
  "userSkills.addButton": "Добавить навык",
  "userSkills.removeButton": "Удалить навыки",
  "userSkills.empty": "Навыки ещё не добавлены.",
  "userSkills.manager.delete": "Удалить",
  "userSkills.dialog.addTitle": "Добавить навык",
  "userSkills.dialog.updateTitle": "Обновить навык",
  "userSkills.dialog.deleteTitle": "Удалить навыки",
  "userSkills.dialog.noSkillsAvailable":
    "Нет доступных навыков для добавления или список пуст.",
  "userSkills.bulkRemove.one":
    "Удалить этот навык из профиля? Это действие нельзя отменить.",
  "userSkills.bulkRemove.manyPrefix": "Удалить",
  "userSkills.bulkRemove.manySuffix":
    "навыков из профиля? Это действие нельзя отменить.",
  "userLanguages.addButton": "Добавить язык",
  "userLanguages.removeButton": "Удалить языки",
  "userLanguages.empty": "Языки ещё не указаны.",
  "userLanguages.dialog.addTitle": "Добавить язык",
  "userLanguages.dialog.updateTitle": "Обновить язык",
  "userLanguages.dialog.deleteTitle": "Удалить языки",
  "userLanguages.loadingLanguages": "Загрузка языков…",
  "userLanguages.dialog.noLanguagesAvailable":
    "Нет доступных языков для добавления или список пуст.",
  "userLanguages.bulkRemove.one":
    "Удалить этот язык из профиля? Это действие нельзя отменить.",
  "userLanguages.bulkRemove.manyPrefix": "Удалить",
  "userLanguages.bulkRemove.manySuffix":
    "языков из профиля? Это действие нельзя отменить.",
  "projects.createButton": "+ СОЗДАТЬ ПРОЕКТ",
  "projects.dialog.createTitle": "Создать проект",
  "projects.dialog.editTitle": "Обновить проект",
  "projects.dialog.deleteTitle": "Удалить проект",
  "projects.deleteConfirm": "Вы уверены, что хотите удалить проект",
  "projects.empty": "Проекты не найдены.",
  "projects.field.name": "Название",
  "projects.field.description": "Описание",
  "projects.field.ongoingHint": "Оставьте пустым, если проект продолжается",
  "projects.field.responsibilitiesPlaceholder": "Одна обязанность на строку",
  "projects.field.addSkill": "Добавить навык",
  "projects.ai.title": "AI-помощник проекта",
  "projects.ai.description":
    "Опишите проект в нескольких словах — AI предложит название, домен, описание и стек из каталога навыков.",
  "projects.ai.briefLabel": "Идея проекта",
  "projects.ai.briefPlaceholder":
    "например: мобильный e-commerce для fashion с React и Node.js",
  "projects.ai.generate": "Предложить поля",
  "projects.ai.generating": "Генерация…",
  "projects.ai.source.ai": "Применено предложение ИИ",
  "projects.ai.source.rules": "Применено предложение на основе правил",
  "projects.ai.footnote":
    "Проверьте и отредактируйте поля перед созданием. Стек берётся только из Skills.",
  "projects.candidates.menuItem": "Подобрать кандидатов",
  "projects.candidates.title": "Подбор кандидатов на проект",
  "projects.candidates.description":
    "Подбор по навыкам, доступности, возрасту, образованию и отделу. Для топ-кандидатов — краткое AI-резюме.",
  "projects.candidates.minAge": "Мин. возраст",
  "projects.candidates.maxAge": "Макс. возраст",
  "projects.candidates.educationHint": "Ключевые слова об образовании",
  "projects.candidates.educationHintPlaceholder":
    "например: информатика, MBA, бакалавр",
  "projects.candidates.department": "Отдел",
  "projects.candidates.position": "Должность",
  "projects.candidates.anyDepartment": "Любой отдел",
  "projects.candidates.anyPosition": "Любая должность",
  "projects.candidates.projectLabel": "Проект",
  "projects.candidates.availabilityFilter": "Доступность",
  "projects.candidates.search": "Найти кандидатов",
  "projects.candidates.searching": "Подбор…",
  "projects.candidates.empty": "Нет кандидатов по этим фильтрам.",
  "projects.candidates.matchScore": "Совпадение",
  "projects.candidates.age": "Возраст",
  "projects.candidates.education": "Образование",
  "projects.candidates.matchedSkills": "Совпавшие навыки",
  "projects.candidates.missingSkills": "Не хватает навыков",
  "projects.candidates.source.ai": "AI-резюме",
  "projects.candidates.source.rules": "Резюме по правилам",
};

const de: Messages = {
  "settings.title": "Einstellungen",
  "settings.appearance": "Erscheinungsbild",
  "settings.appearance.system": "Geräteeinstellungen",
  "settings.appearance.dark": "Dunkel",
  "settings.appearance.light": "Hell",
  "settings.language": "Sprache",
  "settings.language.en": "Englisch",
  "settings.language.ru": "Russisch",
  "settings.language.de": "Deutsch",
  "nav.profile": "Profil",
  "nav.settings": "Einstellungen",
  "nav.logout": "Abmelden",
  "nav.employees": "Mitarbeiter",
  "nav.skills": "Fähigkeiten",
  "nav.languages": "Sprachen",
  "nav.cvs": "Lebensläufe",
  "nav.projects": "Projekte",
  "nav.departments": "Abteilungen",
  "nav.positions": "Positionen",
  "nav.availability": "Team-Verfügbarkeit",
  "availability.filter.all": "Alle Status",
  "availability.status.office": "Im Büro",
  "availability.status.remote": "Remote",
  "availability.status.sickDay": "Krank (Tag)",
  "availability.status.sickList": "Krankgeschrieben",
  "availability.status.vacation": "Im Urlaub",
  "availability.status.unknown": "Unbekannt",
  "availability.table.employee": "Mitarbeiter",
  "availability.table.status": "Status",
  "availability.table.updated": "Aktualisiert",
  "availability.table.updatedBy": "Quelle",
  "availability.empty": "Keine Teammitglieder für die gewählten Filter.",
  "availability.liveIndicator": "Live · Aktualisierung alle 30 s",
  "availability.myStatus": "Ihr Status",
  "availability.updatedAt": "Aktualisiert",
  "availability.noStatusYet":
    "Setzen Sie Ihren Status in Telegram, damit er hier erscheint.",
  "availability.updatedBy.bot": "Telegram-Bot",
  "availability.updatedBy.user": "Web-App",
  "availability.updatedBy.admin": "Admin",
  "assistant.title": "HR-Assistent",
  "assistant.description":
    "Fragen Sie nach der Verfügbarkeit Ihres Teams. Antworten basieren auf Live-Daten dieser Seite.",
  "assistant.placeholder": "Wer arbeitet heute remote?",
  "assistant.send": "Fragen",
  "assistant.sending": "Denke nach…",
  "assistant.empty":
    "Stellen Sie eine Frage oder wählen Sie einen Vorschlag oben.",
  "assistant.source.ai": "KI-Antwort",
  "assistant.source.rules": "Regelbasierte Antwort",
  "assistant.suggestion.office": "Wer ist im Büro?",
  "assistant.suggestion.remote": "Wer arbeitet remote?",
  "assistant.suggestion.vacation": "Wer ist im Urlaub?",
  "telegram.title": "Telegram-Statusbot",
  "telegram.description":
    "Verbinden Sie Telegram, um tägliche Statusabfragen zu erhalten und Ihre Verfügbarkeit zu bestätigen.",
  "telegram.usernameLabel": "Telegram-Benutzername",
  "telegram.usernamePlaceholder": "ihr_benutzername",
  "telegram.connect": "Telegram verbinden",
  "telegram.disconnect": "Trennen",
  "telegram.connectedAs": "Verbunden als",
  "telegram.pending":
    "In Telegram abschließen — Bot-Chat öffnen und Start tippen. Diese Seite aktualisiert sich automatisch.",
  "telegram.refreshStatus": "Erneut prüfen",
  "telegram.help":
    "Tägliche Abfragen um 9:00 MSK. Bestätigen Sie vor 12:00, sonst endet Ihre Sitzung.",
  "telegram.validation.username":
    "Geben Sie einen gültigen Telegram-Benutzernamen ein (5–32 Zeichen: Buchstaben, Zahlen, _).",
  "auth.sessionExpired.telegram":
    "Ihre Sitzung wurde beendet, weil der heutige Arbeitsstatus in Telegram nicht bestätigt wurde. Bitte melden Sie sich erneut an.",
  "auth.signIn": "Anmelden",
  "auth.signUp": "Registrieren",
  "auth.welcomeBack": "Willkommen zurück. Melden Sie sich an, um fortzufahren",
  "auth.createAccountSubtitle": "Erstellen Sie ein Konto, um fortzufahren",
  "auth.emailPlaceholder": "E-Mail",
  "auth.passwordPlaceholder": "Passwort",
  "auth.confirmPasswordPlaceholder": "Passwort bestätigen",
  "auth.newPasswordPlaceholder": "Neues Passwort",
  "auth.confirmNewPasswordPlaceholder": "Neues Passwort bestätigen",
  "auth.forgotPassword": "Passwort vergessen",
  "auth.forgotPasswordTitle": "Passwort vergessen",
  "auth.forgotPasswordSubtitle":
    "Wir senden Ihnen eine E-Mail mit weiteren Anweisungen",
  "auth.sent": "Gesendet",
  "auth.forgotPasswordSuccess":
    "Falls ein Konto mit dieser E-Mail existiert, wurden Anweisungen zum Zurücksetzen gesendet.",
  "auth.resetPassword": "Passwort zurücksetzen",
  "auth.resetPasswordSubtitle":
    "Geben Sie Ihr neues Passwort ein, um fortzufahren",
  "auth.resetPasswordSubmit": "Passwort zurücksetzen",
  "auth.resetPasswordSuccess":
    "Passwort erfolgreich zurückgesetzt. Sie können sich jetzt mit Ihrem neuen Passwort anmelden.",
  "auth.tokenRequired": "Token ist erforderlich",
  "auth.iHaveAccount": "Ich habe bereits ein Konto",
  "auth.showPassword": "Passwort anzeigen",
  "auth.hidePassword": "Passwort ausblenden",
  "auth.validation.invalidEmail": "Bitte geben Sie eine gültige E-Mail ein.",
  "auth.validation.passwordMin":
    "Das Passwort muss mindestens 8 Zeichen lang sein.",
  "auth.validation.passwordMax": "Das Passwort ist zu lang.",
  "auth.validation.passwordsMismatch": "Passwörter stimmen nicht überein.",
  "common.cancel": "Abbrechen",
  "common.create": "Erstellen",
  "common.update": "Aktualisieren",
  "common.delete": "Löschen",
  "common.edit": "Bearbeiten",
  "common.confirm": "Bestätigen",
  "common.search": "Suchen",
  "common.name": "Name",
  "common.close": "Schließen",
  "common.closeDialog": "Dialog schließen",
  "common.loading": "Wird geladen…",
  "common.add": "Hinzufügen",
  "common.password": "Passwort",
  "common.confirmPassword": "Passwort bestätigen",
  "common.role": "Rolle",
  "common.unassigned": "Nicht zugewiesen",
  "common.description": "Beschreibung",
  "common.environment": "Umgebung",
  "common.responsibilities": "Verantwortlichkeiten",
  "common.proficiency": "Kenntnisstand",
  "common.language": "Sprache",
  "common.skill": "Fähigkeit",
  "common.skillMastery": "Fähigkeitsniveau",
  "common.noMasteryLevels": "Keine Niveaus",
  "common.noCategories": "Keine Kategorien",
  "common.selectSkill": "Fähigkeit wählen",
  "common.selectLanguage": "Sprache wählen",
  "common.noResults": "Keine Ergebnisse gefunden",
  "common.project": "Projekt",
  "common.tillNow": "Bis heute",
  "common.validation.enterName": "Geben Sie einen Namen ein.",
  "table.firstName": "Vorname",
  "table.lastName": "Nachname",
  "table.email": "E-Mail",
  "table.department": "Abteilung",
  "table.position": "Position",
  "table.education": "Ausbildung",
  "table.employee": "Mitarbeiter",
  "table.domain": "Domäne",
  "table.startDate": "Startdatum",
  "table.endDate": "Enddatum",
  "table.usersNotFound": "Keine Benutzer gefunden",
  "table.languagesNotFound": "Keine Sprachen gefunden",
  "table.departmentsNotFound": "Keine Abteilungen gefunden",
  "table.positionsNotFound": "Keine Positionen gefunden",
  "table.skillsNotFound": "Keine Fähigkeiten gefunden",
  "departments.createButton": "+ ABTEILUNG ERSTELLEN",
  "departments.dialog.createTitle": "Abteilung erstellen",
  "departments.dialog.editTitle": "Abteilung bearbeiten",
  "departments.dialog.deleteTitle": "Abteilung löschen",
  "departments.deleteConfirm":
    "Sind Sie sicher, dass Sie die Abteilung löschen möchten",
  "positions.createButton": "+ POSITION ERSTELLEN",
  "positions.dialog.createTitle": "Position erstellen",
  "positions.dialog.editTitle": "Position bearbeiten",
  "positions.dialog.deleteTitle": "Position löschen",
  "positions.deleteConfirm":
    "Sind Sie sicher, dass Sie die Position löschen möchten",
  "languages.createButton": "+ SPRACHE ERSTELLEN",
  "languages.dialog.createTitle": "Sprache erstellen",
  "languages.dialog.editTitle": "Sprache aktualisieren",
  "languages.dialog.deleteTitle": "Sprache löschen",
  "languages.field.nativeName": "Eigenname",
  "languages.field.iso2": "ISO2-Code",
  "languages.deleteConfirm":
    "Sind Sie sicher, dass Sie die Sprache löschen möchten",
  "languages.validation.enterName": "Geben Sie einen Sprachnamen ein.",
  "languages.validation.enterNativeName": "Geben Sie den Eigenname ein.",
  "languages.validation.enterIso2": "Geben Sie den ISO2-Code ein.",
  "languages.validation.iso2Length":
    "Der ISO2-Code muss genau 2 Zeichen lang sein.",
  "skills.createButton": "+ FÄHIGKEIT ERSTELLEN",
  "skills.dialog.createTitle": "Fähigkeit erstellen",
  "skills.dialog.editTitle": "Fähigkeit bearbeiten",
  "skills.dialog.deleteTitle": "Fähigkeit löschen",
  "skills.field.skillName": "Fähigkeitsname",
  "skills.field.category": "Kategorie",
  "skills.table.category": "Kategorie",
  "skills.validation.enterName": "Geben Sie einen Fähigkeitsnamen ein.",
  "skills.validation.selectCategory": "Wählen Sie eine Kategorie.",
  "skills.deleteConfirm":
    "Sind Sie sicher, dass Sie die Fähigkeit löschen möchten",
  "skills.dialog.addTitle": "Fähigkeit hinzufügen",
  "skills.dialog.updateTitle": "Fähigkeit aktualisieren",
  "skills.manager.addButton": "+ Fähigkeit hinzufügen",
  "sidebar.expand": "Seitenleiste erweitern",
  "sidebar.collapse": "Seitenleiste einklappen",
  "sidebar.mainNavigation": "Hauptnavigation",
  "users.createButton": "+ Benutzer erstellen",
  "users.viewProfile": "Profil anzeigen",
  "users.dialog.createTitle": "Benutzer hinzufügen",
  "users.dialog.editTitle": "Benutzer bearbeiten",
  "users.dialog.deleteTitle": "Benutzer löschen",
  "users.deleteConfirm":
    "Sind Sie sicher, dass Sie den Benutzer löschen möchten",
  "users.role.employee": "Mitarbeiter",
  "users.role.admin": "Admin",
  "cvs.createButton": "+ LEBENSLAUF ERSTELLEN",
  "cvs.dialog.createTitle": "Lebenslauf erstellen",
  "cvs.dialog.deleteTitle": "Lebenslauf löschen",
  "cvs.deleteConfirm":
    "Sind Sie sicher, dass Sie den Lebenslauf löschen möchten",
  "cvs.empty": "Keine Lebensläufe gefunden.",
  "cvs.searchEmpty": "Keine Lebensläufe entsprechen Ihrer Suche.",
  "cvs.field.name": "Name",
  "cvs.field.description": "Beschreibung",
  "cvs.field.responsibilitiesPlaceholder": "Eine Verantwortung pro Zeile",
  "cvs.details.readOnlyNotice":
    "Sie können diesen Lebenslauf ansehen, aber nicht bearbeiten.",
  "cvs.exportPdf": "PDF exportieren",
  "cvs.projects.addTitle": "Projekt hinzufügen",
  "cvs.projects.updateTitle": "Projekt aktualisieren",
  "cvs.projects.addButton": "+ PROJEKT HINZUFÜGEN",
  "cvs.projects.removeTitle": "Projekt entfernen",
  "cvs.projects.removeConfirm":
    "Sind Sie sicher, dass Sie das Projekt entfernen möchten",
  "cvs.projects.empty": "Keine Projekte gefunden.",
  "cvs.preview.education": "Ausbildung",
  "cvs.preview.languageProficiency": "Sprachkenntnisse",
  "cvs.preview.domains": "Domänen",
  "cvs.preview.professionalSkills": "Berufliche Fähigkeiten",
  "cvs.preview.skills": "Fähigkeiten",
  "cvs.preview.experienceYears": "Erfahrung in Jahren",
  "cvs.preview.lastUsed": "Zuletzt verwendet",
  "cvs.preview.projects": "Projekte",
  "cvs.preview.projectRoles": "Projektrollen",
  "cvs.preview.period": "Zeitraum",
  "cvs.preview.responsibilities": "Verantwortlichkeiten",
  "profile.tab.profile": "Profil",
  "profile.tab.skills": "Fähigkeiten",
  "profile.tab.languages": "Sprachen",
  "profile.birthDate": "Geburtsdatum",
  "profile.notFound": "Benutzer nicht gefunden.",
  "profile.loadError": "Benutzerdaten konnten nicht geladen werden.",
  "profile.avatar.sizeError": "Foto darf 500 KB nicht überschreiten.",
  "profile.avatar.typeError": "Bitte PNG-, JPG- oder GIF-Bild verwenden.",
  "profile.avatar.uploadHint": "png, jpg oder gif, maximal 0,5 MB",
  "profile.avatar.discardSelection": "Ausgewähltes Foto verwerfen",
  "profile.avatar.removePhoto": "Profilfoto entfernen",
  "profile.memberSinceFallback": "Mitglied",
  "userSkills.addButton": "Fähigkeit hinzufügen",
  "userSkills.removeButton": "Fähigkeiten entfernen",
  "userSkills.empty": "Noch keine Fähigkeiten hinzugefügt.",
  "userSkills.manager.delete": "Löschen",
  "userSkills.dialog.addTitle": "Fähigkeit hinzufügen",
  "userSkills.dialog.updateTitle": "Fähigkeit aktualisieren",
  "userSkills.dialog.deleteTitle": "Fähigkeiten löschen",
  "userSkills.dialog.noSkillsAvailable":
    "Keine Fähigkeiten zum Hinzufügen verfügbar oder Liste ist leer.",
  "userSkills.bulkRemove.one":
    "Diese Fähigkeit aus dem Profil entfernen? Dies kann nicht rückgängig gemacht werden.",
  "userSkills.bulkRemove.manyPrefix": "Entfernen",
  "userSkills.bulkRemove.manySuffix":
    "Fähigkeiten aus dem Profil? Dies kann nicht rückgängig gemacht werden.",
  "userLanguages.addButton": "Sprache hinzufügen",
  "userLanguages.removeButton": "Sprachen entfernen",
  "userLanguages.empty": "Noch keine Sprachen angegeben.",
  "userLanguages.dialog.addTitle": "Sprache hinzufügen",
  "userLanguages.dialog.updateTitle": "Sprache aktualisieren",
  "userLanguages.dialog.deleteTitle": "Sprachen löschen",
  "userLanguages.loadingLanguages": "Sprachen werden geladen…",
  "userLanguages.dialog.noLanguagesAvailable":
    "Keine Sprachen zum Hinzufügen verfügbar oder Liste ist leer.",
  "userLanguages.bulkRemove.one":
    "Diese Sprache aus dem Profil entfernen? Dies kann nicht rückgängig gemacht werden.",
  "userLanguages.bulkRemove.manyPrefix": "Entfernen",
  "userLanguages.bulkRemove.manySuffix":
    "Sprachen aus dem Profil? Dies kann nicht rückgängig gemacht werden.",
  "projects.createButton": "+ PROJEKT ERSTELLEN",
  "projects.dialog.createTitle": "Projekt erstellen",
  "projects.dialog.editTitle": "Projekt aktualisieren",
  "projects.dialog.deleteTitle": "Projekt löschen",
  "projects.deleteConfirm":
    "Sind Sie sicher, dass Sie das Projekt löschen möchten",
  "projects.empty": "Keine Projekte gefunden.",
  "projects.field.name": "Name",
  "projects.field.description": "Beschreibung",
  "projects.field.ongoingHint": "Leer lassen, wenn das Projekt noch läuft",
  "projects.field.responsibilitiesPlaceholder": "Eine Verantwortung pro Zeile",
  "projects.field.addSkill": "Fähigkeit hinzufügen",
  "projects.ai.title": "KI-Projektassistent",
  "projects.ai.description":
    "Beschreiben Sie das Projekt in wenigen Worten — die KI schlägt Name, Domäne, Beschreibung und Stack aus dem Skills-Katalog vor.",
  "projects.ai.briefLabel": "Projektidee",
  "projects.ai.briefPlaceholder":
    "z. B. Mobile E-Commerce-App für Fashion mit React und Node.js",
  "projects.ai.generate": "Felder vorschlagen",
  "projects.ai.generating": "Wird generiert…",
  "projects.ai.source.ai": "KI-Vorschlag übernommen",
  "projects.ai.source.rules": "Regelbasierter Vorschlag übernommen",
  "projects.ai.footnote":
    "Prüfen Sie alle Felder vor dem Erstellen. Stack-Einträge müssen in Skills existieren.",
  "projects.candidates.menuItem": "Kandidaten finden",
  "projects.candidates.title": "Projektkandidaten finden",
  "projects.candidates.description":
    "Abgleich nach Skills, Verfügbarkeit, Alter, Ausbildung und Abteilung. Optionale KI-Zusammenfassungen für Top-Treffer.",
  "projects.candidates.minAge": "Mindestalter",
  "projects.candidates.maxAge": "Höchstalter",
  "projects.candidates.educationHint": "Ausbildungs-Stichwörter",
  "projects.candidates.educationHintPlaceholder":
    "z. B. Informatik, MBA, Bachelor",
  "projects.candidates.department": "Abteilung",
  "projects.candidates.position": "Position",
  "projects.candidates.anyDepartment": "Beliebige Abteilung",
  "projects.candidates.anyPosition": "Beliebige Position",
  "projects.candidates.projectLabel": "Projekt",
  "projects.candidates.availabilityFilter": "Verfügbarkeit",
  "projects.candidates.search": "Kandidaten finden",
  "projects.candidates.searching": "Abgleich…",
  "projects.candidates.empty": "Keine Kandidaten für diese Filter.",
  "projects.candidates.matchScore": "Match",
  "projects.candidates.age": "Alter",
  "projects.candidates.education": "Ausbildung",
  "projects.candidates.matchedSkills": "Passende Skills",
  "projects.candidates.missingSkills": "Fehlende Skills",
  "projects.candidates.source.ai": "KI-Zusammenfassung",
  "projects.candidates.source.rules": "Regelbasierte Zusammenfassung",
};

const catalogs: Record<Locale, Messages> = { en, ru, de };

export function translate(locale: Locale, key: MessageKey): string {
  return catalogs[locale][key] ?? catalogs.en[key] ?? key;
}

export type TranslateFn = (key: MessageKey) => string;
