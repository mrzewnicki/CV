import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { CvLang } from './i18n/locale';
import App from './App';

type Props = {
  lang: CvLang;
};

export default function LocaleRoute({ lang }: Props) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!i18n.language.startsWith(lang)) {
      void i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
  }, [lang, i18n]);

  return <App languagePreset />;
}
