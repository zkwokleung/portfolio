import type { CaseStudy } from '@/data/types';

export const caseStudies = [
  {
    slug: 'karabiner-config-editor',
    projectId: 'karabiner-config-editor',
    summary:
      'A visual editor for importing, editing, validating, and exporting Karabiner-Elements configuration files, including complex modifications and ANSI, ISO, and JIS keyboard layouts.',
    role: 'Designed and implemented the editor, drag-and-drop rule builder, keyboard visualization, conflict validation, and structured JSON export workflow.',
    team: 'Personal project',
    problem: [
      'Karabiner-Elements configurations can contain detailed keyboard mappings and complex modification rules. The project set out to provide a visual workflow for working with those files.',
      'The editor needed to support importing an existing configuration, changing it through direct interactions, validating conflicts, and exporting structured JSON again.',
    ],
    constraints: [
      'Support complex modifications rather than only simple key remapping.',
      'Represent ANSI, ISO, and JIS keyboard layouts.',
      'Preserve a structured JSON import and export workflow.',
      'Surface configuration conflicts before export.',
    ],
    decisions: [
      {
        title: 'Use a visual editing workflow',
        description:
          'The interface organizes configuration work around visible rules and keyboard layouts instead of requiring every change to be made directly in JSON.',
        tradeoff:
          'The visual model still has to represent the structure and flexibility expected by Karabiner-Elements configurations.',
      },
      {
        title: 'Make rules directly composable',
        description:
          'A drag-and-drop rule builder makes complex modifications easier to assemble and inspect as part of the editing flow.',
      },
      {
        title: 'Validate before export',
        description:
          'Conflict validation and schema-aware handling are part of the workflow so problems can be surfaced before a configuration is exported.',
      },
    ],
    implementation: [
      {
        title: 'Editor and data workflow',
        paragraphs: [
          'The application uses Next.js, React, and TypeScript for the editor experience. Imported configuration data moves through editing and validation before returning to a structured JSON export.',
          'Zod supports schema-aware validation, while Tailwind CSS provides the interface system used across the editing flow.',
        ],
      },
      {
        title: 'Keyboard and rule interaction',
        paragraphs: [
          'The interface includes keyboard visualization for ANSI, ISO, and JIS layouts alongside a drag-and-drop rule builder powered by dnd-kit.',
          'Conflict feedback is presented within the workflow so configuration issues can be addressed while editing.',
        ],
      },
    ],
    outcomes: [
      {
        label: 'Public implementation',
        value: 'Open source',
        description:
          'The project source is publicly available for review, including the editor and validation workflow.',
        source: 'https://github.com/zkwokleung/karabiner-config-editor',
      },
      {
        label: 'Deployed application',
        value: 'Live',
        description:
          'A deployed version makes the visual configuration workflow available in the browser.',
        source: 'https://karabiner-config-editor.vercel.app',
      },
    ],
  },
  {
    slug: 'nasogastrix',
    projectId: 'nasogastrix',
    summary:
      'An interactive radiology education app combining teaching modules and mini-games to help learners assess nasogastric tube positioning on chest X-rays.',
    role: 'Developed the Unity and C# application, gameplay systems, and UI; integrated the supplied AI classification and Grad-CAM workflow; and handled releases and ongoing maintenance.',
    team: 'Developed in collaboration with a CUHK research team',
    problem: [
      'The project combines radiology teaching content with interactive exercises that help learners assess nasogastric tube positioning on chest X-rays.',
      'The application also needed to integrate a supplied classification and Grad-CAM workflow without obscuring the distinction between the learning experience and the underlying AI output.',
    ],
    constraints: [
      'Deliver the interactive experience in Unity and C#.',
      'Combine teaching modules with mini-games and assessment interactions.',
      'Integrate the supplied AI classification and Grad-CAM workflow.',
      'Support releases and ongoing application maintenance.',
    ],
    decisions: [
      {
        title: 'Combine instruction with interaction',
        description:
          'Teaching modules and mini-games are presented within one application so learners can move between explanation and active assessment.',
      },
      {
        title: 'Build on Unity gameplay systems',
        description:
          'Unity and C# provide the application, interface, and gameplay foundation for the educational experience.',
      },
      {
        title: 'Keep the AI integration boundary explicit',
        description:
          'The application integrates the supplied classification and Grad-CAM workflow as part of the learning experience without claiming ownership of model development.',
      },
    ],
    implementation: [
      {
        title: 'Interactive learning application',
        paragraphs: [
          'The Unity application brings together teaching modules, mini-games, gameplay systems, and the user interface in a single C# codebase.',
          'The interaction design supports repeated assessment within the educational flow while keeping the medical content supplied by collaborators central to the experience.',
        ],
      },
      {
        title: 'AI workflow integration',
        paragraphs: [
          'The supplied classification and Grad-CAM workflow is integrated into the application so its output can be presented as part of the radiology learning experience.',
          'Release handling and ongoing maintenance are part of the documented project contribution.',
        ],
      },
    ],
    outcomes: [
      {
        label: 'Public project presence',
        value: 'Published',
        description:
          'The collaboration has an official public page describing the NasogastriX education project.',
        source: 'https://www.focusedradiology.com/nasogastrix',
      },
      {
        label: 'Product stewardship',
        value: 'Ongoing',
        description:
          'The documented contribution includes releases and continued maintenance of the application.',
      },
    ],
  },
  {
    slug: 'beauty-product-review-platform',
    projectId: 'beauty-product-review-platform',
    summary:
      'A modernized beauty product review platform with a scalable Next.js and Laravel architecture, search-focused platform work, and AI-assisted content workflows.',
    role: 'Led the architectural overhaul, SEO and Core Web Vitals work, AI-first content optimization, and deployment of an internal LLM service.',
    team: 'Professional work at She Communications Limited',
    timeline: 'Employment context: Sep 2024 - Present',
    problem: [
      'The work focused on modernizing a legacy beauty product review platform into a more scalable and maintainable Next.js and Laravel system.',
      'The scope also included technical SEO, Core Web Vitals, AI-assisted content workflows, and a securely deployed internal LLM service.',
    ],
    constraints: [
      'Modernize an active professional platform without exposing internal systems or data.',
      'Support SEO, structured data, semantic HTML, and Core Web Vitals work.',
      'Deploy an internal LLM on local server infrastructure.',
      'Keep implementation details within appropriate professional confidentiality boundaries.',
    ],
    decisions: [
      {
        title: 'Separate platform responsibilities',
        description:
          'The modernization uses Next.js and Laravel with MVC, Repository, and service-layer patterns to organize application responsibilities.',
      },
      {
        title: 'Design for maintainability',
        description:
          'SOLID principles, dependency injection, and modular Factory and Strategy patterns guide the rebuilt platform architecture.',
      },
      {
        title: 'Treat discovery as platform work',
        description:
          'Metadata, structured data, semantic HTML, and Core Web Vitals are handled as part of the product implementation rather than as a separate afterthought.',
      },
      {
        title: 'Keep AI services internal',
        description:
          'The internal LLM service is deployed on local infrastructure through a containerized workflow, while sensitive operational details remain private.',
      },
    ],
    implementation: [
      {
        title: 'Architecture modernization',
        paragraphs: [
          'The platform overhaul combines a Next.js frontend with Laravel services and applies MVC, Repository, dependency injection, and service-layer patterns.',
          'Factory and Strategy patterns support modular behavior, while the broader design follows SOLID principles to improve maintainability and extensibility.',
        ],
      },
      {
        title: 'Search and content foundations',
        paragraphs: [
          'The implementation includes metadata, structured data, semantic HTML, Core Web Vitals work, and AI-assisted content optimization.',
          'These concerns are integrated into the platform architecture so product, content, and discovery workflows can evolve together.',
        ],
      },
      {
        title: 'Internal AI service',
        paragraphs: [
          'An internal LLM service was deployed on local server infrastructure through a containerized workflow to support company operations and content processes.',
          'Model identity, prompts, datasets, infrastructure topology, resource allocation, costs, and internal data are intentionally outside this public case study.',
        ],
      },
    ],
    outcomes: [
      {
        label: 'Platform architecture',
        value: 'Rebuilt',
        description:
          'The legacy platform architecture was redesigned around a modern Next.js and Laravel implementation.',
      },
      {
        label: 'Discovery foundations',
        value: 'Implemented',
        description:
          'Technical SEO, structured data, semantic HTML, and Core Web Vitals work are part of the platform delivery.',
      },
      {
        label: 'Internal AI service',
        value: 'Deployed',
        description:
          'A containerized internal LLM service supports private company workflows on local infrastructure.',
      },
      {
        label: 'Public platform',
        value: 'Live',
        description:
          'The beauty product review platform is publicly accessible, while internal implementation details remain private.',
        source: 'https://critiques.she.com/',
      },
    ],
  },
] satisfies CaseStudy[];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
