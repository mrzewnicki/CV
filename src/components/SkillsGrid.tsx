import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';
import SectionTitle from './SectionTitle';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

function SkillGroupColumn({
  groups,
  t,
}: {
  groups: (typeof cvData.skillGroups)[number][];
  t: (key: string) => string;
}) {
  return (
    <div className="space-y-5">
      {groups.map((group) => (
        <div key={group.titleKey}>
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
            {t(group.titleKey)}
          </h4>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {group.items.map((item) => (
              <motion.span
                key={item}
                variants={tagVariants}
                className="text-[11px] px-2.5 py-1 rounded-md bg-cv-surface/60 text-gray-300 border border-cv-accent/15 cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 items-start">
        <SkillGroupColumn groups={leftGroups} t={t} />
        <SkillGroupColumn groups={rightGroups} t={t} />
      </div>
    </section>
  );
}
