"use client";

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/loading-screen';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import TechnologiesSection from '@/components/technologies-section';
import TestimonialsSection from '@/components/testimonials-section';
import PricingSection from '@/components/pricing-section';
import WhyUsSection from '@/components/why-us-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="min-h-screen surface-primary text-primary overflow-x-hidden theme-transition">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <PricingSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}