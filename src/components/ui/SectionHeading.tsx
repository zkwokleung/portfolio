import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  headingId: string;
  title: string;
  description?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  headingId,
  title,
  description,
  eyebrow,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className='mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent'>
          {eyebrow}
        </p>
      )}
      <h2
        id={headingId}
        className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'
      >
        {title}
      </h2>
      {description && (
        <p className='mt-4 text-base leading-relaxed text-muted sm:text-lg'>
          {description}
        </p>
      )}
    </div>
  );
}
