import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon } from 'lucide-react';

import { ServiceIcon } from '@/components/service-icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Service } from '@/lib/services';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="block h-full">
      <Card className="relative h-full min-h-80 gap-0 overflow-hidden p-0 py-0 transition-shadow hover:glow-primary">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={`/services/${service.slug}.jpg`}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-black/35" />
        </div>
        <CardHeader className="relative pt-5">
          <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/20 ring-1 ring-white/10 backdrop-blur-sm">
            <ServiceIcon name={service.icon} className="size-5 text-primary" />
          </div>
          <CardTitle className="text-sm text-white">{service.name}</CardTitle>
        </CardHeader>
        <CardContent className="relative mt-auto space-y-3 pb-5">
          <p className="text-xs leading-relaxed text-zinc-200">
            {service.description}
          </p>
          <ul className="space-y-1">
            {service.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 text-xs text-zinc-300"
              >
                <CheckCircleIcon className="mt-0.5 size-3 shrink-0 text-primary" />
                {bullet}
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-1 pt-1 text-xs font-semibold text-primary">
            Learn more
            <ArrowRightIcon className="size-3" />
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
