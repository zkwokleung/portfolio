# Andrew SZE-TO - Portfolio

The source for [portfolio.andrewszeto.com](https://portfolio.andrewszeto.com), a
responsive portfolio built with Next.js 15, React 19, TypeScript, and Tailwind
CSS 4.

The site presents selected software and medical-education work, detailed case
studies, experience, education, and contact information. It is statically
generated and supports system light and dark color schemes.

## Requirements

- [Bun](https://bun.sh/) using the version declared in `package.json`
- Node.js 20.9 or newer when deploying to a Node.js runtime
- Chromium for the Playwright end-to-end suite

Bun is the only supported package manager. Keep `bun.lock` synchronized with
`package.json`.

## Setup

```bash
git clone https://github.com/zkwokleung/portfolio.git
cd portfolio
bun ci
bunx playwright install chromium
```

Create `.env.local` from the safe `.env.example` template when configuring the
site origin, then start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

`NEXT_PUBLIC_SITE_URL` is the public origin used for canonical links, sitemap
entries, robots metadata, and social metadata. It must be an absolute HTTP or
HTTPS origin without credentials, paths, query parameters, or fragments. The
production value is `https://portfolio.andrewszeto.com`.

`PLAYWRIGHT_BASE_URL` is optional. When it is empty or unset, Playwright starts
a local Next.js server. Set it to an existing deployment URL to test that
deployment instead. Playwright does not load `.env.local`, so export this value
in the shell or CI environment that starts the tests. Set `NEXT_PUBLIC_SITE_URL`
in the same environment to the canonical origin expected from that deployment.
Neither variable is secret.

For example:

```bash
PLAYWRIGHT_BASE_URL=https://preview.example.com \
NEXT_PUBLIC_SITE_URL=https://portfolio.andrewszeto.com \
bun run test:e2e
```

Do not place credentials or deployment secrets in `.env.example` or commit local
environment files.

## Commands

- `bun run dev` starts the Turbopack development server.
- `bun run typecheck` checks TypeScript without emitting files.
- `bun run lint` runs ESLint with zero warnings allowed.
- `bun run format` formats maintained source and configuration files.
- `bun run format:check` verifies formatting without changing files.
- `bun run build` creates the production build.
- `bun run start` serves an existing production build.
- `bun run verify` runs typechecking, linting, formatting checks, and a
  production build.
- `bun run test:e2e` runs the Playwright Chromium suite.
- `bun run test:e2e:ui` opens Playwright's interactive test runner.
- `bun run test:e2e:report` opens the most recent HTML report.

On a clean Linux host, install Chromium and its operating-system dependencies
with `bunx playwright install --with-deps chromium`.

For a release-equivalent local check that serves the production build, run:

```bash
bun ci
bunx playwright install chromium
NEXT_PUBLIC_SITE_URL=https://portfolio.andrewszeto.com CI=true bun run verify
NEXT_PUBLIC_SITE_URL=https://portfolio.andrewszeto.com CI=true bun run test:e2e
```

## Project Structure

- `src/app` contains App Router pages, case studies, and metadata routes.
- `src/components` contains layout, section, and reusable UI components.
- `src/data` contains portfolio content and shared content types.
- `src/lib` contains URL and class-name utilities.
- `tests/e2e` contains functional, responsive, metadata, and accessibility
  tests.
- `.github/workflows/ci.yml` runs verification and Playwright on pushes and pull
  requests to `main`.

## Content Updates

- Update personal and navigation content in `src/data/site.ts`.
- Update skills, experience, and education in `src/data/career.ts`.
- Update project cards in `src/data/projects.ts`.
- Update detailed case studies in `src/data/case-studies.ts`.
- Add project imagery under `public/projects` and provide meaningful alternative
  text in the corresponding project data.

Only publish metrics, awards, project details, and imagery that are approved for
public release.

## Deployment

The site is deployed through Vercel. Configure `NEXT_PUBLIC_SITE_URL` in the
production and preview environments before building. Pull requests run GitHub
Actions verification and upload the Playwright HTML report for inspection.
