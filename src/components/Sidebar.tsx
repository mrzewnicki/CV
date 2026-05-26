import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Film, BookOpen, Video, Swords } from 'lucide-react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cv';

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 4.126 0 2.062 2.062 0 0 1-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

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
    icon: <LinkedInIcon size={14} />,
    value: cvData.contact.linkedinHandle,
    href: cvData.contact.linkedin,
  },
  {
    icon: <GitHubIcon size={14} />,
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
