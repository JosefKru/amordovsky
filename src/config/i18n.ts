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
          aboutSectionHello: "Hello",
          aboutSectionHelloContent:
            "My name is Andrei Mordovski.<br />I am a senior product designer<br />with over 10 years of experience<br />in digital product development.<br />I went from a freelancer to<br />the lead of the design team.<br />I have collaborated with<br />companies such as Leroy Merlin,<br />Sberbank, Yakitoria and other ",
          aboutSectionExperience: "Experience",
          aboutSectionExperienceContent:
            "I have extensive experience<br />in creating design systems,<br />fintech, e-commerce products,<br />BI, b2b, Saas and others",
          infoSectionTitle: "Focal point",
          infoSectionContent:
            "In my work, I focus on the goals<br/>and objectives of the business,<br/>the target audience, research<br/>and custdev, resource and<br/>technical constraints",
          aboutSectionNumbers: "In numbers",
          aboutSectionNumbersImplemented: "implemented projects",
          aboutSectionNumbersCommercial: "сommercial experience",
          aboutSectionNumbersLeading: "leading designers",
          goToProjects: "Go to projects",
          contactMe: "Contact me",
          email: "E-mail",
          telegram: "Write to Telegram",
          tg: "Telegram",
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
          aboutSectionHello: "Привет",
          aboutSectionHelloContent:
            "Меня зовут Мордовской Андрей.<br />Я старший продуктовый дизайнер<br />с более чем 12-летним опытом работы в разработке цифровых продуктов. За это время я<br />прошел путь от фрилансера<br />до лида команды дизайна. Сотрудничал с такими<br />компаниями как Leroy Merlin, Сбербанк, Якитория и другими",
          aboutSectionExperience: "Опыт",
          aboutSectionExperienceContent:
            "У меня большой опыт в создании дизайн-систем, разработке продуктов для e-commerce,<br />fintech, BI, b2b, Saas и других",
          infoSectionTitle: "Фокус",
          infoSectionContent:
            "В своей работе я уделяю особое внимание целям и задачам<br/>бизнеса, анализу целевой аудитории, исследованиям и custdev. Учитываю технические ограничения и другие ресурсы",
          aboutSectionNumbers: "В цифрах",
          aboutSectionNumbersImplemented: "реализованных проектов",
          aboutSectionNumbersCommercial: "коммерческого опыта",
          aboutSectionNumbersLeading: "руководство дизайнерами",
          goToProjects: "К проектам",
          contactMe: "Связаться",
          email: "Почта",
          telegram: "Написать в телеграм",
          tg: "Телеграм",
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
