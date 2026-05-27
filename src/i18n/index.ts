import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import pl from './pl';
import { parseLangFromPath } from './locale';

i18n.use(initReactI18next).init({
  resources: { en, pl },
  lng: parseLangFromPath(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
