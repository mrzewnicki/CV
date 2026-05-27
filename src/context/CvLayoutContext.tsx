import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useSearchParams } from 'react-router-dom';

type CvLayoutContextValue = {
  /** True when showing A4 document sizing (export or ?pdf=1 capture). */
  isA4: boolean;
  /** Briefly switch the visible page to A4 during local PDF export. */
  setExportPreview: (active: boolean) => void;
};

const CvLayoutContext = createContext<CvLayoutContextValue | null>(null);

export function CvLayoutProvider({ children }: { children: ReactNode }) {
  const [searchParams] = useSearchParams();
  const [exportPreview, setExportPreview] = useState(false);

  const isPdfCapture = searchParams.get('pdf') === '1';
  const isA4 = isPdfCapture || exportPreview;

  const setExportPreviewStable = useCallback((active: boolean) => {
    setExportPreview(active);
  }, []);

  const value = useMemo(
    () => ({
      isA4,
      setExportPreview: setExportPreviewStable,
    }),
    [isA4, setExportPreviewStable],
  );

  return <CvLayoutContext.Provider value={value}>{children}</CvLayoutContext.Provider>;
}

export function useCvLayout() {
  const ctx = useContext(CvLayoutContext);
  if (!ctx) {
    throw new Error('useCvLayout must be used within CvLayoutProvider');
  }
  return ctx;
}

/** Pick web or A4 Tailwind class string. */
export function layoutClass(isA4: boolean, web: string, a4: string) {
  return isA4 ? a4 : web;
}
