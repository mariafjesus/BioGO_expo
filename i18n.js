import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LanguageDetector from 'i18next-browser-languagedetector'; // Optional for detecting user's language preference

// Import your translations
import de from "./locales/de.json";
import en from "./locales/en.json";
import es from './locales/es.json';
import fr from './locales/fr.json';
import pt from './locales/pt.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en', // Default language
    lng: 'en', // Initial language
    resources: {
      de: {
        translation: de,
      },
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
      fr: {
        translation: fr,
      },
      pt: {
        translation: pt,
      },
    },
    interpolation: {
      escapeValue: false, // React already escapes strings by default
    },
    saveMissing: true, // Save missing translations for development purposes
    backend: {
      loadPath: './locales/{{lng}}.json',
    },
    detection: {
      order: ['asyncStorage', 'navigator'], // Define how language should be detected
      caches: ['asyncStorage'], // Where to store user-selected language
    },
  });

export default i18n;
