import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'skill';
  className?: string;
}

const badgeVariants = {
  default: 'bg-foreground text-background',
  secondary: 'bg-foreground/10 text-foreground',
  outline: 'border border-foreground/20 text-foreground',
  skill:
    'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-foreground border border-blue-500/20',
};

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200',
        badgeVariants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
