type LocationCardProps = {
  name: string;
  description?: string;
  address?: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  openingHours?: {
    day: string;
    opens: string;
    closes: string;
  }[];
  typeLabel?: string;
  bestFor?: string;
  directionsUrl?: string;
  directionsLabel?: string;
  cta?: {
    label: string;
    href: string;
  };
};

export function LocationCard({
  name,
  description,
  address,
  openingHours,
  typeLabel,
  bestFor,
  directionsUrl,
  directionsLabel,
  cta,
}: LocationCardProps) {
  return (
    <article className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-zinc-900">{name}</h3>
      {description ? (
        <p className="text-sm text-zinc-700">{description}</p>
      ) : null}
      {(address || openingHours || typeLabel || bestFor) && (
        <div className="space-y-3 text-sm text-zinc-700">
          {address ? (
            <div>
              <p className="font-medium text-zinc-900">Address</p>
              <p>
                {address.street}, {address.postalCode} {address.city},{" "}
                {address.country}
              </p>
            </div>
          ) : null}
          {openingHours && openingHours.length > 0 ? (
            <div>
              <p className="font-medium text-zinc-900">Opening hours</p>
              <ul className="mt-1 space-y-1">
                {openingHours.map((entry) => (
                  <li key={`${entry.day}-${entry.opens}`}>
                    {entry.day}: {entry.opens}–{entry.closes}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {typeLabel ? (
            <div>
              <p className="font-medium text-zinc-900">Type</p>
              <p>{typeLabel}</p>
            </div>
          ) : null}
          {bestFor ? (
            <div>
              <p className="font-medium text-zinc-900">Best for</p>
              <p>{bestFor}</p>
            </div>
          ) : null}
        </div>
      )}
      <div className="flex flex-wrap gap-4 text-sm">
        {directionsUrl && directionsLabel ? (
          <a
            href={directionsUrl}
            className="text-zinc-900 underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {directionsLabel}
          </a>
        ) : null}
        {cta ? (
          <a
            href={cta.href}
            className="rounded-full border border-zinc-300 px-4 py-1 text-zinc-900 transition-colors hover:border-zinc-400"
          >
            {cta.label}
          </a>
        ) : null}
      </div>
    </article>
  );
}
