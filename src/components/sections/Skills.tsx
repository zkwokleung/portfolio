'use client';

import { useEffect, useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

type SkillCategory = 'all' | 'languages' | 'frontend' | 'backend' | 'specialization' | 'devops';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with delays
          setTimeout(() => {
            const allSkills = showAllSkills ? [
              ...portfolioData.skills.languages,
              ...portfolioData.skills.frontend,
              ...portfolioData.skills.backend,
              ...portfolioData.skills.specialization,
              ...portfolioData.skills.devops
            ] : portfolioData.skills.featured;
            allSkills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => [...prev, skill.name]);
              }, index * 100);
            });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [showAllSkills]);

  const categories = showAllSkills ? [
    { key: 'all' as const, label: 'All Skills', count: 0 },
    { key: 'languages' as const, label: 'Languages', count: portfolioData.skills.languages.length },
    { key: 'frontend' as const, label: 'Frontend', count: portfolioData.skills.frontend.length },
    { key: 'backend' as const, label: 'Backend', count: portfolioData.skills.backend.length },
    { key: 'specialization' as const, label: 'Specialization', count: portfolioData.skills.specialization.length },
    { key: 'devops' as const, label: 'DevOps', count: portfolioData.skills.devops.length },
  ] : [
    { key: 'all' as const, label: 'Featured Skills', count: portfolioData.skills.featured.length },
  ];

  const getFilteredSkills = () => {
    if (!showAllSkills) {
      return portfolioData.skills.featured;
    }

    switch (activeCategory) {
      case 'languages':
        return portfolioData.skills.languages;
      case 'frontend':
        return portfolioData.skills.frontend;
      case 'backend':
        return portfolioData.skills.backend;
      case 'specialization':
        return portfolioData.skills.specialization;
      case 'devops':
        return portfolioData.skills.devops;
      default:
        return [
          ...portfolioData.skills.languages,
          ...portfolioData.skills.frontend,
          ...portfolioData.skills.backend,
          ...portfolioData.skills.specialization,
          ...portfolioData.skills.devops
        ];
    }
  };

  return (
    <section id="skills" className="py-20">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={cn(
              'text-center mb-12 transition-all duration-1000',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* View Toggle and Category Filter */}
          <div
            className={cn(
              'mb-12 transition-all duration-1000 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            {/* View Toggle */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => {
                  setShowAllSkills(!showAllSkills);
                  setActiveCategory('all');
                  setAnimatedSkills([]);
                }}
                className="px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-200"
              >
                {showAllSkills ? 'Show Featured Skills' : 'View All Skills'}
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    activeCategory === category.key
                      ? 'bg-foreground text-background'
                      : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
                  )}
                >
                  {category.label}
                  {category.count > 0 && (
                    <span className="ml-2 px-2 py-0.5 bg-foreground/10 rounded-full text-xs">
                      {category.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div
            className={cn(
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-400',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            {getFilteredSkills().map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                isAnimated={animatedSkills.includes(skill.name)}
              />
            ))}
          </div>

          {/* Skills Summary */}
          <div
            className={cn(
              'mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-600',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <div className="text-center p-6 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg border border-indigo-500/20">
              <div className="text-2xl font-bold text-indigo-600 mb-2">Full-Stack</div>
              <div className="text-sm text-foreground/70">
                Modern web development with JavaScript, TypeScript, React, Next.js, Laravel, and Node.js
              </div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg border border-orange-500/20">
              <div className="text-2xl font-bold text-orange-600 mb-2">Specialization</div>
              <div className="text-sm text-foreground/70">
                Game development with Unity, AI/ML integration, and computer vision solutions
              </div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg border border-purple-500/20">
              <div className="text-2xl font-bold text-purple-600 mb-2">DevOps</div>
              <div className="text-sm text-foreground/70">
                Docker, Kubernetes, AWS, SEO optimization, and modern development tools
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface SkillCardProps {
  skill: {
    name: string;
    level: number;
    category: string;
  };
  index: number;
  isAnimated: boolean;
}

function SkillCard({ skill, index, isAnimated }: SkillCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'languages':
        return 'from-indigo-500 to-indigo-600';
      case 'frontend':
        return 'from-blue-500 to-blue-600';
      case 'backend':
        return 'from-green-500 to-green-600';
      case 'specialization':
        return 'from-orange-500 to-orange-600';
      case 'devops':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div
      className={cn(
        'bg-background border border-foreground/10 rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:border-foreground/20',
        'transform',
        isAnimated ? 'scale-100' : 'scale-95'
      )}
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">{skill.name}</h3>
        <Badge variant="secondary" className="text-xs">
          {skill.category}
        </Badge>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-foreground/70">Proficiency</span>
          <span className="text-sm font-medium">{skill.level}%</span>
        </div>
        
        <div className="w-full bg-foreground/10 rounded-full h-2 overflow-hidden">
          <div
            className={cn(
              'h-full bg-gradient-to-r transition-all duration-1000 ease-out',
              getCategoryColor(skill.category)
            )}
            style={{
              width: isAnimated ? `${skill.level}%` : '0%',
            }}
          />
        </div>
      </div>
    </div>
  );
}