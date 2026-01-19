type MenuSectionProps = {
  title: string;
};

export function MenuSection({ title }: MenuSectionProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
    </div>
  );
}
