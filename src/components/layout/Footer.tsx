import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
        <span className="text-zinc-900">{site.name}</span>
        <span>{site.tagline}</span>
      </div>
    </footer>
  );
}
