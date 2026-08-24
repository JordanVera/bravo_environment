export const site = {
  name: "Bravo Environment, Inc.",
  shortName: "Bravo Environment",
  tagline: "Property restoration & disinfection services in Houston, TX",
  description:
    "Bravo Environment, Inc. provides professional water, mold, fire, and disaster damage restoration along with EPA-approved antimicrobial disinfection and MicrobeShield biofilm protection. Serving Houston, TX and surrounding areas.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bravoenvironment.com",
  phone: "(346) 773-6617",
  phoneHref: "tel:+13467736617",
  email: process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL ?? "admin@bravoenvironment.com",
  city: "Houston",
  state: "TX",
  region: "Houston, TX",
  hours: {
    weekdays: "Monday – Saturday: 5:00 AM – 11:45 PM",
    weekend: "Sunday: By Appointment",
    schema: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "05:00",
        closes: "23:45",
      },
    ],
  },
  credentials: ["EPA Approved", "FDA Approved", "NORMI Certified", "OSHA Compliant"] as const,
  certifications: [
    "U.S. Environmental Protection Agency (EPA)",
    "U.S. Food and Drug Administration (FDA)",
    "U.S. Patent and Trademark Office",
    "NORMI — National Organization of Remediators and Mold Inspectors",
    "OSHA Compliant",
  ],
  credentialLogos: [
    {
      id: "epa",
      src: "/logo/usepa.jpg",
      alt: "U.S. Environmental Protection Agency",
      width: 100,
      height: 100,
    },
    {
      id: "fda",
      src: "/logo/fda.jpg",
      alt: "U.S. Food and Drug Administration",
      width: 213,
      height: 100,
    },
    {
      id: "osha",
      src: "/logo/osha.jpg",
      alt: "Occupational Safety and Health Administration",
      width: 193,
      height: 100,
    },
    {
      id: "normi",
      src: "/logo/normi.jpg",
      alt: "NORMI — National Organization of Remediators and Mold Inspectors",
      width: 298,
      height: 100,
    },
  ],
} as const;

export const formsubmitEndpoint = `https://formsubmit.co/${site.email}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/contact", label: "Get a Quote" },
] as const;
