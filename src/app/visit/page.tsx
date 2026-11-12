import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { createWebPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: site.pages.visit.title,
  description: site.pages.visit.sharedNote,
  alternates: {
    canonical: `${site.siteUrl}/visit`,
  },
};

const dayAbbr: Record<string, string> = {
  Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed",
  Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun",
};

const locationPhotos: Record<string, string> = {
  "fento-foodhallen": "/photos/stand-angle.jpg",
  "sauvage-space": "/photos/sauvage-interior.jpg",
};

function groupHours(
  hours: Array<{ day: string; opens: string; closes: string }>
): Array<{ label: string; time: string }> {
  const result: Array<{ label: string; time: string }> = [];
  let i = 0;
  while (i < hours.length) {
    const cur = hours[i];
    let j = i + 1;
    while (j < hours.length && hours[j].opens === cur.opens && hours[j].closes === cur.closes) {
      j++;
    }
    const first = dayAbbr[cur.day] ?? cur.day;
    const last = dayAbbr[hours[j - 1].day] ?? hours[j - 1].day;
    result.push({ label: j - i === 7 ? "Daily" : j - i === 1 ? first : `${first}–${last}`, time: `${cur.opens}–${cur.closes}` });
    i = j;
  }
  return result;
}

export default function VisitPage() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: site.pages.visit.title,
          description: site.pages.visit.sharedNote,
          path: "/visit",
        })}
      />

      {/* Hero */}
      <HeroBanner compact>
        <p className="animate-fade-up text-[10px] uppercase tracking-[0.4em] text-white/40">
          Find us
        </p>
        <h1
          className="animate-fade-up delay-100 mt-4 font-serif italic leading-[1.04] text-white"
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 4.75rem)",
            fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 0',
            letterSpacing: "-0.025em",
          }}
        >
          Two spaces.<br />One kitchen philosophy.
        </h1>
        <p className="animate-fade-up delay-200 mt-6 max-w-xl text-sm leading-relaxed text-white/60">
          {site.pages.visit.sharedNote}
        </p>
      </HeroBanner>

      {/* Location sections */}
      {site.locations.map((location, index) => {
        const isEven = index % 2 === 0;
        const hours = groupHours(location.openingHours);
        const photo = locationPhotos[location.id];

        return (
          <section key={location.id} className="py-16 sm:py-20 border-b border-slate-200/60 last:border-0">
            <Container>
              <div
                className={`grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  !isEven ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Photo */}
                <ScrollReveal>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={photo}
                      alt={location.name}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </ScrollReveal>

                {/* Info */}
                <ScrollReveal delay={100}>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[color:var(--pop)] mb-3">
                    {location.kind === "foodhallen-stand" ? "Stand 18 · Foodhallen" : "Sauvage Space"}
                  </p>
                  <h2
                    className="font-serif italic leading-tight text-slate-900 mb-4"
                    style={{
                      fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {location.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-500 mb-6">
                    {location.shortDescription}
                  </p>

                  {/* Address */}
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-1">Address</p>
                  <p className="text-sm text-slate-600 mb-6">
                    {location.address.street}, {location.address.postalCode} {location.address.city}
                  </p>

                  {/* Hours */}
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Hours</p>
                  <div className="divide-y divide-slate-100 mb-8">
                    {hours.map(({ label, time }) => (
                      <div key={label} className="flex justify-between py-2 text-sm text-slate-600">
                        <span>{label}</span>
                        <span className="tabular-nums">{time}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3">
                    <ButtonLink href={location.googleMapsUrl} variant="primary">
                      {site.pages.visit.directionsLabel}
                    </ButtonLink>
                    <ButtonLink href={location.cta.href} variant="secondary">
                      {location.cta.label}
                    </ButtonLink>
                  </div>
                </ScrollReveal>
              </div>
            </Container>
          </section>
        );
      })}

      {/* Closing strip */}
      <section className="relative -mb-20 overflow-hidden bg-[color:var(--accent)] py-20 sm:py-24">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1440 240"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          aria-hidden="true"
        >
          <g transform="translate(60, 20) rotate(-12)" opacity="0.05">
            <path d="M0 220 C -8 170 10 110 40 68 C 62 36 90 12 112 0 C 95 42 78 78 60 112 C 38 150 16 188 0 220Z" stroke="white" strokeWidth="1.2" />
            <path d="M0 220 Q 56 110 112 0" stroke="white" strokeWidth="0.5" opacity="0.5" />
          </g>
          <g transform="translate(900, 0) rotate(-22)" opacity="0.05">
            <path d="M0 240 C -6 188 12 128 44 84 C 70 46 102 18 124 4 C 106 46 88 82 68 118 C 44 160 18 204 0 240Z" stroke="white" strokeWidth="1.1" />
            <path d="M0 240 Q 64 120 124 4" stroke="white" strokeWidth="0.5" opacity="0.5" />
          </g>
        </svg>
        <Container className="relative">
          <ScrollReveal>
            <p
              className="font-serif italic leading-tight text-white/90 max-w-2xl"
              style={{
                fontSize: "clamp(1.6rem, 3.8vw, 3.2rem)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 0',
                letterSpacing: "-0.02em",
              }}
            >
              &ldquo;Same sauces. Same standards. Two ways to find us.&rdquo;
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/menu" variant="inverted">See the menu</ButtonLink>
              <ButtonLink href="/catering" variant="ghost">Catering &amp; events</ButtonLink>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
