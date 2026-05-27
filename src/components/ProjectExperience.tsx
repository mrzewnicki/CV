import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { cvData } from '../data/cv';
import SectionTitle from './SectionTitle';

export default function ProjectExperience() {
  const { t } = useTranslation();

  return (
    <section>
      <SectionTitle title={t('section.projects')} />
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.2 }}
      >
        {cvData.projects.map((p) => (
          <div key={p.nameKey} className="cv-card cv-project-card p-4">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3 className="text-base font-semibold text-cv-text-primary">{t(p.nameKey)}</h3>
              <span className="cv-date-badge">{p.period}</span>
            </div>
            <p className="text-sm leading-relaxed text-cv-text-secondary mb-1.5">
              {t(p.descriptionKey)}
            </p>
            <p className="text-[0.75rem] text-cv-text-muted">{p.techStack.join(' · ')}</p>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-xs text-cv-accent hover:text-cv-accent-hover transition-colors duration-200"
              >
                <ExternalLink size={12} />
                {p.link}
              </a>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
