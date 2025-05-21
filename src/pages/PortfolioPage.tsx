import React, { useEffect } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';

const PortfolioPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Portfolio - Saffire Tech Consult';
  }, []);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader 
          title="Our Portfolio" 
          subtitle="Explore our collection of CVs and portfolio websites we've created for clients across various industries."
        />
        
        <div className="mt-12">
          <PortfolioGrid />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;