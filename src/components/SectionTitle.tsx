interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight text-cv-text-primary mb-4 pb-2 border-b border-cv-border">
      {title}
    </h2>
  );
}
