'use client';

import { useEffect, useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export default function Education() {
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

    const element = document.getElementById('education');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id='education' className='py-20'>
      <Container>
        <div className='max-w-4xl mx-auto'>
          {/* Section Header */}
          <div
            className={cn(
              'text-center mb-16 transition-all duration-1000',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8',
            )}
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Education</h2>
            <p className='text-foreground/70 text-lg max-w-2xl mx-auto'>
              My academic journey and the educational experiences that have
              shaped my expertise
            </p>
          </div>

          {/* Timeline */}
          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-foreground/20 hidden md:block'></div>

            {/* Education Items */}
            <div className='space-y-12'>
              {portfolioData.education.map((edu, index) => (
                <EducationItem
                  key={edu.id}
                  education={edu}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface EducationItemProps {
  education: {
    id: string;
    institution: string;
    degree: string;
    duration: string;
    location: string;
    description: string;
    achievements: string[];
    coursework: string[];
    projects: string[];
    gpa: string;
  };
  index: number;
  isVisible: boolean;
}

function EducationItem({ education, index, isVisible }: EducationItemProps) {
  return (
    <div
      className={cn(
        'relative transition-all duration-1000',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      )}
      style={{
        transitionDelay: `${index * 200}ms`,
      }}
    >
      {/* Timeline Dot */}
      <div className='absolute left-6 w-4 h-4 bg-foreground rounded-full border-4 border-background shadow-lg hidden md:block'></div>

      {/* Content */}
      <div className='md:ml-20'>
        <div className='bg-background border border-foreground/10 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300'>
          {/* Header */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4'>
            <div>
              <h3 className='text-xl font-bold text-foreground'>
                {education.degree}
              </h3>
              <div className='flex flex-col sm:flex-row sm:items-center gap-2 text-foreground/70'>
                <span className='font-medium'>{education.institution}</span>
                <span className='hidden sm:block'>•</span>
                <span>{education.location}</span>
              </div>
            </div>
            <div className='flex flex-col items-start sm:items-end mt-2 sm:mt-0'>
              <span className='text-sm font-medium text-foreground/80'>
                {education.duration}
              </span>
              <span className='text-sm text-foreground/60'>
                GPA: {education.gpa}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className='text-foreground/80 mb-4 leading-relaxed'>
            {education.description}
          </p>

          {/* Achievements */}
          <div className='mb-6'>
            <h4 className='font-medium text-foreground mb-3'>
              Key Achievements
            </h4>
            <ul className='space-y-2'>
              {education.achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex} className='flex items-start'>
                  <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                  <span className='text-foreground/80 text-sm'>
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className='mb-6'>
            <h4 className='font-medium text-foreground mb-3'>
              Relevant Projects
            </h4>
            <ul className='space-y-2'>
              {education.projects.map((project, projectIndex) => (
                <li key={projectIndex} className='flex items-start'>
                  <div className='w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                  <span className='text-foreground/80 text-sm'>{project}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coursework */}
          <div>
            <h4 className='font-medium text-foreground mb-3'>
              Relevant Coursework
            </h4>
            <div className='flex flex-wrap gap-2'>
              {education.coursework.map((course, courseIndex) => (
                <Badge
                  key={courseIndex}
                  variant='secondary'
                  className='text-xs'
                >
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
