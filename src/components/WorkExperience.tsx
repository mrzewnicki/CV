import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cv';
import SectionTitle from './SectionTitle';

export default function WorkExperience() {
  const { t } = useTranslation();

  return (
    <section>
      <SectionTitle title={t('section.work')} />
      <div className="space-y-3">
        {cvData.workExperience.map((exp) => (
          <div key={exp.company} className="cv-experience-item">
            <h3 className="text-[12px] font-semibold text-cv-text-primary mb-1.5">{exp.company}</h3>
            <div className="space-y-2 pl-3 border-l border-cv-timeline-line">
              {exp.roles.map((role) => (
                <div key={role.titleKey} className="relative">
                  <span className="absolute -left-[1.1rem] top-1 w-2 h-2 rounded-full bg-cv-accent border-2 border-cv-main" />
                  <div className="flex flex-wrap items-baseline justify-between gap-1.5 mb-0.5">
                    <span className="text-[11px] font-medium text-cv-text-primary">{t(role.titleKey)}</span>
                    <span className="cv-date-badge">{role.period}</span>
                  </div>
                  {role.bullets.length > 0 && (
                    <ul className="mt-1 space-y-1">
                      {role.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-1.5 text-[10px] leading-relaxed text-cv-text-secondary"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-cv-text-muted flex-shrink-0" />
                          {t(b)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
