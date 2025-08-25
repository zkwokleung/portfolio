'use client';

import { useEffect, useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import Container from '@/components/ui/Container';
import Card, { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = filter === 'featured' 
    ? portfolioData.projects.filter(project => project.featured)
    : portfolioData.projects;

  return (
    <section id="projects" className="py-20 bg-foreground/[0.02]">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={cn(
              'text-center mb-12 transition-all duration-1000',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and passion for development
            </p>
          </div>

          {/* Filter Buttons */}
          <div
            className={cn(
              'flex justify-center gap-4 mb-12 transition-all duration-1000 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              size="sm"
            >
              All Projects ({portfolioData.projects.length})
            </Button>
            <Button
              variant={filter === 'featured' ? 'default' : 'outline'}
              onClick={() => setFilter('featured')}
              size="sm"
            >
              Featured ({portfolioData.projects.filter(p => p.featured).length})
            </Button>
          </div>

          {/* Projects Grid */}
          <div
            className={cn(
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-400',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <div
            className={cn(
              'text-center mt-16 transition-all duration-1000 delay-600',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                I&apos;m always working on new projects and experiments. Check out my GitHub for the latest updates
                and feel free to reach out if you&apos;d like to collaborate!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open('https://github.com/alex', '_blank')}
                  className="min-w-[150px]"
                >
                  View GitHub
                </Button>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="min-w-[150px]"
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

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isValidUrl = (url?: string) => {
    return url && url !== '#' && url.trim() !== '';
  };

  const hasValidLiveUrl = isValidUrl(project.liveUrl);
  const hasValidGithubUrl = isValidUrl(project.githubUrl);

  return (
    <Card
      hover
      className={cn(
        'group relative overflow-hidden transition-all duration-300',
        'hover:shadow-lg hover:shadow-foreground/5'
      )}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="default" className="text-xs">
            Featured
          </Badge>
        </div>
      )}

      <CardHeader>
        {/* Project Image Placeholder */}
        <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
            <div className="text-4xl font-bold text-foreground/30">
              {project.title.split(' ').map(word => word[0]).join('')}
            </div>
          </div>
          
          {/* Overlay with links - only show if we have valid links */}
          {(hasValidLiveUrl || hasValidGithubUrl) && (
            <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
              {hasValidLiveUrl && (
                <Button
                  size="sm"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <ExternalLinkIcon className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              )}
              {hasValidGithubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                >
                  <GitHubIcon className="w-4 h-4 mr-2" />
                  Code
                </Button>
              )}
            </div>
          )}
        </div>

        <CardTitle className="group-hover:text-foreground/80 transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <Badge key={techIndex} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      {(hasValidLiveUrl || hasValidGithubUrl) && (
        <CardFooter>
          <div className="flex gap-2 w-full">
            {hasValidLiveUrl && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open(project.liveUrl, '_blank')}
                className={cn(
                  "flex items-center justify-center",
                  hasValidGithubUrl ? "flex-1" : "w-full"
                )}
              >
                <ExternalLinkIcon className="w-4 h-4 mr-2" />
                Demo
              </Button>
            )}
            {hasValidGithubUrl && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className={cn(
                  "flex items-center justify-center",
                  hasValidLiveUrl ? "flex-1" : "w-full"
                )}
              >
                <GitHubIcon className="w-4 h-4 mr-2" />
                Code
              </Button>
            )}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}

// Simple icons
function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}