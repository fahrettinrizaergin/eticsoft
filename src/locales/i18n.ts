import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/translation.json';
import tr from './tr/translation.json';
i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
                translation: en
            },
            tr: {
                translation: tr
            }
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;