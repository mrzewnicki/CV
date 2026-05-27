import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';
import { cvData } from '../data/cv';
import SectionTitle from './SectionTitle';
import SidebarSectionTitle from './SidebarSectionTitle';

type Props = {
  variant?: 'main' | 'sidebar';
};

export default function Education({ variant = 'main' }: Props) {
  const { t } = useTranslation();

  if (variant === 'sidebar') {
    return (
      <section>
        <SidebarSectionTitle title={t('section.education')} />
        <ul className="space-y-2">
          {cvData.education.map((edu) => (
            <li key={edu.schoolKey} className="flex items-start gap-1.5">
              <span className="mt-px text-cv-text-muted flex-shrink-0">
                <GraduationCap size={10} />
              </span>
              <div className="min-w-0">
                <p className="text-[9px] font-medium text-cv-text-primary leading-snug">{t(edu.schoolKey)}</p>
                <p className="text-[8px] text-cv-text-muted mt-0.5">{edu.period}</p>
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
      <div className="space-y-2">
        {cvData.education.map((edu) => (
          <div key={edu.schoolKey} className="flex items-start gap-2.5">
            <div className="mt-px flex-shrink-0 w-6 h-6 rounded bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
              <GraduationCap size={12} className="text-cv-text-muted" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-cv-text-primary">{t(edu.schoolKey)}</p>
              <p className="text-[9px] text-cv-text-muted mt-0.5">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
