import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { createWebPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: site.pages.story.title,
  description: site.pages.story.body[0],
  alternates: {
    canonical: `${site.siteUrl}/story`,
  },
};

const principles = [
  {
    num: "01",
    headline: "Start from plants.",
    body: "Fento began with a simple idea: start from plants, build real flavor, and leave out unnecessary processing. Instead of adapting meat-based dishes to plant-based alternatives, we design everything vegan from the beginning.",
  },
  {
    num: "02",
    headline: "Make it in-house.",
    body: "All of our sauces are made in-house, without preservatives. This allows us to control flavor, texture, and quality — and to serve food that feels lighter, cleaner, and more balanced.",
  },
  {
    num: "03",
    headline: "Meet every table.",
    body: "Whether you eat fully plant-based or not, our food is designed to be satisfying, flexible, and transparent. We take dietary needs seriously — without compromising on flavor.",
  },
];

export default function StoryPage() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: site.pages.story.title,
          description: site.pages.story.body[0],
          path: "/story",
        })}
      />

      {/* Hero */}
      <HeroBanner>
        <p className="animate-fade-up text-[10px] uppercase tracking-[0.4em] text-white/40">
          Our story
        </p>
        <h1
          className="animate-fade-up delay-100 mt-4 font-serif italic leading-[1.04] text-white"
          style={{
            fontSize: "clamp(2.6rem, 7vw, 6.5rem)",
            fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 0',
            letterSpacing: "-0.025em",
          }}
        >
          Built vegan first.<br />Finished with intention.
        </h1>
        <p className="animate-fade-up delay-200 mt-6 max-w-xl text-sm leading-relaxed text-white/60">
          Fento is a Mexican-inspired kitchen with a plant-based foundation — two linked spaces, one shared philosophy.
        </p>
      </HeroBanner>

      {/* Photo + intro text */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">

            {/* Photo */}
            <ScrollReveal>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/photos/ingredients-prep-2.jpg"
                  alt="Fresh coriander, carrots and red onion — Fento's daily ingredients"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Intro text */}
            <ScrollReveal delay={100}>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[color:var(--accent)] opacity-70 mb-4">
                The idea
              </p>
              <p
                className="font-serif italic leading-tight text-slate-900 mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
                  letterSpacing: "-0.02em",
                }}
              >
                &ldquo;Start from plants, build real flavor, leave out the rest.&rdquo;
              </p>
              <p className="text-sm leading-relaxed text-slate-500 mb-4">
                Every dish at Fento starts vegan — additions like cheese or chicken are options, never the default. It&apos;s not a compromise. It&apos;s a different way of cooking.
              </p>
              <p className="text-sm leading-relaxed text-slate-500">
                Two linked spaces, one shared philosophy. The Foodhallen stand for vibrant, fast meals. Sauvage Space for slower mornings and private gatherings. Same sauces. Same standards.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Principles */}
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
              What we stand for
            </h2>
          </ScrollReveal>
          <div className="divide-y divide-slate-200/60">
            {principles.map(({ num, headline, body }) => (
              <ScrollReveal key={num}>
                <div className="grid gap-4 py-10 sm:grid-cols-[60px_1fr_1fr] sm:gap-10">
                  <p className="font-serif text-sm tracking-[0.2em] text-[color:var(--accent)] sm:pt-1">
                    {num}
                  </p>
                  <h2
                    className="font-serif italic leading-tight text-slate-900"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 0',
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {headline}
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing strip */}
      <section className="relative overflow-hidden bg-[color:var(--accent)] py-20 sm:py-28">
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
          </g>
          <g transform="translate(880, 10) rotate(-25)" opacity="0.05">
            <path d="M0 240 C -6 188 12 128 44 84 C 70 46 102 18 124 4 C 106 46 88 82 68 118 C 44 160 18 204 0 240Z" stroke="white" strokeWidth="1.1" />
            <path d="M0 240 Q 64 120 124 4" stroke="white" strokeWidth="0.5" opacity="0.5" />
          </g>
          <g transform="translate(1340, 30) rotate(-10)" opacity="0.05">
            <path d="M0 200 C -6 158 6 106 28 68 C 46 36 68 14 84 0 C 70 34 56 64 40 96 C 22 132 8 168 0 200Z" stroke="white" strokeWidth="1" />
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
              &ldquo;Designed vegan from the start. Built for everyone.&rdquo;
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/menu" variant="inverted">See the menu</ButtonLink>
              <ButtonLink href="/visit" variant="ghost">Visit us</ButtonLink>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
