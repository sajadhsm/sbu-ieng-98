import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './languages/en.json';
import fa from './languages/fa.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    resources: {
      en,
      fa
    }
  });

export default i18n;