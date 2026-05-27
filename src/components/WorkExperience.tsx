import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cv';
import SectionTitle from './SectionTitle';
import { layoutClass, useCvLayout } from '../context/CvLayoutContext';

export default function WorkExperience() {
  const { t } = useTranslation();
  const { isA4 } = useCvLayout();

  return (
    <section>
      <SectionTitle title={t('section.work')} />
      <div className={layoutClass(isA4, 'space-y-4', 'space-y-3')}>
        {cvData.workExperience.map((exp) => (
          <div key={exp.company} className="cv-experience-item">
            <h3
              className={layoutClass(
                isA4,
                'text-base font-semibold text-cv-text-primary mb-2',
                'text-[12px] font-semibold text-cv-text-primary mb-1.5',
              )}
            >
              {exp.company}
            </h3>
            <div
              className={layoutClass(
                isA4,
                'space-y-3 pl-4 border-l border-cv-timeline-line',
                'space-y-2 pl-3 border-l border-cv-timeline-line',
              )}
            >
              {exp.roles.map((role) => (
                <div key={role.titleKey} className="relative">
                  <span
                    className={layoutClass(
                      isA4,
                      'absolute -left-[1.3rem] top-1.5 w-2.5 h-2.5 rounded-full bg-cv-accent border-2 border-cv-main',
                      'absolute -left-[1.1rem] top-1 w-2 h-2 rounded-full bg-cv-accent border-2 border-cv-main',
                    )}
                  />
                  <div
                    className={layoutClass(
                      isA4,
                      'flex flex-wrap items-baseline justify-between gap-2 mb-1',
                      'flex flex-wrap items-baseline justify-between gap-1.5 mb-0.5',
                    )}
                  >
                    <span
                      className={layoutClass(
                        isA4,
                        'text-base font-medium text-cv-text-primary',
                        'text-[11px] font-medium text-cv-text-primary',
                      )}
                    >
                      {t(role.titleKey)}
                    </span>
                    <span className="cv-date-badge">{role.period}</span>
                  </div>
                  {role.bullets.length > 0 && (
                    <ul className={layoutClass(isA4, 'mt-1.5 space-y-1.5', 'mt-1 space-y-1')}>
                      {role.bullets.map((b) => (
                        <li
                          key={b}
                          className={layoutClass(
                            isA4,
                            'flex items-start gap-2 text-sm leading-relaxed text-cv-text-secondary',
                            'flex items-start gap-1.5 text-[10px] leading-relaxed text-cv-text-secondary',
                          )}
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
          </div>
        ))}
      </div>
    </section>
  );
}
