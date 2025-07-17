// Portfolio data - Edit this file to customize your content
export const portfolioData = {
  // Personal Information
  name: "Your Name",
  title: "Your Title",
  location: "Your Location",
  email: "your.email@example.com",
  phone: "+1 (555) 000-0000",
  
  // Hero Section
  hero: {
    greeting: "Hi, I'm",
    tagline: "Your tagline here",
    description: "Your description here - tell visitors about yourself, your expertise, and what makes you unique as a developer.",
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
      company: "Company Name",
      position: "Your Position",
      duration: "Start Date - End Date",
      location: "Location",
      description: "Brief description of your role and main responsibilities. Focus on what you accomplished and the impact you made.",
      achievements: [
        "Key achievement or accomplishment #1",
        "Key achievement or accomplishment #2",
        "Key achievement or accomplishment #3",
        "Key achievement or accomplishment #4"
      ],
      technologies: ["Technology 1", "Technology 2", "Technology 3"],
    },
    {
      id: "2",
      company: "Previous Company Name",
      position: "Previous Position",
      duration: "Start Date - End Date",
      location: "Location",
      description: "Brief description of your previous role and what you contributed to the organization.",
      achievements: [
        "Key achievement or accomplishment #1",
        "Key achievement or accomplishment #2",
        "Key achievement or accomplishment #3",
        "Key achievement or accomplishment #4"
      ],
      technologies: ["Technology 1", "Technology 2", "Technology 3"],
    },
    {
      id: "3",
      company: "Earlier Company Name",
      position: "Earlier Position",
      duration: "Start Date - End Date",
      location: "Location",
      description: "Brief description of your earlier role and the experience you gained.",
      achievements: [
        "Key achievement or accomplishment #1",
        "Key achievement or accomplishment #2",
        "Key achievement or accomplishment #3",
        "Key achievement or accomplishment #4"
      ],
      technologies: ["Technology 1", "Technology 2", "Technology 3"],
    },
  ],

  // Social Links
  social: [
    { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" },
    { name: "Email", url: "mailto:your.email@example.com", icon: "email" },
  ],

  // About Section
  about: {
    paragraphs: [
      "Write your first paragraph here. This should be a compelling introduction that captures who you are as a developer and what drives your passion for technology.",
      "Write your second paragraph here. Focus on your technical expertise, preferred technologies, and development philosophy or approach to problem-solving.",
      "Write your third paragraph here. Share what you do outside of coding, your interests, and what you're looking for in your next opportunity or collaboration."
    ],
    skills: [
      "Your skill area #1",
      "Your skill area #2", 
      "Your skill area #3",
      "Your skill area #4",
      "Your skill area #5",
      "Your skill area #6",
      "Your skill area #7",
      "Your skill area #8"
    ]
  }
};

export type PortfolioData = typeof portfolioData;