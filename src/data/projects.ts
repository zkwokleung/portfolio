import type { Project } from '@/data/types';

export const projects = [
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
    caseStudySlug: 'karabiner-config-editor',
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
      alt: 'NasogastriX radiology education project illustration',
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
    caseStudySlug: 'nasogastrix',
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
    caseStudySlug: 'beauty-product-review-platform',
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
    technologies: ['OpenGL', 'C++', 'Computer Graphics', 'Game Physics', 'OOP'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/zkwokleung/cuhk-csci3260',
        kind: 'github',
      },
    ],
    featured: false,
  },
] satisfies Project[];
