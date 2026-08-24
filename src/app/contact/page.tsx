import type { Metadata } from 'next';
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckIcon,
  MailIcon,
} from 'lucide-react';

import { CredentialLogos } from '@/components/credential-logos';
import { FadeIn } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { LeadForm } from '@/components/lead-form';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Get a Free Quote',
  description: `Request a free quote from ${site.name}. Call ${site.phone} or fill out the form.`,
};

const trustPoints = [
  'Free assessment and transparent quote',
  'EPA & FDA approved products',
  'Insurance documentation included',
  'NORMI certified technicians',
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free, no-obligation"
        title="Tell us about your situation"
        description="Whether it's an active emergency or a proactive disinfection need — fill out the form or call us. We respond same day."
        compact
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <FadeIn className="space-y-6">
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15">
                Houston, TX &amp; Surrounding Areas
              </Badge>
              <h2 className="font-heading text-2xl font-bold tracking-tight">
                Contact us
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                For water, fire, or mold emergencies — call us directly. We are available
                until 11:45 PM Monday through Saturday.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: PhoneIcon,
                  label: 'Phone',
                  value: site.phone,
                  href: site.phoneHref,
                  sub: 'Mon–Sat until 11:45 PM · Sun by appointment',
                },
                {
                  icon: MailIcon,
                  label: 'Email',
                  value: site.email,
                  href: `mailto:${site.email}`,
                  sub: 'Quotes & general inquiries',
                },
                {
                  icon: MapPinIcon,
                  label: 'Service area',
                  value: 'Houston, TX & surrounding areas',
                  sub: 'Contact us to confirm your area',
                },
                {
                  icon: ClockIcon,
                  label: 'Hours',
                  value: site.hours.weekdays,
                  sub: site.hours.weekend,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-semibold">{item.value}</p>
                    )}
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Certified &amp; approved
              </p>
              <CredentialLogos size="sm" className="justify-start" />
            </div>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="mb-6">
              <h2 className="font-heading text-xl font-bold">Request a free quote</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Fill in the details and we will get back to you the same day with a clear
                plan and transparent quote.
              </p>
              <div className="mt-4 space-y-1.5">
                {trustPoints.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckIcon className="size-3.5 shrink-0 text-primary" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <LeadForm />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
