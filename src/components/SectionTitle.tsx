import { layoutClass, useCvLayout } from '../context/CvLayoutContext';

interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  const { isA4 } = useCvLayout();
  return (
    <h2
      className={layoutClass(
        isA4,
        'text-2xl font-semibold tracking-tight text-cv-text-primary mb-4 pb-2 border-b border-cv-border',
        'text-[13px] font-bold tracking-tight text-cv-text-primary mb-2.5 pb-1.5 border-b border-cv-border',
      )}
    >
      {title}
    </h2>
  );
}
