import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useCvMotion } from '../hooks/useCvMotion';

type PageEntranceProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds (e.g. second A4 page). */
  delay?: number;
  'data-cv-page'?: number;
};

export default function PageEntrance({
  children,
  className,
  delay = 0,
  'data-cv-page': dataCvPage,
}: PageEntranceProps) {
  const { enabled } = useCvMotion();

  if (!enabled) {
    return (
      <div className={className} data-cv-page={dataCvPage}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      data-cv-page={dataCvPage}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
