import Badge from '@/components/ui/Badge';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { careerData } from '@/data/career';
import { projects } from '@/data/projects';

const projectTitles = new Map(
  projects.map((project) => [project.id, project.title]),
);

const skillGroups = [
  { label: 'Languages', skills: careerData.skills.languages },
  { label: 'Frontend', skills: careerData.skills.frontend },
  { label: 'Backend', skills: careerData.skills.backend },
  { label: 'Specialization', skills: careerData.skills.specialization },
  { label: 'DevOps', skills: careerData.skills.devops },
];

export default function Skills() {
  return (
    <section
      id='skills'
      aria-labelledby='skills-heading'
      className='scroll-mt-20 bg-surface py-24 sm:py-32'
    >
      <Container>
        <SectionHeading
          headingId='skills-heading'
          title='Skills & Capabilities'
          description='The technical strengths I use to take products from an early idea through architecture, implementation, and delivery.'
        />

        <ol className='mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3'>
          {careerData.capabilities.map((capability, index) => (
            <li key={capability.id} className='h-full'>
              <article className='flex h-full flex-col rounded-2xl border border-border bg-surface-subtle p-6 shadow-sm sm:p-8'>
                <p className='text-sm font-semibold tabular-nums text-accent'>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className='mt-4 text-xl font-bold tracking-tight text-foreground'>
                  {capability.title}
                </h3>
                <p className='mt-3 flex-1 text-sm leading-6 text-muted'>
                  {capability.description}
                </p>

                <h4 className='mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-foreground'>
                  Core stack
                </h4>
                <ul className='mt-3 flex flex-wrap gap-2'>
                  {capability.technologies.map((technology) => (
                    <li key={technology}>
                      <Badge variant='skill'>{technology}</Badge>
                    </li>
                  ))}
                </ul>

                <h4 className='mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-foreground'>
                  Related work
                </h4>
                <ul className='mt-3 space-y-2'>
                  {capability.projectIds.map((projectId) => (
                    <li key={projectId}>
                      <a
                        href={`#project-${projectId}`}
                        className='inline-flex rounded-sm text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'
                      >
                        {projectTitles.get(projectId)}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>

        <div className='mx-auto mt-16 max-w-6xl border-t border-border pt-10'>
          <div className='max-w-2xl'>
            <h3 className='text-2xl font-bold tracking-tight text-foreground'>
              Technical toolkit
            </h3>
            <p className='mt-3 leading-7 text-muted'>
              A broader view of the languages, frameworks, platforms, and
              specialist tools I have worked with.
            </p>
          </div>

          <div className='mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5'>
            {skillGroups.map((group) => (
              <section
                key={group.label}
                aria-labelledby={`skills-${group.label}`}
              >
                <h4
                  id={`skills-${group.label}`}
                  className='text-sm font-semibold text-foreground'
                >
                  {group.label}
                </h4>
                <ul className='mt-3 space-y-2'>
                  {group.skills.map((skill) => (
                    <li key={skill.name} className='text-sm text-muted'>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
