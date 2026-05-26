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
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        {cvData.projects.map((p) => (
          <div
            key={p.nameKey}
            className="bg-[#0f3460]/40 border border-[#e94560]/20 rounded-xl p-5 hover:border-[#e94560]/50 transition-colors"
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <h3 className="font-bold text-gray-100 text-sm">{t(p.nameKey)}</h3>
              <span className="text-xs text-[#e94560] font-mono bg-[#e94560]/10 px-2 py-0.5 rounded flex-shrink-0">
                {p.period}
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-3">{t(p.descriptionKey)}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {p.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2 py-0.5 rounded bg-[#533483]/40 text-purple-300 border border-purple-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#e94560] hover:text-[#ff6b81] transition-colors"
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
