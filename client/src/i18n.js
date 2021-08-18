import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend'; // primary use cache
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const backends = [
  HttpApi, // fallback backend
];
if (process.env.NODE_ENV === 'production') {
  backends.unshift(LocalStorageBackend);
}
i18n
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    backend: {
      backends,
      backendOptions: [
        {
          /* options for primary backend */
        },
        {
          /* options for secondary backend */
          loadPath: '/locales/{{lng}}/{{ns}}.json', // http load path for my own fallback
        },
      ],
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
