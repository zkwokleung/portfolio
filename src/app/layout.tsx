import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { siteData } from '@/data/site';
import { siteUrl } from '@/lib/site-url';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${siteData.name} | ${siteData.title}`,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.hero.description,
  alternates: {
    canonical: './',
  },
  keywords: [
    'Andrew SZE-TO',
    'Full-stack Developer',
    'Game Developer',
    'Hong Kong Developer',
    'Next.js',
    'Laravel',
    'Unity',
    'Computer Vision',
    'AI/ML',
    'React',
    'TypeScript',
    'Software Engineer',
  ],
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  openGraph: {
    title: `${siteData.name} | ${siteData.title}`,
    description: siteData.hero.description,
    type: 'website',
    url: './',
    locale: 'en_US',
    siteName: `${siteData.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteData.name} | ${siteData.title}`,
    description: siteData.hero.description,
    creator: '@zkwokleung',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <a
          href='#main-content'
          className='fixed left-4 top-4 z-[100] inline-flex min-h-11 -translate-y-24 items-center rounded-md bg-foreground px-4 font-semibold text-background shadow-lg transition-transform focus-visible:translate-y-0'
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
