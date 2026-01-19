type HeroProps = {
  tagline: string;
  headline: string;
  subhead: string;
};

export function Hero({ tagline, headline, subhead }: HeroProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-wide text-zinc-600">
          {tagline}
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-zinc-900 md:text-5xl">
          {headline}
        </h1>
        <p className="text-lg text-zinc-700">{subhead}</p>
      </div>
    </section>
  );
}
