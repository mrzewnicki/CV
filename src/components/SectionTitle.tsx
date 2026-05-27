interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <h2 className="text-[13px] font-bold tracking-tight text-cv-text-primary mb-2.5 pb-1.5 border-b border-cv-border">
      {title}
    </h2>
  );
}
