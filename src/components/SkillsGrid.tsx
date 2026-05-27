import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cv';
import SectionTitle from './SectionTitle';

function SkillGroupColumn({
  groups,
  t,
}: {
  groups: (typeof cvData.skillGroups)[number][];
  t: (key: string) => string;
}) {
  return (
    <div className="space-y-3">
      {groups.map((group) => (
        <div key={group.titleKey}>
          <h4 className="text-[9px] font-semibold text-cv-text-muted mb-1.5 uppercase tracking-wider">{t(group.titleKey)}</h4>
          <div className="flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <span key={item} className="cv-badge cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SkillsGrid() {
  const { t } = useTranslation();
  const midpoint = Math.ceil(cvData.skillGroups.length / 2);
  const leftGroups = cvData.skillGroups.slice(0, midpoint);
  const rightGroups = cvData.skillGroups.slice(midpoint);

  return (
    <section>
      <SectionTitle title={t('section.skills')} />
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 items-start">
        <SkillGroupColumn groups={leftGroups} t={t} />
        <SkillGroupColumn groups={rightGroups} t={t} />
      </div>
    </section>
  );
}
