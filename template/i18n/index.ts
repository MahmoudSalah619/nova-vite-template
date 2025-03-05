import DefaultI18n, { LanguageDetectorAsyncModule } from "i18next";
import { initReactI18next } from "react-i18next";
// import "moment/locale/ar";

import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";
// import moment from "moment";
import en from "./en.json";
import ar from "./ar.json";
import dayjs from "dayjs";

export const locales = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

export const DEFAULT_LOCALE = "en";

const defaultLang = "en";

export const currentLanguage = DefaultI18n.language || defaultLang;

const useLanguageStorage: LanguageDetectorAsyncModule = {
  type: "languageDetector",
  async: true,
  detect: (callback) => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      dayjs.locale(lang);
      if (lang === "ar") {
        document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      } else {
        document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
      }
      return callback(lang);
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return new Promise(() => {});
  },
  init: () => null,
  cacheUserLanguage: (language: string) => {
    localStorage.setItem("lang", language);
    if (language === "ar") {
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    } else {
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    }
  },
};

DefaultI18n.use(useLanguageStorage)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLang,
    resources: locales,
    react: {
      useSuspense: false,
    },
  });

const i18n = {
  ...DefaultI18n,
  t: (key: TranslationKeyEnum) => DefaultI18n.t(key),
};

export default i18n;
