import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';
import { yearsOfExperience } from '../utils/experienceYears';

export default function Header() {
  const { t } = useTranslation();
  const experienceYears = useMemo(
    () => yearsOfExperience(cvData.workExperience.flatMap((exp) => exp.roles)),
    [],
  );
  return (
    <header className="border-b border-cv-border bg-cv-main px-8 py-5">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <p className="text-lg font-medium text-cv-text-secondary mb-0.5">{cvData.name.first}</p>
        <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.04em] leading-none text-cv-text-primary">
          {cvData.name.last}
        </h1>
        <p className="mt-2 text-[1.2rem] font-medium leading-snug text-cv-text-secondary">
          {t('header.role')}
        </p>
        <p className="mt-1 text-sm text-cv-text-muted">
          {t('header.meta', { years: experienceYears })}
        </p>
      </motion.div>
    </header>
  );
}
