import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Loader2 } from 'lucide-react';

const PDF_API = import.meta.env.VITE_PDF_API_URL ?? 'http://localhost:3001';

const STATIC_PDF: Record<'en' | 'pl', string> = {
  en: `${import.meta.env.BASE_URL}pdf/Mateusz_Rzewnicki_CV_EN.pdf`,
  pl: `${import.meta.env.BASE_URL}pdf/Mateusz_Rzewnicki_CV_PL.pdf`,
};

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function PDFExportButton() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleExport = async () => {
    setLoading(true);
    setError(null);
    try {
      const lang = i18n.language.startsWith('pl') ? 'pl' : 'en';
      const filename = `Mateusz_Rzewnicki_CV_${lang.toUpperCase()}.pdf`;

      if (import.meta.env.DEV) {
        const res = await fetch(`${PDF_API}/pdf?lang=${lang}`);
        if (!res.ok) throw new Error(`Server responded ${res.status}`);
        const blob = await res.blob();
        downloadBlob(blob, filename);
      } else {
        const res = await fetch(STATIC_PDF[lang]);
        if (!res.ok) throw new Error(`PDF not found (${res.status})`);
        const blob = await res.blob();
        downloadBlob(blob, filename);
      }
    } catch (err) {
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
    <div className="cv-print-hide fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {error && (
        <p className="text-[11px] text-red-400 bg-[#1a0f0f] border border-red-900/60 rounded-md px-3 py-1.5 max-w-[220px] text-right leading-snug">
          {error}
        </p>
      )}
      <button
        onClick={handleExport}
        disabled={loading}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cv-accent text-white font-medium text-xs shadow-[0_2px_8px_rgba(0,0,0,0.18)] hover:bg-cv-accent-hover active:scale-[0.98] transition-all duration-200 disabled:opacity-60"
        aria-label={t('btn.pdf')}
      >
        {loading ? (
          <Loader2 size={14} className="animate-spin" />
        ) : (
          <Download size={14} />
        )}
        {t('btn.pdf')}
      </button>
    </div>
  );
}
