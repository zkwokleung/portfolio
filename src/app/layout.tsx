import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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
  title: 'Andrew SZE-TO - Full-Stack Developer & Game Developer',
  description:
    'Passionate software developer from Hong Kong specializing in web development, API design, game logic, and AI/ML integration. Experienced in Next.js, Laravel, Unity, and computer vision solutions.',
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
  authors: [{ name: 'Andrew SZE-TO' }],
  creator: 'Andrew SZE-TO',
  openGraph: {
    title: 'Andrew SZE-TO - Full-Stack Developer & Game Developer',
    description:
      'Passionate software developer from Hong Kong specializing in web development, API design, game logic, and AI/ML integration. Crafting what people dreamed of through clean, scalable code.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Andrew SZE-TO Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrew SZE-TO - Full-Stack Developer & Game Developer',
    description:
      'Passionate software developer from Hong Kong specializing in web development, API design, game logic, and AI/ML integration.',
    creator: '@zkwokleung',
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
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code when available
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
