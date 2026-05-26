import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { cvData } from '../data/cv';
import SectionTitle from './SectionTitle';

export default function Education() {
  const { t } = useTranslation();

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
            <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-[#e94560]/20 flex items-center justify-center">
              <GraduationCap size={16} className="text-[#e94560]" />
            </div>
            <div>
              <p className="text-sm text-gray-200 font-medium">{t(edu.schoolKey)}</p>
              <p className="text-xs text-[#e94560] font-mono mt-0.5">{edu.period}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
