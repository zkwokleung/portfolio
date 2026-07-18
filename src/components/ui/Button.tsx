import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'default' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

const buttonVariants = {
  default:
    'bg-accent text-accent-contrast shadow-sm shadow-accent/15 hover:bg-accent-strong disabled:hover:bg-accent',
  outline:
    'border border-border bg-surface text-foreground shadow-sm hover:border-accent/40 hover:bg-surface-subtle disabled:hover:border-border disabled:hover:bg-surface',
};

const buttonSizes = {
  sm: 'min-h-11 px-3.5 py-2 text-sm',
  md: 'min-h-11 px-4 py-2 text-base',
  lg: 'min-h-12 px-6 py-3 text-lg',
};

function getButtonClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    'inline-flex min-w-fit cursor-pointer select-none items-center justify-center gap-2 rounded-md font-semibold leading-none transition-[background-color,border-color,color,box-shadow,transform] duration-200 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:active:translate-y-0',
    buttonVariants[variant],
    buttonSizes[size],
    className,
  );
}

export default function Button({
  variant = 'default',
  size = 'md',
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={getButtonClassName(variant, size, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={getButtonClassName(variant, size, className)} {...props}>
      {children}
    </a>
  );
}
