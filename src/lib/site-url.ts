const PRODUCTION_SITE_URL = 'https://portfolio.andrewszeto.com';

function parseSiteUrl(value: string) {
  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new Error('NEXT_PUBLIC_SITE_URL must be a valid absolute URL.');
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error('NEXT_PUBLIC_SITE_URL must use HTTP or HTTPS.');
  }

  if (
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    (url.pathname !== '/' && url.pathname !== '')
  ) {
    throw new Error(
      'NEXT_PUBLIC_SITE_URL must be an origin without credentials, a path, query parameters, or a hash.',
    );
  }

  return new URL(url.origin);
}

export const siteUrl = parseSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? PRODUCTION_SITE_URL,
);

export function absoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}
