import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Loader2 } from 'lucide-react';
import { useCvLayout } from '../context/CvLayoutContext';
import { waitForPaint } from '../utils/waitForPaint';

const PDF_API = import.meta.env.VITE_PDF_API_URL ?? 'http://localhost:3001';

const STATIC_PDF: Record<'en' | 'pl', string> = {
  en: `${import.meta.env.BASE_URL}pdf/Mateusz_Rzewnicki_CV_EN.pdf`,
  pl: `${import.meta.env.BASE_URL}pdf/Mateusz_Rzewnicki_CV_PL.pdf`,
};

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
    <span className="inline-flex h-4 w-6 flex-shrink-0 overflow-hidden rounded-sm border border-white/25 shadow-sm">
      <Flag className="h-full w-full" />
    </span>
  );
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

const toolbarBtnClass =
  'flex min-w-0 flex-1 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap border-0 bg-cv-sidebar px-2.5 py-1.5 text-sm font-medium text-cv-text-secondary transition-colors duration-200 hover:bg-cv-surface hover:text-cv-text-primary disabled:cursor-not-allowed disabled:opacity-60';

const PDF_ICON_SIZE = 18;

type Props = {
  showLanguageSwitcher?: boolean;
};

export default function CvToolbar({ showLanguageSwitcher = true }: Props) {
  const { t, i18n } = useTranslation();
  const { setExportPreview } = useCvLayout();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEnglish = i18n.language.startsWith('en');
  const targetLang = isEnglish ? 'pl' : 'en';

  const toggleLanguage = () => {
    void i18n.changeLanguage(targetLang);
    document.documentElement.lang = targetLang;
  };

  const handleExport = async () => {
    setLoading(true);
    setError(null);
    try {
      const lang = i18n.language.startsWith('pl') ? 'pl' : 'en';
      const filename = `Mateusz_Rzewnicki_CV_${lang.toUpperCase()}.pdf`;

      if (import.meta.env.DEV) {
        setExportPreview(true);
        await waitForPaint();

        try {
          const res = await fetch(`${PDF_API}/pdf?lang=${lang}`);
          if (!res.ok) throw new Error(`Server responded ${res.status}`);
          const blob = await res.blob();
          downloadBlob(blob, filename);
        } finally {
          setExportPreview(false);
        }
      } else {
        const res = await fetch(STATIC_PDF[lang]);
        if (!res.ok) throw new Error(`PDF not found (${res.status})`);
        const blob = await res.blob();
        downloadBlob(blob, filename);
      }
    } catch (err) {
      setExportPreview(false);
      setError(
        import.meta.env.DEV
          ? 'PDF server unavailable. Run: npm run server'
          : 'Could not download CV PDF.',
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cv-print-hide fixed top-4 right-4 z-50 flex flex-col items-end gap-2">
      {error && (
        <p className="max-w-[260px] rounded-md border border-red-900/60 bg-[#1a0f0f] px-3 py-1.5 text-left text-[11px] leading-snug text-red-400">
          {error}
        </p>
      )}
      <div
        className="inline-flex overflow-hidden rounded-[10px] border border-cv-border shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
        role="group"
        aria-label="CV actions"
      >
        {showLanguageSwitcher && (
          <>
            <button
              type="button"
              onClick={toggleLanguage}
              className={toolbarBtnClass}
              aria-label={targetLang === 'pl' ? 'Switch to Polish' : 'Switch to English'}
            >
              <FlagIcon lang={targetLang} />
              {t('btn.lang')}
            </button>
            <div className="w-px shrink-0 self-stretch bg-cv-border" role="separator" aria-hidden />
          </>
        )}
        <button
          type="button"
          onClick={handleExport}
          disabled={loading}
          className={toolbarBtnClass}
          aria-label={t('btn.pdf')}
        >
          {loading ? (
            <Loader2 size={PDF_ICON_SIZE} className="animate-spin" />
          ) : (
            <Download size={PDF_ICON_SIZE} />
          )}
          {t('btn.pdf')}
        </button>
      </div>
    </div>
  );
}
