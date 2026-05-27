interface Props {
  title: string;
}

export default function SidebarSectionTitle({ title }: Props) {
  return (
    <h3 className="text-sm font-semibold text-cv-text-primary mb-3 pb-2 border-b border-cv-border">
      {title}
    </h3>
  );
}
