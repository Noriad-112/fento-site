import { site } from "@/content/site";

type SiteConfig = typeof site;

const dayOfWeekMap: Record<string, string> = {
  Monday: "https://schema.org/Monday",
  Tuesday: "https://schema.org/Tuesday",
  Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday",
  Friday: "https://schema.org/Friday",
  Saturday: "https://schema.org/Saturday",
  Sunday: "https://schema.org/Sunday",
};

export function createRestaurantJsonLd(config: SiteConfig) {
  const sameAs = Object.values(config.socials || {}).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": config.locations.map((location) => ({
      "@type": "Restaurant",
      "@id": `${config.siteUrl}#${location.slug}`,
      name: location.name,
      url: config.siteUrl,
      description: config.description,
      servesCuisine: config.servesCuisine,
      priceRange: config.priceRange,
      ...(sameAs.length > 0 ? { sameAs } : {}),
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address.street,
        postalCode: location.address.postalCode,
        addressLocality: location.address.city,
        addressCountry: location.address.country,
      },
      suitableForDiet: config.dietarySchema,
      openingHoursSpecification: location.openingHours.map((entry) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayOfWeekMap[entry.day] ?? entry.day,
        opens: entry.opens,
        closes: entry.closes,
      })),
      hasMenu: {
        "@type": "Menu",
        name: config.pages.menu.title,
        description: config.pages.menu.menuDescription,
        url: `${config.siteUrl}${config.pages.menu.menuUrl}`,
      },
    })),
  };
}

export function createWebPageJsonLd(
  config: SiteConfig,
  options: {
    title: string;
    description: string;
    path: string;
  }
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: options.title,
    url: `${config.siteUrl}${options.path}`,
    description: options.description,
    isPartOf: {
      "@id": `${config.siteUrl}#${config.name}`,
    },
  };
}
