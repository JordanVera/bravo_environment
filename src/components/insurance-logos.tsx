import Image from 'next/image';

import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

export function InsuranceLogos({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        'grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8',
        className,
      )}
      aria-label="Insurance companies we work with"
    >
      {site.insuranceLogos.map((logo) => (
        <li key={logo.id}>
          <div className="flex h-16 items-center justify-center overflow-hidden rounded-lg bg-white px-3 py-2 shadow-sm">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-9 w-auto max-w-full object-contain"
              sizes="148px"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
