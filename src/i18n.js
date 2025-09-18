import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  fr: {
    translation: {
      // Header
      menu: "Menu",
      home: "Accueil",
      courses: "Cours",
      instructors: "Instructeurs",
      contact: "Contact",

      // Hero
      "hero.title": "DRENA DANCE LUXEMBOURG — KIZOMBA, SEMBA, AFRO",
      "hero.subtitle": "Découvrez l'art de la danse africaine au Luxembourg",
      "hero.description":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "hero.button": "Découvrir Drena Dance",

      // Footer
      "footer.rights": "Tous droits réservés",
    },
  },
  en: {
    translation: {
      // Header
      menu: "Menu",
      home: "Home",
      courses: "Courses",
      instructors: "Instructors",
      contact: "Contact",

      // Hero
      "hero.title": "DRENA DANCE LUXEMBOURG — KIZOMBA, SEMBA, AFRO",
      "hero.subtitle": "Discover the art of African dance in Luxembourg",
      "hero.description":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "hero.button": "Discover Drena Dance",

      // Footer
      "footer.rights": "All rights reserved",
    },
  },
  pt: {
    translation: {
      // Header
      menu: "Menu",
      home: "Início",
      courses: "Cursos",
      instructors: "Instrutores",
      contact: "Contacto",

      // Hero
      "hero.title": "DRENA DANCE LUXEMBOURG — KIZOMBA, SEMBA, AFRO",
      "hero.subtitle": "Descubra a arte da dança africana no Luxemburgo",
      "hero.description":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "hero.button": "Descobrir Drena Dance",

      // Footer
      "footer.rights": "Todos os direitos reservados",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    debug: false,

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
