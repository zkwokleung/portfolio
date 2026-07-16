// Portfolio data - Edit this file to customize your content
export type ProjectCategory =
  | 'software'
  | 'medical-education'
  | 'professional'
  | 'coursework';

export type ProjectLinkKind = 'github' | 'live' | 'official' | 'app-store';

export interface ProjectLink {
  label: string;
  url: string;
  kind: ProjectLinkKind;
}

export interface ProjectImage {
  src: string;
  alt: string;
  fit: 'cover' | 'contain';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  contribution: string;
  category: ProjectCategory;
  image?: ProjectImage;
  technologies: string[];
  links: ProjectLink[];
  featured: boolean;
}

export const portfolioData = {
  // Personal Information
  name: 'Andrew SZE-TO',
  title: 'Software Developer',
  location: 'Hong Kong',
  availability: 'Open to new opportunities',
  email: 'klszeto020@gmail.com',
  phone: '+852 6628 8537',

  // Hero Section
  hero: {
    greeting: "Hi, I'm",
    tagline: 'Crafting what people dreamed of',
    description:
      'A passionate software developer from Hong Kong specializing in web development, API design, and game logic. I transform ambitious ideas into reality through clean, scalable code.',
    resumeUrl: '/resume.pdf',
  },

  // Navigation
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],

  // Skills & Technologies
  skills: {
    // Featured professional skills - most relevant and high proficiency
    featured: [
      // Core Languages
      { name: 'JavaScript', level: 95, category: 'Languages', featured: true },
      { name: 'TypeScript', level: 95, category: 'Languages', featured: true },
      { name: 'C#', level: 95, category: 'Languages', featured: true },
      { name: 'Python', level: 85, category: 'Languages', featured: true },
      { name: 'PHP', level: 85, category: 'Languages', featured: true },

      // Frontend
      { name: 'React', level: 95, category: 'Frontend', featured: true },
      { name: 'Next.js', level: 95, category: 'Frontend', featured: true },
      { name: 'Tailwind CSS', level: 90, category: 'Frontend', featured: true },
      { name: 'Flutter', level: 85, category: 'Frontend', featured: true },

      // Backend
      { name: 'Laravel', level: 85, category: 'Backend', featured: true },
      { name: 'Node.js', level: 85, category: 'Backend', featured: true },

      // Specializations (Game Dev + AI)
      { name: 'Unity', level: 95, category: 'Specialization', featured: true },
      {
        name: 'Computer Vision',
        level: 85,
        category: 'Specialization',
        featured: true,
      },

      // DevOps
      { name: 'Docker', level: 80, category: 'DevOps', featured: true },
      { name: 'AWS', level: 75, category: 'DevOps', featured: true },
    ],

    // Complete skills list
    languages: [
      { name: 'JavaScript', level: 95, category: 'Languages' },
      { name: 'TypeScript', level: 95, category: 'Languages' },
      { name: 'Python', level: 80, category: 'Languages' },
      { name: 'PHP', level: 80, category: 'Languages' },
      { name: 'C#', level: 95, category: 'Languages' },
      { name: 'Kotlin', level: 85, category: 'Languages' },
      { name: 'Dart', level: 90, category: 'Languages' },
      { name: 'Java', level: 85, category: 'Languages' },
      { name: 'C++', level: 65, category: 'Languages' },
    ],
    frontend: [
      { name: 'React', level: 95, category: 'Frontend' },
      { name: 'Next.js', level: 90, category: 'Frontend' },
      { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
      { name: 'HTML/CSS', level: 90, category: 'Frontend' },
      { name: 'Flutter', level: 90, category: 'Frontend' },
    ],
    backend: [
      { name: 'Laravel', level: 85, category: 'Backend' },
      { name: 'Node.js', level: 85, category: 'Backend' },
      { name: 'PostgreSQL', level: 75, category: 'Backend' },
      { name: 'MongoDB', level: 70, category: 'Backend' },
      { name: 'MySQL', level: 80, category: 'Backend' },
      { name: 'Supabase', level: 85, category: 'Backend' },
    ],
    specialization: [
      // Game Development
      { name: 'Unity', level: 90, category: 'Specialization' },
      { name: 'Photon API', level: 80, category: 'Specialization' },
      { name: 'VR Development', level: 70, category: 'Specialization' },
      // AI/ML
      { name: 'Machine Learning', level: 80, category: 'Specialization' },
      { name: 'Computer Vision', level: 85, category: 'Specialization' },
    ],
    devops: [
      { name: 'Git', level: 95, category: 'DevOps' },
      { name: 'Docker', level: 80, category: 'DevOps' },
      { name: 'Kubernetes', level: 60, category: 'DevOps' },
      { name: 'AWS', level: 60, category: 'DevOps' },
      { name: 'SEO Optimization', level: 80, category: 'DevOps' },
    ],
    tools: [
      { name: 'VS Code', level: 95, category: 'Tools' },
      { name: 'NeoVim', level: 95, category: 'Tools' },
      { name: 'Android Studio', level: 75, category: 'Tools' },
    ],
  },

  // Featured Projects
  projects: [
    {
      id: 'shortcut-wheel',
      title: 'Shortcut Wheel',
      description:
        'A native macOS menu-bar utility that opens a configurable radial shortcut menu from a global keyboard or mouse trigger. Slices can send keystrokes, launch apps and URLs, run scripts, or open nested wheels.',
      contribution:
        'Personal project: designed and built the native app, global input handling, radial interactions, JSON persistence, automated tests, and universal DMG release workflow.',
      category: 'software',
      image: {
        src: '/projects/shortcut-wheel.webp',
        alt: 'Shortcut Wheel macOS application icon and radial menu',
        fit: 'contain',
      },
      technologies: [
        'Swift',
        'SwiftUI',
        'AppKit',
        'CGEventTap',
        'GitHub Actions',
      ],
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/zkwokleung/shortcut-wheel',
          kind: 'github',
        },
      ],
      featured: true,
    },
    {
      id: 'karabiner-config-editor',
      title: 'Karabiner Config Editor',
      description:
        'A visual editor for importing, editing, validating, and exporting Karabiner-Elements configuration files, including complex modifications and ANSI, ISO, and JIS keyboard layouts.',
      contribution:
        'Personal project: designed and implemented the editor, drag-and-drop rule builder, keyboard visualization, conflict validation, and structured JSON export workflow.',
      category: 'software',
      image: {
        src: '/projects/karabiner-config-editor.webp',
        alt: 'Karabiner Config Editor configuration interface',
        fit: 'cover',
      },
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'dnd-kit',
        'Zod',
      ],
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/zkwokleung/karabiner-config-editor',
          kind: 'github',
        },
        {
          label: 'Live App',
          url: 'https://karabiner-config-editor.vercel.app',
          kind: 'live',
        },
      ],
      featured: true,
    },
    {
      id: 'git-easy',
      title: 'Git Easy',
      description:
        'A Flow Launcher plugin for cloning, fetching, fuzzy-searching, and opening Git repositories across multiple local root folders.',
      contribution:
        'Created and maintain the open-source plugin, its multi-root repository workflow, settings UI, and automated release pipeline while incorporating community contributions.',
      category: 'software',
      image: {
        src: '/projects/git-easy.webp',
        alt: 'Git Easy plugin for Flow Launcher',
        fit: 'contain',
      },
      technologies: [
        'C#',
        '.NET 7',
        'WPF',
        'Flow Launcher API',
        'GitHub Actions',
      ],
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/zkwokleung/Flow.Launcher.Plugin.GitEasy',
          kind: 'github',
        },
      ],
      featured: true,
    },
    {
      id: 'nasogastrix',
      title: 'NasogastriX',
      description:
        'An interactive radiology education app combining teaching modules and mini-games to help learners assess nasogastric tube positioning on chest X-rays.',
      contribution:
        'Developed the Unity and C# application, gameplay systems, and UI; integrated the supplied AI classification and Grad-CAM workflow; and handled releases and ongoing maintenance.',
      category: 'medical-education',
      image: {
        src: '/projects/nasogastrix.webp',
        alt: 'NasogastriX radiology education application',
        fit: 'cover',
      },
      technologies: [
        'Unity',
        'C#',
        'Machine Learning',
        'Computer Vision',
        'Grad-CAM',
      ],
      links: [
        {
          label: 'Official Page',
          url: 'https://www.focusedradiology.com/nasogastrix',
          kind: 'official',
        },
      ],
      featured: true,
    },
    {
      id: 'tga-radiology-guide',
      title: 'Transient Global Amnesia: A Radiology Guide',
      description:
        'An interactive tutorial covering the pathophysiology, imaging findings, and differential diagnoses of transient global amnesia through real clinical MR cases and self-assessment exercises.',
      contribution:
        'Built the Flutter and Dart application end to end, implemented collaborator-supplied medical content and touch interactions, and manage its App Store releases and maintenance.',
      category: 'medical-education',
      image: {
        src: '/projects/tga-radiology-guide.webp',
        alt: 'Transient Global Amnesia radiology guide application',
        fit: 'cover',
      },
      technologies: ['Flutter', 'Dart', 'iOS', 'Interactive Learning'],
      links: [
        {
          label: 'Official Page',
          url: 'https://www.focusedradiology.com/transient-global-amnesia',
          kind: 'official',
        },
        {
          label: 'App Store',
          url: 'https://apps.apple.com/us/app/transient-global-amnesia/id6737163395',
          kind: 'app-store',
        },
      ],
      featured: true,
    },
    {
      id: 'beauty-product-review-platform',
      title: 'Beauty Product Review Platform',
      description:
        'A modernized beauty product review platform with a scalable Next.js and Laravel architecture, improved search performance, and AI-assisted content workflows.',
      contribution:
        'Led the architectural overhaul, SEO and Core Web Vitals work, AI-first content optimization, and deployment of an internal LLM service.',
      category: 'professional',
      technologies: [
        'Next.js',
        'Laravel',
        'PHP',
        'TypeScript',
        'Tailwind CSS',
        'LLM Deployment',
        'SEO Optimization',
        'Docker',
      ],
      links: [
        {
          label: 'Live Site',
          url: 'https://critiques.she.com/',
          kind: 'live',
        },
      ],
      featured: false,
    },
    {
      id: 'surgical-counting-cv',
      title: 'Surgical Counting Computer Vision System',
      description:
        'A high-precision computer vision system for counting surgical instruments, deployed through a cross-platform Flutter application for practical medical use.',
      contribution:
        'Collaborated with Blueinno Technology HK on the computer vision model and integrated the resulting system into the Flutter mobile application.',
      category: 'professional',
      technologies: [
        'Computer Vision',
        'Machine Learning',
        'Flutter',
        'Python',
        'Mobile Development',
      ],
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/zkwokleung/surgical-counting-frontend',
          kind: 'github',
        },
      ],
      featured: false,
    },
    {
      id: 'mahjong-multiplayer',
      title: 'NeuroGym Multiplayer Mahjong',
      description:
        'A networked Mahjong mode within NeuroGym, an evidence-based cognitive training platform designed for older adults. The platform uses culturally familiar games to support attention, memory, hand-eye coordination, executive function, language, and visuospatial skills.',
      contribution:
        'Built the complete Unity and Photon multiplayer Mahjong experience during a three-week internship sprint, including real-time gameplay synchronization and networking for remote play.',
      category: 'professional',
      technologies: [
        'Unity',
        'C#',
        'Photon API',
        'Multiplayer Development',
        'Game Networking',
      ],
      links: [
        {
          label: 'NeuroGym Product Page',
          url: 'https://www.medmindtechnology.hk/neurogym',
          kind: 'official',
        },
      ],
      featured: false,
    },
    {
      id: 'vr-endless-runner',
      title: 'VR Multiplayer Endless Runner Game',
      description:
        'A VR-supported online multiplayer endless runner created as a final-year project, combining immersive controls, networked play, and real-time game physics.',
      contribution:
        'Developed the game systems, VR mechanics, multiplayer networking, and interactive gameplay as the HKIVE final-year project.',
      category: 'coursework',
      technologies: [
        'Unity',
        'C#',
        'VR Development',
        'Multiplayer Networking',
        'Game Physics',
      ],
      links: [],
      featured: false,
    },
    {
      id: 'opengl-space-shooter',
      title: 'OpenGL Space Shooter Game',
      description:
        'A space shooter built with OpenGL and object-oriented C++ to explore low-level rendering, game physics, and interactive graphics programming.',
      contribution:
        'Implemented the rendering pipeline, object-oriented game systems, physics, and interactive gameplay for computer graphics coursework.',
      category: 'coursework',
      technologies: [
        'OpenGL',
        'C++',
        'Computer Graphics',
        'Game Physics',
        'OOP',
      ],
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/zkwokleung/cuhk-csci3260',
          kind: 'github',
        },
      ],
      featured: false,
    },
  ] satisfies Project[],

  // Education
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

  // Work Experience
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

  // Social Links
  social: [
    { name: 'GitHub', url: 'https://github.com/zkwokleung', icon: 'github' },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/kwok-leung-sze-to-aa735a1a7',
      icon: 'linkedin',
    },
    { name: 'Twitter', url: 'https://twitter.com/zkwokleung', icon: 'twitter' },
    { name: 'Email', url: 'mailto:klszeto020@gmail.com', icon: 'email' },
  ],

  // About Section
  about: {
    section: {
      title: 'About Me',
      subtitle:
        'Get to know me better and discover what drives my passion for development',
      whatIDoTitle: 'What I Do',
      coreTechnologiesTitle: 'Core Technologies',
    },
    paragraphs: [
      'My journey into programming began with a simple motivation: I wanted to craft the products I dreamed of. What started as a personal quest has evolved into a passion for creating software that makes a meaningful impact.',
      'I specialize in web development, API design, and game logic with a strong focus on software quality and architecture. My approach centers on design patterns, scalability, and maintainability—ensuring every line of code contributes to robust, future-proof solutions.',
      "Beyond coding, I'm actively learning 4+ languages, which has taught me the value of clear communication and diverse perspectives. I'm seeking opportunities to work on innovative projects where quality matters as much as creativity.",
    ],
    skills: [
      'Web application development',
      'API design & implementation',
      'Game logic programming',
      'Software architecture & design patterns',
      'Code quality & maintainability',
      'Scalable system design',
      'Cross-cultural communication',
      'Continuous learning & adaptation',
    ],
    stats: [
      { key: 'experience', value: '5+', label: 'Years Experience' },
      { key: 'projects', label: 'Projects Completed' },
    ],
    currentFocus: {
      title: 'Currently Exploring',
      description:
        'AI/ML integration in web applications, serverless architectures, and advanced React patterns.',
    },
  },
};

export type PortfolioData = typeof portfolioData;
