import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

const testOrigin = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
).origin;
const socialImageUrl = new RegExp(
  `^${testOrigin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/opengraph-image`,
);

const caseStudies = [
  {
    path: '/case-studies/karabiner-config-editor',
    title: 'Karabiner Config Editor',
  },
  { path: '/case-studies/nasogastrix', title: 'NasogastriX' },
  {
    path: '/case-studies/beauty-product-review-platform',
    title: 'Beauty Product Review Platform',
  },
];

async function expectNoAccessibilityViolations(page: Page) {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  expect(results.violations).toEqual([]);
}

test('renders the homepage shell and core content', async ({ page }) => {
  const response = await page.goto('/');

  expect(response?.ok()).toBe(true);
  await expect(page).toHaveTitle('Andrew SZE-TO | Full-stack Developer');
  await expect(
    page.getByRole('heading', { level: 1, name: 'Andrew SZE-TO' }),
  ).toHaveCount(1);
  await expect(page.getByRole('banner')).toBeVisible();
  await expect(page.getByRole('main')).toBeVisible();
  await expect(page.getByRole('contentinfo')).toBeVisible();
  await expect(page.locator("link[rel='canonical']")).toHaveAttribute(
    'href',
    testOrigin,
  );
  await expect(page.locator("meta[property='og:url']")).toHaveAttribute(
    'content',
    testOrigin,
  );
  await expect(page.locator("meta[property='og:title']")).toHaveAttribute(
    'content',
    'Andrew SZE-TO | Full-stack Developer',
  );
  await expect(page.locator("meta[property='og:image']")).toHaveAttribute(
    'content',
    socialImageUrl,
  );
  await expect(page.locator("meta[name='twitter:image']")).toHaveAttribute(
    'content',
    socialImageUrl,
  );

  for (const heading of [
    'About Me',
    'Skills & Capabilities',
    'Selected Work',
    'Experience',
    'Education',
    "Let's Work Together",
  ]) {
    await expect(
      page.getByRole('heading', { name: heading, exact: true }),
    ).toBeVisible();
  }
});

test('resolves every same-page fragment to one element', async ({ page }) => {
  await page.goto('/');
  const fragments = await page
    .locator("a[href^='#']")
    .evaluateAll((links) => [
      ...new Set(
        links.map((link) => link.getAttribute('href')).filter(Boolean),
      ),
    ]);

  for (const fragment of fragments) {
    await expect(page.locator(fragment as string)).toHaveCount(1);
  }
});

test('filters projects and announces the result count', async ({ page }) => {
  await page.goto('/');
  const projectCards = page.locator("#projects article[id^='project-']");
  const liveRegion = page.locator("#projects [aria-live='polite']");

  await expect(projectCards).toHaveCount(10);

  for (const filter of [
    { name: 'Software (3)', count: 3 },
    { name: 'Medical Education (2)', count: 2 },
    { name: 'Other (5)', count: 5 },
  ]) {
    const button = page.getByRole('button', { name: filter.name });
    await button.click();
    await expect(button).toHaveAttribute('aria-pressed', 'true');
    await expect(projectCards).toHaveCount(filter.count);
    await expect(liveRegion).toHaveText(`Showing ${filter.count} projects`);
  }

  await page.getByRole('button', { name: 'All (10)' }).click();
  await expect(projectCards).toHaveCount(10);
});

test('supports desktop and mobile navigation', async ({ page }) => {
  await page.goto('/');
  const desktopNavigation = page.getByRole('navigation', {
    name: 'Primary navigation',
  });

  await expect(desktopNavigation).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Open navigation menu' }),
  ).toBeHidden();
  await desktopNavigation.getByRole('link', { name: 'Work' }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(
    page.getByRole('heading', { name: 'Selected Work' }),
  ).toBeInViewport();

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(desktopNavigation).toBeHidden();

  const mobileMenu = page.locator('header details');
  const menuButton = page.getByRole('button', { name: 'Open navigation menu' });
  await expect(mobileMenu).not.toHaveAttribute('open', '');
  await menuButton.click();
  await expect(mobileMenu).toHaveAttribute('open', '');
  await expect(
    page.getByRole('navigation', { name: 'Mobile navigation' }),
  ).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Close navigation menu' }),
  ).toBeVisible();

  await page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .getByRole('link', { name: 'About' })
    .click();
  await expect(mobileMenu).not.toHaveAttribute('open', '');
  await expect(page.locator('#mobile-navigation')).toBeHidden();
  await expect(page).toHaveURL(/#about$/);

  await page.getByRole('button', { name: 'Open navigation menu' }).click();
  const workLink = page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .getByRole('link', { name: 'Work' });
  await workLink.focus();
  await workLink.press('Escape');
  await expect(mobileMenu).not.toHaveAttribute('open', '');
  await expect(page.locator('#mobile-navigation')).toBeHidden();
  await expect(
    page.getByRole('button', { name: 'Open navigation menu' }),
  ).toBeFocused();

  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
});

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('keeps mobile navigation and project content usable', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await expect(
      page.getByRole('group', { name: 'Filter projects by category' }),
    ).toBeHidden();
    await expect(page.locator("#projects article[id^='project-']")).toHaveCount(
      10,
    );

    const mobileNavigation = page.getByRole('navigation', {
      name: 'Mobile navigation',
    });
    await expect(mobileNavigation).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Open navigation menu' }),
    ).toBeHidden();
    await mobileNavigation.getByRole('link', { name: 'Work' }).click();

    await expect(page).toHaveURL(/#projects$/);
    await expect(
      page.getByRole('heading', { name: 'Selected Work' }),
    ).toBeInViewport();
  });
});

test('provides a keyboard skip path to main content', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');

  const skipLink = page.getByRole('link', { name: 'Skip to main content' });
  await expect(skipLink).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main-content$/);
  await expect(page.locator('#main-content')).toBeFocused();
});

test('protects every external new-tab link', async ({ page }) => {
  await page.goto('/');
  const links = page.locator("a[href^='http'][target='_blank']");
  expect(await links.count()).toBeGreaterThan(0);

  for (const link of await links.all()) {
    await expect(link).toHaveAttribute('rel', /\bnoopener\b/);
    await expect(link).toHaveAttribute('rel', /\bnoreferrer\b/);
    await expect(link).toHaveAttribute('aria-label', /opens in a new tab/i);
  }
});

test('renders case studies, metadata routes, and unknown-slug 404s', async ({
  page,
  request,
}) => {
  for (const caseStudy of caseStudies) {
    const response = await page.goto(caseStudy.path);
    expect(response?.ok()).toBe(true);
    await expect(
      page.getByRole('heading', { level: 1, name: caseStudy.title }),
    ).toBeVisible();
    await expect(page).toHaveTitle(
      `${caseStudy.title} Case Study | Andrew SZE-TO`,
    );
    await expect(page.locator("link[rel='canonical']")).toHaveAttribute(
      'href',
      `${testOrigin}${caseStudy.path}`,
    );
    await expect(page.locator("meta[property='og:url']")).toHaveAttribute(
      'content',
      `${testOrigin}${caseStudy.path}`,
    );
    await expect(page.locator("meta[property='og:title']")).toHaveAttribute(
      'content',
      `${caseStudy.title} Case Study | Andrew SZE-TO`,
    );
    await expect(page.locator("meta[name='twitter:title']")).toHaveAttribute(
      'content',
      `${caseStudy.title} Case Study | Andrew SZE-TO`,
    );
  }

  const missing = await page.goto('/case-studies/not-a-case-study');
  expect(missing?.status()).toBe(404);
  await expect(page.locator("link[rel='canonical']")).toHaveCount(0);
  await expect(page.locator("meta[property='og:url']")).toHaveCount(0);

  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.ok()).toBe(true);
  expect(sitemap.headers()['content-type']).toContain('application/xml');
  const sitemapText = await sitemap.text();
  const sitemapUrls = [
    `${testOrigin}/`,
    ...caseStudies.map(({ path }) => `${testOrigin}${path}`),
  ];
  expect(sitemapText.match(/<loc>[^<]+<\/loc>/g)).toEqual(
    sitemapUrls.map((url) => `<loc>${url}</loc>`),
  );

  const robots = await request.get('/robots.txt');
  expect(robots.ok()).toBe(true);
  expect(robots.headers()['content-type']).toContain('text/plain');
  expect(await robots.text()).toBe(
    `User-Agent: *\nAllow: /\n\nSitemap: ${testOrigin}/sitemap.xml\n`,
  );

  const socialImage = await request.get('/opengraph-image');
  expect(socialImage.ok()).toBe(true);
  expect(socialImage.headers()['content-type']).toContain('image/png');
  expect((await socialImage.body()).byteLength).toBeGreaterThan(1000);
});

test('renders an accessible noindex page for unknown routes', async ({
  page,
}) => {
  const response = await page.goto('/not-a-portfolio-route');

  expect(response?.status()).toBe(404);
  await expect(page.getByText('This page could not be found.')).toBeVisible();
  await expect(page.locator("meta[name='robots']")).toHaveAttribute(
    'content',
    /noindex/i,
  );
  await expectNoAccessibilityViolations(page);
});

test('has no automatically detectable WCAG A or AA violations', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  const lightColors = await page.locator('body').evaluate((body) => ({
    background: getComputedStyle(body).backgroundColor,
    foreground: getComputedStyle(body).color,
  }));
  await expectNoAccessibilityViolations(page);

  await page.emulateMedia({ colorScheme: 'dark' });
  await page.reload();
  const darkColors = await page.locator('body').evaluate((body) => ({
    background: getComputedStyle(body).backgroundColor,
    foreground: getComputedStyle(body).color,
  }));
  expect(darkColors).not.toEqual(lightColors);
  await expectNoAccessibilityViolations(page);

  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: 'Open navigation menu' }).click();
  await expectNoAccessibilityViolations(page);

  await page.goto(caseStudies[0].path);
  await expectNoAccessibilityViolations(page);
});
