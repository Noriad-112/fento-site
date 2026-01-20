export const site = {
  name: "Fento",
  siteUrl: "https://fento-site-draft.vercel.app",
  description:
    "Fento serves Mexican-inspired food built from a fully plant-based foundation. Every dish starts vegan, with optional additions of dairy or chicken. All sauces are made in-house without preservatives, and nearly the entire menu is gluten-free.",
  tagline: "Vegan-built Mexican fusion in Amsterdam",
  priceRange: "€€",
  servesCuisine: ["Plant-forward", "Mexican-inspired"],
  dietarySchema: [
    "https://schema.org/VeganDiet",
    "https://schema.org/GlutenFreeDiet",
  ],
  socials: {
    instagram: "https://instagram.com/fento",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Story", href: "/story" },
    { label: "Visit", href: "/visit" },
    { label: "Catering", href: "/catering" },
    { label: "Journal", href: "/journal" },
  ],
  locations: [
    {
      id: "fento-foodhallen",
      slug: "foodhallen",
      name: "Fento – Foodhallen",
      kind: "foodhallen-stand",
      shortDescription:
        "A fast, high-traffic stand designed for bold flavors, quick meals, and first-time discovery.",
      address: {
        street: "Bellamyplein 51",
        postalCode: "1053 AT",
        city: "Amsterdam",
        country: "Netherlands",
      },
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Bellamyplein%2051%2C%201053%20AT%20Amsterdam%2C%20Netherlands",
      openingHours: [
        { day: "Monday", opens: "12:00", closes: "22:00" },
        { day: "Tuesday", opens: "12:00", closes: "22:00" },
        { day: "Wednesday", opens: "12:00", closes: "22:00" },
        { day: "Thursday", opens: "12:00", closes: "22:00" },
        { day: "Friday", opens: "12:00", closes: "23:00" },
        { day: "Saturday", opens: "12:00", closes: "23:00" },
        { day: "Sunday", opens: "12:00", closes: "21:00" },
      ],
      cta: {
        label: "Explore the menu",
        href: "/menu",
      },
    },
    {
      id: "sauvage-space",
      slug: "sauvage-space",
      name: "Sauvage Space – Fento Kitchen",
      kind: "sauvage-kitchen",
      shortDescription:
        "A slower, neighborhood-facing kitchen for brunch, tastings, and private gatherings.",
      address: {
        street: "Potgieterstraat 47H",
        postalCode: "1053 XS",
        city: "Amsterdam",
        country: "Netherlands",
      },
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Potgieterstraat%2047H%2C%201053%20XS%20Amsterdam%2C%20Netherlands",
      openingHours: [
        { day: "Wednesday", opens: "10:00", closes: "14:00" },
        { day: "Thursday", opens: "10:00", closes: "14:00" },
        { day: "Friday", opens: "10:00", closes: "14:00" },
        { day: "Saturday", opens: "10:00", closes: "14:00" },
        { day: "Sunday", opens: "10:00", closes: "14:00" },
      ],
      cta: {
        label: "Plan a private event",
        href: "/catering",
      },
    },
  ],
  pages: {
    home: {
      heroHeadline: "Vegan-built Mexican fusion. Clean, bold, and made in-house.",
      heroSubhead:
        "All sauces made from scratch. No preservatives. Nearly the entire menu gluten-free.",
      heroStatement:
        "Fento lives in two linked spaces: a fast-moving stand inside Foodhallen and a slower kitchen for daytime meals and private gatherings at Potgieterstraat.",
      introParagraph:
        "Fento is a Mexican-inspired kitchen with a plant-based foundation. We build every dish vegan first, then offer optional additions to meet different tastes. Our sauces are made in-house every day, and we take dietary needs seriously — without compromising on flavor.",
      primaryCta: {
        label: "Private dinners & events",
        href: "/catering",
      },
      ctas: [
        { label: "Eat at Foodhallen", href: "/visit" },
        { label: "Brunch at Sauvage Space", href: "/visit" },
      ],
    },
    menu: {
      title: "Menu",
      philosophy:
        "Our menu is built from a plant-based core. Every dish starts vegan. Some dishes offer optional additions of dairy or chicken. All sauces are made in-house without preservatives.",
      dietaryClarityHeading: "Dietary clarity",
      dietaryClarity: [
        "Vegan-built menu",
        "Dairy-free options available",
        "Gluten-free options available",
        "Only one item contains gluten (burrito)",
      ],
      glutenDisclaimer:
        "With the exception of the burrito, our menu is gluten-free. We work carefully, but cross-contamination is always possible.",
      menuUrl: "/menu",
      menuDescription:
        "A plant-based core menu with bowls, tacos, sides, and a single gluten-containing burrito option.",
    },
    story: {
      title: "Story",
      headline: "Built vegan first. Finished with intention.",
      body: [
        "Fento began with a simple idea: start from plants, build real flavor, and leave out unnecessary processing. Instead of adapting meat-based dishes to plant-based alternatives, we design everything vegan from the beginning.",
        "All of our sauces are made in-house, without preservatives. This allows us to control flavor, texture, and quality — and to serve food that feels lighter, cleaner, and more balanced.",
        "Whether you eat fully plant-based or not, our food is designed to be satisfying, flexible, and transparent.",
      ],
    },
    visit: {
      title: "Visit",
      sharedNote:
        "Both locations share the same kitchen philosophy, recipes, and house-made sauces.",
      directionsLabel: "Get directions",
    },
    catering: {
      title: "Catering",
      headline: "Catering, events, and collaborations",
      copy:
        "Fento offers catering for offices, private events, and collaborations within De Hallen and the surrounding neighborhood. Our menu adapts well to dietary needs, including vegan and gluten-aware requirements.",
      cta: "Contact us to discuss options and availability.",
    },
    journal: {
      title: "Journal",
    },
  },
};
