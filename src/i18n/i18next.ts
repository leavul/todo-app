import { useSettingsStore } from '@/store/use-settings-store';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from 'react-native';
import ar from "./locales/ar";
import en from "./locales/en";

const { language } = useSettingsStore.getState();
I18nManager.allowRTL(language === 'ar');
I18nManager.forceRTL(language === 'ar');

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en,
            ar
        },
        lng: language,
        fallbackLng: "en",
        supportedLngs: ['en', 'ar'],

        interpolation: {
            escapeValue: false
        }
    });
