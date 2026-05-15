import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { HomeHero } from "@/components/ui/HomeHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { createWebPageJsonLd } from "@/lib/seo";

const pageTitle = `${site.name} — ${site.tagline}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: site.description,
  alternates: {
    canonical: site.siteUrl,
  },
};

const dayAbbr: Record<string, string> = {
  Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed",
  Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun",
};

function compactHours(
  hours: Array<{ day: string; opens: string; closes: string }>
): string {
  const groups: Array<{ label: string; time: string }> = [];
  let i = 0;
  while (i < hours.length) {
    const cur = hours[i];
    let j = i + 1;
    while (j < hours.length && hours[j].opens === cur.opens && hours[j].closes === cur.closes) {
      j++;
    }
    const first = dayAbbr[cur.day] ?? cur.day;
    const last = dayAbbr[hours[j - 1].day] ?? hours[j - 1].day;
    groups.push({ label: j - i === 1 ? first : `${first}–${last}`, time: `${cur.opens}–${cur.closes}` });
    i = j;
  }
  return groups.map(({ label, time }) => `${label} ${time}`).join(" · ");
}

const MARQUEE_ITEMS = [
  "Vegan-built",
  "In-house sauces",
  "Gluten-aware",
  "No preservatives",
  "Plant-forward",
  "Amsterdam",
];

const locationPhotos: Record<string, string> = {
  "fento-foodhallen": "/photos/fento-stall-exterior.jpg",
  "sauvage-space": "/photos/sauvage-kitchen.jpg",
};


export default function Home() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: pageTitle,
          description: site.description,
          path: "/",
        })}
      />

      {/* Hero */}
      <HomeHero />

      {/* Marquee strip — inverted green band */}
      <div className="overflow-hidden bg-[color:var(--accent)] py-4">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-5 px-5 text-[11px] font-medium uppercase tracking-[0.28em] text-white/75"
            >
              {item}
              <span className="text-white/30" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Three pillars — freely floating pills */}
      <section className="relative overflow-hidden py-10 sm:py-4">
        {/* Background food photo */}
        <Image
          src="/photos/bowl-close-1.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
        {/* Off-white wash so pills stay legible, colors bleed through softly */}

        <Container className="relative">
        {/* Mobile: stacked column. Desktop: CSS grid overlap — all pills in col 1 / row 1,
            aligned with self/justify-self, animated directly (no ScrollReveal wrapper). */}
        <div className="flex flex-col items-center gap-5 py-4 sm:grid sm:min-h-[360px] sm:gap-0 sm:py-8">

          {/* Plant-built — top left */}
          <div className="animate-float-pill1 group relative z-10 cursor-default sm:col-start-1 sm:row-start-1 sm:self-start sm:justify-self-start">
            <div className="animate-pill-aura-1 rounded-full bg-[color:var(--accent)] px-7 py-4 transition-opacity duration-300 group-hover:opacity-75">
              <span
                className="block font-serif text-[clamp(1.6rem,4vw,3rem)] italic leading-none text-white"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 0', letterSpacing: '-0.02em' }}
              >
                Plant-built
              </span>
            </div>
            <p className="absolute left-0 top-full mt-2 max-w-[240px] text-sm leading-relaxed text-slate-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              No animal products in the base — ever. Additions are optional.
            </p>
          </div>

          {/* Made in-house — bottom right */}
          <div className="animate-float-pill2 group relative z-20 cursor-default sm:col-start-1 sm:row-start-1 sm:self-end sm:justify-self-end">
            <div className="animate-pill-aura-2 rounded-full bg-[color:var(--accent)] px-9 py-5 transition-opacity duration-300 group-hover:opacity-75">
              <span
                className="block font-serif text-[clamp(2rem,5.5vw,4.2rem)] italic leading-none text-white"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 0', letterSpacing: '-0.015em' }}
              >
                Made in-house
              </span>
            </div>
            <p className="absolute right-0 top-full mt-2 max-w-[240px] text-right text-sm leading-relaxed text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Every sauce produced daily. No preservatives, no shortcuts.
            </p>
          </div>

          {/* Gluten-aware — center */}
          <div className="animate-float-pill3 group relative z-10 cursor-default sm:col-start-1 sm:row-start-1 sm:self-center sm:justify-self-center">
            <div className="animate-pill-aura-3 rounded-full bg-[color:var(--accent)] px-6 py-3 transition-opacity duration-300 group-hover:opacity-75">
              <span
                className="block font-serif text-[clamp(1.3rem,3vw,2.2rem)] italic leading-none text-white"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 0', letterSpacing: '-0.015em' }}
              >
                Gluten-aware
              </span>
            </div>
            <p className="absolute left-1/2 top-full mt-2 max-w-[240px] -translate-x-1/2 text-center text-sm leading-relaxed text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Nearly the whole menu is gluten-free. Ask staff for exceptions.
            </p>
          </div>

        </div>
        </Container>
      </section>

      {/* Location cards */}
      <Section variant="muted" className="py-12 sm:py-16">
        <ScrollReveal className="mb-8 sm:mb-10">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[color:var(--accent)] opacity-60">
            Where to find us
          </p>
          <h2 className="mt-2 font-serif text-3xl text-slate-900 sm:text-4xl">
            Two locations.
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {site.locations.map((location, i) => (
            <ScrollReveal
              key={location.id}
              delay={i * 80}
              className="group overflow-hidden rounded-2xl border border-slate-200/60 bg-white"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={locationPhotos[location.id]}
                  alt={location.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              {/* Info */}
              <div className="space-y-3 p-6">
                <h3 className="font-serif text-2xl text-slate-900 transition-colors duration-200 group-hover:text-[color:var(--accent)]">
                  {location.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {location.shortDescription}
                </p>
                <p className="text-xs text-slate-400">{compactHours(location.openingHours)}</p>
                <div className="flex flex-wrap gap-3 pt-1">
                  {location.id === "sauvage-space" ? (
                    <>
                      <ButtonLink href="https://sauvage.amsterdam/" variant="secondary">
                        Plan a private event
                      </ButtonLink>
                      <ButtonLink href="https://sauvagespace.netlify.app/" variant="secondary">
                        See the menu
                      </ButtonLink>
                    </>
                  ) : (
                    <ButtonLink href={location.cta.href} variant="secondary">
                      {location.cta.label}
                    </ButtonLink>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Bold closing statement strip */}
      <section className="relative overflow-hidden bg-[color:var(--accent)] py-16 sm:py-22">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1440 280"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          aria-hidden="true"
        >
          <g transform="translate(40, 20) rotate(-15)" opacity="0.05">
            <path d="M0 220 C -8 170 10 110 40 68 C 62 36 90 12 112 0 C 95 42 78 78 60 112 C 38 150 16 188 0 220Z" stroke="white" strokeWidth="1.2" />
            <path d="M0 220 Q 56 110 112 0" stroke="white" strokeWidth="0.5" opacity="0.5" />
            <path d="M40 68 C 20 62 4 46 2 28 C 0 12 14 2 28 6 C 42 10 46 30 40 68Z" stroke="white" strokeWidth="0.8" opacity="0.7" />
          </g>
          <g transform="translate(210, -30) rotate(8)" opacity="0.04">
            <path d="M20 260 C 12 210 8 150 14 100 C 20 52 36 16 50 0 C 52 40 50 78 46 118 C 40 164 30 214 20 260Z" stroke="white" strokeWidth="1" />
            <path d="M20 260 Q 34 128 50 0" stroke="white" strokeWidth="0.4" opacity="0.5" />
            <path d="M14 100 C -2 94 -8 76 -4 60 C 0 46 14 42 24 50 C 34 58 32 78 14 100Z" stroke="white" strokeWidth="0.7" opacity="0.6" />
            <path d="M34 160 C 18 158 8 144 12 130 C 16 116 30 112 40 122 C 48 130 44 148 34 160Z" stroke="white" strokeWidth="0.7" opacity="0.6" />
          </g>
          <g transform="translate(370, 90) rotate(-40)" opacity="0.04">
            <path d="M0 160 C -10 120 -4 72 18 40 C 36 12 60 -4 78 -10 C 66 24 52 52 36 82 C 18 116 6 140 0 160Z" stroke="white" strokeWidth="1" />
            <path d="M18 40 C 4 26 -6 8 2 -6 C 8 -18 22 -16 30 -6 C 38 4 34 24 18 40Z" stroke="white" strokeWidth="0.7" opacity="0.6" />
          </g>
          <g transform="translate(620, -10) rotate(5)" opacity="0.04">
            <path d="M12 200 C 6 158 4 108 8 66 C 12 28 22 4 30 0 C 30 36 28 70 24 108 C 20 148 16 176 12 200Z" stroke="white" strokeWidth="0.9" />
            <path d="M12 200 Q 22 98 30 0" stroke="white" strokeWidth="0.4" opacity="0.5" />
          </g>
          <g transform="translate(880, 10) rotate(-25)" opacity="0.05">
            <path d="M0 240 C -6 188 12 128 44 84 C 70 46 102 18 124 4 C 106 46 88 82 68 118 C 44 160 18 204 0 240Z" stroke="white" strokeWidth="1.1" />
            <path d="M0 240 Q 64 120 124 4" stroke="white" strokeWidth="0.5" opacity="0.5" />
            <path d="M44 84 C 26 76 12 58 16 40 C 20 24 36 18 48 28 C 60 36 58 60 44 84Z" stroke="white" strokeWidth="0.8" opacity="0.65" />
            <path d="M68 138 C 48 134 36 118 40 102 C 44 88 58 84 70 94 C 80 102 78 124 68 138Z" stroke="white" strokeWidth="0.8" opacity="0.65" />
          </g>
          <g transform="translate(1060, -20) rotate(35)" opacity="0.03">
            <path d="M8 100 C 2 76 -2 46 6 22 C 12 2 22 -8 30 -10 C 28 14 24 36 18 58 C 12 78 8 92 8 100Z" stroke="white" strokeWidth="0.8" />
          </g>
          <g transform="translate(1180, 60) rotate(20)" opacity="0.04">
            <path d="M14 0 C 38 8 56 32 54 58 C 52 80 36 96 20 92 C 6 88 -2 72 4 52 C 8 34 14 0 14 0Z" stroke="white" strokeWidth="0.9" />
            <path d="M14 0 C 18 38 18 66 20 92" stroke="white" strokeWidth="0.4" opacity="0.5" />
          </g>
          <g transform="translate(1340, 30) rotate(-10)" opacity="0.05">
            <path d="M0 200 C -6 158 6 106 28 68 C 46 36 68 14 84 0 C 70 34 56 64 40 96 C 22 132 8 168 0 200Z" stroke="white" strokeWidth="1" />
            <path d="M0 200 Q 44 98 84 0" stroke="white" strokeWidth="0.4" opacity="0.5" />
            <path d="M28 68 C 14 58 4 40 10 24 C 14 10 28 6 38 16 C 48 24 44 48 28 68Z" stroke="white" strokeWidth="0.7" opacity="0.6" />
          </g>
        </svg>
        <Container className="relative">
          <ScrollReveal>
            <p className="font-serif text-[clamp(1.6rem,3.8vw,3.2rem)] leading-[1.1] text-white/90 max-w-2xl">
              "Designed vegan from the start. Built for everyone."
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/story" variant="inverted">Our story</ButtonLink>
              <ButtonLink href="/menu" variant="ghost">See the menu</ButtonLink>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
