import Badge from '@/components/ui/Badge';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { careerData } from '@/data/career';
import type { Education as EducationRecord } from '@/data/types';

export default function Education() {
  return (
    <section
      id='education'
      aria-labelledby='education-heading'
      className='scroll-mt-20 bg-surface-subtle py-24 sm:py-32'
    >
      <Container>
        <SectionHeading
          headingId='education-heading'
          title='Education'
          description='Engineering and game-development programs that established the technical foundations behind my professional work.'
        />

        <ol className='relative mx-auto mt-14 max-w-5xl space-y-8 border-l border-border pl-6 sm:pl-10'>
          {careerData.education.map((education) => (
            <li key={education.id} className='relative'>
              <span
                aria-hidden='true'
                className='absolute -left-[1.94rem] top-7 size-3 rounded-full border-2 border-surface-subtle bg-accent shadow-sm sm:-left-[2.94rem]'
              />
              <EducationItem education={education} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function EducationItem({ education }: { education: EducationRecord }) {
  return (
    <article className='rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8'>
      <header className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
        <div>
          <h3 className='text-xl font-bold tracking-tight text-foreground sm:text-2xl'>
            {education.degree}
          </h3>
          <p className='mt-1 font-medium text-foreground'>
            {education.institution}
          </p>
          <p className='mt-1 text-sm text-muted'>{education.location}</p>
        </div>
        <div className='shrink-0 sm:text-right'>
          <p className='text-sm font-semibold text-muted'>
            {education.duration}
          </p>
          <Badge variant='outline' className='mt-2'>
            GPA {education.gpa}
          </Badge>
        </div>
      </header>

      <p className='mt-5 max-w-4xl leading-7 text-muted'>
        {education.description}
      </p>

      <div className='mt-7 grid gap-8 lg:grid-cols-2'>
        <div>
          <h4 className='text-sm font-semibold text-foreground'>
            Key achievements
          </h4>
          <DetailList items={education.achievements} />
        </div>
        <div>
          <h4 className='text-sm font-semibold text-foreground'>
            Relevant projects
          </h4>
          <DetailList items={education.projects} />
        </div>
      </div>

      <div className='mt-8 border-t border-border pt-6'>
        <h4 className='text-sm font-semibold text-foreground'>Coursework</h4>
        <ul className='mt-3 flex flex-wrap gap-2'>
          {education.coursework.map((course) => (
            <li key={course}>
              <Badge variant='skill'>{course}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className='mt-3 space-y-2.5'>
      {items.map((item) => (
        <li key={item} className='flex gap-3 text-sm leading-6 text-muted'>
          <span
            aria-hidden='true'
            className='mt-2 size-1.5 shrink-0 rounded-full bg-accent'
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
