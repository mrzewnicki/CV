import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function FlagPL({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 14" aria-hidden>
      <rect width="20" height="7" fill="#fff" />
      <rect y="7" width="20" height="7" fill="#DC143C" />
    </svg>
  );
}

function FlagGB({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 30" aria-hidden>
      <clipPath id="gb-a">
        <path d="M0,0v30h60V0z" />
      </clipPath>
      <g clipPath="url(#gb-a)">
        <path d="M0,0v30h60V0z" fill="#012169" />
        <path d="M0,0 60,30M60,0 0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 60,30M60,0 0,30" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0v30M0,15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0v30M0,15h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function FlagIcon({ lang }: { lang: 'pl' | 'en' }) {
  const Flag = lang === 'pl' ? FlagPL : FlagGB;
  return (
    <span className="inline-flex w-6 h-4 rounded-sm overflow-hidden border border-white/25 flex-shrink-0 shadow-sm">
      <Flag className="w-full h-full" />
    </span>
  );
}

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const isEnglish = i18n.language.startsWith('en');
  const targetLang = isEnglish ? 'pl' : 'en';

  const toggle = () => {
    navigate(`/${targetLang}`);
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wider bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg"
      aria-label={targetLang === 'pl' ? 'Switch to Polish' : 'Switch to English'}
    >
      <FlagIcon lang={targetLang} />
      {t('btn.lang')}
    </button>
  );
}
