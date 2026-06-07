import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend, { HttpBackendOptions } from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(Backend)
    .use(initReactI18next)
    .init<HttpBackendOptions>({
        backend: {
            allowMultiLoading: true,
            loadPath: 'assets/locales/{{lng}}/{{ns}}.json' // Backend configuration
        },
        detection: {
            order: ['path', 'localStorage', 'navigator'], // Detection order
            caches: ['localStorage']
        },
        load: "currentOnly",
        ns: [ "common", "career", "components" ],
        supportedLngs: ["pt-BR", "en-US"],
        debug: import.meta.env.NODE_ENV === "development",
    });

export default i18n;