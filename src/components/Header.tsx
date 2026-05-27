import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cv';
import { yearsOfExperience } from '../utils/experienceYears';
import { layoutClass, useCvLayout } from '../context/CvLayoutContext';

export default function Header() {
  const { t } = useTranslation();
  const { isA4 } = useCvLayout();
  const experienceYears = useMemo(
    () => yearsOfExperience(cvData.workExperience.flatMap((exp) => exp.roles)),
    [],
  );
  return (
    <header
      className={layoutClass(
        isA4,
        'border-b border-cv-border bg-cv-main px-8 py-5',
        'border-b border-cv-border bg-cv-main px-6 py-4',
      )}
    >
      <p
        className={layoutClass(
          isA4,
          'text-lg font-medium text-cv-text-secondary mb-0.5',
          'text-[11px] font-medium text-cv-text-secondary mb-0.5',
        )}
      >
        {cvData.name.first}
      </p>
      <h1
        className={layoutClass(
          isA4,
          'text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.04em] leading-none text-cv-text-primary',
          'text-[30px] font-bold tracking-[-0.02em] leading-none text-cv-text-primary',
        )}
      >
        {cvData.name.last}
      </h1>
      <p
        className={layoutClass(
          isA4,
          'mt-2 text-[1.2rem] font-medium leading-snug text-cv-text-secondary',
          'mt-2 text-[10px] font-semibold leading-snug text-cv-text-secondary',
        )}
      >
        {t('header.role')}
      </p>
      <p
        className={layoutClass(
          isA4,
          'mt-1 text-sm text-cv-text-muted',
          'mt-1 text-[9px] text-cv-text-muted',
        )}
      >
        {t('header.meta', { years: experienceYears })}
      </p>
    </header>
  );
}
