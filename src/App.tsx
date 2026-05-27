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
    <div className="min-h-screen bg-cv-page flex items-start justify-center py-8 px-4">
      {!languagePreset && <LanguageSwitcher />}
      <PDFExportButton />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden border border-cv-accent/20"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left sidebar */}
          <div className="md:w-[25%] w-full">
            <Sidebar />
          </div>

          {/* Right main content */}
          <div className="md:w-[75%] w-full bg-cv-main flex flex-col">
            <Header />
            <div className="flex flex-col gap-10 px-10 pt-4 pb-10">
              <WorkExperience />
              <ProjectExperience />
              <SkillsGrid />

              {/* GDPR */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[10px] text-gray-600 border-t border-cv-accent/15 pt-4 leading-relaxed"
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
