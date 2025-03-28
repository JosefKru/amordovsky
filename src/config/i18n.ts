import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          welcome:
            "Senior product designer helping company communicate with their audience in a meaningful way",
          welcomeMobile:
            "Senior product designer helping company communicate with their audience in a meaningful way",
          projects: "Projects",
          about: "About",
          contact: "Contact",
          phone: "Phone",
          infoSectionTitle: "Focal point",
          infoSectionContent:
            "In my work, I focus on the goals<br/>and objectives of the business,<br/>the target audience, research<br/>and custdev, resource and<br/>technical constraints",
        },
      },
      ru: {
        translation: {
          welcome:
            "Ведущий продуктовый дизайнер, создающий эффективное взаимодействие компаний с аудиторией",
          welcomeMobile:
            "Ведущий продуктовый дизайнер, создающий эффективное взаимодействие компаний с аудиторией",
          projects: "Проекты",
          about: "Обо мне",
          contact: "Контакты",
          phone: "Телефон",
          infoSectionTitle: "Фокус",
          infoSectionContent:
            "В своей работе я уделяю особое внимание целям и задачам<br/>бизнеса, анализу целевой аудитории, исследованиям и custdev. Учитываю технические ограничения и другие ресурсы",
        },
      },
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
