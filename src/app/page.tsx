import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PhoneIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  SparklesIcon,
  FlameIcon,
  DropletIcon,
  WindIcon,
  AlertTriangleIcon,
  HardHatIcon,
  BadgeCheckIcon,
  FlaskConicalIcon,
  LeafIcon,
  ClockIcon,
} from 'lucide-react';

import { HeroKenBurns } from '@/components/hero-ken-burns';
import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { Section, SectionHeading } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Water, Mold & Fire Restoration · Disinfection Services Houston TX',
  description: site.description,
};

const iconMap: Record<string, React.ElementType> = {
  Droplets: DropletIcon,
  ShieldCheck: ShieldCheckIcon,
  Flame: FlameIcon,
  Sparkles: SparklesIcon,
  BadgeCheck: BadgeCheckIcon,
  AlertTriangle: AlertTriangleIcon,
  HardHat: HardHatIcon,
};

const trustItems = [
  { icon: ClockIcon, label: 'Open Until 11:45 PM Daily' },
  { icon: ShieldCheckIcon, label: 'EPA & FDA Approved' },
  { icon: BadgeCheckIcon, label: 'NORMI Certified' },
  { icon: LeafIcon, label: 'Biodegradable Products' },
];

const whyUs = [
  {
    icon: FlaskConicalIcon,
    title: '99.9% Effective Kill Rate',
    body: 'Our EPA/FDA-approved disinfection products are third-party laboratory tested and proven against bacteria, mold, fungus, yeast, and toxic pathogens.',
  },
  {
    icon: BadgeCheckIcon,
    title: 'Up to 1 Year Surface Protection',
    body: 'MicrobeShield biofilm technology bonds permanently to hard and soft surfaces — preventing the development of harmful microbes long after treatment.',
  },
  {
    icon: LeafIcon,
    title: 'Biodegradable & Safe',
    body: 'Our biodegradable disinfection products are registered, approved, and patented by the EPA, FDA, and U.S. Patent Office. Safe for families, pets, and the environment.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Certified & Compliant',
    body: 'NORMI-certified mold inspectors. OSHA-compliant procedures. Chamber of Commerce verified. Insurance documentation provided for every job.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border">
        <HeroKenBurns />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-36">
          <FadeIn>
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Houston, TX &amp; Surrounding Areas
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              Because <span className="text-primary">We Care</span> —
              restoration and disinfection done right.
            </h1>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-200 md:text-lg">
              Water, mold, fire, and disaster restoration combined with
              EPA/FDA-approved antimicrobial disinfection technology. Setting
              new standards for indoor air quality in Houston, TX.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="h-12 px-6 text-base font-semibold">
              <Link href="/contact">Get a free quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-6 border-white/20 bg-black/35 text-base font-medium"
            >
              <a href={site.phoneHref}>
                <PhoneIcon className="size-4" />
                {site.phone}
              </a>
            </Button>
          </FadeIn>
          <FadeIn delay={0.28} className="mt-8 flex flex-wrap gap-4">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-sm font-medium text-zinc-300"
              >
                <item.icon className="size-4 text-primary" />
                {item.label}
              </div>
            ))}
          </FadeIn>
        </div>
      </div>

      {/* Services */}
      <Section id="services">
        <SectionHeading
          eyebrow="Services"
          title="Complete property restoration &amp; protection"
          description="From emergency damage restoration to proactive antimicrobial protection — one company, EPA-approved standards, every step of the way."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? ShieldCheckIcon;
            return (
              <StaggerItem key={service.slug}>
                <Card className="h-full transition-shadow hover:glow-primary">
                  <CardHeader>
                    <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-sm">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircleIcon className="mt-0.5 size-3 shrink-0 text-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* Our Solution — antimicrobial highlight */}
      <Section className="bg-card/30 stripe-pattern">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="Our technology"
              title="Setting new standards for indoor air quality"
              description="Bravo Environment's antimicrobial disinfection technology goes beyond surface cleaning — it creates a lasting biological shield."
            />
            <div className="mt-6 space-y-5">
              {[
                {
                  stat: '99.9%',
                  label: 'Effective kill rate',
                  body: 'Third-party laboratory proven against bacteria, mold, fungus, yeast, and toxic pathogens.',
                },
                {
                  stat: '3 Step',
                  label: 'Treatment process',
                  body: 'Deep surface cleaning → non-thermal fogging sterilization → MicrobeShield biofilm application.',
                },
                {
                  stat: '1 Year',
                  label: 'Surface protection',
                  body: 'Once bonded, MicrobeShield prevents microbial development on both hard and soft surfaces.',
                },
              ].map((item) => (
                <div key={item.stat} className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-sm font-bold text-primary">
                    {item.stat}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{item.label}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="space-y-4">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <FlaskConicalIcon className="mb-3 size-8 text-primary" />
                <h3 className="mb-2 text-lg font-bold">
                  EPA & FDA Approved Products
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Our biodegradable disinfection products are registered,
                  approved, and patented by the U.S. EPA, FDA, and U.S. Patent
                  and Trademark Office. Safe for your family, pets, and the
                  environment.
                </p>
              </CardContent>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Disinfectant' },
                { label: 'Sanitizer' },
                { label: 'Fungicide' },
                { label: 'Algeacide' },
                { label: 'Sporocide' },
                { label: 'Slimicide' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium"
                >
                  <CheckCircleIcon className="size-3.5 shrink-0 text-primary" />
                  {item.label}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Why us */}
      <Section id="why-us">
        <SectionHeading
          eyebrow="Why Bravo"
          title="Science-grade standards. Human-first values."
          description="We combine certified expertise, laboratory-tested technology, and genuine care to deliver results you can trust."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2">
          {whyUs.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full transition-shadow hover:glow-primary">
                <CardHeader>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Lead form */}
      <Section id="quote" className="bg-card/30 env-grid">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              No obligation
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Get a free quote today
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Tell us about your situation and we will provide a clear plan and
              transparent quote. We respond same day — usually within a few
              hours.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2">
              {[
                'Free assessment & quote',
                'EPA-approved treatments',
                'Insurance documentation included',
                'Open until 11:45 PM daily',
              ].map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <CheckCircleIcon className="size-3.5 shrink-0 text-primary" />
                  {p}
                </div>
              ))}
            </div>
            <LeadForm />
          </FadeIn>
        </div>
      </Section>

      {/* Final CTA */}
      <div className="border-y border-primary/20 bg-primary/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-bold">
              Dealing with water, mold, or fire damage?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Don&rsquo;t wait — call us directly or send a message and
              we&rsquo;ll respond today. Available until 11:45 PM, Monday
              through Saturday.
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
