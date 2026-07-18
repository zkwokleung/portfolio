import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'secondary' | 'outline' | 'skill';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const badgeVariants = {
  default: 'bg-accent text-accent-contrast',
  secondary: 'bg-surface-subtle text-foreground',
  outline: 'border border-border bg-surface text-foreground',
  skill: 'border border-accent/20 bg-accent/10 text-foreground',
};

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium leading-none',
        badgeVariants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
