import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cv';
import SectionTitle from './SectionTitle';
import { layoutClass, useCvLayout } from '../context/CvLayoutContext';
import ScrollReveal from './ScrollReveal';

function SkillGroupColumn({
  groups,
  t,
  isA4,
  delayOffset = 0,
}: {
  groups: (typeof cvData.skillGroups)[number][];
  t: (key: string) => string;
  isA4: boolean;
  delayOffset?: number;
}) {
  return (
    <div className={layoutClass(isA4, 'space-y-4', 'space-y-3')}>
      {groups.map((group, index) => (
        <ScrollReveal
          key={group.titleKey}
          className="cv-skill-group"
          delay={0.08 + (delayOffset + index) * 0.08}
        >
          <h4
            className={layoutClass(
              isA4,
              'text-sm font-medium text-cv-text-muted mb-2',
              'text-[9px] font-semibold text-cv-text-muted mb-1.5 uppercase tracking-wider',
            )}
          >
            {t(group.titleKey)}
          </h4>
          <div className={layoutClass(isA4, 'flex flex-wrap gap-2', 'flex flex-wrap gap-1.5')}>
            {group.items.map((item) => (
              <span key={item} className="cv-badge cursor-default">
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

export default function SkillsGrid() {
  const { t } = useTranslation();
  const { isA4 } = useCvLayout();
  const midpoint = Math.ceil(cvData.skillGroups.length / 2);
  const leftGroups = cvData.skillGroups.slice(0, midpoint);
  const rightGroups = cvData.skillGroups.slice(midpoint);

  return (
    <section>
      <ScrollReveal>
        <SectionTitle title={t('section.skills')} />
      </ScrollReveal>
      <div
        className={layoutClass(
          isA4,
          'grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 items-start',
          'grid grid-cols-2 gap-x-6 gap-y-3 items-start',
        )}
      >
        <SkillGroupColumn groups={leftGroups} t={t} isA4={isA4} />
        <SkillGroupColumn groups={rightGroups} t={t} isA4={isA4} delayOffset={leftGroups.length} />
      </div>
    </section>
  );
}
