import Image from 'next/image';
import type { Project, ProjectCategory } from '@/data/portfolio';
import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const categoryLabels: Record<ProjectCategory, string> = {
  software: 'Software',
  'medical-education': 'Medical Education',
  professional: 'Professional',
  coursework: 'Coursework',
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const initials = project.title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 3);

  return (
    <Card className='group flex h-full flex-col overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5'>
      <div className='relative aspect-video overflow-hidden border-b border-foreground/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10'>
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
            className={cn(
              'transition-transform duration-500 group-hover:scale-[1.02]',
              project.image.fit === 'cover' ? 'object-cover' : 'object-contain',
            )}
          />
        ) : (
          <div className='flex h-full items-center justify-center text-4xl font-bold text-foreground/30'>
            {initials}
          </div>
        )}
      </div>

      <CardHeader className='mb-0 p-6 pb-4'>
        <div className='mb-3 flex flex-wrap items-center gap-2'>
          <Badge variant='secondary'>{categoryLabels[project.category]}</Badge>
          {project.featured && <Badge variant='outline'>Recent</Badge>}
        </div>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className='mt-2 leading-relaxed'>
          {project.description}
        </CardDescription>
        <div className='mt-4 border-l-2 border-blue-500/40 pl-3'>
          <p className='mb-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-foreground/60'>
            My contribution
          </p>
          <p className='text-sm leading-relaxed text-foreground/80'>
            {project.contribution}
          </p>
        </div>
      </CardHeader>

      <CardContent className='flex-1 px-6 pb-6'>
        <div className='flex flex-wrap gap-2'>
          {project.technologies.map((technology) => (
            <Badge key={technology} variant='skill'>
              {technology}
            </Badge>
          ))}
        </div>
      </CardContent>

      {project.links.length > 0 && (
        <CardFooter className='mx-6 mb-6 mt-auto flex flex-wrap gap-2'>
          {project.links.map((link) => (
            <ButtonLink
              key={link.url}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${project.title}: ${link.label}`}
              variant='outline'
              size='sm'
              className='min-w-fit flex-1'
            >
              {link.kind === 'github' ? <GitHubIcon /> : <ExternalLinkIcon />}
              {link.label}
            </ButtonLink>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden='true'
      className='mr-2 h-4 w-4'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden='true'
      className='mr-2 h-4 w-4'
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
    </svg>
  );
}
