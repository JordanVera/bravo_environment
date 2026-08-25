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
  insuranceLogos: [
    { id: "chubb", src: "/insurance/chubb.png", alt: "Chubb", width: 107, height: 71 },
    {
      id: "contractor-connection",
      src: "/insurance/contractor-connection.png",
      alt: "Contractor Connection by Crawford & Company",
      width: 107,
      height: 35,
    },
    { id: "farmers", src: "/insurance/farmers.jpg", alt: "Farmers Insurance", width: 940, height: 510 },
    { id: "foremost", src: "/insurance/foremost.png", alt: "Foremost Insurance", width: 1024, height: 512 },
    { id: "geico", src: "/insurance/geico.png", alt: "GEICO", width: 1920, height: 1080 },
    {
      id: "homeowners-of-america",
      src: "/insurance/homeowners-of-america.png",
      alt: "Homeowners of America",
      width: 1425,
      height: 375,
    },
    { id: "aig", src: "/insurance/aig.png", alt: "AIG", width: 107, height: 57 },
    { id: "allstate", src: "/insurance/allstate.jpg", alt: "Allstate", width: 107, height: 63 },
    { id: "liberty-mutual", src: "/insurance/libertymutual.png", alt: "Liberty Mutual", width: 107, height: 60 },
    {
      id: "lionsbridge",
      src: "/insurance/lionsbridge.webp",
      alt: "Lionsbridge Contractor Group",
      width: 107,
      height: 74,
    },
    { id: "metlife", src: "/insurance/metlife.webp", alt: "MetLife", width: 780, height: 475 },
    { id: "pekin", src: "/insurance/pekin.png", alt: "Pekin Insurance", width: 500, height: 153 },
    { id: "progressive", src: "/insurance/progressive.png", alt: "Progressive", width: 3840, height: 2160 },
    { id: "sedgwick", src: "/insurance/sedgwick.jpg", alt: "Sedgwick", width: 107, height: 27 },
    { id: "state-farm", src: "/insurance/statefarm.png", alt: "State Farm", width: 107, height: 15 },
    { id: "westhill", src: "/insurance/westhill.png", alt: "Westhill", width: 107, height: 21 },
  ],
} as const;

export const formsubmitEndpoint = `https://formsubmit.co/${site.email}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Get a Quote" },
] as const;
