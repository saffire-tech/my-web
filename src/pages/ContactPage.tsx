import React, { useEffect } from 'react';
import ContactForm from '../components/contact/ContactForm';
import SectionHeader from '../components/ui/SectionHeader';
import { MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - Saffire Tech Consult';
  }, []);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader 
          title="Contact Us" 
          subtitle="Have questions or ready to transform your professional image? Reach out to us."
        />
        
        <div className="mt-12">
          <ContactForm />
        </div>
        
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1 p-8 bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Visit Our Office</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="mr-3 flex-shrink-0 mt-1" size={20} />
                  <p>
                    123 Business Avenue<br />
                    Accra, Ghana
                  </p>
                </div>
                <p className="text-white/80">
                  We're conveniently located in central Accra, easily accessible by public transportation.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2 h-64 md:h-auto">
              {/* Placeholder for map - in a real implementation, we would use Google Maps or similar */}
              <div className="h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-300">Interactive Map Would Be Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;