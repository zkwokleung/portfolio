import { careerData } from '@/data/career';
import { projects } from '@/data/projects';
import { siteData } from '@/data/site';
import type { PortfolioData } from '@/data/types';

export const portfolioData = {
  ...siteData,
  ...careerData,
  projects,
} satisfies PortfolioData;

export type {
  Project,
  ProjectCategory,
  ProjectImage,
  ProjectLink,
  ProjectLinkKind,
} from '@/data/types';
