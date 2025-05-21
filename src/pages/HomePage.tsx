import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';
import BlogPreview from '../components/home/BlogPreview';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Saffire Tech Consult - CV & Portfolio Website Design';
  }, []);
  
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <BlogPreview />
      <CtaSection />
    </div>
  );
};

export default HomePage;