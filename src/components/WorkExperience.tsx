import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';
import SectionTitle from './SectionTitle';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export default function WorkExperience() {
  const { t } = useTranslation();

  return (
    <section>
      <SectionTitle title={t('section.work')} />
      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {cvData.workExperience.map((exp) => (
          <motion.div key={exp.company} variants={itemVariants} className="cv-experience-item">
            <h3 className="text-base font-semibold text-cv-text-primary mb-2">{exp.company}</h3>
            <div className="space-y-3 pl-4 border-l border-cv-timeline-line">
              {exp.roles.map((role) => (
                <div key={role.titleKey} className="relative">
                  <span className="absolute -left-[1.3rem] top-1.5 w-2.5 h-2.5 rounded-full bg-cv-accent border-2 border-cv-main" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <span className="text-base font-medium text-cv-text-primary">{t(role.titleKey)}</span>
                    <span className="cv-date-badge">{role.period}</span>
                  </div>
                  {role.bullets.length > 0 && (
                    <ul className="mt-1.5 space-y-1.5">
                      {role.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm leading-relaxed text-cv-text-secondary"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-cv-text-muted flex-shrink-0" />
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
