import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Link, Film, BookOpen, Video, Swords } from 'lucide-react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';

const contactItems = [
  {
    icon: <Phone size={14} />,
    value: cvData.contact.phone,
    href: `tel:${cvData.contact.phone.replace(/\s/g, '')}`,
  },
  {
    icon: <Mail size={14} />,
    value: cvData.contact.email,
    href: `mailto:${cvData.contact.email}`,
  },
  {
    icon: <Link size={14} />,
    value: cvData.contact.linkedinHandle,
    href: cvData.contact.linkedin,
  },
  {
    icon: <Link size={14} />,
    value: cvData.contact.githubHandle,
    href: cvData.contact.github,
  },
  {
    icon: <MapPin size={14} />,
    value: `${cvData.contact.address}, ${cvData.contact.street}`,
    href: undefined,
  },
];

const hobbyIcons: Record<string, React.ReactNode> = {
  'hobby.film': <Film size={14} />,
  'hobby.rpg': <Swords size={14} />,
  'hobby.yt': <Video size={14} />,
  'hobby.books': <BookOpen size={14} />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45 },
  }),
};

export default function Sidebar() {
  const { t } = useTranslation();

  return (
    <aside className="bg-[#1a1a2e] text-gray-300 flex flex-col gap-8 p-8 min-h-full">
      {/* Avatar / Initials */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#e94560] to-[#533483] flex items-center justify-center text-3xl font-bold text-white shadow-xl select-none">
          MR
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500 mt-1">{t('nav.dob')}: {cvData.contact.dob}</p>
        </div>
      </motion.div>

      {/* Contact */}
      <motion.section initial="hidden" animate="visible">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e94560] mb-4 border-b border-[#e94560]/30 pb-2">
          {t('section.contact')}
        </h3>
        <ul className="space-y-3">
          {contactItems.map((item, i) => (
            <motion.li key={i} custom={i} variants={fadeUp} initial="hidden" animate="visible" className="flex items-start gap-2">
              <span className="mt-0.5 text-[#e94560] flex-shrink-0">{item.icon}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-xs text-gray-300 hover:text-[#e94560] transition-colors break-all"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-xs text-gray-300 break-all">{item.value}</span>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Languages */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e94560] mb-4 border-b border-[#e94560]/30 pb-2">
          {t('section.languages')}
        </h3>
        <ul className="space-y-2">
          {cvData.languages.map((lang) => (
            <li key={lang.langKey} className="flex items-center justify-between text-xs">
              <span className="text-gray-300">{t(lang.langKey)}</span>
              <span className="px-2 py-0.5 rounded bg-[#e94560]/20 text-[#e94560] font-semibold text-[10px] tracking-wider">
                {lang.level}
              </span>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Hobby */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e94560] mb-4 border-b border-[#e94560]/30 pb-2">
          {t('section.hobby')}
        </h3>
        <ul className="space-y-3">
          {cvData.hobby.map((h, i) => (
            <motion.li
              key={h.key}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-2"
            >
              <span className="mt-0.5 text-[#e94560] flex-shrink-0">{hobbyIcons[h.key]}</span>
              <div>
                <p className="text-xs font-semibold text-gray-200">{t(h.key)}</p>
                <p className="text-[11px] text-gray-500">{h.detail}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </aside>
  );
}
