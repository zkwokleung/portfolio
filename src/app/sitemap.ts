import type { MetadataRoute } from 'next';
import { caseStudies } from '@/data/case-studies';
import { absoluteUrl } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl('/') },
    ...caseStudies.map((caseStudy) => ({
      url: absoluteUrl(`/case-studies/${caseStudy.slug}`),
    })),
  ];
}
