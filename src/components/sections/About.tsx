import Badge from '@/components/ui/Badge';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { careerData } from '@/data/career';
import { projects } from '@/data/projects';
import { siteData } from '@/data/site';

const stats = [
  ...siteData.about.stats.map((stat) => ({
    label: stat.label,
    value: stat.value ?? `${projects.length}+`,
  })),
  {
    label: 'Core Technologies',
    value: `${careerData.skills.featured.length}+`,
  },
];

export default function About() {
  return (
    <section
      id='about'
      aria-labelledby='about-heading'
      className='scroll-mt-20 bg-surface-subtle py-24 sm:py-32'
    >
      <Container>
        <SectionHeading
          headingId='about-heading'
          title={siteData.about.section.title}
          description={siteData.about.section.subtitle}
        />

        <div className='mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:gap-16'>
          <div>
            <div className='space-y-5 text-base leading-8 text-muted sm:text-lg'>
              {siteData.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h3 className='mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-foreground'>
              {siteData.about.section.whatIDoTitle}
            </h3>
            <ul className='mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2'>
              {siteData.about.skills.map((skill) => (
                <li key={skill} className='flex gap-3 text-sm text-muted'>
                  <span aria-hidden='true' className='mt-0.5 text-accent'>
                    &#10003;
                  </span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>

            <h3 className='mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-foreground'>
              {siteData.about.section.coreTechnologiesTitle}
            </h3>
            <ul
              className='mt-4 flex flex-wrap gap-2'
              aria-label='Core technologies'
            >
              {careerData.skills.featured.map((skill) => (
                <li key={skill.name}>
                  <Badge variant='skill'>{skill.name}</Badge>
                </li>
              ))}
            </ul>
          </div>

          <aside
            aria-label='Professional summary'
            className='self-start rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8'
          >
            <dl className='grid gap-6 sm:grid-cols-3 lg:grid-cols-1'>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className='border-b border-border pb-6 last:border-0 last:pb-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6 sm:last:border-r-0 sm:last:pr-0 lg:border-b lg:border-r-0 lg:pb-6 lg:pr-0'
                >
                  <dt className='text-sm font-medium text-muted'>
                    {stat.label}
                  </dt>
                  <dd className='mt-2 text-3xl font-bold tracking-tight text-foreground'>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className='mt-8 border-t border-border pt-8'>
              <h3 className='text-sm font-semibold uppercase tracking-[0.18em] text-foreground'>
                {siteData.about.currentFocus.title}
              </h3>
              <p className='mt-3 text-sm leading-6 text-muted'>
                {siteData.about.currentFocus.description}
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
