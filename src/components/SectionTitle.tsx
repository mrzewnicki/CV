interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-1 h-6 bg-cv-accent rounded-full block" />
      <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-cv-accent">{title}</h2>
    </div>
  );
}
