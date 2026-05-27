import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import { Download, Loader2 } from 'lucide-react';
import CVDocument from '../pdf/CVDocument';

export default function PDFExportButton() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    setLoading(true);
    try {
      const lang = i18n.language as 'en' | 'pl';
      const doc = <CVDocument t={t} lang={lang} />;
      const blob = await pdf(doc).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Mateusz_Rzewnicki_CV_${lang.toUpperCase()}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={loading}
      className="hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-cv-accent text-white font-semibold text-sm shadow-xl hover:bg-cv-accent-hover active:scale-95 transition-all disabled:opacity-60"
      aria-hidden="true"
    >
      {loading ? (
        <Loader2 size={16} className="animate-spin" />
      ) : (
        <Download size={16} />
      )}
      {t('btn.pdf')}
    </button>
  );
}
