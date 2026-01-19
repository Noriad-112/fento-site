import Link from "next/link";

import { site } from "@/content/site";

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <Link href="/" className="text-xl font-semibold text-zinc-900">
            {site.name}
          </Link>
          <p className="text-sm text-zinc-600">{site.tagline}</p>
        </div>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-4 text-sm text-zinc-700">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-zinc-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
