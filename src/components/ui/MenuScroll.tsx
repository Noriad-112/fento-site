"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { menu } from "@/content/menu";

const euroFormatter = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});

const sectionPhotos: Record<string, { src: string; position?: string }> = {
  Bowls:          { src: "/photos/bowl-overhead.jpg",    position: "center 50%" },
  Nachos:         { src: "/photos/nachos-bowl.jpg",      position: "center 50%" },
  Burritos:       { src: "/photos/burrito-plate.jpg",    position: "center 40%" },
  Quesadillas:    { src: "/photos/quesadilla-press.jpg", position: "center 50%" },
  Extra:          { src: "/photos/salsa-verde.jpg",      position: "center 40%" },
  "Fresh Juices": { src: "/photos/hibiscus-drink.png",   position: "center 40%" },
};

export function MenuScroll() {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const toggleFlip = (title: string) =>
    setFlipped((prev) => ({ ...prev, [title]: !prev[title] }));

  return (
    <div className="space-y-14 pb-8">
          {menu.sections.map((section) => {
            const photo = sectionPhotos[section.title];
            const isFlipped = flipped[section.title] ?? false;

            return (
              <section
                key={section.title}
                ref={(el) => { sectionRefs.current[section.title] = el; }}
                id={`menu-${section.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:gap-10 sm:items-start">

                  {/* Flip card */}
                  {photo && (
                    <div
                      className="w-full sm:w-72 sm:shrink-0 cursor-pointer"
                      style={{ perspective: "1000px" }}
                      onClick={() => toggleFlip(section.title)}
                      title="Click to flip"
                    >
                      <div
                        className="relative w-full aspect-square rounded-2xl"
                        style={{
                          transformStyle: "preserve-3d",
                          transition: "transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1)",
                          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                        }}
                      >
                        {/* Front — photo */}
                        <div
                          className="absolute inset-0 rounded-2xl overflow-hidden"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <Image
                            src={photo.src}
                            alt={section.title}
                            fill
                            className="object-cover"
                            style={{ objectPosition: photo.position }}
                            sizes="(min-width: 640px) 208px, 100vw"
                          />
                          {/* Subtle flip hint */}
                          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 rounded-full bg-black/30 px-2.5 py-1 backdrop-blur-sm">
                            <span className="text-[9px] uppercase tracking-widest text-white/80">flip</span>
                          </div>
                        </div>

                        {/* Back — section info */}
                        <div
                          className="absolute inset-0 rounded-2xl bg-[color:var(--accent)] overflow-hidden flex flex-col justify-between p-6"
                          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                        >
                          {/* Botanical SVG — same as HeroBanner */}
                          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 220 220"
                            preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
                            <g transform="translate(10, 10) rotate(-15)" opacity="0.07">
                              <path d="M0 120 C-4 90 6 58 22 36 C34 18 48 6 58 0 C50 22 40 42 30 62 C18 84 8 104 0 120Z" stroke="white" strokeWidth="1"/>
                              <path d="M0 120 Q30 58 58 0" stroke="white" strokeWidth="0.4" opacity="0.5"/>
                            </g>
                            <g transform="translate(130, 80) rotate(20)" opacity="0.06">
                              <path d="M8 0 C22 6 32 20 30 36 C28 50 18 58 10 54 C2 50 -2 40 2 28 C6 18 8 0 8 0Z" stroke="white" strokeWidth="0.8"/>
                              <path d="M8 0 C10 22 10 40 10 54" stroke="white" strokeWidth="0.3" opacity="0.5"/>
                            </g>
                            <g transform="translate(60, 140) rotate(-30)" opacity="0.05">
                              <path d="M0 80 C-4 60 2 36 10 20 C18 6 28 -2 36 -6 C30 14 22 30 14 48 C8 64 2 74 0 80Z" stroke="white" strokeWidth="0.9"/>
                            </g>
                          </svg>

                          <p className="relative text-[9px] uppercase tracking-[0.35em] text-white/40">
                            {section.title}
                          </p>
                          <div className="relative">
                            <p
                              className="font-serif italic leading-none text-white"
                              style={{
                                fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                                fontVariationSettings: '"opsz" 144, "SOFT" 80, "WONK" 0',
                                letterSpacing: "-0.02em",
                              }}
                            >
                              {section.title}
                            </p>
                            {section.description && (
                              <p className="mt-3 text-xs leading-relaxed text-white/60">
                                {section.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Items */}
                  <div className="min-w-0 flex-1">
                    {/* Section title — visible when no photo or on mobile */}
                    <h2
                      className="mb-5 font-serif italic leading-none text-slate-900"
                      style={{
                        fontSize: "clamp(1.8rem,4.5vw,3rem)",
                        fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {section.title}
                    </h2>

                    <div className="divide-y divide-slate-100">
                      {section.items.map((item) => (
                        <div key={item.name} className="group/item py-4">
                          <div className="flex items-baseline justify-between gap-4">
                            <span className="font-serif text-lg text-slate-900 transition-colors duration-150 group-hover/item:text-[color:var(--accent)]">
                              {item.name}
                            </span>
                            <span className="shrink-0 tabular-nums text-sm text-slate-500">
                              {euroFormatter.format(item.price)}
                            </span>
                          </div>
                          {item.details && (
                            <p className="mt-0.5 text-sm leading-relaxed text-slate-400">
                              {item.details}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
    </div>
  );
}
