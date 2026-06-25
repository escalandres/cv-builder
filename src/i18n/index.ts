import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en';
import es from './locales/es';
import pt from './locales/pt';
import de from './locales/de';
import nl from './locales/nl';
import fr from './locales/fr';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English'    },
  { code: 'es', label: 'Español'    },
  { code: 'pt', label: 'Português'  },
  { code: 'de', label: 'Deutsch'    },
  { code: 'nl', label: 'Nederlands' },
  { code: 'fr', label: 'Français'   },
] as const;

export type LangCode = typeof SUPPORTED_LANGUAGES[number]['code'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      pt: { translation: pt },
      de: { translation: de },
      nl: { translation: nl },
      fr: { translation: fr },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'cvbuilder.lang',
      caches: ['localStorage'],
    },
  });

export default i18n;