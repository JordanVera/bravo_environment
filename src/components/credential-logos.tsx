import Image from 'next/image';

import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

type LogoId = (typeof site.credentialLogos)[number]['id'];

const sizeClass = {
  sm: 'h-8',
  md: 'h-10 md:h-12',
} as const;

export function CredentialLogos({
  className,
  size = 'md',
  ids,
}: {
  className?: string;
  size?: keyof typeof sizeClass;
  ids?: readonly LogoId[];
}) {
  const logos = ids
    ? site.credentialLogos.filter((logo) => ids.includes(logo.id))
    : site.credentialLogos;

  return (
    <ul
      className={cn('flex flex-wrap items-center gap-3', className)}
      aria-label="Certifications and approvals"
    >
      {logos.map((logo) => (
        <li key={logo.id}>
          <div className="flex items-center justify-center rounded-md bg-white px-2.5 py-1.5 shadow-sm">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={cn('w-auto object-contain', sizeClass[size])}
              sizes={size === 'sm' ? '96px' : '140px'}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
