// Portfolio data - Edit this file to customize your content
export const portfolioData = {
  // Personal Information
  name: "Andrew SZE-TO",
  title: "Software Developer",
  location: "Hong Kong",
  email: "klszeto020@gmail.com",
  phone: "+852 6628 8537",

  // Hero Section
  hero: {
    greeting: "Hi, I'm",
    tagline: "Crafting what people dreamed of",
    description: "A passionate software developer from Hong Kong specializing in web development, API design, and game logic. I transform ambitious ideas into reality through clean, scalable code.",
    resumeUrl: "/resume.pdf",
  },

  // Navigation
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  // Skills & Technologies
  skills: {
    frontend: [
      { name: "React", level: 95, category: "Frontend" },
      { name: "TypeScript", level: 90, category: "Frontend" },
      { name: "Next.js", level: 85, category: "Frontend" },
      { name: "Tailwind CSS", level: 90, category: "Frontend" },
      { name: "Vue.js", level: 75, category: "Frontend" },
    ],
    backend: [
      { name: "Node.js", level: 85, category: "Backend" },
      { name: "Python", level: 80, category: "Backend" },
      { name: "PostgreSQL", level: 75, category: "Backend" },
      { name: "MongoDB", level: 70, category: "Backend" },
      { name: "GraphQL", level: 65, category: "Backend" },
    ],
    tools: [
      { name: "Git", level: 95, category: "Tools" },
      { name: "Docker", level: 80, category: "Tools" },
      { name: "AWS", level: 75, category: "Tools" },
      { name: "Figma", level: 70, category: "Tools" },
      { name: "Jest", level: 85, category: "Tools" },
    ],
  },

  // Featured Projects
  projects: [
    {
      id: "1",
      title: "Project Title 1",
      description: "Brief description of your first project. Explain what it does, what problem it solves, and what makes it special.",
      image: "/projects/project1.jpg",
      technologies: ["Technology 1", "Technology 2", "Technology 3"],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://your-project1.com",
      featured: true,
    },
    {
      id: "2",
      title: "Project Title 2",
      description: "Brief description of your second project. Highlight the key features and technologies used.",
      image: "/projects/project2.jpg",
      technologies: ["Technology 1", "Technology 2", "Technology 3"],
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://your-project2.com",
      featured: true,
    },
    {
      id: "3",
      title: "Project Title 3",
      description: "Brief description of your third project. Focus on the impact and technical challenges overcome.",
      image: "/projects/project3.jpg",
      technologies: ["Technology 1", "Technology 2", "Technology 3"],
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://your-project3.com",
      featured: true,
    },
    {
      id: "4",
      title: "Project Title 4",
      description: "Brief description of your fourth project. Explain the purpose and key accomplishments.",
      image: "/projects/project4.jpg",
      technologies: ["Technology 1", "Technology 2", "Technology 3"],
      githubUrl: "https://github.com/yourusername/project4",
      liveUrl: "https://your-project4.com",
      featured: false,
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
      description: "Leading the complete architectural overhaul of a beauty product review platform, transforming legacy systems into a modern, scalable solution using Next.js and Laravel to deliver superior user experience and performance.",
      achievements: [
        "Redesigned and rebuilt entire platform architecture",
        "Significantly improved user experience and interface",
        "Enhanced platform functionalities and features",
        "Achieved better overall system performance"
      ],
      technologies: ["Next.js", "Laravel", "PHP", "React", "TypeScript"],
    },
    {
      id: "2",
      company: "The Chinese University of Hong Kong",
      position: "Game Developer",
      duration: "Dec 2021 - Present",
      location: "Hong Kong",
      description: "Developed an award-winning educational game for the radiology field using Unity, incorporating advanced AI features in collaboration with research teams.",
      achievements: [
        "Created award-winning educational game for radiology field",
        "Implemented Machine Learning model for abnormal nasogastric tube detection",
        "Collaborated with Ph.D. student research team on AI integration",
        "Delivered educational tool with real-world medical applications"
      ],
      technologies: ["Unity", "C#", "Machine Learning", "AI Integration", "Game Development"],
    },
    {
      id: "3",
      company: "DigiGear Technology Limited",
      position: "Software Engineer",
      duration: "Jun 2023 - Aug 2023",
      location: "Hong Kong",
      description: "Developed a full-stack ticket selling platform focused on improving user experience and code maintainability.",
      achievements: [
        "Built complete ticket selling platform from scratch",
        "Improved user experience through intuitive design",
        "Enhanced code maintainability and structure",
        "Delivered scalable solution for ticket sales"
      ],
      technologies: ["Full-stack Development", "TypeScript", "Database Design", "API Development"],
    },
    {
      id: "4",
      company: "MedMind Technology Limited",
      position: "Game Developer Intern",
      duration: "Jun 2020 - Aug 2020",
      location: "Hong Kong",
      description: "Developed Mahjong online multiplayer game mode using Photon API for Unity, which became the product's most significant selling point during the pandemic.",
      achievements: [
        "Developed complete multiplayer game mode in just 3 weeks",
        "Implemented Photon API for seamless online gameplay",
        "Created the product's most significant selling point during pandemic",
        "Delivered high-quality gaming experience under tight deadline"
      ],
      technologies: ["Unity", "C#", "Photon API", "Multiplayer Development", "Game Networking"],
    },
  ],

  // Social Links
  social: [
    { name: "GitHub", url: "https://github.com/zkwokleung", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/kwok-leung-sze-to-aa735a1a7", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com/zkwokleung", icon: "twitter" },
    { name: "Email", url: "mailto:klszeto020@gmail.com", icon: "email" },
  ],

  // About Section
  about: {
    paragraphs: [
      "My journey into programming began with a simple motivation: I wanted to craft the products I dreamed of. What started as a personal quest has evolved into a passion for creating software that makes a meaningful impact.",
      "I specialize in web development, API design, and game logic with a strong focus on software quality and architecture. My approach centers on design patterns, scalability, and maintainability—ensuring every line of code contributes to robust, future-proof solutions.",
      "Beyond coding, I'm actively learning 4+ languages, which has taught me the value of clear communication and diverse perspectives. I'm seeking opportunities to work on innovative projects where quality matters as much as creativity."
    ],
    skills: [
      "Web application development",
      "API design & implementation",
      "Game logic programming",
      "Software architecture & design patterns",
      "Code quality & maintainability",
      "Scalable system design",
      "Cross-cultural communication",
      "Continuous learning & adaptation"
    ]
  }
};

export type PortfolioData = typeof portfolioData;
