import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/layout/Footer';
import Badge from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { caseStudies, getCaseStudyBySlug } from '@/data/case-studies';
import { projects } from '@/data/projects';
import { siteData } from '@/data/site';
import type { ProjectCategory } from '@/data/types';
import { cn } from '@/lib/utils';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

const categoryLabels: Record<ProjectCategory, string> = {
  software: 'Software',
  'medical-education': 'Medical Education',
  professional: 'Professional',
  coursework: 'Coursework',
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

function getPageData(slug: string) {
  const caseStudy = getCaseStudyBySlug(slug);
  const project = caseStudy
    ? projects.find((candidate) => candidate.id === caseStudy.projectId)
    : undefined;

  return caseStudy && project ? { caseStudy, project } : undefined;
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getPageData(slug);

  if (!data) {
    return {
      title: 'Case Study Not Found',
      alternates: { canonical: null },
      openGraph: null,
      twitter: null,
      robots: { index: false, follow: false },
    };
  }

  const title = `${data.project.title} Case Study`;
  const socialTitle = `${title} | ${siteData.name}`;
  const pathname = `/case-studies/${slug}`;
  const socialImage = {
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: `${siteData.name}, ${siteData.title}`,
  };

  return {
    title,
    description: data.caseStudy.summary,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title: socialTitle,
      description: data.caseStudy.summary,
      type: 'website',
      url: pathname,
      locale: 'en_US',
      siteName: `${siteData.name} Portfolio`,
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description: data.caseStudy.summary,
      creator: '@zkwokleung',
      images: [socialImage],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const data = getPageData(slug);

  if (!data) notFound();

  const { caseStudy, project } = data;

  return (
    <>
      <header className='border-b border-border bg-background'>
        <Container>
          <div className='flex min-h-16 items-center justify-between gap-4 py-3'>
            <Link
              href='/'
              className='rounded-sm text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent sm:text-xl'
            >
              {siteData.name}
            </Link>
            <Link
              href='/#projects'
              className='inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'
            >
              Back to selected work
            </Link>
          </div>
        </Container>
      </header>

      <main id='main-content' tabIndex={-1}>
        <article>
          <header className='bg-surface-subtle py-16 sm:py-24'>
            <Container>
              <nav aria-label='Breadcrumb'>
                <ol className='flex flex-wrap items-center gap-2 text-sm text-muted'>
                  <li>
                    <Link href='/' className='rounded-sm hover:text-foreground'>
                      Home
                    </Link>
                  </li>
                  <li aria-hidden='true'>/</li>
                  <li>
                    <Link
                      href='/#projects'
                      className='rounded-sm hover:text-foreground'
                    >
                      Selected Work
                    </Link>
                  </li>
                  <li aria-hidden='true'>/</li>
                  <li aria-current='page' className='text-foreground'>
                    {project.title}
                  </li>
                </ol>
              </nav>

              <div className='mt-10 max-w-4xl'>
                <Badge variant='skill'>
                  {categoryLabels[project.category]} Case Study
                </Badge>
                <h1 className='mt-5 text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl'>
                  {project.title}
                </h1>
                <p className='mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl'>
                  {caseStudy.summary}
                </p>

                <ul
                  className='mt-7 flex flex-wrap gap-2'
                  aria-label='Technologies used'
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>
                      <Badge variant='outline'>{technology}</Badge>
                    </li>
                  ))}
                </ul>

                {project.links.length > 0 && (
                  <div className='mt-8 flex flex-wrap gap-3'>
                    {project.links.map((link) => (
                      <ButtonLink
                        key={link.url}
                        href={link.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`${link.label} for ${project.title} (opens in a new tab)`}
                        variant='outline'
                      >
                        {link.label}
                      </ButtonLink>
                    ))}
                  </div>
                )}
              </div>
            </Container>
          </header>

          <Container className='py-16 sm:py-24'>
            {project.image && (
              <div className='overflow-hidden rounded-2xl border border-border bg-surface-subtle shadow-card'>
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={1200}
                  height={675}
                  priority
                  className={cn(
                    'aspect-video w-full',
                    project.image.fit === 'cover'
                      ? 'object-cover'
                      : 'object-contain',
                  )}
                />
              </div>
            )}

            <dl className='mt-12 grid gap-6 border-y border-border py-8 sm:grid-cols-2 lg:grid-cols-3'>
              <div>
                <dt className='text-xs font-semibold uppercase tracking-[0.16em] text-muted'>
                  Role
                </dt>
                <dd className='mt-2 leading-7 text-foreground'>
                  {caseStudy.role}
                </dd>
              </div>
              <div>
                <dt className='text-xs font-semibold uppercase tracking-[0.16em] text-muted'>
                  Team
                </dt>
                <dd className='mt-2 leading-7 text-foreground'>
                  {caseStudy.team}
                </dd>
              </div>
              {caseStudy.timeline && (
                <div>
                  <dt className='text-xs font-semibold uppercase tracking-[0.16em] text-muted'>
                    Timeline
                  </dt>
                  <dd className='mt-2 leading-7 text-foreground'>
                    {caseStudy.timeline}
                  </dd>
                </div>
              )}
            </dl>

            <div className='mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.7fr)]'>
              <section aria-labelledby='case-study-problem'>
                <h2
                  id='case-study-problem'
                  className='text-3xl font-bold tracking-tight text-foreground'
                >
                  The challenge
                </h2>
                <div className='mt-5 space-y-4 text-base leading-8 text-muted sm:text-lg'>
                  {caseStudy.problem.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <aside className='self-start rounded-2xl border border-border bg-surface-subtle p-6 sm:p-8'>
                <h2 className='text-xl font-bold tracking-tight text-foreground'>
                  Constraints
                </h2>
                <ul className='mt-5 space-y-3'>
                  {caseStudy.constraints.map((constraint) => (
                    <li
                      key={constraint}
                      className='flex gap-3 text-sm leading-6 text-muted'
                    >
                      <span
                        aria-hidden='true'
                        className='mt-2 size-1.5 shrink-0 rounded-full bg-accent'
                      />
                      <span>{constraint}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            <section aria-labelledby='case-study-decisions' className='mt-20'>
              <h2
                id='case-study-decisions'
                className='text-3xl font-bold tracking-tight text-foreground'
              >
                Key decisions
              </h2>
              <div className='mt-8 grid gap-6 md:grid-cols-2'>
                {caseStudy.decisions.map((decision, index) => (
                  <article
                    key={decision.title}
                    className='rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8'
                  >
                    <p className='text-sm font-semibold tabular-nums text-accent'>
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className='mt-3 text-xl font-bold tracking-tight text-foreground'>
                      {decision.title}
                    </h3>
                    <p className='mt-3 leading-7 text-muted'>
                      {decision.description}
                    </p>
                    {decision.tradeoff && (
                      <p className='mt-4 border-l-2 border-accent/50 pl-4 text-sm leading-6 text-muted'>
                        <strong className='text-foreground'>Tradeoff:</strong>{' '}
                        {decision.tradeoff}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>

            <section
              aria-labelledby='case-study-implementation'
              className='mt-20'
            >
              <h2
                id='case-study-implementation'
                className='text-3xl font-bold tracking-tight text-foreground'
              >
                Implementation
              </h2>
              <div className='mt-8 divide-y divide-border border-y border-border'>
                {caseStudy.implementation.map((section) => (
                  <section
                    key={section.title}
                    className='grid gap-4 py-8 lg:grid-cols-[minmax(14rem,0.6fr)_minmax(0,1.4fr)] lg:gap-12'
                  >
                    <h3 className='text-xl font-bold tracking-tight text-foreground'>
                      {section.title}
                    </h3>
                    <div className='space-y-4 leading-7 text-muted'>
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {section.bullets && (
                        <ul className='space-y-2'>
                          {section.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </section>
                ))}
              </div>
            </section>

            <section aria-labelledby='case-study-outcomes' className='mt-20'>
              <h2
                id='case-study-outcomes'
                className='text-3xl font-bold tracking-tight text-foreground'
              >
                Outcomes
              </h2>
              <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                {caseStudy.outcomes.map((outcome) => (
                  <article
                    key={outcome.label}
                    className='rounded-2xl border border-border bg-surface-subtle p-6'
                  >
                    <h3 className='text-sm font-semibold text-muted'>
                      {outcome.label}
                    </h3>
                    {outcome.value && (
                      <p className='mt-2 text-2xl font-bold tracking-tight text-foreground'>
                        {outcome.value}
                      </p>
                    )}
                    <p className='mt-3 text-sm leading-6 text-muted'>
                      {outcome.description}
                    </p>
                    {outcome.source && (
                      <a
                        href={outcome.source}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`View source for ${outcome.label} (opens in a new tab)`}
                        className='mt-4 inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'
                      >
                        View source
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </section>

            {caseStudy.lessons && caseStudy.lessons.length > 0 && (
              <section aria-labelledby='case-study-lessons' className='mt-20'>
                <h2
                  id='case-study-lessons'
                  className='text-3xl font-bold tracking-tight text-foreground'
                >
                  Lessons
                </h2>
                <ul className='mt-6 space-y-3'>
                  {caseStudy.lessons.map((lesson) => (
                    <li key={lesson} className='leading-7 text-muted'>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className='mt-20 border-t border-border pt-8'>
              <ButtonLink href='/#projects' variant='outline'>
                Return to Selected Work
              </ButtonLink>
            </div>
          </Container>
        </article>
      </main>

      <Footer />
    </>
  );
}
