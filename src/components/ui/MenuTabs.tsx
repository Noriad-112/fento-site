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

export function MenuTabs() {
  const [active, setActive] = useState(menu.sections[0].title);
  const section = menu.sections.find((s) => s.title === active)!;

  return (
    <div>
      {/* Tab bar — scrollable on mobile */}
      <div className="-mx-6 overflow-x-auto px-6 pb-1 sm:mx-0 sm:px-0">
        <div className="flex min-w-max gap-2 py-1">
          {menu.sections.map((s) => (
            <button
              key={s.title}
              onClick={() => setActive(s.title)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                active === s.title
                  ? "bg-[color:var(--accent)] text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Section content — remounts on tab change to trigger fade-in */}
      <div key={active} className="animate-fade-in pt-8 sm:pt-10">
        <div className="flex gap-10">
          <div className="min-w-0 flex-1">
            {/* Section title */}
            <h2
              className="font-serif text-[clamp(2.8rem,7.5vw,7rem)] italic leading-none text-slate-900"
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
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
              {section.description}
            </p>

            {/* Items */}
            <div className="mt-6 divide-y divide-slate-100">
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
          </div>

          {/* Photo — desktop only */}
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
  );
}
