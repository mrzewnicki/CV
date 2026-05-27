import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';
import { cvData } from '../data/cv';
import SectionTitle from './SectionTitle';
import SidebarSectionTitle from './SidebarSectionTitle';
import { layoutClass, useCvLayout } from '../context/CvLayoutContext';

type Props = {
  variant?: 'main' | 'sidebar';
};

export default function Education({ variant = 'main' }: Props) {
  const { t } = useTranslation();
  const { isA4 } = useCvLayout();

  if (variant === 'sidebar') {
    return (
      <section>
        <SidebarSectionTitle title={t('section.education')} />
        <ul className={layoutClass(isA4, 'space-y-2.5', 'space-y-2')}>
          {cvData.education.map((edu) => (
            <li
              key={edu.schoolKey}
              className={layoutClass(isA4, 'flex items-start gap-2', 'flex items-start gap-1.5')}
            >
              <span className="mt-0.5 text-cv-text-muted flex-shrink-0">
                <GraduationCap size={isA4 ? 10 : 14} />
              </span>
              <div className="min-w-0">
                <p
                  className={layoutClass(
                    isA4,
                    'text-xs font-medium text-cv-text-primary leading-snug',
                    'text-[9px] font-medium text-cv-text-primary leading-snug',
                  )}
                >
                  {t(edu.schoolKey)}
                </p>
                <p
                  className={layoutClass(
                    isA4,
                    'text-[10px] text-cv-text-muted mt-0.5',
                    'text-[8px] text-cv-text-muted mt-0.5',
                  )}
                >
                  {edu.period}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section>
      <SectionTitle title={t('section.education')} />
      <div className={layoutClass(isA4, 'space-y-3', 'space-y-2')}>
        {cvData.education.map((edu) => (
          <div
            key={edu.schoolKey}
            className={layoutClass(isA4, 'flex items-start gap-3', 'flex items-start gap-2.5')}
          >
            <div
              className={layoutClass(
                isA4,
                'mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center',
                'mt-px flex-shrink-0 w-6 h-6 rounded bg-white/[0.04] border border-white/[0.06] flex items-center justify-center',
              )}
            >
              <GraduationCap size={isA4 ? 12 : 16} className="text-cv-text-muted" />
            </div>
            <div>
              <p
                className={layoutClass(
                  isA4,
                  'text-sm font-medium text-cv-text-primary',
                  'text-[11px] font-medium text-cv-text-primary',
                )}
              >
                {t(edu.schoolKey)}
              </p>
              <p
                className={layoutClass(
                  isA4,
                  'text-xs text-cv-text-muted mt-0.5',
                  'text-[9px] text-cv-text-muted mt-0.5',
                )}
              >
                {edu.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
