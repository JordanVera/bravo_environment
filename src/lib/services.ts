export type ServiceCategoryId = 'restoration' | 'aftermath' | 'disinfection';

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  formValue: string;
  description: string;
  icon: string;
  bullets: string[];
  category: ServiceCategoryId;
  image?: string;
  imageAlt?: string;
  heroTitle: string;
  heroDescription: string;
  intro: string[];
  processTitle: string;
  process: { title: string; body: string }[];
  includes: string[];
  signsTitle: string;
  signs: string[];
  audiences: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDescription: string;
};

export const serviceCategories: {
  id: ServiceCategoryId;
  name: string;
  description: string;
}[] = [
  {
    id: 'restoration',
    name: 'Property Restoration and Remediation',
    description:
      'Emergency water, mold, and fire restoration that stops damage, documents the loss, and returns the building to a safe, dry condition.',
  },
  {
    id: 'aftermath',
    name: 'Aftermath Recovery and Rebuilding',
    description:
      'Trauma cleanup, disaster response, and licensed rebuilds when a property needs more than drying and disinfection.',
  },
  {
    id: 'disinfection',
    name: 'Indoor Air and Surface Antimicrobial Disinfection',
    description:
      'EPA and FDA approved cleaning, fogging, and long-term biofilm protection for homes, schools, healthcare, and commercial spaces.',
  },
];

export const serviceAudiences = [
  'Residential and commercial properties',
  'Schools, universities, and daycare centers',
  'Hospitals, medical offices, and dental clinics',
  'Gyms, athletic facilities, and corporate buildings',
  'Hotels, theaters, and grocery stores',
  'Warehouses, laboratories, and distribution centers',
  'RVs, public transit, and cargo transportation',
  'Cruise ships and private yachts',
] as const;

export const services: Service[] = [
  {
    slug: 'water-damage-restoration',
    name: 'Water Damage Restoration',
    shortName: 'Water Damage',
    formValue: 'Water Damage Restoration',
    description:
      'Fast extraction, structural drying, and complete moisture remediation to stop damage before it spreads — 24/7 emergency response.',
    icon: 'Droplets',
    bullets: [
      'Industrial water extraction',
      'Structural drying & dehumidification',
      'Moisture mapping & documentation',
      'Insurance claim support',
    ],
    category: 'restoration',
    image: '/hero/water-extraction.jpg',
    imageAlt:
      'Technicians extracting standing water from a flooded living room',
    heroTitle: 'Water damage restoration in Houston',
    heroDescription:
      'Storms, burst pipes, and failed water heaters can soak a building in minutes. We extract the water, dry the structure, and document every step for your insurer.',
    intro: [
      'Indoor flooding does not stay on the floor. Water wicks into drywall, under cabinets, and along base plates. Left alone, it becomes swollen wood, delaminated flooring, and a mold problem within days — especially in Houston humidity.',
      'Bravo Environment responds with industrial extraction, moisture mapping, and controlled structural drying. We work residential and commercial losses, coordinate with property claims adjusters, and leave you with a written record of what was wet, what was dried, and what had to be removed.',
    ],
    processTitle: 'How we restore a wet building',
    process: [
      {
        title: 'Stop the source and extract',
        body: 'We isolate the leak when it is safe to do so, then pull standing water with truck-mount or portable extractors so drying can start the same visit.',
      },
      {
        title: 'Map hidden moisture',
        body: 'Thermal imaging and moisture meters show what the eye misses — wet insulation, saturated subfloors, and cavities behind apparently dry paint.',
      },
      {
        title: 'Dry the structure, not just the air',
        body: 'Air movers and dehumidifiers are placed to pull moisture out of framing and finishes. We re-measure until readings return to dry standard.',
      },
      {
        title: 'Document the loss',
        body: 'Photos, moisture logs, and a scope of work support insurance. If materials cannot be saved, we recommend targeted demolition instead of guesswork.',
      },
    ],
    includes: [
      'Emergency water extraction from storms, plumbing failures, and appliance leaks',
      'Carpet, pad, and hard-surface water removal',
      'Structural drying of walls, floors, and cavities',
      'Moisture mapping with written readings',
      'Antimicrobial treatment of remaining wet materials when indicated',
      'Insurance documentation and adjuster coordination',
    ],
    signsTitle: 'Call for water mitigation if you notice',
    signs: [
      'Standing water, soaked carpet, or water running from a ceiling',
      'A burst supply line, overflowing tub, or failed water heater',
      'Musty odor after a leak that already “looked dry”',
      'Warped flooring, bubbling paint, or soft drywall',
      'A roof or window leak after a Gulf Coast storm',
    ],
    audiences: [
      'Homeowners after a pipe break or storm',
      'Property managers with a multi-unit leak',
      'Retail and office spaces with a failed HVAC drain or sprinkler event',
      'Schools and daycare centers that cannot reopen a wet classroom',
    ],
    faqs: [
      {
        question: 'How quickly should water be extracted?',
        answer:
          'As soon as the area is safe to enter. Porous materials start breaking down within hours, and microbial growth can begin in 24–48 hours in a Houston climate. Same-day extraction limits both rebuild cost and mold risk.',
      },
      {
        question: 'Will you work with my insurance company?',
        answer:
          'Yes. We document moisture readings, photographs, and the drying plan so you can share a clear file with your adjuster. We do not replace your public adjuster or attorney — we supply the restoration record they need.',
      },
      {
        question: 'Is every wet material torn out?',
        answer:
          'No. We dry what can be dried and remove only materials that stay wet, are contaminated, or will fail structurally. That keeps the scope honest and the rebuild smaller.',
      },
    ],
    relatedSlugs: [
      'mold-damage-restoration',
      'disaster-recovery',
      'rebuilding-remodeling',
    ],
    metaTitle: 'Water Damage Restoration Houston TX',
    metaDescription:
      '24/7 water extraction, structural drying, and moisture documentation in Houston. Storm, pipe, and water-heater losses. Insurance-ready reports.',
  },
  {
    slug: 'mold-damage-restoration',
    name: 'Mold Remediation and Restoration',
    shortName: 'Mold Remediation',
    formValue: 'Mold Remediation',
    description:
      'NORMI-certified mold inspection, safe containment, and complete remediation using EPA-approved antimicrobial treatments.',
    icon: 'ShieldCheck',
    bullets: [
      'NORMI-certified inspectors',
      'Professional containment barriers',
      'EPA-approved antimicrobial treatment',
      'Post-remediation verification',
    ],
    category: 'restoration',
    image: '/hero/mold-containment.jpg',
    imageAlt:
      'Technicians in protective suits remediating mold behind containment',
    heroTitle: 'Mold remediation with lab-backed clearance',
    heroDescription:
      'Damp buildings and Gulf Coast humidity feed mold. We contain the work area, remove contaminated material, treat what remains, and verify the space is actually clean.',
    intro: [
      'Dampness and mold in buildings have long been tied to respiratory irritation and lost use of rooms people need every day. Painting over staining or running a household cleaner on a vent does not remove colonies inside drywall, under cabinets, or in HVAC dust.',
      'Our NORMI-trained technicians use containment, negative air, and EPA-approved antimicrobials. When the job calls for it, we coordinate pre- and post-remediation third-party laboratory testing so you have an independent record that spore levels came down — not just a before-and-after photo.',
    ],
    processTitle: 'A controlled mold job, not a demo free-for-all',
    process: [
      {
        title: 'Inspect and isolate',
        body: 'We identify the moisture source and the extent of growth, then build containment so spores are not tracked through the rest of the house or building.',
      },
      {
        title: 'Remove what cannot be cleaned',
        body: 'Porous materials with established growth — wet drywall, insulation, and some flooring — come out under containment and leave in sealed bags.',
      },
      {
        title: 'Clean and treat remaining surfaces',
        body: 'HEPA vacuuming and EPA-approved antimicrobial products address framing, hard goods, and HVAC-adjacent surfaces that can be salvaged.',
      },
      {
        title: 'Verify and dry',
        body: 'The area is dried to prevent a rebound. Post-remediation evaluation or third-party clearance testing is available so you are not guessing.',
      },
    ],
    includes: [
      'NORMI-informed inspection and moisture source review',
      'Poly containment, negative air, and HEPA filtration',
      'Removal of contaminated porous materials',
      'EPA-approved antimicrobial treatment',
      'Optional pre- and post-remediation lab testing',
      'Written scope suitable for insurers and property files',
    ],
    signsTitle: 'Mold work is overdue when',
    signs: [
      'You see spotting on drywall, grout, or ceiling texture',
      'A room smells musty even after cleaning',
      'Someone in the home has new cough or irritation that eases outdoors',
      'A past leak was never professionally dried',
      'An HVAC closet or attic shows staining after a storm',
    ],
    audiences: [
      'Families dealing with bathroom, closet, or attic growth',
      'Landlords preparing a unit after a long vacancy or leak',
      'Schools and daycares that need a documented clearance path',
      'Medical and dental offices that cannot leave porous growth in place',
    ],
    faqs: [
      {
        question: 'Can I just bleach the mold?',
        answer:
          'Household bleach does not fix wet substrate, and it often leaves moisture behind. On porous materials the colony is inside the paper and gypsum. Professional remediation removes the reservoir and the water source that fed it.',
      },
      {
        question: 'Do you always require lab tests?',
        answer:
          'Not on every small, obvious bathroom job. For larger losses, health-sensitive occupants, or insurance and property-sale files, pre- and post-remediation third-party testing is the cleaner record. We will tell you when it is worth the cost.',
      },
      {
        question: 'Will mold come back?',
        answer:
          'If the leak, humidity, or condensation source is still active, yes. Remediation without drying and repairs is temporary. We address moisture first, then treat, and we can add MicrobeShield on remaining surfaces when extra residual protection is appropriate.',
      },
    ],
    relatedSlugs: [
      'water-damage-restoration',
      'microbe-shield',
      'antimicrobial-disinfection',
    ],
    metaTitle: 'Mold Remediation Houston TX | NORMI Certified',
    metaDescription:
      'NORMI-informed mold remediation in Houston with containment, HEPA, EPA-approved treatment, and optional third-party clearance testing.',
  },
  {
    slug: 'fire-smoke-restoration',
    name: 'Fire and Smoke Damage Restoration',
    shortName: 'Fire & Smoke',
    formValue: 'Fire & Smoke Damage Restoration',
    description:
      'Full fire and smoke damage remediation — soot removal, odor elimination, decontamination, and structural restoration.',
    icon: 'Flame',
    bullets: [
      'Soot & char removal',
      'Smoke odor elimination',
      'Content cleaning & restoration',
      'Structural rebuild coordination',
    ],
    category: 'restoration',
    heroTitle: 'Fire and smoke restoration after the fire is out',
    heroDescription:
      'Smoke moves through walls and HVAC long after flames are gone. We remove soot, decide what can be saved, and eliminate odor instead of covering it up.',
    intro: [
      'A kitchen fire or electrical short can look contained and still leave acidic soot on every horizontal surface. HVAC ducts pull residue into rooms that never saw flame. Plastic and synthetic furnishings off-gas in ways a candle or spray cannot fix.',
      'We inventory contents, clean what can be restored, and use biodegradable disinfectant and deodorization products to permanently address smoke odor. When structure is charred, we coordinate demolition and rebuild so you are not hiring a cleaner and a contractor who do not share a plan.',
    ],
    processTitle: 'From soot to a livable structure',
    process: [
      {
        title: 'Stabilize and pack out',
        body: 'We protect undamaged rooms, inventory contents, and move salvageable items so cleaning and demolition do not destroy what can still be used.',
      },
      {
        title: 'Remove soot and char',
        body: 'Dry-soil and wet-clean methods are matched to the residue type. HVAC registers and accessible duct surfaces are addressed so smoke is not recirculated.',
      },
      {
        title: 'Deodorize at the source',
        body: 'Odor lives in porous goods and cavities. We treat those reservoirs with products designed to eliminate smoke odor rather than perfume the room.',
      },
      {
        title: 'Scope the rebuild',
        body: 'Unsalvageable finishes come out. We estimate and sequence repairs so electrical, drywall, and paint follow a clean substrate — not a sooty one.',
      },
    ],
    includes: [
      'Soot, char, and residue cleaning on structure and contents',
      'Smoke odor elimination with biodegradable deodorization products',
      'Content pack-out, cleaning, and restore-or-replace recommendations',
      'HVAC-adjacent smoke residue cleaning',
      'Protocols and estimates for thorough restoration',
      'Coordination into rebuilding when structure is lost',
    ],
    signsTitle: 'You still need fire restoration if',
    signs: [
      'Soot streaks walls, ceilings, or the inside of cabinets',
      'The building smells like smoke days after the fire department left',
      'Electronics or fabrics have a greasy film',
      'You can taste or smell smoke when the HVAC runs',
      'You are unsure which furniture and clothing can be saved',
    ],
    audiences: [
      'Homeowners after a kitchen, laundry, or electrical fire',
      'Landlords and HOAs with a unit-to-unit smoke event',
      'Retail and restaurant operators after a hood or electrical fire',
      'Anyone whose insurer asked for a restoration protocol, not just a painter',
    ],
    faqs: [
      {
        question: 'Why does the smell return after we painted?',
        answer:
          'Paint seals some surfaces and traps odor in others. If soot is still in insulation, subfloors, or the HVAC, heat and humidity push it back into the air. Cleaning and odor treatment have to happen before finishes go back on.',
      },
      {
        question: 'Can clothing and furniture be saved?',
        answer:
          'Often, yes — depending on residue type and how porous the item is. We separate restore from replace so you are not discarding a whole house or keeping items that will off-gas forever.',
      },
      {
        question: 'Do you rebuild after a fire?',
        answer:
          'Cleaning and deodorizing are this service. When framing, electrical, or finishes must be replaced, our rebuilding team or licensed trade partners pick up from a clean, documented substrate.',
      },
    ],
    relatedSlugs: [
      'rebuilding-remodeling',
      'antimicrobial-disinfection',
      'disaster-recovery',
    ],
    metaTitle: 'Fire & Smoke Damage Restoration Houston TX',
    metaDescription:
      'Soot removal, content cleaning, and permanent smoke odor elimination in Houston. Fire restoration protocols and rebuild coordination.',
  },
  {
    slug: 'biohazard-crime-scene',
    name: 'Bio-Hazard and Crime Scene Aftermath',
    shortName: 'Bio-Hazard Cleanup',
    formValue: 'Bio-Hazard Cleanup',
    description:
      'Discreet, professional bio-hazard and crime scene aftermath cleanup — safe disposal, decontamination, and odor treatment.',
    icon: 'AlertTriangle',
    bullets: [
      'Discreet & professional',
      'OSHA compliant procedures',
      'Safe bio-waste disposal',
      'Full decontamination & odor treatment',
    ],
    category: 'aftermath',
    heroTitle: 'Discreet bio-hazard and aftermath cleanup',
    heroDescription:
      'Trauma, unattended death, and infectious scenes need licensed, compassionate technicians — not a standard janitorial visit. We clean, dispose, and deodorize with OSHA-level controls.',
    intro: [
      'Families and businesses in these situations are already carrying enough. Blood, bodily fluids, and other potentially infectious material cannot be handled like household soil. Improper cleanup exposes the next person who walks into the room and can leave odor and staining that never quite leave.',
      'Bravo Environment technicians follow trauma cleanup protocols, use full PPE, and dispose of regulated waste correctly. We are available around the clock, we keep the work discreet, and we will walk you through what happens next without rushing you.',
    ],
    processTitle: 'How an aftermath job is handled',
    process: [
      {
        title: 'Secure and assess',
        body: 'We confirm the scene has been released by authorities when required, then evaluate contamination paths — floors, furniture, HVAC returns, and adjoining rooms.',
      },
      {
        title: 'Remove and contain waste',
        body: 'Regulated material is packaged for proper disposal. Porous items that cannot be disinfected are removed rather than wiped and left behind.',
      },
      {
        title: 'Disinfect and deodorize',
        body: 'Hard surfaces are cleaned and treated. Odors from organic material are addressed at the source, including subfloors or cavities when fluids migrated.',
      },
      {
        title: 'Restore the room to use',
        body: 'When structure was cut out, we can coordinate repairs so the space is not left as an open wound. You get a clear report of what was done.',
      },
    ],
    includes: [
      'Unattended death, trauma, and crime scene aftermath cleaning',
      'Blood and bodily fluid decontamination',
      'OSHA-informed PPE, procedures, and waste handling',
      'Odor treatment after organic contamination',
      'Discreet arrival and communication with family or property staff',
      'Guidance through the process, including what insurance may cover',
    ],
    signsTitle: 'This team — not a general cleaner — if',
    signs: [
      'Police or a medical examiner have released a scene',
      'There is blood, tissue, or other potentially infectious material',
      'An unattended death was discovered after days or weeks',
      'A hoarding or sewage event includes biological hazard',
      'Staff or family should not be asked to clean the room themselves',
    ],
    audiences: [
      'Families after a death in the home',
      'Property managers and hotels',
      'Healthcare and residential care operators',
      'Business owners dealing with a workplace trauma',
    ],
    faqs: [
      {
        question: 'Are you available at night?',
        answer:
          'Yes. Aftermath work often cannot wait for weekday business hours. Call and we will discuss timing, access, and who needs to be on site.',
      },
      {
        question: 'Will neighbors know what happened?',
        answer:
          'We do not advertise the nature of the call on the truck or in the hallway. We work as quietly as the job allows and speak only with the people you designate.',
      },
      {
        question: 'Does homeowners or commercial insurance pay for this?',
        answer:
          'Many policies have limited coverage for bio-cleanup. We document the work so you can submit a claim. Coverage varies — we will not promise a carrier’s decision.',
      },
    ],
    relatedSlugs: [
      'antimicrobial-disinfection',
      'rebuilding-remodeling',
      'disaster-recovery',
    ],
    metaTitle: 'Bio-Hazard & Crime Scene Cleanup Houston TX',
    metaDescription:
      'Discreet OSHA-informed trauma and crime scene aftermath cleanup in Houston. Bio-waste disposal, decontamination, and odor treatment.',
  },
  {
    slug: 'disaster-recovery',
    name: 'Disaster Recovery Services',
    shortName: 'Disaster Recovery',
    formValue: 'Disaster Recovery',
    description:
      'Full-service disaster recovery for hurricanes, floods, wind, and other sudden losses — from first response through mitigation.',
    icon: 'HardHat',
    bullets: [
      'Hurricane and storm response',
      'Flood and wind mitigation',
      'Emergency preparedness protocols',
      'OSHA-informed job sites',
    ],
    category: 'aftermath',
    image: '/hero/water-drying.jpg',
    imageAlt:
      'Air movers and dehumidifiers drying a water-damaged hallway after a flood',
    heroTitle: 'Disaster recovery when Houston weather turns',
    heroDescription:
      'Hurricanes, flash floods, and wind events hit whole neighborhoods at once. We stabilize the property, mitigate further loss, and sequence recovery so rebuilds are not built on a wet, dirty slab.',
    intro: [
      'A named storm or a neighborhood flood is not a single leak. It is roof damage, saturated interiors, debris, and a race against mold in the same week every contractor is booked. Properties that skip mitigation to “wait on the rebuild” often pay twice.',
      'Our Emergency Preparedness Management approach covers prevention conversations before hurricane season and, after an event, the practical sequence: response, mitigation, then recovery. The program is built for residential and commercial sites and follows OSHA-informed job-site practice.',
    ],
    processTitle: 'Response, then recovery — in that order',
    process: [
      {
        title: 'Make the building safe to enter',
        body: 'We look for electrical hazards, unstable ceilings, and contaminated floodwater before crews spend hours inside.',
      },
      {
        title: 'Mitigate ongoing loss',
        body: 'Tarping, extraction, debris removal, and drying keep a one-day flood from becoming a three-month mold and contents claim.',
      },
      {
        title: 'Document for carriers and boards',
        body: 'HOAs, lenders, and insurers need a timeline. We photograph and write the scope while conditions are still visible.',
      },
      {
        title: 'Hand off to rebuild',
        body: 'Once the structure is dry and clean, remodeling and trade work can start without trapping moisture or sewage residue in new finishes.',
      },
    ],
    includes: [
      'Hurricane, flood, wind, and storm-loss response',
      'Emergency extraction and structural drying after widespread water',
      'Debris and damaged-material removal when it is safe',
      'Support for vandalism and sudden multi-system failures',
      'OSHA-informed site practices on occupied and vacant buildings',
      'A path from mitigation into rebuilding and remodeling',
    ],
    signsTitle: 'Treat it as a disaster call when',
    signs: [
      'A named storm or street flooding entered the building',
      'Multiple rooms or units are wet at the same time',
      'The roof, windows, or exterior envelope failed',
      'You need a crew that can extract now and rebuild later',
      'Occupants cannot safely stay without temporary mitigation',
    ],
    audiences: [
      'Homeowners after a Gulf storm or bayou flood',
      'Commercial properties with a large water or wind footprint',
      'HOAs and property managers coordinating several units',
      'Facilities that already have an emergency plan and need a vendor who can execute it',
    ],
    faqs: [
      {
        question:
          'What is the difference between this and regular water damage work?',
        answer:
          'A single appliance leak is a water-mitigation job. A disaster call usually means envelope failure, contaminated water, or many rooms at once. The equipment and sequencing are heavier, and rebuild planning starts earlier.',
      },
      {
        question: 'Do you help before hurricane season?',
        answer:
          'Yes. Prevention and preparedness — knowing who to call, what to photograph, and what to shut off — shortens the first day after landfall. Ask us about a walkthrough if you manage a building that floods or loses roofing.',
      },
      {
        question: 'Can you handle earthquake or wildfire losses?',
        answer:
          'Houston’s typical events are wind, rain, and flood. The same recovery sequence applies to other sudden losses when they occur. Call and we will tell you honestly if the scope is in our lane or needs a specialist partner.',
      },
    ],
    relatedSlugs: [
      'water-damage-restoration',
      'rebuilding-remodeling',
      'mold-damage-restoration',
    ],
    metaTitle: 'Disaster Recovery Houston TX | Storm & Flood',
    metaDescription:
      'Hurricane, flood, and storm disaster recovery in Houston. Emergency mitigation, drying, documentation, and a clean handoff to rebuild.',
  },
  {
    slug: 'rebuilding-remodeling',
    name: 'Rebuilding and Remodeling Services',
    shortName: 'Rebuild & Remodel',
    formValue: 'Rebuilding and Remodeling',
    description:
      'Licensed repair and remodeling after water, mold, or fire — from trades coordination to kitchens, baths, flooring, and finishes.',
    icon: 'Hammer',
    bullets: [
      'Licensed trade partners',
      'Insurance-aware scoping',
      'Kitchens, baths, and flooring',
      'Restore after mitigation',
    ],
    category: 'aftermath',
    image: '/hero/mold-removal.jpg',
    imageAlt: 'Interior wall opened during restoration before rebuild',
    heroTitle: 'Rebuild after the loss — not over it',
    heroDescription:
      'New drywall on a wet stud is a callback waiting to happen. We repair and remodel only after mitigation is done, then bring licensed trades through one plan.',
    intro: [
      'Water, mold, and fire jobs often end with a hole in the house: missing cabinets, open walls, or a bathroom that cannot be used. Hiring a remodeler who never saw the moisture readings is how odor and buckling show up six months later.',
      'Bravo Environment coordinates plumbing, electrical, roofing, flooring, and kitchen or bath work with licensed, insured contractors. We talk to adjusters and appraisers so the rebuild matches the documented loss instead of a wish list that the carrier will not fund — or a cheap patch that you will regret.',
    ],
    processTitle: 'From open walls to a finished room',
    process: [
      {
        title: 'Confirm the building is ready',
        body: 'Drying logs, clearance, and odor treatment come first. We will not close a wall that is still wet or still contaminated.',
      },
      {
        title: 'Scope with the claim in view',
        body: 'Like-kind repairs and agreed upgrades are separated so you know what insurance is likely to cover and what is an owner decision.',
      },
      {
        title: 'Sequence the trades',
        body: 'Rough-in, insulation, drywall, flooring, and finish carpentry run in an order that does not destroy the last trade’s work.',
      },
      {
        title: 'Walk the completed space',
        body: 'You get a finished room you can occupy, not a pile of punch-list surprises with no one accountable.',
      },
    ],
    includes: [
      'Drywall, insulation, and finish repairs after remediation',
      'Flooring replacement after water or smoke',
      'Kitchen and bathroom cabinet, countertop, and fixture work',
      'Plumbing, electrical, and roofing through licensed partners',
      'Coordination with insurance adjusters and appraisers',
      'Residential and commercial interiors after unforeseen damage',
    ],
    signsTitle: 'You need a rebuild partner when',
    signs: [
      'Mitigation is done and the house is still unlivable',
      'Cabinets, tubs, or flooring were torn out and never replaced',
      'You want one team that already knows the loss history',
      'An adjuster approved repairs and you need them executed',
      'A previous patch failed and the room still smells or moves',
    ],
    audiences: [
      'Homeowners finishing a water, mold, or fire claim',
      'Commercial tenants who need a space back in operation',
      'Property managers replacing finishes across a documented loss',
      'Anyone who was told “you’ll need a contractor for the rebuild”',
    ],
    faqs: [
      {
        question: 'Do you only rebuild after your own mitigation?',
        answer:
          'That is the cleanest path, because we already have the moisture and contamination history. We can also take over after another company dried the building if the documentation is solid. We will re-check before we close walls.',
      },
      {
        question: 'Can we upgrade the kitchen while you are in there?',
        answer:
          'Often yes. We separate insurance repairs from owner upgrades so pricing stays clear. Tell us early so cabinets and lead times are in the same schedule.',
      },
      {
        question: 'Are the trades licensed and insured?',
        answer:
          'Yes. Plumbing, electrical, roofing, and similar work is performed by licensed, insured contractors. Restoration cleaning and disinfection stay with Bravo Environment.',
      },
    ],
    relatedSlugs: [
      'water-damage-restoration',
      'fire-smoke-restoration',
      'disaster-recovery',
    ],
    metaTitle: 'Rebuild & Remodel After Damage | Houston TX',
    metaDescription:
      'Licensed rebuilding and remodeling in Houston after water, mold, or fire. Flooring, kitchens, baths, and trades coordinated with your claim.',
  },
  {
    slug: 'antimicrobial-disinfection',
    name: 'Antimicrobial Deep Cleaning',
    shortName: 'Disinfection',
    formValue: 'Antimicrobial Disinfection',
    description:
      '99.9% effective kill rate using EPA/FDA-approved biodegradable disinfectants on high-touch and environmental surfaces.',
    icon: 'Sparkles',
    bullets: [
      '99.9% effective kill rate',
      'Surface wipe-down protocol',
      'EPA & FDA approved products',
      'Safe for families & pets',
    ],
    category: 'disinfection',
    heroTitle: 'Antimicrobial surface cleaning that actually contacts the dirt',
    heroDescription:
      'Fogging cannot replace a wipe on a greasy counter. We clean and disinfect high-touch and environmental surfaces with EPA and FDA approved products tested for a 99.9% kill rate.',
    intro: [
      'Contaminated environmental surfaces are a real transmission path for bacteria, fungi, and other pathogens. A space can look tidy and still carry soil in door hardware, light switches, shared equipment, and the horizontal ledges everyone ignores.',
      'Antimicrobial wipe-down is the first ingredient in our disinfection program. Our sanitizer products are used as a disinfectant, sanitizer, fungicide, algaecide, slimicide, and deodorizer — with a 99.9% kill-rate claim supported by third-party laboratory testing. They are biodegradable and chosen so families, staff, and pets can return to the space.',
    ],
    processTitle: 'Clean first, then disinfect',
    process: [
      {
        title: 'Walk the risk surfaces',
        body: 'We map high-touch points and soiled zones — not just the floors a nightly crew already mops.',
      },
      {
        title: 'Remove soil that blocks chemistry',
        body: 'Disinfectant fails on a dirty surface. We clean so the product can reach the organism, not the layer of dust above it.',
      },
      {
        title: 'Apply and respect dwell time',
        body: 'Approved products are applied at the correct wet time. Rushing the wipe is how “we disinfected” becomes a marketing sentence.',
      },
      {
        title: 'Stack the next layer if needed',
        body: 'Rooms that need whole-volume coverage get non-thermal fogging. Spaces that need months of residual protection get MicrobeShield.',
      },
    ],
    includes: [
      'Targeted antimicrobial wipe-down of high-touch and environmental surfaces',
      'Disinfectant, sanitizer, fungicide, algaecide, slimicide, and deodorizer applications as specified',
      'EPA and FDA approved, biodegradable chemistry',
      'Protocols for occupied homes, offices, and care settings',
      'Deodorization where organic soil caused odor',
      'A written description of what was treated',
    ],
    signsTitle: 'Book a deep disinfection when',
    signs: [
      'Illness circulated through a household, classroom, or office',
      'You are reopening a vacant or high-traffic space',
      'A restoration job left surfaces that need more than dusting',
      'Healthcare-adjacent rooms need a documented wipe protocol',
      'Odor or biofilm-prone areas keep coming back after ordinary cleaning',
    ],
    audiences: [
      'Homes after illness or a restoration project',
      'Schools, universities, and daycares',
      'Gyms, clinics, and corporate suites',
      'Hotels, theaters, and grocery or retail floors',
    ],
    faqs: [
      {
        question: 'Is this the same as a maid service?',
        answer:
          'No. We are not a recurring housekeeper. This is a disinfection protocol with registered products and dwell times, aimed at pathogens and restoration soils — not folding laundry.',
      },
      {
        question: 'Are the products safe around children and pets?',
        answer:
          'We use biodegradable, EPA and FDA approved formulations and follow label directions for re-entry. Tell us who occupies the space so we schedule and ventilate accordingly.',
      },
      {
        question: 'Why not skip wiping and only fog?',
        answer:
          'Fog reaches crevices; it does not lift grease or heavy soil. The 99.9% claim assumes the product contacts a reasonably clean surface. That is why wipe-down is its own service and the first step in a three-step program.',
      },
    ],
    relatedSlugs: [
      'non-thermal-fogging',
      'microbe-shield',
      'mold-damage-restoration',
    ],
    metaTitle: 'Antimicrobial Deep Cleaning Houston TX',
    metaDescription:
      'EPA and FDA approved antimicrobial surface cleaning in Houston. 99.9% kill-rate products, high-touch wipe-down, and restoration-grade disinfection.',
  },
  {
    slug: 'non-thermal-fogging',
    name: 'Non-Thermal Fogging',
    shortName: 'Non-Thermal Fogging',
    formValue: 'Non-Thermal Fogging',
    description:
      'Whole-room sterilization fog that reaches biofilm and hidden surfaces — including spaces that cannot take high heat.',
    icon: 'Wind',
    bullets: [
      'Whole-room droplet coverage',
      'Effective in biofilm matrices',
      'No high-heat equipment',
      'Broad-spectrum microbial kill',
    ],
    category: 'disinfection',
    heroTitle: 'Non-thermal fogging for rooms you cannot wipe inch by inch',
    heroDescription:
      'A fogger puts disinfectant into the air as a fine droplet so it settles on undersides, fabric, and the geometry a cloth never reaches — without baking the building.',
    intro: [
      'Wiping catches what a technician can see and touch. It misses the back of a locker, the top of duct insulation, and the inside of a textured ceiling. Heat-based methods can damage finishes and are a poor fit for many occupied buildings.',
      'Our U.S. patented and trademarked sterilization products are accepted for use in certified organic food-processing settings and are run against applicable ISO quality, performance, and release criteria. The process is designed to kill viable organisms inside a biofilm matrix and is lethal across a broad range of microbes, including gram-negative and gram-positive bacteria, fungi, and molds.',
    ],
    processTitle: 'How a fogging visit works',
    process: [
      {
        title: 'Prep the volume',
        body: 'We cover or remove items that should not be wetted, shut down HVAC as needed, and set a safe perimeter so occupants are not in the mist.',
      },
      {
        title: 'Clean the worst soil first',
        body: 'Heavy soil still gets a wipe. Fog is for coverage, not for skipping a filthy counter.',
      },
      {
        title: 'Fog to dwell',
        body: 'Non-thermal application fills the room. Droplets settle on horizontal and vertical surfaces, including irregular geometry.',
      },
      {
        title: 'Aerate and return',
        body: 'We ventilate per product guidance and tell you when the space can be occupied again. MicrobeShield can follow if you want residual protection.',
      },
    ],
    includes: [
      'Non-thermal fog application for whole rooms and large interiors',
      'Treatment aimed at bacteria, fungi, and mold on hard-to-reach surfaces',
      'Use of products suitable for sensitive commercial environments, including organic food processing where specified',
      'Coordination with surface cleaning so soil does not block the chemistry',
      'Documented areas treated and re-entry timing',
      'Optional pairing with MicrobeShield after the space is dry',
    ],
    signsTitle: 'Fogging is the right tool when',
    signs: [
      'The room has too much surface area to wipe in a single shift',
      'You need coverage on contents, not only countertops',
      'A restoration or illness event affected a whole floor',
      'Heat treatments would damage finishes or inventory',
      'Biofilm-prone equipment or porous contents are in the space',
    ],
    audiences: [
      'Warehouses, labs, and distribution interiors',
      'Gyms, theaters, and hotels with large public rooms',
      'Food-adjacent and production spaces that allow our chemistry',
      'Vehicles, RVs, and transit interiors that need volume treatment',
    ],
    faqs: [
      {
        question: 'Will fogging soak my electronics and paper?',
        answer:
          'We plan the application and protect or remove sensitive items. Tell us about servers, artwork, and records before we start. This is a controlled service, not a rental fogger in a closed bedroom.',
      },
      {
        question: 'Is this a substitute for mold remediation?',
        answer:
          'No. Established growth in drywall still has to be removed. Fogging supports disinfection of remaining surfaces and air-adjacent contents after the reservoir is gone — or as a proactive treatment when there is no bulk mold to tear out.',
      },
      {
        question: 'How is this different from MicrobeShield?',
        answer:
          'Fogging is a kill step in the moment. MicrobeShield is a bonded residual layer meant to keep new microbes from colonizing for up to a year. Many clients do both.',
      },
    ],
    relatedSlugs: [
      'antimicrobial-disinfection',
      'microbe-shield',
      'mold-damage-restoration',
    ],
    metaTitle: 'Non-Thermal Fogging Disinfection Houston TX',
    metaDescription:
      'Non-thermal antimicrobial fogging in Houston for whole-room coverage, biofilm, bacteria, fungi, and mold — without high-heat equipment.',
  },
  {
    slug: 'microbe-shield',
    name: 'MicrobeShield Biofilm Protection',
    shortName: 'MicrobeShield',
    formValue: 'MicrobeShield Protection',
    description:
      'Patented biofilm technology bonds to hard and soft surfaces to prevent bacteria, mold, fungus, and pathogens for up to 1 year.',
    icon: 'BadgeCheck',
    bullets: [
      'Up to 1 year surface protection',
      'Bonds to hard & soft surfaces',
      'Prevents mold, fungus & bacteria',
      'EPA registered & patented',
    ],
    category: 'disinfection',
    heroTitle: 'MicrobeShield: protection that stays after we leave',
    heroDescription:
      'Cleaning ends when the surface dries. MicrobeShield bonds to hard and soft materials and keeps working — up to a year — when a microbe lands on the treated finish.',
    intro: [
      'Most disinfection is a snapshot. The room is clean at 3 p.m. and is a high-touch surface again by Monday. Facilities that cannot fog every week need a residual layer that does not wipe off with the first dusting.',
      'MicrobeShield is a bonded biofilm technology. When a microorganism contacts the treated surface, the molecular structure punctures the cell membrane and the electrical charge disrupts the cell. Applied correctly after a proper clean, it protects hard and soft surfaces for up to one year and is part of Bravo Environment’s EPA-registered, patented product set.',
    ],
    processTitle: 'Apply it on a clean, prepared surface',
    process: [
      {
        title: 'Clean and, if needed, fog first',
        body: 'You cannot bond a protective layer over heavy soil. We complete wipe-down and optional fogging so the shield sits on the actual finish.',
      },
      {
        title: 'Apply to specified surfaces',
        body: 'Hard goods, many textiles, and high-touch building materials can be treated. We mark what is in scope so you know what is protected.',
      },
      {
        title: 'Allow the bond to set',
        body: 'The product needs the manufacturer’s set time. We schedule occupancy around that window rather than rushing a “dry to the touch” guess.',
      },
      {
        title: 'Maintain without stripping it',
        body: 'Routine cleaning can continue. We tell you which harsh strippers or pads to avoid so you do not remove the layer you paid for.',
      },
    ],
    includes: [
      'Application on approved hard and soft surfaces',
      'Up to one year of residual antimicrobial protection when used as directed',
      'Use after restoration, illness, or as a proactive facility treatment',
      'EPA-registered, patented chemistry in Bravo Environment’s program',
      'Guidance for janitorial staff so daily cleaning does not defeat the bond',
      'Documentation of rooms and surface types treated',
    ],
    signsTitle: 'MicrobeShield pays off when',
    signs: [
      'The same restroom, locker, or classroom keeps having odor or complaints',
      'You just finished mold or water work and want a residual barrier',
      'A healthcare-adjacent or childcare space sees constant hand contact',
      'You want protection between scheduled deep-clean visits',
      'Soft surfaces (certain fabrics and finishes) need more than a one-time spray',
    ],
    audiences: [
      'Schools, daycares, and universities',
      'Gyms, clinics, and medical or dental offices',
      'Hotels, offices, and high-touch lobbies',
      'Homes that want a year of extra surface protection after remediation',
    ],
    faqs: [
      {
        question: 'Does this replace regular cleaning?',
        answer:
          'No. Soil still has to be removed. MicrobeShield is a residual defense on a maintained surface, not a license to skip housekeeping.',
      },
      {
        question: 'How long does it last?',
        answer:
          'Up to one year on treated surfaces when applied and maintained as directed. High-abrasion or frequently stripped floors may need an earlier reapplication. We will say so up front.',
      },
      {
        question: 'Is it only for hard surfaces?',
        answer:
          'It bonds to both hard and many soft surfaces. We confirm material compatibility on site so we are not treating a finish the product is not meant for.',
      },
    ],
    relatedSlugs: [
      'antimicrobial-disinfection',
      'non-thermal-fogging',
      'mold-damage-restoration',
    ],
    metaTitle: 'MicrobeShield Biofilm Protection Houston TX',
    metaDescription:
      'Patented MicrobeShield residual protection in Houston. Bonds to hard and soft surfaces for up to 1 year against bacteria, mold, and fungi.',
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service) {
  return service.relatedSlugs
    .map((slug) => getService(slug))
    .filter((related): related is Service => related != null);
}

export function servicesInCategory(categoryId: ServiceCategoryId) {
  return services.filter((service) => service.category === categoryId);
}
