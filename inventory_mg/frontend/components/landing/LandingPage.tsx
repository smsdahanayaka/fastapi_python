'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import PackagesSection from './PackagesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const LandingPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const createParticles = () => {
      const particles = document.querySelector('.particles');
      if (!particles) return;

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particles.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      <div className="particles fixed inset-0 pointer-events-none z-0" />
      <motion.div
        className="gradient-bg fixed inset-0 z-0"
        style={{ y: backgroundY }}
      />
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PackagesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;