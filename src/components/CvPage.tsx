import type { ReactNode } from 'react';
import { layoutClass, useCvLayout } from '../context/CvLayoutContext';

type CvPageProps = {
  sidebar?: ReactNode;
  children: ReactNode;
  pageNumber?: number;
};

export default function CvPage({ sidebar, children, pageNumber = 1 }: CvPageProps) {
  const { isA4 } = useCvLayout();
  const hasSidebar = sidebar !== null && sidebar !== undefined;

  return (
    <div
      data-cv-page={pageNumber}
      className={layoutClass(
        isA4,
        'cv-page w-full max-w-5xl overflow-hidden rounded-2xl border border-cv-border shadow-[0_4px_12px_rgba(0,0,0,0.18)] bg-cv-sidebar',
        'cv-page w-[210mm] h-[297mm] flex-shrink-0 overflow-hidden outline outline-1 outline-cv-border shadow-[0_8px_32px_rgba(0,0,0,0.5)] bg-cv-sidebar',
      )}
    >
      <div
        className={layoutClass(
          isA4,
          `cv-page-row flex flex-col ${hasSidebar ? 'md:flex-row' : ''} h-full w-full`,
          'cv-page-row flex flex-row h-full w-full',
        )}
      >
        {hasSidebar && (
          <div
            className={layoutClass(
              isA4,
              'cv-sidebar-col md:w-[25%] w-full bg-cv-sidebar',
              'cv-sidebar-col w-[25%] bg-cv-sidebar h-full',
            )}
          >
            {sidebar}
          </div>
        )}

        <div
          className={layoutClass(
            isA4,
            `cv-main-col ${hasSidebar ? 'md:w-[75%]' : ''} w-full bg-cv-main flex flex-col min-w-0`,
            `cv-main-col ${hasSidebar ? 'w-[75%]' : 'w-full'} bg-cv-main flex flex-col min-w-0 h-full`,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
