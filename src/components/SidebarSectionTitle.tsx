import { layoutClass, useCvLayout } from '../context/CvLayoutContext';

interface Props {
  title: string;
}

export default function SidebarSectionTitle({ title }: Props) {
  const { isA4 } = useCvLayout();
  return (
    <h3
      className={layoutClass(
        isA4,
        'text-sm font-semibold text-cv-text-primary mb-3 pb-2 border-b border-cv-border',
        'text-[8px] font-bold uppercase tracking-[0.08em] text-cv-text-muted mb-2 pb-1.5 border-b border-cv-border',
      )}
    >
      {title}
    </h3>
  );
}
