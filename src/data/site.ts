import type { ContactDetails, SiteData } from '@/data/types';

const contact = {
  email: {
    label: 'Email',
    value: 'klszeto020@gmail.com',
    href: 'mailto:klszeto020@gmail.com',
  },
  phone: {
    label: 'Phone',
    value: '+852 6628 8537',
    href: 'tel:+85266288537',
  },
} satisfies ContactDetails;

export const siteData = {
  name: 'Andrew SZE-TO',
  title: 'Full-stack Developer',
  location: 'Hong Kong',
  availability: 'Open to new opportunities',
  email: contact.email.value,
  phone: contact.phone.value,
  contact,
  hero: {
    greeting: "Hi, I'm",
    tagline: 'I turn complex ideas into dependable products.',
    description:
      'I build web platforms, developer tools, and interactive systems with a focus on scalable architecture, maintainable code, and practical delivery.',
    resumeUrl: '/resume.pdf',
  },
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#projects' },
    { label: 'Experience', href: '#experience' },
  ],
  social: [
    { name: 'GitHub', url: 'https://github.com/zkwokleung', icon: 'github' },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/kwok-leung-sze-to-aa735a1a7',
      icon: 'linkedin',
    },
    { name: 'Twitter', url: 'https://twitter.com/zkwokleung', icon: 'twitter' },
    { name: 'Email', url: contact.email.href, icon: 'email' },
  ],
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
} satisfies SiteData;
