import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { cvData } from '../data/cv';
import SectionTitle from './SectionTitle';

type Props = {
  variant?: 'main' | 'sidebar';
};

export default function Education({ variant = 'main' }: Props) {
  const { t } = useTranslation();

  if (variant === 'sidebar') {
    return (
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cv-accent mb-4 border-b border-cv-accent/30 pb-2">
          {t('section.education')}
        </h3>
        <ul className="space-y-3">
          {cvData.education.map((edu) => (
            <li key={edu.schoolKey} className="flex items-start gap-2">
              <span className="mt-0.5 text-cv-accent flex-shrink-0">
                <GraduationCap size={14} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-200 leading-snug">{t(edu.schoolKey)}</p>
                <p className="text-[10px] text-cv-accent font-mono mt-0.5">{edu.period}</p>
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
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        {cvData.education.map((edu) => (
          <div key={edu.schoolKey} className="flex items-start gap-3">
            <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-cv-accent/20 flex items-center justify-center">
              <GraduationCap size={16} className="text-cv-accent" />
            </div>
            <div>
              <p className="text-sm text-gray-200 font-medium">{t(edu.schoolKey)}</p>
              <p className="text-xs text-cv-accent font-mono mt-0.5">{edu.period}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
