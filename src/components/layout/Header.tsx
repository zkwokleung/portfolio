'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { ButtonLink } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { siteData } from '@/data/site';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header
      className='fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 shadow-sm backdrop-blur-md'
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setIsMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <Container>
        <div className='flex h-16 items-center justify-between gap-6'>
          <Link
            href='/'
            className='shrink-0 rounded-sm text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent sm:text-xl'
            onClick={() => setIsMenuOpen(false)}
          >
            {siteData.name}
          </Link>

          <nav aria-label='Primary navigation' className='hidden lg:block'>
            <ul className='flex items-center gap-7'>
              {siteData.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className='rounded-sm text-sm font-medium text-muted transition-colors hover:text-foreground'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='hidden lg:block'>
            <ButtonLink href='#contact' size='sm'>
              Contact
            </ButtonLink>
          </div>

          <button
            ref={menuButtonRef}
            type='button'
            aria-label={
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            aria-controls='mobile-navigation'
            className='relative inline-flex size-11 shrink-0 items-center justify-center rounded-md text-foreground transition-colors hover:bg-surface-subtle lg:hidden'
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span
              aria-hidden='true'
              className={cn(
                'absolute h-0.5 w-6 bg-current transition-transform duration-200',
                isMenuOpen ? 'rotate-45' : '-translate-y-2',
              )}
            />
            <span
              aria-hidden='true'
              className={cn(
                'absolute h-0.5 w-6 bg-current transition-opacity duration-200',
                isMenuOpen && 'opacity-0',
              )}
            />
            <span
              aria-hidden='true'
              className={cn(
                'absolute h-0.5 w-6 bg-current transition-transform duration-200',
                isMenuOpen ? '-rotate-45' : 'translate-y-2',
              )}
            />
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <div
          id='mobile-navigation'
          className='border-t border-border bg-background shadow-lg lg:hidden'
        >
          <Container>
            <nav aria-label='Mobile navigation' className='py-4'>
              <ul className='space-y-1'>
                {siteData.navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className='flex min-h-11 items-center rounded-md px-3 text-base font-medium text-foreground transition-colors hover:bg-surface-subtle'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href='#contact'
                className='mt-3 w-full'
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </ButtonLink>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
