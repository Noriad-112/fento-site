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
  title: site.pages.catering.title,
  description: site.pages.catering.copy,
  alternates: {
    canonical: `${site.siteUrl}/catering`,
  },
};

const formats = [
  {
    num: "01",
    label: "Office catering",
    description:
      "Bowls, nachos, and burritos for teams. Dietary options built in — vegan, gluten-aware, and non-vegan all at the same table.",
  },
  {
    num: "02",
    label: "Private events",
    description:
      "Seated or standing, intimate or large. We adapt the menu to your guest list, your space, and your vibe.",
  },
  {
    num: "03",
    label: "De Hallen collabs",
    description:
      "Joint events and pop-ups with neighbouring vendors and spaces inside and around Foodhallen.",
  },
];

export default function CateringPage() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: site.pages.catering.title,
          description: site.pages.catering.copy,
          path: "/catering",
        })}
      />

      {/* Banner */}
      <HeroBanner>
        <p className="animate-fade-up text-[10px] uppercase tracking-[0.4em] text-white/40">
          Catering &amp; events
        </p>
        <h1
          className="animate-fade-up delay-100 mt-4 font-serif italic leading-[1.04] text-white"
          style={{
            fontSize: "clamp(2.6rem, 7vw, 6.5rem)",
            fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 0',
            letterSpacing: "-0.025em",
          }}
        >
          Fento for your table,<br />your team, your event.
        </h1>
        <p className="animate-fade-up delay-200 mt-6 max-w-xl text-sm leading-relaxed text-white/60">
          {site.pages.catering.copy}
        </p>
      </HeroBanner>

      {/* Photo */}
      <section className="pt-14 pb-0 sm:pt-18">
        <Container>
          <ScrollReveal>
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
              <Image
                src="/photos/bowl-with-sauces.jpg"
                alt="Fento bowl with house-made sauces"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* What we do — editorial numbered list */}
      <section className="bg-[color:var(--surface)] py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <h2
              className="font-serif italic leading-none text-slate-900 mb-12"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
                letterSpacing: "-0.02em",
              }}
            >
              What we do
            </h2>
          </ScrollReveal>
          <div className="divide-y divide-slate-200/60">
            {formats.map(({ num, label, description }) => (
              <ScrollReveal key={num}>
                <div className="grid gap-4 py-10 sm:grid-cols-[60px_1fr_1fr] sm:gap-10">
                  <p className="font-serif text-sm tracking-[0.2em] text-[color:var(--accent)] sm:pt-1">
                    {num}
                  </p>
                  <h3
                    className="font-serif italic leading-tight text-slate-900"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 0',
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {label}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">{description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Inquiry CTA — closing strip */}
      <section className="relative overflow-hidden bg-[color:var(--accent)] py-20 sm:py-24">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1440 240"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          aria-hidden="true"
        >
          <g transform="translate(80, 10) rotate(-15)" opacity="0.05">
            <path d="M0 220 C -8 170 10 110 40 68 C 62 36 90 12 112 0 C 95 42 78 78 60 112 C 38 150 16 188 0 220Z" stroke="white" strokeWidth="1.2" />
            <path d="M0 220 Q 56 110 112 0" stroke="white" strokeWidth="0.5" opacity="0.5" />
          </g>
          <g transform="translate(1100, 5) rotate(-20)" opacity="0.05">
            <path d="M0 240 C -6 188 12 128 44 84 C 70 46 102 18 124 4 C 106 46 88 82 68 118 C 44 160 18 204 0 240Z" stroke="white" strokeWidth="1.1" />
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
              Tell us your date, group size,<br />and any dietary needs.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              We&apos;ll come back to you with a tailored proposal — no commitment required.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={site.pages.catering.inquiryCta.href} variant="inverted">
                {site.pages.catering.inquiryCta.label}
              </ButtonLink>
              <ButtonLink href="/visit" variant="ghost">Find us</ButtonLink>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
