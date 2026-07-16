import { ButtonLink } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import SocialLinks from '@/components/ui/SocialLinks';
import { careerData } from '@/data/career';
import { siteData } from '@/data/site';

export default function Hero() {
  return (
    <section
      id='top'
      aria-labelledby='hero-heading'
      className='relative isolate min-h-svh scroll-mt-20 overflow-hidden bg-background pt-16'
    >
      <div
        aria-hidden='true'
        className='absolute inset-0 -z-10 overflow-hidden'
      >
        <div className='absolute -right-32 top-16 size-[28rem] rounded-full bg-accent/10 blur-3xl sm:size-[36rem]' />
        <div className='absolute -left-40 bottom-0 size-80 rounded-full bg-accent/5 blur-3xl' />
      </div>

      <Container className='flex min-h-[calc(100svh-4rem)] items-center py-20 sm:py-24'>
        <div className='grid w-full gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:items-center lg:gap-16'>
          <div className='max-w-3xl'>
            <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-accent'>
                {siteData.hero.greeting}
              </p>
              <p className='inline-flex items-center gap-2 text-sm font-medium text-muted'>
                <span
                  aria-hidden='true'
                  className='size-2 rounded-full bg-accent'
                />
                {siteData.availability}
              </p>
            </div>

            <h1
              id='hero-heading'
              className='mt-6 text-4xl font-bold tracking-[-0.045em] text-foreground min-[360px]:text-5xl sm:text-6xl lg:text-7xl'
            >
              {siteData.name}
            </h1>
            <p className='mt-4 text-base font-semibold text-muted sm:text-lg'>
              {siteData.title} based in {siteData.location}
            </p>
            <p className='mt-8 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl'>
              {siteData.hero.tagline}
            </p>
            <p className='mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8'>
              {siteData.hero.description}
            </p>

            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <ButtonLink href='#projects' size='lg'>
                View Selected Work
              </ButtonLink>
              <ButtonLink href='#contact' variant='outline' size='lg'>
                Start a Conversation
              </ButtonLink>
            </div>

            <div className='mt-10 flex flex-wrap items-center gap-4'>
              <p className='text-sm font-medium text-muted'>Find me online</p>
              <SocialLinks links={siteData.social} variant='bare' />
            </div>
          </div>

          <aside className='rounded-2xl border border-border bg-surface/85 p-6 shadow-card backdrop-blur-sm sm:p-8'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-accent'>
              Capability map
            </p>
            <h2 className='mt-4 text-2xl font-bold tracking-tight text-foreground'>
              From product surface to system core.
            </h2>
            <ol className='mt-6 divide-y divide-border'>
              {careerData.capabilities.map((capability, index) => (
                <li
                  key={capability.id}
                  className='grid grid-cols-[2rem_1fr] gap-3 py-5 first:pt-0 last:pb-0'
                >
                  <span className='text-sm font-semibold tabular-nums text-accent'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className='font-semibold text-foreground'>
                      {capability.title}
                    </h3>
                    <p className='mt-1 text-sm leading-6 text-muted'>
                      {capability.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <a
              href='#skills'
              className='mt-7 inline-flex min-h-11 items-center rounded-sm font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'
            >
              Explore skills and capabilities
            </a>
          </aside>
        </div>
      </Container>
    </section>
  );
}
