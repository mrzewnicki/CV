import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import ProjectExperience from './components/ProjectExperience';
import SkillsGrid from './components/SkillsGrid';
import LanguageSwitcher from './components/LanguageSwitcher';
import PDFExportButton from './components/PDFExportButton';

type AppProps = {
  languagePreset?: boolean;
};

export default function App({ languagePreset = false }: AppProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-cv-page flex items-start justify-center py-6 px-4">
      {!languagePreset && <LanguageSwitcher />}
      <PDFExportButton />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="cv-shell w-full max-w-5xl overflow-hidden rounded-2xl border border-cv-border shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[25%] w-full">
            <Sidebar />
          </div>

          <div className="md:w-[75%] w-full bg-cv-main flex flex-col">
            <Header />
            <div className="flex flex-col gap-8 px-8 pt-4 pb-8">
              <WorkExperience />
              <ProjectExperience />
              <SkillsGrid />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                className="text-[10px] text-cv-text-muted border-t border-cv-border pt-4 leading-relaxed"
              >
                {t('gdpr')}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
