import { motion } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';
import { useCvMotion } from '../hooks/useCvMotion';

const EASE = [0.22, 1, 0.36, 1] as const;

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds when the block enters the viewport. */
  delay?: number;
  as?: 'div' | 'section' | 'header' | 'li' | 'article';
};

const motionTags = {
  div: motion.div,
  section: motion.section,
  header: motion.header,
  li: motion.li,
  article: motion.article,
} as const;

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: ScrollRevealProps) {
  const { enabled } = useCvMotion();
  const Tag = as as keyof typeof motionTags;

  if (!enabled) {
    const StaticTag = as as ElementType;
    return (
      <StaticTag className={className} data-cv-reveal>
        {children}
      </StaticTag>
    );
  }

  const MotionTag = motionTags[Tag];

  return (
    <MotionTag
      className={className}
      data-cv-reveal
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -6% 0px' }}
      transition={{
        duration: 0.55,
        delay,
        ease: EASE,
      }}
    >
      {children}
    </MotionTag>
  );
}
