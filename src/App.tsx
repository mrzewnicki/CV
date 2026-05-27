import { useTranslation } from 'react-i18next';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import ProjectExperience from './components/ProjectExperience';
import SkillsGrid from './components/SkillsGrid';
import CvToolbar from './components/CvToolbar';
import { layoutClass, useCvLayout } from './context/CvLayoutContext';

type AppProps = {
  languagePreset?: boolean;
};

export default function App({ languagePreset = false }: AppProps) {
  const { t } = useTranslation();
  const { isA4 } = useCvLayout();

  return (
    <div
      className={layoutClass(
        isA4,
        'min-h-screen bg-cv-page flex items-start justify-center py-6 px-4',
        'min-h-screen bg-cv-page flex items-start justify-center py-10',
      )}
    >
      <CvToolbar showLanguageSwitcher={!languagePreset} />

      <div
        data-cv-layout={isA4 ? 'a4' : 'web'}
        className={layoutClass(
          isA4,
          'cv-shell w-full max-w-5xl overflow-hidden rounded-2xl border border-cv-border shadow-[0_4px_12px_rgba(0,0,0,0.18)]',
          'cv-shell w-[794px] flex-shrink-0 overflow-hidden border border-cv-border shadow-[0_8px_32px_rgba(0,0,0,0.5)]',
        )}
      >
        <div
          className={layoutClass(
            isA4,
            'cv-page-row flex flex-col md:flex-row',
            'cv-page-row grid grid-cols-[25%_1fr] items-start',
          )}
        >
          <div
            className={layoutClass(
              isA4,
              'cv-sidebar-col md:w-[25%] w-full',
              'cv-sidebar-col min-w-0',
            )}
          >
            <Sidebar />
          </div>

          <div
            className={layoutClass(
              isA4,
              'cv-main-col md:w-[75%] w-full bg-cv-main flex flex-col min-w-0',
              'cv-main-col bg-cv-main flex flex-col min-w-0',
            )}
          >
            <Header />
            <div
              className={layoutClass(
                isA4,
                'flex flex-col gap-8 px-8 pt-4 pb-8',
                'flex flex-col gap-5 px-6 pt-3 pb-6',
              )}
            >
              <WorkExperience />
              <ProjectExperience />
              <SkillsGrid />

              <p
                className={layoutClass(
                  isA4,
                  'text-[10px] text-cv-text-muted border-t border-cv-border pt-4 leading-relaxed',
                  'text-[9px] text-cv-text-muted border-t border-cv-border pt-3 leading-relaxed',
                )}
              >
                {t('gdpr')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
