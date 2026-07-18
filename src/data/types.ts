export type SocialIconName = 'github' | 'linkedin' | 'twitter' | 'email';

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
}

export interface ContactDetails {
  email: ContactChannel;
  phone: ContactChannel;
}

export interface HeroData {
  greeting: string;
  tagline: string;
  description: string;
  resumeUrl: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: SocialIconName;
}

export interface AboutStat {
  key: 'experience' | 'projects';
  value?: string;
  label: string;
}

export interface AboutData {
  section: {
    title: string;
    subtitle: string;
    whatIDoTitle: string;
    coreTechnologiesTitle: string;
  };
  paragraphs: string[];
  skills: string[];
  stats: AboutStat[];
  currentFocus: {
    title: string;
    description: string;
  };
}

export interface SiteData {
  name: string;
  title: string;
  location: string;
  availability: string;
  email: string;
  phone: string;
  contact: ContactDetails;
  hero: HeroData;
  navigation: NavigationItem[];
  social: SocialLink[];
  about: AboutData;
}

export type SkillCategory =
  'Languages' | 'Frontend' | 'Backend' | 'Specialization' | 'DevOps';

export interface SkillInventoryItem {
  name: string;
  level: number;
  category: SkillCategory;
  featured: boolean;
}

export type DisplaySkill = Omit<SkillInventoryItem, 'featured'>;

export interface SkillsData {
  featured: DisplaySkill[];
  languages: DisplaySkill[];
  frontend: DisplaySkill[];
  backend: DisplaySkill[];
  specialization: DisplaySkill[];
  devops: DisplaySkill[];
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  projectIds: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
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
}

export interface CareerData {
  skills: SkillsData;
  capabilities: Capability[];
  experience: Experience[];
  education: Education[];
}

export type ProjectCategory =
  'software' | 'medical-education' | 'professional' | 'coursework';

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
  caseStudySlug?: string;
}

export interface CaseStudyDecision {
  title: string;
  description: string;
  tradeoff?: string;
}

export interface CaseStudyOutcome {
  label: string;
  value?: string;
  description: string;
  source?: string;
}

export interface CaseStudySection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface CaseStudy {
  slug: string;
  projectId: string;
  summary: string;
  role: string;
  team: string;
  timeline?: string;
  problem: string[];
  constraints: string[];
  decisions: CaseStudyDecision[];
  implementation: CaseStudySection[];
  outcomes: CaseStudyOutcome[];
  lessons?: string[];
}

export type PortfolioData = SiteData &
  CareerData & {
    projects: Project[];
  };
