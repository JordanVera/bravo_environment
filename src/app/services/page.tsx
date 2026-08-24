import type { Metadata } from 'next';
import Link from 'next/link';
import { PhoneIcon } from 'lucide-react';

import { CredentialLogos } from '@/components/credential-logos';
import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { ServiceCard } from '@/components/service-card';
import { Button } from '@/components/ui/button';
import {
  serviceAudiences,
  serviceCategories,
  servicesInCategory,
} from '@/lib/services';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Property Restoration & Disinfection Services Houston TX',
  description:
    'Water, mold, and fire restoration, disaster recovery, bio-hazard cleanup, antimicrobial cleaning, non-thermal fogging, and MicrobeShield protection in Houston, TX.',
  alternates: { canonical: `${site.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Full-service restoration and antimicrobial disinfection"
        description="Bravo Environment, Inc. is a full-service restoration company. We specialize in property restoration and antimicrobial disinfection — eliminating toxic contaminants from indoor environments across Houston and surrounding communities."
      >
        <Button asChild className="h-11 px-6 font-semibold">
          <Link href="/contact">Get a free quote</Link>
        </Button>
        <Button asChild variant="outline" className="h-11 px-6 bg-black/30">
          <a href={site.phoneHref}>
            <PhoneIcon className="size-4" />
            {site.phone}
          </a>
        </Button>
      </PageHero>

      {serviceCategories.map((category, index) => {
        const categoryServices = servicesInCategory(category.id);
        return (
          <Section
            key={category.id}
            className={index % 2 === 1 ? 'bg-card/30' : undefined}
          >
            <SectionHeading
              eyebrow={`0${index + 1}`}
              title={category.name}
              description={category.description}
            />
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categoryServices.map((service) => (
                <StaggerItem key={service.slug}>
                  <ServiceCard service={service} />
                </StaggerItem>
              ))}
            </Stagger>
          </Section>
        );
      })}

      <Section className="bg-card/30 stripe-pattern">
        <SectionHeading
          eyebrow="Who we serve"
          title="Homes, schools, healthcare, and commercial interiors"
          description="The same EPA and FDA approved products and OSHA-informed procedures apply across occupied spaces — the protocol changes with the building, not the chemistry."
        />
        <CredentialLogos size="sm" className="mb-8 justify-start" />
        <FadeIn>
          <ul className="grid gap-3 sm:grid-cols-2">
            {serviceAudiences.map((audience) => (
              <li
                key={audience}
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium"
              >
                {audience}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Section>

      <div className="border-y border-primary/20 bg-primary/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-bold">
              Not sure which service you need?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Describe the situation and we will point you to the right protocol
              — or come out and assess.
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
