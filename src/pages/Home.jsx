import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/hero/Hero';
import { Testimonial } from '../components/testimonial/Testimonial';
import { Features } from '../components/features/Features';
import { HelpSection } from '../components/help/HelpSection';
import { IncomeHub } from '../components/income/IncomeHub';
import { ShowcaseSection } from '../components/showcase/ShowcaseSection';
import { Pricing } from '../components/pricing/Pricing';
import { GeneratorSection } from '../components/generator/GeneratorSection';
import { Footer } from '../components/layout/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-page text-ink font-sans transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Testimonial />
        <Features />
        <div id="pic2">
          <HelpSection />
        </div>
        <IncomeHub />
        <div id="pic4">
          <ShowcaseSection />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="pic3">
          <GeneratorSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

