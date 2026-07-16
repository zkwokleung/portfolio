import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SocialLinks from '@/components/ui/SocialLinks';
import { siteData } from '@/data/site';
import type { ReactNode } from 'react';

interface ContactDetail {
  label: string;
  value: string;
  href?: string;
  icon: ReactNode;
}

const contactDetails: ContactDetail[] = [
  {
    label: siteData.contact.email.label,
    value: siteData.contact.email.value,
    href: siteData.contact.email.href,
    icon: (
      <svg
        aria-hidden='true'
        className='size-5'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.8}
          d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-16 11h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        />
      </svg>
    ),
  },
  {
    label: siteData.contact.phone.label,
    value: siteData.contact.phone.value,
    href: siteData.contact.phone.href,
    icon: (
      <svg
        aria-hidden='true'
        className='size-5'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.8}
          d='M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z'
        />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: siteData.location,
    icon: (
      <svg
        aria-hidden='true'
        className='size-5'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.8}
          d='M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.8}
          d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </svg>
    ),
  },
  {
    label: 'Availability',
    value: siteData.availability,
    icon: (
      <svg
        aria-hidden='true'
        className='size-5'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.8}
          d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id='contact'
      aria-labelledby='contact-heading'
      className='scroll-mt-20 bg-surface py-24 sm:py-32'
    >
      <Container>
        <div className='mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.85fr)] lg:items-start lg:gap-20'>
          <div>
            <SectionHeading
              headingId='contact-heading'
              title="Let's Work Together"
              description="I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll do my best to get back to you."
              eyebrow='Get in touch'
              align='left'
            />

            <a
              href={siteData.contact.email.href}
              className='mt-8 inline-flex min-h-12 items-center rounded-xl bg-foreground px-6 py-3 text-base font-semibold text-background shadow-sm transition-[background-color,transform] duration-200 hover:bg-accent hover:text-accent-foreground active:translate-y-px'
            >
              {siteData.contact.email.label}
            </a>

            <div className='mt-8'>
              <p className='mb-3 text-sm font-medium text-muted'>
                Find me elsewhere
              </p>
              <SocialLinks links={siteData.social} />
            </div>
          </div>

          <div className='rounded-2xl border border-border bg-surface-subtle p-6 shadow-sm sm:p-8'>
            <h3 className='text-lg font-semibold text-foreground'>
              Contact details
            </h3>
            <dl className='mt-6 space-y-6'>
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <dt className='flex items-center gap-4 text-sm font-medium text-muted'>
                    <span className='flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-accent'>
                      {detail.icon}
                    </span>
                    <span>{detail.label}</span>
                  </dt>
                  <dd className='-mt-4 ml-14 break-words text-base font-medium text-foreground'>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className='rounded-sm underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
