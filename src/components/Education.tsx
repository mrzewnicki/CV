import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { cvData } from '../data/cv';
import SectionTitle from './SectionTitle';
import SidebarSectionTitle from './SidebarSectionTitle';

type Props = {
  variant?: 'main' | 'sidebar';
};

export default function Education({ variant = 'main' }: Props) {
  const { t } = useTranslation();

  if (variant === 'sidebar') {
    return (
      <motion.section
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.05 }}
      >
        <SidebarSectionTitle title={t('section.education')} />
        <ul className="space-y-2.5">
          {cvData.education.map((edu) => (
            <li key={edu.schoolKey} className="flex items-start gap-2">
              <span className="mt-0.5 text-cv-text-muted flex-shrink-0">
                <GraduationCap size={14} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium text-cv-text-primary leading-snug">{t(edu.schoolKey)}</p>
                <p className="text-[10px] text-cv-text-muted mt-0.5">{edu.period}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.section>
    );
  }

  return (
    <section>
      <SectionTitle title={t('section.education')} />
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.2 }}
      >
        {cvData.education.map((edu) => (
          <div key={edu.schoolKey} className="flex items-start gap-3">
            <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
              <GraduationCap size={16} className="text-cv-text-muted" />
            </div>
            <div>
              <p className="text-sm font-medium text-cv-text-primary">{t(edu.schoolKey)}</p>
              <p className="text-xs text-cv-text-muted mt-0.5">{edu.period}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
