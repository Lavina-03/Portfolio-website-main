import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import WhyChooseSection from '../components/WhyChooseSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observers = sectionsRef.current.map((section, index) => {
      if (!section) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer && observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header />
      
      <main>
        <div ref={el => sectionsRef.current[0] = el}>
          <HeroSection />
        </div>
        
        <div ref={el => sectionsRef.current[1] = el}>
          <AboutSection />
        </div>
        
        <div ref={el => sectionsRef.current[2] = el}>
          <ServicesSection />
        </div>
        
        <div ref={el => sectionsRef.current[3] = el}>
          <ProjectsSection />
        </div>
        
        <div ref={el => sectionsRef.current[4] = el}>
          <WhyChooseSection />
        </div>
        
        <div ref={el => sectionsRef.current[5] = el}>
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;