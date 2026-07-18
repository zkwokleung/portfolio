import Badge from '@/components/ui/Badge';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { careerData } from '@/data/career';
import type { Experience as ExperienceRecord } from '@/data/types';

export default function Experience() {
  return (
    <section
      id='experience'
      aria-labelledby='experience-heading'
      className='scroll-mt-20 bg-surface py-24 sm:py-32'
    >
      <Container>
        <SectionHeading
          headingId='experience-heading'
          title='Experience'
          description='The roles, teams, and technical challenges that have shaped how I build and deliver software.'
        />

        <ol className='relative mx-auto mt-14 max-w-5xl space-y-8 border-l border-border pl-6 sm:pl-10'>
          {careerData.experience.map((experience) => (
            <li key={experience.id} className='relative'>
              <span
                aria-hidden='true'
                className='absolute -left-[1.94rem] top-7 size-3 rounded-full border-2 border-surface bg-accent shadow-sm sm:-left-[2.94rem]'
              />
              <ExperienceItem experience={experience} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function ExperienceItem({ experience }: { experience: ExperienceRecord }) {
  return (
    <article className='rounded-2xl border border-border bg-surface-subtle p-6 shadow-sm sm:p-8'>
      <header className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
        <div>
          <h3 className='text-xl font-bold tracking-tight text-foreground sm:text-2xl'>
            {experience.position}
          </h3>
          <p className='mt-1 font-medium text-foreground'>
            {experience.company}
          </p>
          <p className='mt-1 text-sm text-muted'>{experience.location}</p>
        </div>
        <p className='shrink-0 text-sm font-semibold text-muted'>
          {experience.duration}
        </p>
      </header>

      <p className='mt-5 max-w-4xl leading-7 text-muted'>
        {experience.description}
      </p>

      <div className='mt-7 grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(16rem,0.7fr)]'>
        <div>
          <h4 className='text-sm font-semibold text-foreground'>
            Key achievements
          </h4>
          <ul className='mt-3 space-y-2.5'>
            {experience.achievements.map((achievement) => (
              <li
                key={achievement}
                className='flex gap-3 text-sm leading-6 text-muted'
              >
                <span
                  aria-hidden='true'
                  className='mt-2 size-1.5 shrink-0 rounded-full bg-accent'
                />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className='text-sm font-semibold text-foreground'>
            Technologies
          </h4>
          <ul className='mt-3 flex flex-wrap gap-2'>
            {experience.technologies.map((technology) => (
              <li key={technology}>
                <Badge variant='skill'>{technology}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
