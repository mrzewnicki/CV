interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-1 h-6 bg-[#e94560] rounded-full block" />
      <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#e94560]">{title}</h2>
    </div>
  );
}
