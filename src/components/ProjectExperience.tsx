import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { cvData } from '../data/cv';
import SectionTitle from './SectionTitle';
import { layoutClass, useCvLayout } from '../context/CvLayoutContext';
import ScrollReveal from './ScrollReveal';

export default function ProjectExperience() {
  const { t } = useTranslation();
  const { isA4 } = useCvLayout();

  return (
    <section>
      <ScrollReveal>
        <SectionTitle title={t('section.projects')} />
      </ScrollReveal>
      <div className={layoutClass(isA4, 'space-y-3', 'space-y-2')}>
        {cvData.projects.map((p, index) => (
          <ScrollReveal
            key={p.nameKey}
            delay={0.08 + index * 0.1}
            className={layoutClass(isA4, 'cv-card cv-project-card p-4', 'cv-card cv-project-card p-2.5')}
          >
            <div
              className={layoutClass(
                isA4,
                'flex flex-wrap items-start justify-between gap-2 mb-1',
                'flex flex-wrap items-start justify-between gap-1.5 mb-0.5',
              )}
            >
              <h3
                className={layoutClass(
                  isA4,
                  'text-base font-semibold text-cv-text-primary',
                  'text-[11px] font-semibold text-cv-text-primary',
                )}
              >
                {t(p.nameKey)}
              </h3>
              <span className="cv-date-badge">{p.period}</span>
            </div>
            <p
              className={layoutClass(
                isA4,
                'text-sm leading-relaxed text-cv-text-secondary mb-1.5',
                'text-[10px] leading-relaxed text-cv-text-secondary mb-1',
              )}
            >
              {t(p.descriptionKey)}
            </p>
            <p
              className={layoutClass(
                isA4,
                'text-[0.75rem] text-cv-text-muted',
                'text-[9px] text-cv-text-muted',
              )}
            >
              {p.techStack.join(' · ')}
            </p>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={layoutClass(
                  isA4,
                  'inline-flex items-center gap-1 mt-2 text-xs text-cv-accent hover:text-cv-accent-hover transition-colors duration-200',
                  'inline-flex items-center gap-1 mt-1.5 text-[9px] text-cv-accent hover:text-cv-accent-hover transition-colors duration-200',
                )}
              >
                <ExternalLink size={isA4 ? 10 : 12} />
                {p.link}
              </a>
            )}
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
