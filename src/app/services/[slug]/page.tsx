import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircleIcon, ChevronRightIcon, PhoneIcon } from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { ServiceCard } from '@/components/service-card';
import { ServiceIcon } from '@/components/service-icon';
import { LeadForm } from '@/components/lead-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  getRelatedServices,
  getService,
  serviceCategories,
  services,
} from '@/lib/services';
import { site } from '@/lib/site';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${site.url}/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const category = serviceCategories.find((item) => item.id === service.category);
  const related = getRelatedServices(service);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.metaDescription,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: site.name,
      telephone: site.phone,
      areaServed: 'Greater Houston, TX',
    },
    areaServed: 'Greater Houston, TX',
    url: `${site.url}/services/${service.slug}`,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `${site.url}/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <PageHero
        eyebrow={category?.name}
        title={service.heroTitle}
        description={service.heroDescription}
        image={service.image}
        imageAlt={service.imageAlt}
      >
        <Button asChild className="h-11 px-6 font-semibold">
          <Link href="/contact">Get a free quote</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className={service.image ? 'h-11 px-6 border-white/20 bg-black/35' : 'h-11 px-6'}
        >
          <a href={site.phoneHref}>
            <PhoneIcon className="size-4" />
            {site.phone}
          </a>
        </Button>
      </PageHero>

      <Section>
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            <li>
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRightIcon className="size-3" />
            </li>
            <li>
              <Link href="/services" className="transition-colors hover:text-foreground">
                Services
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRightIcon className="size-3" />
            </li>
            <li className="font-medium text-foreground" aria-current="page">
              {service.shortName}
            </li>
          </ol>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <FadeIn className="space-y-5">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
              <ServiceIcon name={service.icon} className="size-6 text-primary" />
            </div>
            {service.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-heading text-lg font-bold">What this service includes</h2>
              <ul className="mt-4 space-y-2.5">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card/30">
        <SectionHeading eyebrow="Our process" title={service.processTitle} />
        <div className="grid gap-5 md:grid-cols-2">
          {service.process.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.05}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <p className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/15 text-sm font-bold text-primary">
                  {index + 1}
                </p>
                <h3 className="font-heading text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight">{service.signsTitle}</h2>
            <ul className="mt-6 space-y-3">
              {service.signs.map((sign) => (
                <li key={sign} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  {sign}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="font-heading text-3xl font-bold tracking-tight">Who this service is for</h2>
            <ul className="mt-6 space-y-3">
              {service.audiences.map((audience) => (
                <li
                  key={audience}
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium"
                >
                  {audience}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card/30">
        <SectionHeading
          eyebrow="Questions"
          title={`About ${service.shortName.toLowerCase()}`}
          description="Straight answers for Houston property owners comparing a DIY cleanup to a documented restoration or disinfection job."
        />
        <Accordion type="single" collapsible>
          {service.faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {related.length > 0 ? (
        <Section>
          <SectionHeading
            eyebrow="Related"
            title="Services that often go with this work"
            description="Restoration and disinfection are rarely one product. These are the jobs clients pair with this page."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </Section>
      ) : null}

      <Section id="quote" className="bg-card/30 env-grid">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              No obligation
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Request a quote for {service.shortName.toLowerCase()}
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              The form is pre-selected for this service. Tell us the address and what you are seeing — we respond the same day.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <LeadForm defaultService={service.formValue} />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
