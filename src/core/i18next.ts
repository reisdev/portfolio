import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend, { HttpBackendOptions } from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false
  }
}

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init<HttpBackendOptions>({
        backend: {
            allowMultiLoading: true
        },
        load: "currentOnly",
        ns: [ "common" ],
        fallbackLng: "en",
        supportedLngs: ["pt-BR", "en"],
        returnNull: false,
        debug: process.env.NODE_ENV === "development"
    });

export default i18n;