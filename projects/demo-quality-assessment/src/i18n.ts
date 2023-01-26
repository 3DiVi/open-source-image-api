import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales";

const options = {
  lng: "en",
  interpolation: {
    escapeValue: false, // not needed for react
  },
  resources: {
    en: {
      common: en.common,
      components: en.components,
      pages: en.pages,
    },
  },
  fallbackLng: "en",
  ns: ["common", "components", "pages", "shared"],
  defaultNS: "common",
  initImmediate: false,
  fallbackNS: "shared",
};

i18n.use(initReactI18next).init(options);

export default i18n;
