import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import { siteData } from '@/data/site';

const socialImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: `${siteData.name}, ${siteData.title}`,
};

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteData.name} | ${siteData.title}`,
    description: siteData.hero.description,
    type: 'website',
    url: '/',
    locale: 'en_US',
    siteName: `${siteData.name} Portfolio`,
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteData.name} | ${siteData.title}`,
    description: siteData.hero.description,
    creator: '@zkwokleung',
    images: [socialImage],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id='main-content' tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
