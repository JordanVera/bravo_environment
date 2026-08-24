'use client';

import { ArrowRightIcon, PhoneIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { services } from '@/lib/services';
import { formsubmitEndpoint, site } from '@/lib/site';

export function LeadForm({ defaultService }: { defaultService?: string }) {
  const nextUrl = `${site.url}/thank-you`;

  return (
    <form
      action={formsubmitEndpoint}
      method="POST"
      className="grid gap-5 sm:grid-cols-2"
    >
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="_subject" value={`New quote request — ${site.name}`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <Field label="First name" htmlFor="firstName">
        <Input id="firstName" name="firstName" required autoComplete="given-name" className="h-11" />
      </Field>
      <Field label="Last name" htmlFor="lastName">
        <Input id="lastName" name="lastName" required autoComplete="family-name" className="h-11" />
      </Field>
      <Field label="Email" htmlFor="email">
        <Input id="email" name="email" type="email" required autoComplete="email" className="h-11" />
      </Field>
      <Field label="Phone number" htmlFor="phone">
        <Input id="phone" name="phone" type="tel" required autoComplete="tel" className="h-11" />
      </Field>
      <Field label="Property address / zip" htmlFor="zip" className="sm:col-span-2">
        <Input id="zip" name="zip" required autoComplete="postal-code" className="h-11" />
      </Field>
      <Field label="Service needed" htmlFor="service" className="sm:col-span-2">
        <Select name="service" defaultValue={defaultService ?? ''} required>
          <SelectTrigger id="service" className="h-11 w-full">
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent position="popper">
            {services.map((s) => (
              <SelectItem key={s.slug} value={s.formValue}>
                {s.formValue}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="message">Describe the situation</Label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          placeholder="When did the damage occur? What areas are affected? Is there an active emergency?"
          className="min-h-20"
        />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" className="h-12 w-full px-6 text-base font-semibold">
          Request a free quote
          <ArrowRightIcon className="size-4" />
        </Button>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <PhoneIcon className="size-3.5 shrink-0" />
          For active emergencies, call {site.phone} — available until 11:45 PM daily.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid gap-2 ${className ?? ''}`}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
