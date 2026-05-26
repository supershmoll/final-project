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
  | "common.cancel"
  | "common.create"
  | "common.update"
  | "common.delete"
  | "common.edit"
  | "common.confirm"
  | "common.search"
  | "common.name"
  | "common.close"
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
  | "users.createButton"
  | "users.viewProfile"
  | "users.dialog.editTitle"
  | "users.dialog.deleteTitle"
  | "users.deleteConfirm"
  | "cvs.createButton"
  | "cvs.dialog.deleteTitle"
  | "cvs.deleteConfirm"
  | "cvs.empty"
  | "cvs.searchEmpty"
  | "projects.dialog.deleteTitle"
  | "projects.createButton"
  | "projects.deleteConfirm"
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
  | "projects.candidates.requireAvailable"
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
  "common.cancel": "Cancel",
  "common.create": "Create",
  "common.update": "Update",
  "common.delete": "Delete",
  "common.edit": "Edit",
  "common.confirm": "Confirm",
  "common.search": "Search",
  "common.name": "Name",
  "common.close": "Close",
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
  "users.createButton": "+ Create user",
  "users.viewProfile": "View profile",
  "users.dialog.editTitle": "Edit user",
  "users.dialog.deleteTitle": "Delete user",
  "users.deleteConfirm": "Are you sure you want to delete user",
  "cvs.createButton": "+ CREATE CV",
  "cvs.dialog.deleteTitle": "Delete CV",
  "cvs.deleteConfirm": "Are you sure you want to delete CV",
  "cvs.empty": "No CVs found.",
  "cvs.searchEmpty": "No CVs match your search.",
  "projects.createButton": "+ CREATE PROJECT",
  "projects.dialog.deleteTitle": "Delete project",
  "projects.deleteConfirm": "Are you sure you want to delete project",
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
  "projects.candidates.requireAvailable": "Only office / remote / unknown",
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
  "common.cancel": "Отмена",
  "common.create": "Создать",
  "common.update": "Обновить",
  "common.delete": "Удалить",
  "common.edit": "Редактировать",
  "common.confirm": "Подтвердить",
  "common.search": "Поиск",
  "common.name": "Название",
  "common.close": "Закрыть",
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
  "users.createButton": "+ Создать пользователя",
  "users.viewProfile": "Открыть профиль",
  "users.dialog.editTitle": "Редактировать пользователя",
  "users.dialog.deleteTitle": "Удалить пользователя",
  "users.deleteConfirm": "Вы уверены, что хотите удалить пользователя",
  "cvs.createButton": "+ СОЗДАТЬ РЕЗЮМЕ",
  "cvs.dialog.deleteTitle": "Удалить резюме",
  "cvs.deleteConfirm": "Вы уверены, что хотите удалить резюме",
  "cvs.empty": "Резюме не найдены.",
  "cvs.searchEmpty": "По вашему запросу резюме не найдены.",
  "projects.createButton": "+ СОЗДАТЬ ПРОЕКТ",
  "projects.dialog.deleteTitle": "Удалить проект",
  "projects.deleteConfirm": "Вы уверены, что хотите удалить проект",
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
  "projects.candidates.requireAvailable": "Только офис / удалённо / неизвестно",
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
  "common.cancel": "Abbrechen",
  "common.create": "Erstellen",
  "common.update": "Aktualisieren",
  "common.delete": "Löschen",
  "common.edit": "Bearbeiten",
  "common.confirm": "Bestätigen",
  "common.search": "Suchen",
  "common.name": "Name",
  "common.close": "Schließen",
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
  "users.createButton": "+ Benutzer erstellen",
  "users.viewProfile": "Profil anzeigen",
  "users.dialog.editTitle": "Benutzer bearbeiten",
  "users.dialog.deleteTitle": "Benutzer löschen",
  "users.deleteConfirm":
    "Sind Sie sicher, dass Sie den Benutzer löschen möchten",
  "cvs.createButton": "+ LEBENSLAUF ERSTELLEN",
  "cvs.dialog.deleteTitle": "Lebenslauf löschen",
  "cvs.deleteConfirm":
    "Sind Sie sicher, dass Sie den Lebenslauf löschen möchten",
  "cvs.empty": "Keine Lebensläufe gefunden.",
  "cvs.searchEmpty": "Keine Lebensläufe entsprechen Ihrer Suche.",
  "projects.createButton": "+ PROJEKT ERSTELLEN",
  "projects.dialog.deleteTitle": "Projekt löschen",
  "projects.deleteConfirm":
    "Sind Sie sicher, dass Sie das Projekt löschen möchten",
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
  "projects.candidates.requireAvailable": "Nur Büro / remote / unbekannt",
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
