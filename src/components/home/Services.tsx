import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Globe, MessageSquare, Briefcase, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, color }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>
      <Link 
        to={link} 
        className="mt-auto text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
      >
        Learn more
        <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto my-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We offer a range of services to help you present yourself professionally and stand out in the competitive market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            icon={<FileText className="text-blue-600 dark:text-blue-400" size={24} />}
            title="CV Design"
            description="We create visually appealing, ATS-friendly CVs that highlight your skills and experience, tailored to your industry."
            link="/services#cv-design"
            color="bg-blue-100 dark:bg-blue-900/30"
          />
          
          <ServiceCard 
            icon={<MessageSquare className="text-purple-600 dark:text-purple-400" size={24} />}
            title="Resume Writing"
            description="Our professional writers craft compelling resumes that tell your career story and catch recruiters' attention."
            link="/services#resume-writing"
            color="bg-purple-100 dark:bg-purple-900/30"
          />
          
          <ServiceCard 
            icon={<Globe className="text-cyan-600 dark:text-cyan-400" size={24} />}
            title="Portfolio Websites"
            description="Custom-designed websites that showcase your work and skills, creating a powerful online presence for your career."
            link="/services#portfolio-websites"
            color="bg-cyan-100 dark:bg-cyan-900/30"
          />
          
          <ServiceCard 
            icon={<Briefcase className="text-emerald-600 dark:text-emerald-400" size={24} />}
            title="Career Consulting"
            description="Expert guidance on job applications, interview preparation, and career advancement strategies."
            link="/services#career-consulting"
            color="bg-emerald-100 dark:bg-emerald-900/30"
          />
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all inline-flex items-center"
          >
            <span>View All Services</span>
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;