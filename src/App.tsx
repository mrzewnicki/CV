import { useTranslation } from 'react-i18next';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import ProjectExperience from './components/ProjectExperience';
import SkillsGrid from './components/SkillsGrid';
import CvToolbar from './components/CvToolbar';
import CvPage from './components/CvPage';
import { useCvLayout } from './context/CvLayoutContext';

type AppProps = {
  languagePreset?: boolean;
};

export default function App({ languagePreset = false }: AppProps) {
  const { t } = useTranslation();
  const { isA4 } = useCvLayout();

  // A4 mode: separate page cards
  if (isA4) {
    return (
      <div
        data-cv-layout="a4"
        className="min-h-screen bg-cv-page flex flex-col items-center gap-8 py-10"
      >
        <CvToolbar showLanguageSwitcher={!languagePreset} />

        {/* Page 1 */}
        <CvPage pageNumber={1} sidebar={<Sidebar />}>
          <Header />
          <div className="flex flex-col gap-5 px-6 pt-3 pb-6 flex-1">
            <WorkExperience />
            <ProjectExperience />
          </div>
        </CvPage>

        {/* Page 2 */}
        <CvPage pageNumber={2} sidebar={<div className="h-full" />}>
          <div className="flex flex-col gap-5 px-6 pt-6 pb-6 flex-1">
            <SkillsGrid />
            <p className="text-[9px] text-cv-text-muted border-t border-cv-border pt-3 leading-relaxed mt-auto">
              {t('gdpr')}
            </p>
          </div>
        </CvPage>
      </div>
    );
  }

  // Web mode: single continuous layout
  return (
    <div
      data-cv-layout="web"
      className="min-h-screen bg-cv-page flex items-start justify-center py-6 px-4"
    >
      <CvToolbar showLanguageSwitcher={!languagePreset} />

      <div className="cv-page w-full max-w-5xl overflow-hidden rounded-2xl border border-cv-border shadow-[0_4px_12px_rgba(0,0,0,0.18)] bg-cv-sidebar">
        <div className="cv-page-row flex flex-col md:flex-row">
          <div className="cv-sidebar-col md:w-[25%] w-full bg-cv-sidebar">
            <Sidebar />
          </div>
          <div className="cv-main-col md:w-[75%] w-full bg-cv-main flex flex-col min-w-0">
            <Header />
            <div className="flex flex-col gap-8 px-8 pt-4 pb-8">
              <WorkExperience />
              <ProjectExperience />
              <SkillsGrid />
              <p className="text-[10px] text-cv-text-muted border-t border-cv-border pt-4 leading-relaxed">
                {t('gdpr')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
