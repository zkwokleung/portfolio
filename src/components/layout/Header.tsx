'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ButtonLink } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { siteData } from '@/data/site';

export default function Header() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const menuButtonRef = useRef<HTMLElement>(null);

  function closeMenu() {
    if (menuRef.current) menuRef.current.open = false;
  }

  return (
    <header
      className='fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 shadow-sm backdrop-blur-md'
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuRef.current?.open) {
          closeMenu();
          menuButtonRef.current?.focus();
        }
      }}
    >
      <Container>
        <div className='flex h-16 items-center justify-between gap-6'>
          <Link
            href='/'
            className='shrink-0 rounded-sm text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent sm:text-xl'
            onClick={closeMenu}
          >
            {siteData.name}
          </Link>

          <nav aria-label='Primary navigation' className='hidden lg:block'>
            <ul className='flex items-center gap-7'>
              {siteData.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className='rounded-sm text-sm font-medium text-muted transition-colors hover:text-foreground'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className='hidden lg:block'>
            <ButtonLink href='#contact' size='sm'>
              Contact
            </ButtonLink>
          </div>

          <details
            id='mobile-menu-disclosure'
            ref={menuRef}
            className='group lg:hidden'
          >
            <summary
              ref={menuButtonRef}
              role='button'
              aria-controls='mobile-navigation'
              className='relative inline-flex size-11 shrink-0 cursor-pointer list-none items-center justify-center rounded-md text-foreground transition-colors hover:bg-surface-subtle [&::-webkit-details-marker]:hidden'
            >
              <span className='sr-only group-open:hidden'>
                Open navigation menu
              </span>
              <span className='sr-only hidden group-open:inline'>
                Close navigation menu
              </span>
              <span
                aria-hidden='true'
                className='absolute h-0.5 w-6 -translate-y-2 bg-current transition-transform duration-200 group-open:translate-y-0 group-open:rotate-45'
              />
              <span
                aria-hidden='true'
                className='absolute h-0.5 w-6 bg-current transition-opacity duration-200 group-open:opacity-0'
              />
              <span
                aria-hidden='true'
                className='absolute h-0.5 w-6 translate-y-2 bg-current transition-transform duration-200 group-open:translate-y-0 group-open:-rotate-45'
              />
            </summary>

            <div
              id='mobile-navigation'
              className='absolute inset-x-0 top-full border-t border-border bg-background shadow-lg'
            >
              <Container>
                <nav aria-label='Mobile navigation' className='py-4'>
                  <ul className='space-y-1'>
                    {siteData.navigation.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className='flex min-h-11 items-center rounded-md px-3 text-base font-medium text-foreground transition-colors hover:bg-surface-subtle'
                          onClick={closeMenu}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href='#contact'
                    className='mt-3 w-full'
                    onClick={closeMenu}
                  >
                    Contact
                  </ButtonLink>
                </nav>
              </Container>
            </div>
          </details>

          <noscript className='lg:hidden'>
            <style>{'#mobile-menu-disclosure { display: none; }'}</style>
            <nav aria-label='Mobile navigation'>
              <ul className='flex items-center gap-3 text-xs font-medium text-muted'>
                {siteData.navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className='rounded-sm hover:text-foreground'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </noscript>
        </div>
      </Container>
    </header>
  );
}
