import { site } from "@/lib/site";

type SiteConfig = typeof site;

export function getOrganizationId(config: SiteConfig) {
  return `${config.siteUrl}#organization`;
}

export function createOrganizationJsonLd(config: SiteConfig) {
  const sameAs = Object.values(config.socials || {}).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": getOrganizationId(config),
    name: config.siteName,
    url: config.siteUrl,
    description: config.description,
    // TODO: Replace with a real logo when available.
    logo: `${config.siteUrl}/logo.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: config.contactEmail,
        contactType: "business",
      },
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function createWebPageJsonLd(config: SiteConfig, options: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: options.title,
    url: `${config.siteUrl}${options.path}`,
    description: options.description,
    isPartOf: {
      "@id": getOrganizationId(config),
    },
  };
}

export function createContactPageJsonLd(config: SiteConfig, options: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["WebPage", "ContactPage"],
    name: options.title,
    url: `${config.siteUrl}${options.path}`,
    description: options.description,
    isPartOf: {
      "@id": getOrganizationId(config),
    },
    potentialAction: {
      "@type": "ContactAction",
      target: `${config.siteUrl}${options.path}`,
      agent: {
        "@id": getOrganizationId(config),
      },
      description:
        "Use this form to contact Copilot Ventures about advisory work.",
    },
  };
}

export function createPersonJsonLd(config: SiteConfig, options: {
  name: string;
  description: string;
  path: string;
  jobTitle: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: options.name,
    description: options.description,
    jobTitle: options.jobTitle,
    url: `${config.siteUrl}${options.path}`,
    worksFor: {
      "@id": getOrganizationId(config),
    },
  };
}
