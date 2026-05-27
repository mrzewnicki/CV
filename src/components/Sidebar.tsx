import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Building2, Film, BookOpen, Video, Swords } from 'lucide-react';
import { cvData } from '../data/cv';
import avatarImg from '../assets/avatar.png';
import Education from './Education';
import SidebarSectionTitle from './SidebarSectionTitle';
import { layoutClass, useCvLayout } from '../context/CvLayoutContext';

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 4.126 0 2.062 2.062 0 0 1-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Sidebar() {
  const { t } = useTranslation();
  const { isA4 } = useCvLayout();
  const iconSize = isA4 ? 10 : 14;

  const hobbyIcons: Record<string, React.ReactNode> = {
    'hobby.film': <Film size={iconSize} />,
    'hobby.rpg': <Swords size={iconSize} />,
    'hobby.yt': <Video size={iconSize} />,
    'hobby.books': <BookOpen size={iconSize} />,
  };

  const contactItems = useMemo(
    () => [
      {
        icon: <Phone size={iconSize} />,
        value: cvData.contact.phone,
        href: `tel:${cvData.contact.phone.replace(/\s/g, '')}`,
      },
      {
        icon: <Mail size={iconSize} />,
        value: cvData.contact.email,
        href: `mailto:${cvData.contact.email}`,
      },
      {
        icon: <LinkedInIcon size={iconSize} />,
        value: cvData.contact.linkedinHandle,
        href: cvData.contact.linkedin,
      },
      {
        icon: <GitHubIcon size={iconSize} />,
        value: cvData.contact.githubHandle,
        href: cvData.contact.github,
      },
      {
        icon: <MapPin size={iconSize} />,
        value: cvData.contact.address,
        secondLine: t('contact.street'),
        href: undefined,
      },
      {
        icon: <Building2 size={iconSize} />,
        value: `${t('contact.taxId')}: ${cvData.contact.nip}`,
        href: undefined,
      },
    ],
    [t, iconSize],
  );

  return (
    <aside
      className={layoutClass(
        isA4,
        'bg-cv-sidebar text-cv-text-secondary flex flex-col gap-6 p-6 min-h-full',
        'bg-cv-sidebar text-cv-text-secondary flex flex-col gap-4 p-4 min-h-full',
      )}
    >
      <div className={layoutClass(isA4, 'flex flex-col items-center gap-3', 'flex flex-col items-center gap-2')}>
        <div
          className={layoutClass(
            isA4,
            'w-28 h-28 rounded-full overflow-hidden ring-1 ring-cv-border',
            'w-[72px] h-[72px] rounded-full overflow-hidden ring-1 ring-cv-border',
          )}
        >
          <img
            src={avatarImg}
            alt={`${cvData.name.first} ${cvData.name.last}`}
            className="h-full w-full object-cover"
          />
        </div>
        <p className={layoutClass(isA4, 'text-xs text-cv-text-muted', 'text-[8px] text-cv-text-muted')}>
          {t('nav.dob')}: {cvData.contact.dob}
        </p>
      </div>

      <section>
        <SidebarSectionTitle title={t('section.contact')} />
        <ul className={layoutClass(isA4, 'space-y-2.5', 'space-y-1.5')}>
          {contactItems.map((item, i) => (
            <li key={i} className={layoutClass(isA4, 'flex items-start gap-2', 'flex items-start gap-1.5')}>
              <span
                className={layoutClass(
                  isA4,
                  'mt-0.5 text-cv-text-muted flex-shrink-0',
                  'mt-px text-cv-text-muted flex-shrink-0',
                )}
              >
                {item.icon}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={layoutClass(
                    isA4,
                    'text-xs text-cv-text-secondary hover:text-cv-accent transition-colors duration-200 break-all',
                    'text-[9px] text-cv-text-secondary hover:text-cv-accent transition-colors duration-200 break-all',
                  )}
                >
                  {item.value}
                </a>
              ) : (
                <span
                  className={layoutClass(
                    isA4,
                    'text-xs text-cv-text-secondary min-w-0 break-words block',
                    'text-[9px] text-cv-text-secondary min-w-0 break-words block',
                  )}
                >
                  {item.value}
                  {'secondLine' in item && item.secondLine ? (
                    <>
                      <br />
                      {item.secondLine}
                    </>
                  ) : null}
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SidebarSectionTitle title={t('section.languages')} />
        <ul className={layoutClass(isA4, 'space-y-2', 'space-y-1.5')}>
          {cvData.languages.map((lang) => (
            <li key={lang.langKey} className="flex items-center justify-between">
              <span
                className={layoutClass(
                  isA4,
                  'text-xs text-cv-text-secondary',
                  'text-[9px] text-cv-text-secondary',
                )}
              >
                {t(lang.langKey)}
              </span>
              <span
                className={layoutClass(
                  isA4,
                  'cv-badge text-[10px] py-0.5',
                  'cv-badge !text-[8px] !py-px !px-1.5',
                )}
              >
                {t(lang.levelKey)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <Education variant="sidebar" />

      <section>
        <SidebarSectionTitle title={t('section.hobby')} />
        <ul className={layoutClass(isA4, 'space-y-2.5', 'space-y-1.5')}>
          {cvData.hobby.map((h) => (
            <li key={h.key} className={layoutClass(isA4, 'flex items-start gap-2', 'flex items-start gap-1.5')}>
              <span className="mt-0.5 text-cv-text-muted flex-shrink-0">{hobbyIcons[h.key]}</span>
              <div>
                <p
                  className={layoutClass(
                    isA4,
                    'text-xs font-medium text-cv-text-primary',
                    'text-[9px] font-medium text-cv-text-primary',
                  )}
                >
                  {t(h.key)}
                </p>
                <p
                  className={layoutClass(
                    isA4,
                    'text-[11px] text-cv-text-muted',
                    'text-[8px] text-cv-text-muted',
                  )}
                >
                  {h.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
