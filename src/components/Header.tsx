import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cv';
import { yearsOfExperience } from '../utils/experienceYears';

export default function Header() {
  const { t } = useTranslation();
  const experienceYears = useMemo(
    () => yearsOfExperience(cvData.workExperience.flatMap((exp) => exp.roles)),
    [],
  );
  return (
    <header className="border-b border-cv-border bg-cv-main px-6 py-4">
      <p className="text-[11px] font-medium text-cv-text-secondary mb-0.5">{cvData.name.first}</p>
      <h1 className="text-[30px] font-bold tracking-[-0.02em] leading-none text-cv-text-primary">
        {cvData.name.last}
      </h1>
      <p className="mt-2 text-[10px] font-semibold leading-snug text-cv-text-secondary">
        {t('header.role')}
      </p>
      <p className="mt-1 text-[9px] text-cv-text-muted">
        {t('header.meta', { years: experienceYears })}
      </p>
    </header>
  );
}
