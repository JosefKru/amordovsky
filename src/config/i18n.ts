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
          welcome: "Senior product designer helping company communicate with their audience in a meaningful way",
          welcomeMobile: "Senior product designer helping company communicate with their audience in a meaningful way",
          projects: "Projects",
          about: "About",
          contact: "Contact",
          phone: "Phone",
          hello1: "My name is Andrei Mordovski. I am a senior product designer with over 10 years of experience in digital product development. I went from a freelancer to the lead of the design team.",
          hello2: "I have collaborated with companies such as Leroy Merlin, Sberbank, Yakitoria and others",
        },
      },
      ru: {
        translation: {
          welcome: "Ведущий продуктовый дизайнер, создающий эффективное взаимодействие компаний с аудиторией",
          welcomeMobile: "Ведущий продуктовый дизайнер, создающий эффективное взаимодействие компаний с аудиторией",
          projects: "Проекты",
          about: "Обо мне",
          contact: "Контакты",
          phone: "Телефон",
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
