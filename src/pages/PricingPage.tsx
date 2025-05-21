import React, { useEffect } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import PricingCard from '../components/pricing/PricingCard';
import { Check, HelpCircle } from 'lucide-react';

const PricingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Pricing - Saffire Tech Consult';
  }, []);
  
  const cvFeatures = [
    { text: "Professional CV Design", included: true },
    { text: "ATS-Friendly Format", included: true },
    { text: "2 Revisions", included: true },
    { text: "Cover Letter", included: false },
    { text: "LinkedIn Profile Optimization", included: false },
    { text: "Career Consultation", included: false }
  ];
  
  const proFeatures = [
    { text: "Professional CV Design", included: true },
    { text: "ATS-Friendly Format", included: true },
    { text: "Unlimited Revisions", included: true },
    { text: "Cover Letter", included: true },
    { text: "LinkedIn Profile Optimization", included: true },
    { text: "1-Hour Career Consultation", included: true }
  ];
  
  const portfolioFeatures = [
    { text: "Custom Design", included: true },
    { text: "Mobile Responsive", included: true },
    { text: "Up to 5 Pages", included: true },
    { text: "Contact Form", included: true },
    { text: "Basic SEO", included: true },
    { text: "3 Months Free Hosting", included: true }
  ];
  
  const enterpriseFeatures = [
    { text: "Custom Design", included: true },
    { text: "Mobile Responsive", included: true },
    { text: "Unlimited Pages", included: true },
    { text: "Advanced Functionalities", included: true },
    { text: "Advanced SEO", included: true },
    { text: "1 Year Free Hosting", included: true }
  ];
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader 
          title="Pricing Plans" 
          subtitle="Choose the perfect package for your career needs. All prices are in Ghanaian Cedis (GH₵)."
        />
        
        {/* CV & Resume Pricing */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">CV & Resume Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard 
              title="Basic CV"
              price="GH₵ 250"
              description="Perfect for students and entry-level professionals looking to create their first professional CV."
              features={cvFeatures}
              cta="Get Started"
              ctaLink="/contact"
            />
            
            <PricingCard 
              title="Career Pro"
              price="GH₵ 450"
              description="Comprehensive package for professionals looking to advance their careers with a standout application."
              features={proFeatures}
              popular={true}
              cta="Choose Plan"
              ctaLink="/contact"
            />
            
            <PricingCard 
              title="Executive"
              price="GH₵ 750"
              description="Premium service for senior professionals and executives with tailored career strategy."
              features={[
                ...proFeatures,
                { text: "Executive Bio", included: true },
                { text: "3-Hour Career Strategy Session", included: true }
              ]}
              cta="Get Started"
              ctaLink="/contact"
            />
          </div>
        </div>
        
        {/* Portfolio Website Pricing */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Portfolio Website Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard 
              title="Standard Portfolio"
              price="GH₵ 1,500"
              description="Professional portfolio website perfect for creatives and freelancers."
              features={portfolioFeatures}
              cta="Get Started"
              ctaLink="/contact"
            />
            
            <PricingCard 
              title="Premium Portfolio"
              price="GH₵ 2,500"
              description="Enhanced portfolio with advanced features for established professionals."
              features={[
                ...portfolioFeatures,
                { text: "Blog Integration", included: true },
                { text: "Project Showcase Gallery", included: true },
                { text: "6 Months Free Hosting", included: true }
              ]}
              popular={true}
              cta="Choose Plan"
              ctaLink="/contact"
            />
            
            <PricingCard 
              title="Enterprise"
              price="Custom"
              description="Fully customized solution for businesses and organizations with specific requirements."
              features={enterpriseFeatures}
              cta="Contact Us"
              ctaLink="/contact"
            />
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              Frequently Asked Questions
              <HelpCircle size={20} className="ml-2 text-blue-600 dark:text-blue-400" />
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600 dark:text-gray-300">We accept mobile money payments. Details will be provided upon confirmation of your order.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How long does it take to complete a CV?</h4>
              <p className="text-gray-600 dark:text-gray-300">Our standard turnaround time for CVs is 3-5 business days. Rush services are available for an additional fee.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What's included in portfolio website hosting?</h4>
              <p className="text-gray-600 dark:text-gray-300">Our hosting includes domain registration (for the first year), server space, SSL certificate, and basic maintenance.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Do you offer any discounts?</h4>
              <p className="text-gray-600 dark:text-gray-300">Yes, we offer discounts for students, multiple services, and referrals. Contact us for details.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What information do I need to provide?</h4>
              <p className="text-gray-600 dark:text-gray-300">For CVs, we'll need your education history, work experience, skills, and any achievements. For websites, we'll discuss your requirements in detail during the consultation.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can I update my portfolio website myself?</h4>
              <p className="text-gray-600 dark:text-gray-300">Yes, we can set up your website with a content management system that allows you to make basic updates. Training is included.</p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg">
              <Check size={20} className="mr-2" />
              <p>Can't find the answer? Contact us for more information!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;