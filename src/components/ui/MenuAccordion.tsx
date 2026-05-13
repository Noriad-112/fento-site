"use client";

import { useState } from "react";
import Image from "next/image";

import { menu } from "@/content/menu";

const euroFormatter = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});

const sectionPhotos: Record<string, string> = {
  Bowls: "/photos/bowl-overhead.jpg",
  Nachos: "/photos/nachos-bowl.jpg",
  Burritos: "/photos/burrito-plate.jpg",
  Quesadillas: "/photos/quesadilla-press.jpg",
  Extra: "/photos/salsa-verde.jpg",
  "Fresh Juices": "/photos/hibiscus-drink.png",
};

function priceRange(items: { price: number }[]) {
  const prices = items.map((i) => i.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  if (min === max) return euroFormatter.format(min);
  return `${euroFormatter.format(min)} – ${euroFormatter.format(max)}`;
}

export function MenuAccordion() {
  const [open, setOpen] = useState<string | null>(menu.sections[0].title);

  return (
    <div>
      {menu.sections.map((section) => {
        const isOpen = open === section.title;
        return (
          <div key={section.title}>
            <button
              onClick={() => setOpen(isOpen ? null : section.title)}
              className="group flex w-full items-center justify-between border-t border-slate-200/50 py-6 text-left sm:py-8"
            >
              <div>
                <h2
                  className="font-serif text-[clamp(2.6rem,7vw,6.5rem)] italic leading-none text-slate-900 transition-colors duration-300 group-hover:text-[color:var(--accent)]"
                  style={{
                    fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
                    letterSpacing: "-0.02em",
                  }}
                >
                  {section.title}
                </h2>
                <p className="mt-2 text-xs tracking-wide text-slate-400">
                  {priceRange(section.items)}
                </p>
              </div>
              <span
                className="select-none font-light text-3xl text-slate-300 transition-all duration-300"
                style={{
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  color: isOpen ? "var(--accent)" : undefined,
                }}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            <div
              className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="flex gap-10 pb-10 pt-1">
                  <div className="min-w-0 flex-1 divide-y divide-slate-100">
                    {section.items.map((item) => (
                      <div key={item.name} className="group/item py-5">
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="font-serif text-xl text-slate-900 transition-colors duration-200 group-hover/item:text-[color:var(--accent)]">
                            {item.name}
                          </span>
                          <span className="shrink-0 tabular-nums text-sm text-slate-500">
                            {euroFormatter.format(item.price)}
                          </span>
                        </div>
                        {item.details && (
                          <p className="mt-1 text-sm leading-relaxed text-slate-400">
                            {item.details}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {sectionPhotos[section.title] && (
                    <div className="hidden w-56 shrink-0 sm:block lg:w-72">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                        <Image
                          src={sectionPhotos[section.title]}
                          alt={section.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 288px, 224px"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="border-t border-slate-200/50" />
    </div>
  );
}
