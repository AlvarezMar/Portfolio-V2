import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import menusAndHomeEn from "../locales/en/menusAndHome.json";
import menusAndHomeEs from "../locales/es/menusAndHome.json";

import experienceEn from "../locales/en/experience.json";
import experienceEs from "../locales/es/experience.json";

import aboutEn from "../locales/en/about.json";
import aboutEs from "../locales/es/about.json";

import contactEn from "../locales/en/contact.json";
import contactEs from "../locales/es/contact.json";

import projectsEn from "../locales/en/projects.json";
import projectsEs from "../locales/es/projects.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      menusAndHome: menusAndHomeEn,
      experience: experienceEn,
      about: aboutEn,
      contact: contactEn,
      projects: projectsEn,
    },
  },
  es: {
    translation: {
      menusAndHome: menusAndHomeEs,
      experience: experienceEs,
      about: aboutEs,
      contact: contactEs,
      projects: projectsEs,
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
