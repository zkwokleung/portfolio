import type {
  CareerData,
  DisplaySkill,
  SkillCategory,
  SkillInventoryItem,
  SkillsData,
} from '@/data/types';

export const skillInventory = [
  { name: 'JavaScript', level: 95, category: 'Languages', featured: true },
  { name: 'TypeScript', level: 95, category: 'Languages', featured: true },
  { name: 'C#', level: 95, category: 'Languages', featured: true },
  { name: 'Python', level: 85, category: 'Languages', featured: true },
  { name: 'PHP', level: 85, category: 'Languages', featured: true },
  { name: 'Kotlin', level: 85, category: 'Languages', featured: false },
  { name: 'Dart', level: 90, category: 'Languages', featured: false },
  { name: 'Java', level: 85, category: 'Languages', featured: false },
  { name: 'C++', level: 65, category: 'Languages', featured: false },
  { name: 'React', level: 95, category: 'Frontend', featured: true },
  { name: 'Next.js', level: 95, category: 'Frontend', featured: true },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend', featured: true },
  { name: 'Flutter', level: 85, category: 'Frontend', featured: true },
  { name: 'HTML/CSS', level: 90, category: 'Frontend', featured: false },
  { name: 'Laravel', level: 85, category: 'Backend', featured: true },
  { name: 'Node.js', level: 85, category: 'Backend', featured: true },
  { name: 'PostgreSQL', level: 75, category: 'Backend', featured: false },
  { name: 'MongoDB', level: 70, category: 'Backend', featured: false },
  { name: 'MySQL', level: 80, category: 'Backend', featured: false },
  { name: 'Supabase', level: 85, category: 'Backend', featured: false },
  { name: 'Unity', level: 95, category: 'Specialization', featured: true },
  {
    name: 'Computer Vision',
    level: 85,
    category: 'Specialization',
    featured: true,
  },
  {
    name: 'Photon API',
    level: 80,
    category: 'Specialization',
    featured: false,
  },
  {
    name: 'VR Development',
    level: 70,
    category: 'Specialization',
    featured: false,
  },
  {
    name: 'Machine Learning',
    level: 80,
    category: 'Specialization',
    featured: false,
  },
  { name: 'Docker', level: 80, category: 'DevOps', featured: true },
  { name: 'AWS', level: 75, category: 'DevOps', featured: true },
  { name: 'Git', level: 95, category: 'DevOps', featured: false },
  { name: 'Kubernetes', level: 60, category: 'DevOps', featured: false },
  { name: 'SEO Optimization', level: 80, category: 'DevOps', featured: false },
] satisfies SkillInventoryItem[];

function toDisplaySkill(skill: SkillInventoryItem): DisplaySkill {
  return {
    name: skill.name,
    level: skill.level,
    category: skill.category,
  };
}

function selectSkills(
  category?: SkillCategory,
  featuredOnly = false,
): DisplaySkill[] {
  return skillInventory
    .filter(
      (skill) =>
        (!category || skill.category === category) &&
        (!featuredOnly || skill.featured),
    )
    .map(toDisplaySkill);
}

const skills = {
  featured: selectSkills(undefined, true),
  languages: selectSkills('Languages'),
  frontend: selectSkills('Frontend'),
  backend: selectSkills('Backend'),
  specialization: selectSkills('Specialization'),
  devops: selectSkills('DevOps'),
} satisfies SkillsData;

export const careerData = {
  skills,
  capabilities: [
    {
      id: 'product-platforms',
      title: 'Full-stack product platforms',
      description:
        'Build and modernize web products across interface, API, data, search, and deployment layers.',
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Laravel',
        'PostgreSQL',
        'Docker',
      ],
      projectIds: ['beauty-product-review-platform', 'karabiner-config-editor'],
    },
    {
      id: 'developer-tools',
      title: 'Developer tools and native utilities',
      description:
        'Design focused utilities that turn complex configuration and repeated workflows into direct interfaces.',
      technologies: ['Swift', 'SwiftUI', 'C#', '.NET', 'WPF', 'GitHub Actions'],
      projectIds: ['shortcut-wheel', 'karabiner-config-editor', 'git-easy'],
    },
    {
      id: 'interactive-systems',
      title: 'Interactive and applied systems',
      description:
        'Ship interactive learning and mobile experiences that integrate game systems, networking, and applied AI.',
      technologies: [
        'Unity',
        'Flutter',
        'Photon API',
        'Computer Vision',
        'Machine Learning',
      ],
      projectIds: ['nasogastrix', 'tga-radiology-guide', 'mahjong-multiplayer'],
    },
  ],
  education: [
    {
      id: '1',
      institution: 'The Chinese University of Hong Kong (CUHK)',
      degree: 'B.Eng. in Computer Engineering',
      duration: 'Sept. 2020 - August 2024',
      location: 'Hong Kong',
      description:
        'Comprehensive engineering program focusing on computer systems, software development, and advanced computing technologies with strong emphasis on practical application and research.',
      achievements: [
        'Visualized performance differences of merge-sort algorithm in different languages using matplotlib',
        'Developed space shooter game using OpenGL with Object-Oriented Programming techniques',
        'Completed comprehensive coursework in software engineering and cloud computing',
        'Applied data structures and algorithms in real-world programming projects',
      ],
      coursework: [
        'Software Engineering',
        'Principles of Computer Graphics',
        'Data Structure',
        'Intro. to Cloud Computing & Storage',
      ],
      projects: [
        'Collaborated with Blueinno Technology HK to develop a high-precision surgical counting computer vision model achieving over 99% accuracy, with successful deployment to a cross-platform mobile application built using Flutter',
        'Visualized the performance differences of the merge-sort algorithm in different languages using matplotlib in the course Introduction to Python (Individual Project)',
        'Developed a space shooter game using OpenGL with OOP techniques',
      ],
      gpa: '3.49/4.0',
    },
    {
      id: '2',
      institution: 'The Hong Kong Institute of Vocational Education (HKIVE)',
      degree: 'HD in Game Software Development',
      duration: 'Sept. 2018 - June 2020',
      location: 'Hong Kong',
      description:
        'Specialized diploma program focusing on game development technologies, mobile gaming platforms, and comprehensive software development practices for the gaming industry.',
      achievements: [
        'Achieved Award GPA of 3.76/4.0 demonstrating academic excellence',
        'Developed VR-supported online multiplayer endless runner game as Final Year Project',
        'Mastered mobile games technology and development frameworks',
        'Gained expertise in game software development and quality assurance practices',
      ],
      coursework: [
        'Mobile Games Technology',
        'Game Software Development and Assurance',
      ],
      projects: [
        'Developed a VR-supported online multiplayer endless runner game as the Final Year Project',
      ],
      gpa: '3.76/4.0',
    },
  ],
  experience: [
    {
      id: '1',
      company: 'She Communications Limited',
      position: 'Full-stack Developer',
      duration: 'Sep 2024 - Present',
      location: 'Hong Kong',
      description:
        'Leading the complete architectural overhaul of a beauty product review platform, applying object-oriented programming principles and modern design patterns to transform legacy systems into a scalable, maintainable solution using Next.js and Laravel, while implementing comprehensive SEO strategies and AI-first content optimization. Additionally, deployed and managed an internal LLM model on local servers to enhance company operations and productivity.',
      achievements: [
        'Redesigned and rebuilt entire platform architecture using MVC and Repository design patterns',
        'Deployed and configured internal LLM model on local server infrastructure for secure, cost-effective AI operations',
        'Implemented comprehensive SEO optimization strategies including meta tags, structured data, and semantic HTML',
        'Developed AI-first content optimization system to enhance search visibility and user engagement',
        'Established secure LLM deployment pipeline with containerization and resource optimization',
        'Implemented SOLID principles to improve code maintainability and extensibility',
        'Applied Factory and Strategy patterns for modular component architecture',
        'Optimized website performance and Core Web Vitals for improved search rankings',
        'Enhanced platform functionalities with dependency injection and service layer patterns',
        'Achieved better overall system performance through optimized OOP design and SEO best practices',
      ],
      technologies: [
        'Next.js',
        'Laravel',
        'PHP',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Local Server Management',
        'AI/ML Infrastructure',
        'SEO Optimization',
        'AI-First Content Strategy',
        'Schema Markup',
        'Core Web Vitals',
        'OOP Design Patterns',
        'SOLID Principles',
        'MVC Architecture',
        'Docker',
        'Kubernetes',
      ],
    },
    {
      id: '2',
      company: 'The Chinese University of Hong Kong',
      position: 'Game Developer',
      duration: 'Dec 2021 - Present',
      location: 'Hong Kong',
      description:
        'Developed an award-winning educational game for the radiology field using Unity, incorporating advanced AI features in collaboration with research teams.',
      achievements: [
        'Created award-winning educational game for radiology field',
        'Implemented Machine Learning model for abnormal nasogastric tube detection',
        'Collaborated with Ph.D. student research team on AI integration',
        'Delivered educational tool with real-world medical applications',
      ],
      technologies: [
        'Unity',
        'C#',
        'Machine Learning',
        'AI Integration',
        'Game Development',
      ],
    },
    {
      id: '3',
      company: 'DigiGear Technology Limited',
      position: 'Software Engineer',
      duration: 'Jun 2023 - Aug 2023',
      location: 'Hong Kong',
      description:
        'Developed a full-stack ticket selling platform focused on improving user experience and code maintainability.',
      achievements: [
        'Built complete ticket selling platform from scratch',
        'Improved user experience through intuitive design',
        'Enhanced code maintainability and structure',
        'Delivered scalable solution for ticket sales',
      ],
      technologies: [
        'Full-stack Development',
        'TypeScript',
        'Database Design',
        'API Development',
      ],
    },
    {
      id: '4',
      company: 'MedMind Technology Limited',
      position: 'Game Developer Intern',
      duration: 'Jun 2020 - Aug 2020',
      location: 'Hong Kong',
      description:
        "Developed Mahjong online multiplayer game mode using Photon API for Unity, which became the product's most significant selling point during the pandemic.",
      achievements: [
        'Developed complete multiplayer game mode in just 3 weeks',
        'Implemented Photon API for seamless online gameplay',
        "Created the product's most significant selling point during pandemic",
        'Delivered high-quality gaming experience under tight deadline',
      ],
      technologies: [
        'Unity',
        'C#',
        'Photon API',
        'Multiplayer Development',
        'Game Networking',
      ],
    },
  ],
} satisfies CareerData;
