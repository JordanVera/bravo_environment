import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  HomeIcon,
  PhoneIcon,
} from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { Section } from '@/components/section';
import { ServiceIcon } from '@/components/service-icon';
import { Button } from '@/components/ui/button';
import { getService } from '@/lib/services';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: `This page does not exist. Get Houston water, mold, and fire restoration or disinfection help from ${site.shortName} — or go back home.`,
  robots: { index: false, follow: true },
};

const featuredSlugs = [
  'water-damage-restoration',
  'mold-damage-restoration',
  'fire-smoke-restoration',
  'disaster-recovery',
] as const;

const destinations = [
  {
    href: '/',
    label: 'Home',
    description: 'Start from the Bravo Environment homepage',
  },
  {
    href: '/services',
    label: 'All services',
    description: 'Restoration, aftermath, and disinfection',
  },
  {
    href: '/about',
    label: 'About Bravo',
    description: 'Who we are and how we work',
  },
  {
    href: '/contact',
    label: 'Get a quote',
    description: 'Tell us about your situation',
  },
] as const;

export default function NotFound() {
  const featured = featuredSlugs
    .map((slug) => getService(slug))
    .filter((service) => service != null);

  return (
    <>
      <Section className="env-grid">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <p
              className="font-heading text-7xl font-bold leading-none tracking-tighter text-primary/25 md:text-8xl"
              aria-hidden
            >
              404
            </p>
            <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Page not found
            </p>
            <h1 className="mt-3 max-w-xl font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              This page didn&rsquo;t survive inspection.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              We mapped this URL. There&rsquo;s no page here — it may have moved
              or the link is out of date. If you need water, mold, fire, or
              disinfection help in Houston, you&rsquo;re still in the right
              place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="h-12 px-6 text-base font-semibold">
                <Link href="/">
                  <HomeIcon className="size-4" />
                  Back to home
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 px-6 text-base">
                <a href={site.phoneHref}>
                  <PhoneIcon className="size-4" />
                  {site.phone}
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border">
              <Image
                src="/hero/water-drying.jpg"
                alt="Structural drying equipment in a water-damaged Houston interior"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />
              <p className="absolute inset-x-4 bottom-4 text-sm font-medium text-zinc-200">
                We restore properties. This URL, we cannot.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card/30">
        <FadeIn>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Keep going
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Common destinations
          </h2>
        </FadeIn>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
          {destinations.map((item) => (
            <StaggerItem key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:glow-primary"
              >
                <div>
                  <p className="text-sm font-bold">{item.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <ArrowRightIcon className="mt-0.5 size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="stripe-pattern">
        <FadeIn>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Need restoration?
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Start with the problem in front of you
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Active water, mold, fire, or storm damage should not wait on a
            missing webpage. Jump to a service or call us until 11:45 PM, Monday
            through Saturday.
          </p>
        </FadeIn>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:glow-primary"
              >
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                  <ServiceIcon
                    name={service.icon}
                    className="size-5 text-primary"
                  />
                </div>
                <p className="text-sm font-bold">{service.shortName}</p>
                <p className="mt-auto flex items-center gap-1 pt-3 text-xs font-semibold text-primary">
                  Learn more
                  <ArrowRightIcon className="size-3 transition-transform group-hover:translate-x-0.5" />
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <div className="border-y border-primary/20 bg-primary/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 text-center md:flex-row md:px-6 md:text-left">
          <div className="flex items-start gap-3">
            <AlertTriangleIcon className="mt-0.5 hidden size-6 shrink-0 text-primary md:block" />
            <div>
              <h2 className="font-heading text-2xl font-bold">
                Active water, mold, or fire damage?
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Don&rsquo;t wait on a missing page. Call {site.shortName}{' '}
                directly — available until 11:45 PM, Monday through Saturday.
              </p>
            </div>
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
