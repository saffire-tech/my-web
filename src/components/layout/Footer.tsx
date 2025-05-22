import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MessageSquare, ChevronRight, Lock } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="md:col-span-4">
            <div className="flex items-center">
              <Logo />
              <span className="ml-2 text-lg font-bold text-gray-900 dark:text-white">Saffire Tech</span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Empowering individuals and brands by crafting standout CVs and vibrant portfolio websites that open doors to opportunities.
            </p>
            <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-500">
              "Shaping digital identities with precision and brilliance."
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://instagram.com/enoch.osafo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://wa.me/yourphonenumber" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  <span>Portfolio</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link 
                  to="/services#cv-design" 
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  <span>CV Design</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#resume-writing" 
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  <span>Resume Writing</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#portfolio-websites" 
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  <span>Portfolio Websites</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#career-consulting" 
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors flex items-center"
                >
                  <ChevronRight size={14} className="mr-1" />
                  <span>Career Consulting</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Contact Us
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Have questions or need assistance? Reach out to us.
            </p>
            <div className="mt-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 dark:text-gray-400">Email: info@saffiretechconsult.com</p>
              <p className="text-gray-600 dark:text-gray-400">Phone: +233 XX XXX XXXX</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Line */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Saffire Tech Consult. All rights reserved.
            </p>
            <Link 
              to="/admin/login" 
              className="mt-2 sm:mt-0 inline-flex items-center text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <Lock size={14} className="mr-1" />
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;