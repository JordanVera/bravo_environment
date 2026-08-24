import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  DropletIcon,
  FlameIcon,
  HammerIcon,
  HardHatIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WindIcon,
  type LucideIcon,
} from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  Droplets: DropletIcon,
  ShieldCheck: ShieldCheckIcon,
  Flame: FlameIcon,
  Sparkles: SparklesIcon,
  BadgeCheck: BadgeCheckIcon,
  AlertTriangle: AlertTriangleIcon,
  HardHat: HardHatIcon,
  Hammer: HammerIcon,
  Wind: WindIcon,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? ShieldCheckIcon;
  return <Icon className={className} />;
}
