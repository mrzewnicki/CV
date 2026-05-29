import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Copy } from 'lucide-react';
import { layoutClass, useCvLayout } from '../context/CvLayoutContext';

export type ContactItemData = {
  icon: ReactNode;
  value: string;
  copyValue: string;
  href?: string;
  secondLine?: string;
};

type Props = {
  item: ContactItemData;
};

export default function ContactListItem({ item }: Props) {
  const { t } = useTranslation();
  const { isA4 } = useCvLayout();
  const [copied, setCopied] = useState(false);
  const copyResetRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (copyResetRef.current !== null) {
        window.clearTimeout(copyResetRef.current);
      }
    },
    [],
  );

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(item.copyValue);
      setCopied(true);
      if (copyResetRef.current !== null) {
        window.clearTimeout(copyResetRef.current);
      }
      copyResetRef.current = window.setTimeout(() => setCopied(false), 1200);
    } catch {
      /* clipboard unavailable */
    }
  }, [item.copyValue]);

  const textClass = layoutClass(
    isA4,
    'text-xs text-cv-text-secondary min-w-0 break-words',
    'text-[9px] text-cv-text-secondary min-w-0 break-words',
  );

  const linkClass = layoutClass(
    isA4,
    'text-xs text-cv-text-secondary hover:text-cv-accent transition-colors duration-200 break-all',
    'text-[9px] text-cv-text-secondary hover:text-cv-accent transition-colors duration-200 break-all',
  );

  const content =
    item.href !== undefined ? (
      <a
        href={item.href}
        target={item.href.startsWith('http') ? '_blank' : undefined}
        rel="noopener noreferrer"
        className={linkClass}
      >
        {item.value}
      </a>
    ) : (
      <span className={`${textClass} block`}>
        {item.value}
        {item.secondLine ? (
          <>
            <br />
            {item.secondLine}
          </>
        ) : null}
      </span>
    );

  if (isA4) {
    return (
      <li className={layoutClass(isA4, 'flex items-start gap-2', 'flex items-start gap-1.5')}>
        <span
          className={layoutClass(
            isA4,
            'mt-0.5 text-cv-text-muted flex-shrink-0',
            'mt-px text-cv-text-muted flex-shrink-0',
          )}
        >
          {item.icon}
        </span>
        {content}
      </li>
    );
  }

  return (
    <li className="group flex items-start gap-2">
      <span className="mt-0.5 text-cv-text-muted flex-shrink-0">{item.icon}</span>
      <div className="min-w-0 flex-1">{content}</div>
      <button
        type="button"
        onClick={(e) => {
          void handleCopy();
          e.currentTarget.blur();
        }}
        className={`cv-print-hide mt-0.5 flex-shrink-0 cursor-pointer rounded p-1 text-cv-text-muted transition-all duration-200 hover:bg-cv-surface hover:text-cv-accent group-hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cv-accent ${
          copied ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label={copied ? t('contact.copied') : t('contact.copy')}
        title={copied ? t('contact.copied') : t('contact.copy')}
      >
        {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
      </button>
    </li>
  );
}
