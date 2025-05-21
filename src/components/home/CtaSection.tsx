import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute left-0 top-0 h-full transform -translate-x-1/3 opacity-20" viewBox="0 0 800 800">
          <circle cx="400" cy="400" r="350" fill="white" />
          <circle cx="400" cy="400" r="250" fill="none" stroke="white" strokeWidth="20" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Ready to Transform Your Professional Image?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Book a free consultation with our experts to discuss your CV or portfolio website needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-colors flex items-center font-medium"
            >
              <Calendar size={20} className="mr-2" />
              <span>Book a Free Consultation</span>
            </Link>
            
            <Link 
              to="/services" 
              className="px-6 py-3 bg-transparent border-2 border-white rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-colors flex items-center font-medium"
            >
              <span>Explore Our Services</span>
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          
          <p className="mt-6 text-white/80 text-sm">
            No obligation, just friendly advice to help you succeed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;