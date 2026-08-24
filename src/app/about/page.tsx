import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircleIcon,
  ClockIcon,
  HeartHandshakeIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from 'lucide-react';

import { CredentialLogos } from '@/components/credential-logos';
import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

const description =
  'Bravo Environment, Inc. restores Houston properties after water, mold, fire, and disaster — then treats the indoor environment with EPA and FDA approved antimicrobial technology. Because We Care.';

export const metadata: Metadata = {
  title: 'About Bravo Environment | Houston Restoration & Disinfection',
  description,
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title: 'About Bravo Environment',
    description:
      'A Houston restoration company that treats the building and the biology of the indoor space — EPA/FDA approved products, NORMI-informed mold work, and hours until 11:45 PM.',
    type: 'website',
  },
};

const careStandards = [
  {
    n: '01',
    title: 'Stop the loss while it is still moving',
    body: 'Water wicks. Smoke odors migrate. Mold does not wait for a convenient appointment. We extract, contain, and dry first — then we talk about finishes.',
  },
  {
    n: '02',
    title: 'Treat what you cannot see',
    body: 'A dry wall can still carry a biofilm. Our antimicrobial program uses EPA and FDA approved chemistry, non-thermal fogging, and MicrobeShield residual protection so the space is safer to occupy — not just visually clean.',
  },
  {
    n: '03',
    title: 'Leave a record, not just a receipt',
    body: 'Insurance, property managers, and school facilities all need the same thing: what was wet, what was removed, what was treated, and what comes next. Documentation is part of the job.',
  },
];

const facts = [
  { value: '11:45 PM', label: 'Last call, Monday–Saturday' },
  { value: '99.9%', label: 'Laboratory-tested kill rate' },
  { value: '1 year', label: 'MicrobeShield residual protection' },
  { value: 'Houston', label: 'Homes, schools, clinics, and commercial interiors' },
];

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${site.name}`,
    url: `${site.url}/about`,
    description,
    mainEntity: {
      '@type': 'HomeAndConstructionBusiness',
      name: site.name,
      slogan: 'Because We Care',
      telephone: site.phone,
      email: site.email,
      areaServed: 'Greater Houston, TX',
      url: site.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="About Bravo Environment"
        title="Because We Care is the job, not the slogan."
        description="We restore Houston properties after water, mold, fire, and disaster — then we treat the indoor environment so the building is dry, documented, and safer to live or work in."
        image="/hero/mold-containment.jpg"
        imageAlt="Bravo Environment technicians containing and treating an indoor restoration space"
      >
        <Button asChild className="h-11 px-6 font-semibold">
          <Link href="/contact">Get a free quote</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-11 px-6 border-white/20 bg-black/35"
        >
          <a href={site.phoneHref}>
            <PhoneIcon className="size-4" />
            {site.phone}
          </a>
        </Button>
      </PageHero>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Houston, TX
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
              This climate does not forgive a half-finished restoration.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Indoor flooding does not stay on the floor. In Gulf humidity, a
                leak that would dry out somewhere else becomes swollen wood,
                a smell in the HVAC, and a mold problem within days. Fire
                residue and trauma scenes have the same rule: if you only
                treat what you can see, it comes back.
              </p>
              <p>
                Bravo Environment, Inc. is a full-service restoration company
                built around that reality. We specialize in property restoration
                and antimicrobial disinfection — eliminating toxic contaminants
                from indoor environments across Houston and surrounding
                communities. The tagline on the truck is the operating
                instruction: <span className="text-foreground italic">Because We Care</span>.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border">
              <Image
                src="/hero/water-extraction.jpg"
                alt="Water extraction during a Houston restoration job"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card/30">
        <SectionHeading
          eyebrow="What care looks like here"
          title="Restore the structure. Then treat the biology."
          description="Most restoration stops at dry, demo, and paint. Bravo runs a second program in the same visit: EPA and FDA approved disinfection, fogging when the room needs whole-volume coverage, and MicrobeShield when the surface needs protection that stays after we leave."
        />
        <Stagger className="grid gap-5 md:grid-cols-3">
          {careStandards.map((item) => (
            <StaggerItem key={item.n}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <p className="mb-4 font-heading text-sm font-bold tracking-[0.2em] text-primary">
                  {item.n}
                </p>
                <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="stripe-pattern">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="How we show up"
              title="Occupied spaces. Laboratory-grade chemistry. Human hours."
            />
            <ul className="space-y-4">
              {[
                {
                  icon: HeartHandshakeIcon,
                  title: 'Families, schools, and clinics — not empty warehouses',
                  body: 'The protocol changes with the building. The chemistry does not. We use biodegradable, EPA and FDA approved products in homes with pets, classrooms, healthcare, and commercial interiors.',
                },
                {
                  icon: ShieldCheckIcon,
                  title: 'Certified inspectors, OSHA-informed job sites',
                  body: 'NORMI-informed mold work. OSHA-informed procedures on occupied and vacant buildings. Insurance documentation with every job — not a photo dump after the fact.',
                },
                {
                  icon: ClockIcon,
                  title: 'Available until 11:45 PM, six days a week',
                  body: 'Monday through Saturday, 5:00 AM to 11:45 PM. Sunday by appointment. Water, fire, and mold do not keep office hours, and neither do we on the days that matter.',
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.08} className="space-y-4">
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-border">
              <Image
                src="/services/antimicrobial-disinfection.jpg"
                alt="Antimicrobial disinfection of an occupied indoor environment"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="font-heading text-xl font-bold italic text-primary">
                &ldquo;Because We Care&rdquo;
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                It means we do not rebuild over a wet stud, fog a greasy
                counter and call it disinfection, or leave a family with a
                smell and no report. Restoration is the trade. Care is the
                standard we hold the trade to.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card/30">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <FadeIn key={fact.label}>
              <div className="rounded-2xl border border-border bg-card px-5 py-6">
                <p className="font-heading text-2xl font-bold text-primary">
                  {fact.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{fact.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Certified &amp; approved"
          title="The standards behind the chemistry"
          description="Our disinfection products are registered, approved, and patented with the U.S. EPA, FDA, and U.S. Patent and Trademark Office. Mold work is NORMI-informed. Job sites follow OSHA-informed practice."
        />
        <FadeIn>
          <CredentialLogos className="mb-8 justify-start" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              'EPA and FDA approved, biodegradable antimicrobial products',
              'U.S. patented and trademarked sterilization chemistry',
              'NORMI — National Organization of Remediators and Mold Inspectors',
              'OSHA-informed procedures and waste handling',
              'Insurance-ready moisture mapping and job documentation',
              'Safe for occupied homes, schools, healthcare, and commercial sites',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm"
              >
                <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Section>

      <div className="border-y border-primary/20 bg-primary/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-bold">
              Need the building dry — and actually safe to occupy?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us what you are seeing. We respond the same day, usually
              within a few hours, until 11:45 PM Monday through Saturday.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="h-11 px-6 font-semibold">
              <Link href="/contact">Get a free quote</Link>
            </Button>
            <Button asChild variant="outline" className="h-11 px-6">
              <a href={site.phoneHref}>
                <PhoneIcon className="size-4" />
                {site.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
