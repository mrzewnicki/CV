import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';
import SectionTitle from './SectionTitle';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WorkExperience() {
  const { t } = useTranslation();

  return (
    <section>
      <SectionTitle title={t('section.work')} />
      <motion.div
        className="space-y-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {cvData.workExperience.map((exp) => (
          <motion.div key={exp.company} variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-3 pl-4">{exp.company}</h3>
            <div className="space-y-4 pl-4 border-l-2 border-cv-accent/30">
              {exp.roles.map((role) => (
                <div key={role.titleKey} className="relative">
                  <span className="absolute -left-[1.35rem] top-1.5 w-2.5 h-2.5 rounded-full bg-cv-accent border-2 border-cv-main" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <span className="font-semibold text-gray-100 text-sm">{t(role.titleKey)}</span>
                    <span className="text-xs text-cv-accent font-mono bg-cv-accent/10 px-2 py-0.5 rounded">
                      {role.period}
                    </span>
                  </div>
                  {role.bullets.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {role.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-gray-400">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-cv-accent/60 flex-shrink-0" />
                          {t(b)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
