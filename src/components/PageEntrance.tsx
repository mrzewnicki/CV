import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

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
  const prefersReducedMotion = useReducedMotion();
  const [searchParams] = useSearchParams();
  const isPdfCapture = searchParams.get('pdf') === '1';

  if (prefersReducedMotion || isPdfCapture) {
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
