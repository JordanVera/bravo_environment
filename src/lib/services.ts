export type Service = {
  slug: string;
  name: string;
  shortName: string;
  formValue: string;
  description: string;
  icon: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "water-damage-restoration",
    name: "Water Damage Restoration",
    shortName: "Water Damage",
    formValue: "Water Damage Restoration",
    description:
      "Fast extraction, structural drying, and complete moisture remediation to stop damage before it spreads — 24/7 emergency response.",
    icon: "Droplets",
    bullets: [
      "Industrial water extraction",
      "Structural drying & dehumidification",
      "Moisture mapping & documentation",
      "Insurance claim support",
    ],
  },
  {
    slug: "mold-damage-restoration",
    name: "Mold Damage Restoration",
    shortName: "Mold Remediation",
    formValue: "Mold Remediation",
    description:
      "NORMI-certified mold inspection, safe containment, and complete remediation using EPA-approved antimicrobial treatments.",
    icon: "ShieldCheck",
    bullets: [
      "NORMI-certified inspectors",
      "Professional containment barriers",
      "EPA-approved antimicrobial treatment",
      "Post-remediation verification",
    ],
  },
  {
    slug: "fire-smoke-restoration",
    name: "Fire & Smoke Damage Restoration",
    shortName: "Fire & Smoke",
    formValue: "Fire & Smoke Damage Restoration",
    description:
      "Full fire and smoke damage remediation — soot removal, odor elimination, decontamination, and structural restoration.",
    icon: "Flame",
    bullets: [
      "Soot & char removal",
      "Smoke odor elimination",
      "Content cleaning & restoration",
      "Structural rebuild coordination",
    ],
  },
  {
    slug: "antimicrobial-disinfection",
    name: "Antimicrobial Deep Cleaning",
    shortName: "Disinfection",
    formValue: "Antimicrobial Disinfection",
    description:
      "99.9% effective kill rate using EPA/FDA-approved biodegradable disinfectants. Non-thermal fogging for complete surface coverage.",
    icon: "Sparkles",
    bullets: [
      "99.9% effective kill rate",
      "Non-thermal fogging treatment",
      "EPA & FDA approved products",
      "Safe for families & pets",
    ],
  },
  {
    slug: "microbe-shield",
    name: "MicrobeShield Biofilm Protection",
    shortName: "MicrobeShield",
    formValue: "MicrobeShield Protection",
    description:
      "Patented biofilm technology bonds to hard and soft surfaces to prevent bacteria, mold, fungus, and pathogens for up to 1 year.",
    icon: "BadgeCheck",
    bullets: [
      "Up to 1 year surface protection",
      "Bonds to hard & soft surfaces",
      "Prevents mold, fungus & bacteria",
      "EPA registered & patented",
    ],
  },
  {
    slug: "biohazard-crime-scene",
    name: "Bio-Hazard & Crime Scene Cleanup",
    shortName: "Bio-Hazard Cleanup",
    formValue: "Bio-Hazard Cleanup",
    description:
      "Discreet, professional bio-hazard and crime scene aftermath cleanup — safe disposal, decontamination, and odor treatment.",
    icon: "AlertTriangle",
    bullets: [
      "Discreet & professional",
      "OSHA compliant procedures",
      "Safe bio-waste disposal",
      "Full decontamination & odor treatment",
    ],
  },
  {
    slug: "disaster-recovery",
    name: "Disaster Recovery & Rebuilding",
    shortName: "Disaster Recovery",
    formValue: "Disaster Recovery",
    description:
      "Comprehensive disaster recovery from storm, hurricane, and flood damage — through full structural rebuilding and remodeling.",
    icon: "HardHat",
    bullets: [
      "Storm & hurricane damage response",
      "Structural assessment & repair",
      "Full rebuilding & remodeling",
      "Insurance coordination",
    ],
  },
];
