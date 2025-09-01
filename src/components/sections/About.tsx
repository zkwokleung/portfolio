'use client';

import { useEffect, useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id='about' className='py-20 bg-foreground/[0.02]'>
      <Container>
        <div className='max-w-4xl mx-auto'>
          {/* Section Header */}
          <div
            className={cn(
              'text-center mb-12 transition-all duration-1000',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            )}
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>About Me</h2>
            <p className='text-foreground/70 text-lg max-w-2xl mx-auto'>
              Get to know me better and discover what drives my passion for
              development
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Content */}
            <div
              className={cn(
                'transition-all duration-1000 delay-200',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8',
              )}
            >
              <div className='space-y-6'>
                {portfolioData.about.paragraphs.map((paragraph, index) => (
                  <p key={index} className='text-foreground/80 leading-relaxed'>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quick Stats */}
              <div className='grid grid-cols-2 gap-6 mt-8 p-6 bg-background rounded-lg border border-foreground/10'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-foreground mb-1'>
                    5+
                  </div>
                  <div className='text-sm text-foreground/60'>
                    Years Experience
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-foreground mb-1'>
                    {portfolioData.projects.length}
                  </div>
                  <div className='text-sm text-foreground/60'>
                    Projects Completed
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-foreground mb-1'>
                    20+
                  </div>
                  <div className='text-sm text-foreground/60'>Technologies</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-foreground mb-1'>
                    100K+
                  </div>
                  <div className='text-sm text-foreground/60'>
                    Users Impacted
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Expertise */}
            <div
              className={cn(
                'transition-all duration-1000 delay-400',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8',
              )}
            >
              <h3 className='text-xl font-semibold mb-6'>What I Do</h3>
              <div className='space-y-4'>
                {portfolioData.about.skills.map((skill, index) => (
                  <div key={index} className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
                    <span className='text-foreground/80'>{skill}</span>
                  </div>
                ))}
              </div>

              {/* Core Technologies */}
              <div className='mt-8'>
                <h4 className='text-lg font-medium mb-4'>Core Technologies</h4>
                <div className='flex flex-wrap gap-2'>
                  {[
                    ...portfolioData.skills.frontend.slice(0, 3),
                    ...portfolioData.skills.backend.slice(0, 2),
                    ...portfolioData.skills.specialization.slice(0, 2),
                  ].map((skill, index) => (
                    <Badge key={index} variant='skill' className='text-xs'>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Current Focus */}
              <div className='mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20'>
                <h4 className='text-lg font-medium mb-2'>
                  Currently Exploring
                </h4>
                <p className='text-foreground/70 text-sm'>
                  AI/ML integration in web applications, serverless
                  architectures, and advanced React patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
