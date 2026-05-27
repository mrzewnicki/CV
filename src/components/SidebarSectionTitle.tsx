interface Props {
  title: string;
}

export default function SidebarSectionTitle({ title }: Props) {
  return (
    <h3 className="text-[8px] font-bold uppercase tracking-[0.08em] text-cv-text-muted mb-2 pb-1.5 border-b border-cv-border">
      {title}
    </h3>
  );
}
