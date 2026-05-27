import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { cvData } from '../data/cv';
import SectionTitle from './SectionTitle';

export default function ProjectExperience() {
  const { t } = useTranslation();

  return (
    <section>
      <SectionTitle title={t('section.projects')} />
      <div className="space-y-2">
        {cvData.projects.map((p) => (
          <div key={p.nameKey} className="cv-card cv-project-card p-2.5">
            <div className="flex flex-wrap items-start justify-between gap-1.5 mb-0.5">
              <h3 className="text-[11px] font-semibold text-cv-text-primary">{t(p.nameKey)}</h3>
              <span className="cv-date-badge">{p.period}</span>
            </div>
            <p className="text-[10px] leading-relaxed text-cv-text-secondary mb-1">
              {t(p.descriptionKey)}
            </p>
            <p className="text-[9px] text-cv-text-muted">{p.techStack.join(' · ')}</p>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-1.5 text-[9px] text-cv-accent hover:text-cv-accent-hover transition-colors duration-200"
              >
                <ExternalLink size={10} />
                {p.link}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
