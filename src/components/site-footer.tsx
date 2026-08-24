import Image from 'next/image';
import Link from 'next/link';
import { MapPinIcon, PhoneIcon, MailIcon, ShieldCheckIcon, ClockIcon } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-primary/30 bg-card">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-border py-5">
          {site.credentials.map((cred) => (
            <div key={cred} className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheckIcon className="size-4 shrink-0 text-primary" />
              {cred}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <Link href="/" className="mb-3 inline-block">
            <Image
              src="/logo/logo.png"
              alt="Bravo Environment"
              width={247}
              height={200}
              className="h-24 w-auto"
            />
          </Link>
          <p className="text-sm italic text-primary/80 mb-3">"Because We Care"</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Property restoration and disinfection services serving Houston, TX and surrounding
            communities. EPA & FDA approved products. NORMI certified.
          </p>
          <div className="mt-5 space-y-2.5 text-sm">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-primary"
            >
              <PhoneIcon className="size-4 shrink-0 text-primary" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <MailIcon className="size-4 shrink-0 text-primary" />
              {site.email}
            </a>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              <p>{site.region} &amp; surrounding areas</p>
            </div>
            <div className="flex items-start gap-2 text-muted-foreground">
              <ClockIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              <div>
                <p className="text-xs">{site.hours.weekdays}</p>
                <p className="text-xs">{site.hours.weekend}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <span className="text-muted-foreground">{s.shortName}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Certifications
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {site.certifications.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <ShieldCheckIcon className="mt-0.5 size-3.5 shrink-0 text-primary" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>EPA & FDA Approved · NORMI Certified · Houston, TX</p>
      </div>
    </footer>
  );
}
