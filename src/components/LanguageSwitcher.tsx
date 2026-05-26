import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en');
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full text-sm font-semibold tracking-wider bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg"
      aria-label="Switch language"
    >
      {t('btn.lang')}
    </button>
  );
}
