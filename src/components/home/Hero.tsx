import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Globe, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              <span className="block">Shaping Digital Identities</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">With Precision</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              We craft stunning CVs and portfolio websites that help you stand out from the crowd and open doors to new opportunities.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/services" 
                className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <span>Our Services</span>
                <ChevronRight size={18} className="ml-1" />
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 text-base font-medium text-blue-600 bg-white border border-blue-200 rounded-lg shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-105 flex items-center justify-center dark:bg-gray-800 dark:text-blue-400 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <span>Free Consultation</span>
              </Link>
            </div>
          </div>
          
          {/* Hero Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Professional CVs</h3>
              <p className="text-gray-600 dark:text-gray-300">
                ATS-friendly, visually appealing CVs that highlight your strengths and help you land interviews.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-cyan-600 dark:text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Portfolio Websites</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Personalized website designs that showcase your work and help you build a powerful online presence.
              </p>
            </div>
            
            <div className="sm:col-span-2 bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-xl shadow-md">
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight size={20} className="mr-1 flex-shrink-0 mt-0.5" />
                    <span>Fast turnaround time with premium quality</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={20} className="mr-1 flex-shrink-0 mt-0.5" />
                    <span>Affordable pricing with flexible packages</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={20} className="mr-1 flex-shrink-0 mt-0.5" />
                    <span>Personalized designs tailored to your profession</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={20} className="mr-1 flex-shrink-0 mt-0.5" />
                    <span>Free consultation to understand your needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;