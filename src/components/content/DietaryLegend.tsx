type DietaryLegendProps = {
  items: string[];
  disclaimer: string;
};

export function DietaryLegend({ items, disclaimer }: DietaryLegendProps) {
  return (
    <div className="space-y-3">
      <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="text-sm text-zinc-700">{disclaimer}</p>
    </div>
  );
}
