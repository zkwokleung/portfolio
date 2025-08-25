// Portfolio data - Edit this file to customize your content
export const portfolioData = {
  // Personal Information
  name: "Andrew SZE-TO",
  title: "Software Developer",
  location: "Hong Kong",
  availability: "Open to new opportunities",
  email: "klszeto020@gmail.com",
  phone: "+852 6628 8537",

  // Hero Section
  hero: {
    greeting: "Hi, I'm",
    tagline: "Crafting what people dreamed of",
    description:
      "A passionate software developer from Hong Kong specializing in web development, API design, and game logic. I transform ambitious ideas into reality through clean, scalable code.",
    resumeUrl: "/resume.pdf",
  },

  // Navigation
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  // Skills & Technologies
  skills: {
    // Featured professional skills - most relevant and high proficiency
    featured: [
      // Core Languages
      { name: "JavaScript", level: 95, category: "Languages", featured: true },
      { name: "TypeScript", level: 95, category: "Languages", featured: true },
      { name: "Python", level: 80, category: "Languages", featured: true },
      { name: "PHP", level: 80, category: "Languages", featured: true },
      { name: "C#", level: 95, category: "Languages", featured: true },

      // Frontend
      { name: "React", level: 95, category: "Frontend", featured: true },
      { name: "Next.js", level: 85, category: "Frontend", featured: true },
      { name: "Tailwind CSS", level: 90, category: "Frontend", featured: true },
      { name: "Flutter", level: 75, category: "Frontend", featured: true },

      // Backend
      { name: "Laravel", level: 85, category: "Backend", featured: true },
      { name: "Node.js", level: 85, category: "Backend", featured: true },

      // Specializations (Game Dev + AI)
      { name: "Unity", level: 95, category: "Specialization", featured: true },
      {
        name: "Computer Vision",
        level: 85,
        category: "Specialization",
        featured: true,
      },
      {
        name: "LLM Deployment",
        level: 75,
        category: "Specialization",
        featured: true,
      },

      // DevOps
      { name: "Docker", level: 80, category: "DevOps", featured: true },
      { name: "AWS", level: 75, category: "DevOps", featured: true },
    ],

    // Complete skills list
    languages: [
      { name: "JavaScript", level: 95, category: "Languages" },
      { name: "TypeScript", level: 95, category: "Languages" },
      { name: "Python", level: 80, category: "Languages" },
      { name: "PHP", level: 80, category: "Languages" },
      { name: "C#", level: 95, category: "Languages" },
      { name: "Kotlin", level: 85, category: "Languages" },
      { name: "Dart", level: 90, category: "Languages" },
      { name: "Java", level: 85, category: "Languages" },
      { name: "C++", level: 65, category: "Languages" },
    ],
    frontend: [
      { name: "React", level: 95, category: "Frontend" },
      { name: "Next.js", level: 90, category: "Frontend" },
      { name: "Tailwind CSS", level: 90, category: "Frontend" },
      { name: "HTML/CSS", level: 90, category: "Frontend" },
      { name: "Flutter", level: 90, category: "Frontend" },
    ],
    backend: [
      { name: "Laravel", level: 85, category: "Backend" },
      { name: "Node.js", level: 85, category: "Backend" },
      { name: "PostgreSQL", level: 75, category: "Backend" },
      { name: "MongoDB", level: 70, category: "Backend" },
      { name: "MySQL", level: 80, category: "Backend" },
      { name: "Supabase", level: 85, category: "Backend" },
    ],
    specialization: [
      // Game Development
      { name: "Unity", level: 90, category: "Specialization" },
      { name: "Photon API", level: 80, category: "Specialization" },
      { name: "VR Development", level: 70, category: "Specialization" },
      // AI/ML
      { name: "Machine Learning", level: 80, category: "Specialization" },
      { name: "Computer Vision", level: 85, category: "Specialization" },
    ],
    devops: [
      { name: "Git", level: 95, category: "DevOps" },
      { name: "Docker", level: 80, category: "DevOps" },
      { name: "Kubernetes", level: 60, category: "DevOps" },
      { name: "AWS", level: 60, category: "DevOps" },
      { name: "SEO Optimization", level: 80, category: "DevOps" },
    ],
    tools: [
      { name: "VS Code", level: 95, category: "Tools" },
      { name: "NeoVim", level: 95, category: "Tools" },
      { name: "Android Studio", level: 75, category: "Tools" },
    ],
  },

  // Featured Projects
  projects: [
    {
      id: "1",
      title: "Beauty Product Review Platform",
      description:
        "Led the complete architectural overhaul of a beauty product review platform, transforming legacy systems into a modern, scalable solution using Next.js and Laravel. Implemented comprehensive SEO strategies, AI-first content optimization, and deployed internal LLM model for enhanced user experience.",
      image: "/projects/beauty-platform.jpg",
      technologies: [
        "Next.js",
        "Laravel",
        "PHP",
        "TypeScript",
        "Tailwind CSS",
        "LLM Deployment",
        "SEO Optimization",
        "Docker",
      ],
      liveUrl: "https://critiques.she.com/",
      featured: true,
    },
    {
      id: "2",
      title: "Surgical Counting Computer Vision System",
      description:
        "Collaborated with Blueinno Technology HK to develop a high-precision surgical counting computer vision model achieving over 99% accuracy. Successfully deployed the model to a cross-platform mobile application built using Flutter for real-world medical applications.",
      image: "/projects/surgical-cv.jpg",
      technologies: [
        "Computer Vision",
        "Machine Learning",
        "Flutter",
        "Python",
        "Mobile Development",
      ],
      githubUrl: "https://github.com/zkwokleung/surgical-counting-frontend",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "3",
      title: "Educational Radiology Game with AI",
      description:
        "Developed an award-winning educational game for the radiology field using Unity, incorporating advanced AI features including Machine Learning models for abnormal nasogastric tube detection. Collaborated with Ph.D. research teams to deliver a tool with real-world medical applications.",
      image: "/projects/radiology-game.jpg",
      technologies: [
        "Unity",
        "C#",
        "Machine Learning",
        "AI Integration",
        "Game Development",
        "Medical AI",
      ],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "4",
      title: "VR Multiplayer Endless Runner Game",
      description:
        "Developed a VR-supported online multiplayer endless runner game as Final Year Project at HKIVE. Featured innovative VR mechanics, seamless multiplayer networking, and engaging gameplay mechanics that showcased advanced game development skills.",
      image: "/projects/vr-runner.jpg",
      technologies: [
        "Unity",
        "C#",
        "VR Development",
        "Multiplayer Networking",
        "Game Physics",
      ],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "5",
      title: "Mahjong Online Multiplayer Game",
      description:
        "Developed complete multiplayer game mode for Mahjong using Photon API for Unity in just 3 weeks during internship at MedMind Technology. Became the product's most significant selling point during the pandemic, delivering high-quality gaming experience under tight deadline.",
      image: "/projects/mahjong-multiplayer.jpg",
      technologies: [
        "Unity",
        "C#",
        "Photon API",
        "Multiplayer Development",
        "Game Networking",
      ],
      githubUrl: "#",
      liveUrl: "https://www.medmindtechnology.hk/neurogym",
      featured: false,
    },
    {
      id: "6",
      title: "OpenGL Space Shooter Game",
      description:
        "Developed a space shooter game using OpenGL with Object-Oriented Programming techniques as part of computer graphics coursework. Implemented advanced graphics rendering, game physics, and interactive gameplay mechanics demonstrating low-level graphics programming skills.",
      image: "/projects/space-shooter.jpg",
      technologies: [
        "OpenGL",
        "C++",
        "Computer Graphics",
        "Game Physics",
        "OOP",
      ],
      githubUrl: "https://github.com/zkwokleung/cuhk-csci3260",
      liveUrl: "#",
      featured: false,
    },
  ],

  // Education
  education: [
    {
      id: "1",
      institution: "The Chinese University of Hong Kong (CUHK)",
      degree: "B.Eng. in Computer Engineering",
      duration: "Sept. 2020 - August 2024",
      location: "Hong Kong",
      description:
        "Comprehensive engineering program focusing on computer systems, software development, and advanced computing technologies with strong emphasis on practical application and research.",
      achievements: [
        "Visualized performance differences of merge-sort algorithm in different languages using matplotlib",
        "Developed space shooter game using OpenGL with Object-Oriented Programming techniques",
        "Completed comprehensive coursework in software engineering and cloud computing",
        "Applied data structures and algorithms in real-world programming projects",
      ],
      coursework: [
        "Software Engineering",
        "Principles of Computer Graphics",
        "Data Structure",
        "Intro. to Cloud Computing & Storage",
      ],
      projects: [
        "Collaborated with Blueinno Technology HK to develop a high-precision surgical counting computer vision model achieving over 99% accuracy, with successful deployment to a cross-platform mobile application built using Flutter",
        "Visualized the performance differences of the merge-sort algorithm in different languages using matplotlib in the course Introduction to Python (Individual Project)",
        "Developed a space shooter game using OpenGL with OOP techniques",
      ],
      gpa: "3.49/4.0",
    },
    {
      id: "2",
      institution: "The Hong Kong Institute of Vocational Education (HKIVE)",
      degree: "HD in Game Software Development",
      duration: "Sept. 2018 - June 2020",
      location: "Hong Kong",
      description:
        "Specialized diploma program focusing on game development technologies, mobile gaming platforms, and comprehensive software development practices for the gaming industry.",
      achievements: [
        "Achieved Award GPA of 3.76/4.0 demonstrating academic excellence",
        "Developed VR-supported online multiplayer endless runner game as Final Year Project",
        "Mastered mobile games technology and development frameworks",
        "Gained expertise in game software development and quality assurance practices",
      ],
      coursework: [
        "Mobile Games Technology",
        "Game Software Development and Assurance",
      ],
      projects: [
        "Developed a VR-supported online multiplayer endless runner game as the Final Year Project",
      ],
      gpa: "3.76/4.0",
    },
  ],

  // Work Experience
  experience: [
    {
      id: "1",
      company: "She Communications Limited",
      position: "Full-stack Developer",
      duration: "Sep 2024 - Present",
      location: "Hong Kong",
      description:
        "Leading the complete architectural overhaul of a beauty product review platform, applying object-oriented programming principles and modern design patterns to transform legacy systems into a scalable, maintainable solution using Next.js and Laravel, while implementing comprehensive SEO strategies and AI-first content optimization. Additionally, deployed and managed an internal LLM model on local servers to enhance company operations and productivity.",
      achievements: [
        "Redesigned and rebuilt entire platform architecture using MVC and Repository design patterns",
        "Deployed and configured internal LLM model on local server infrastructure for secure, cost-effective AI operations",
        "Implemented comprehensive SEO optimization strategies including meta tags, structured data, and semantic HTML",
        "Developed AI-first content optimization system to enhance search visibility and user engagement",
        "Established secure LLM deployment pipeline with containerization and resource optimization",
        "Implemented SOLID principles to improve code maintainability and extensibility",
        "Applied Factory and Strategy patterns for modular component architecture",
        "Optimized website performance and Core Web Vitals for improved search rankings",
        "Enhanced platform functionalities with dependency injection and service layer patterns",
        "Achieved better overall system performance through optimized OOP design and SEO best practices",
      ],
      technologies: [
        "Next.js",
        "Laravel",
        "PHP",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "LLM Deployment",
        "Local Server Management",
        "AI/ML Infrastructure",
        "SEO Optimization",
        "AI-First Content Strategy",
        "Schema Markup",
        "Core Web Vitals",
        "OOP Design Patterns",
        "SOLID Principles",
        "MVC Architecture",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      id: "2",
      company: "The Chinese University of Hong Kong",
      position: "Game Developer",
      duration: "Dec 2021 - Present",
      location: "Hong Kong",
      description:
        "Developed an award-winning educational game for the radiology field using Unity, incorporating advanced AI features in collaboration with research teams.",
      achievements: [
        "Created award-winning educational game for radiology field",
        "Implemented Machine Learning model for abnormal nasogastric tube detection",
        "Collaborated with Ph.D. student research team on AI integration",
        "Delivered educational tool with real-world medical applications",
      ],
      technologies: [
        "Unity",
        "C#",
        "Machine Learning",
        "AI Integration",
        "Game Development",
      ],
    },
    {
      id: "3",
      company: "DigiGear Technology Limited",
      position: "Software Engineer",
      duration: "Jun 2023 - Aug 2023",
      location: "Hong Kong",
      description:
        "Developed a full-stack ticket selling platform focused on improving user experience and code maintainability.",
      achievements: [
        "Built complete ticket selling platform from scratch",
        "Improved user experience through intuitive design",
        "Enhanced code maintainability and structure",
        "Delivered scalable solution for ticket sales",
      ],
      technologies: [
        "Full-stack Development",
        "TypeScript",
        "Database Design",
        "API Development",
      ],
    },
    {
      id: "4",
      company: "MedMind Technology Limited",
      position: "Game Developer Intern",
      duration: "Jun 2020 - Aug 2020",
      location: "Hong Kong",
      description:
        "Developed Mahjong online multiplayer game mode using Photon API for Unity, which became the product's most significant selling point during the pandemic.",
      achievements: [
        "Developed complete multiplayer game mode in just 3 weeks",
        "Implemented Photon API for seamless online gameplay",
        "Created the product's most significant selling point during pandemic",
        "Delivered high-quality gaming experience under tight deadline",
      ],
      technologies: [
        "Unity",
        "C#",
        "Photon API",
        "Multiplayer Development",
        "Game Networking",
      ],
    },
  ],

  // Social Links
  social: [
    { name: "GitHub", url: "https://github.com/zkwokleung", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/kwok-leung-sze-to-aa735a1a7",
      icon: "linkedin",
    },
    { name: "Twitter", url: "https://twitter.com/zkwokleung", icon: "twitter" },
    { name: "Email", url: "mailto:klszeto020@gmail.com", icon: "email" },
  ],

  // About Section
  about: {
    paragraphs: [
      "My journey into programming began with a simple motivation: I wanted to craft the products I dreamed of. What started as a personal quest has evolved into a passion for creating software that makes a meaningful impact.",
      "I specialize in web development, API design, and game logic with a strong focus on software quality and architecture. My approach centers on design patterns, scalability, and maintainability—ensuring every line of code contributes to robust, future-proof solutions.",
      "Beyond coding, I'm actively learning 4+ languages, which has taught me the value of clear communication and diverse perspectives. I'm seeking opportunities to work on innovative projects where quality matters as much as creativity.",
    ],
    skills: [
      "Web application development",
      "API design & implementation",
      "Game logic programming",
      "Software architecture & design patterns",
      "Code quality & maintainability",
      "Scalable system design",
      "Cross-cultural communication",
      "Continuous learning & adaptation",
    ],
  },
};

export type PortfolioData = typeof portfolioData;
