import { useTranslation } from 'react-i18next';
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
    <div className="min-h-screen bg-[#0b0f18] flex items-start justify-center py-10">
      {!languagePreset && <LanguageSwitcher />}
      <PDFExportButton />

      <div className="cv-shell w-[794px] flex-shrink-0 overflow-hidden border border-cv-border shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <div className="flex">
          <div className="w-[25%]">
            <Sidebar />
          </div>

          <div className="w-[75%] bg-cv-main flex flex-col">
            <Header />
            <div className="flex flex-col gap-5 px-6 pt-3 pb-6">
              <WorkExperience />
              <ProjectExperience />
              <SkillsGrid />

              <p className="text-[9px] text-cv-text-muted border-t border-cv-border pt-3 leading-relaxed">
                {t('gdpr')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
