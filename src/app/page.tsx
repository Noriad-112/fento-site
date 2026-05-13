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
  "fento-foodhallen": "/photos/stand-angle.jpg",
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
      <Section className="py-10 sm:py-4">
        {/* Mobile: stacked column. Desktop: CSS grid overlap — all pills in col 1 / row 1,
            aligned with self/justify-self, animated directly (no ScrollReveal wrapper). */}
        <div className="flex flex-col items-center gap-5 py-4 sm:grid sm:min-h-[360px] sm:gap-0 sm:py-8">

          {/* Plant-built — top left */}
          <div className="animate-float-pill1 group relative z-10 cursor-default sm:col-start-1 sm:row-start-1 sm:self-start sm:justify-self-start">
            <div className="rounded-full bg-[color:var(--accent)] px-7 py-4 transition-opacity duration-300 group-hover:opacity-75">
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
            <div className="rounded-full bg-[color:var(--accent)] px-9 py-5 transition-opacity duration-300 group-hover:opacity-75">
              <span
                className="block font-serif text-[clamp(2rem,5.5vw,4.2rem)] italic leading-none text-white"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 0', letterSpacing: '-0.015em' }}
              >
                Made in-house
              </span>
            </div>
            <p className="absolute right-0 top-full mt-2 max-w-[240px] text-right text-sm leading-relaxed text-slate-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Every sauce produced daily. No preservatives, no shortcuts.
            </p>
          </div>

          {/* Gluten-aware — center */}
          <div className="animate-float-pill3 group relative z-10 cursor-default sm:col-start-1 sm:row-start-1 sm:self-center sm:justify-self-center">
            <div className="rounded-full bg-[color:var(--accent)] px-6 py-3 transition-opacity duration-300 group-hover:opacity-75">
              <span
                className="block font-serif text-[clamp(1.3rem,3vw,2.2rem)] italic leading-none text-white"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 0', letterSpacing: '-0.015em' }}
              >
                Gluten-aware
              </span>
            </div>
            <p className="absolute left-1/2 top-full mt-2 max-w-[240px] -translate-x-1/2 text-center text-sm leading-relaxed text-slate-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Nearly the whole menu is gluten-free. Ask staff for exceptions.
            </p>
          </div>

        </div>
      </Section>

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
      <section className="bg-[color:var(--accent)] py-16 sm:py-22">
        <Container>
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
