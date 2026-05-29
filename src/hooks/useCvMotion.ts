import { useReducedMotion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { useCvLayout } from '../context/CvLayoutContext';

/** True only for interactive web layout (not PDF capture or A4 export view). */
export function useCvMotion() {
  const prefersReducedMotion = useReducedMotion();
  const [searchParams] = useSearchParams();
  const { isA4 } = useCvLayout();
  const isPdfCapture = searchParams.get('pdf') === '1';

  return {
    enabled: !prefersReducedMotion && !isPdfCapture && !isA4,
  };
}
