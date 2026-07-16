'use client';

import { useEffect, useState } from 'react';
import { portfolioData, type ProjectCategory } from '@/data/portfolio';
import Container from '@/components/ui/Container';
import Button, { ButtonLink } from '@/components/ui/Button';
import ProjectCard from '@/components/sections/ProjectCard';
import { cn } from '@/lib/utils';

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
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<ProjectFilter>('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.01 },
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = portfolioData.projects.filter((project) =>
    matchesFilter(project.category, filter),
  );

  return (
    <section
      id='projects'
      aria-labelledby='projects-heading'
      className='bg-foreground/[0.02] py-20'
    >
      <Container>
        <div className='mx-auto max-w-6xl'>
          <div
            className={cn(
              'mb-12 text-center transition-all duration-1000',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            )}
          >
            <h2
              id='projects-heading'
              className='mb-4 text-3xl font-bold md:text-4xl'
            >
              Selected Work
            </h2>
            <p className='mx-auto max-w-2xl text-lg text-foreground/70'>
              Native utilities, developer tools, and medical education apps
              built to solve practical problems.
            </p>
          </div>

          <div
            role='group'
            aria-label='Filter projects by category'
            className={cn(
              'mb-12 flex flex-wrap justify-center gap-3 transition-all delay-200 duration-1000',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            )}
          >
            {projectFilters.map((projectFilter) => {
              const count = portfolioData.projects.filter((project) =>
                matchesFilter(project.category, projectFilter.value),
              ).length;

              return (
                <Button
                  key={projectFilter.value}
                  type='button'
                  variant={
                    filter === projectFilter.value ? 'default' : 'outline'
                  }
                  size='sm'
                  aria-pressed={filter === projectFilter.value}
                  onClick={() => setFilter(projectFilter.value)}
                >
                  {projectFilter.label} ({count})
                </Button>
              );
            })}
          </div>

          <div
            className={cn(
              'grid grid-cols-1 gap-6 transition-all delay-400 duration-1000 md:grid-cols-2 lg:grid-cols-3',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            )}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div
            className={cn(
              'mt-16 text-center transition-all delay-600 duration-1000',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            )}
          >
            <div className='rounded-lg border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8'>
              <h3 className='mb-4 text-2xl font-bold'>Want to see more?</h3>
              <p className='mx-auto mb-6 max-w-2xl text-foreground/70'>
                I&apos;m always working on new projects and experiments. Check
                out my GitHub for the latest updates and feel free to reach out
                if you&apos;d like to collaborate!
              </p>
              <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                <ButtonLink
                  href='https://github.com/zkwokleung'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='min-w-[150px]'
                >
                  View GitHub
                </ButtonLink>
                <Button
                  type='button'
                  variant='outline'
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className='min-w-[150px]'
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
