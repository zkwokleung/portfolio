'use client';

import { useEffect, useState } from 'react';
import ProjectCard from '@/components/sections/ProjectCard';
import Button, { ButtonLink } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects } from '@/data/projects';
import type { ProjectCategory } from '@/data/types';

type ProjectFilter = 'all' | 'software' | 'medical-education' | 'other';

const projectFilters: { label: string; value: ProjectFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Software', value: 'software' },
  { label: 'Medical Education', value: 'medical-education' },
  { label: 'Other', value: 'other' },
];

function matchesFilter(category: ProjectCategory, filter: ProjectFilter) {
  if (filter === 'all') return true;
  if (filter === 'other') {
    return category === 'professional' || category === 'coursework';
  }

  return category === filter;
}

export default function Projects() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const filteredProjects = projects.filter((project) =>
    matchesFilter(project.category, filter),
  );

  useEffect(() => setIsHydrated(true), []);

  return (
    <section
      id='projects'
      aria-labelledby='projects-heading'
      className='scroll-mt-20 bg-surface-subtle py-24 sm:py-32'
    >
      <Container>
        <SectionHeading
          headingId='projects-heading'
          title='Selected Work'
          description='Native utilities, developer tools, and applied products built to solve practical problems across web, mobile, and interactive systems.'
        />

        <div
          hidden={!isHydrated}
          role='group'
          aria-label='Filter projects by category'
          className='mt-10 flex flex-wrap justify-center gap-3'
        >
          {projectFilters.map((projectFilter) => {
            const count = projects.filter((project) =>
              matchesFilter(project.category, projectFilter.value),
            ).length;

            return (
              <Button
                key={projectFilter.value}
                variant={filter === projectFilter.value ? 'default' : 'outline'}
                size='sm'
                aria-pressed={filter === projectFilter.value}
                onClick={() => setFilter(projectFilter.value)}
              >
                {projectFilter.label} ({count})
              </Button>
            );
          })}
        </div>

        <p className='sr-only' aria-live='polite'>
          Showing {filteredProjects.length} projects
        </p>
        <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <aside className='mt-16 rounded-2xl border border-accent/20 bg-accent/10 p-8 text-center sm:p-10'>
          <h3 className='text-2xl font-bold tracking-tight text-foreground'>
            Explore the rest of my work
          </h3>
          <p className='mx-auto mt-3 max-w-2xl leading-7 text-muted'>
            GitHub has the latest utilities and experiments. If a project here
            connects with what you are building, I would be glad to discuss the
            details.
          </p>
          <div className='mt-6 flex flex-col justify-center gap-3 sm:flex-row'>
            <ButtonLink
              href='https://github.com/zkwokleung'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View GitHub profile (opens in a new tab)'
            >
              View GitHub
            </ButtonLink>
            <ButtonLink href='#contact' variant='outline'>
              Get In Touch
            </ButtonLink>
          </div>
        </aside>
      </Container>
    </section>
  );
}
