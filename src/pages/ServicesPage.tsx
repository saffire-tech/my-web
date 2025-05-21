import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import { FileText, Globe, MessageSquare, Briefcase, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services - Saffire Tech Consult';
  }, []);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader 
          title="Our Services" 
          subtitle="Comprehensive services designed to help you present your professional identity with precision and brilliance."
        />
        
        {/* CV Design */}
        <div id="cv-design" className="mt-16 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <FileText size={16} className="mr-1" />
                CV Design
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional CV Design</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our professional CV design service transforms your career information into a compelling, visually appealing document that gets you noticed by employers and passes through Applicant Tracking Systems (ATS).
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">ATS-Friendly Formatting</h4>
                    <p className="text-gray-600 dark:text-gray-300">Optimized to pass through automated screening systems while maintaining a professional appearance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Strategic Content Organization</h4>
                    <p className="text-gray-600 dark:text-gray-300">Highlighting your strengths and achievements to capture recruiters' attention.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Industry-Specific Design</h4>
                    <p className="text-gray-600 dark:text-gray-300">Tailored designs appropriate for your industry, from corporate to creative fields.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Multiple Format Delivery</h4>
                    <p className="text-gray-600 dark:text-gray-300">Receive your CV in multiple formats (PDF, Word) for different application requirements.</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/pricing" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Pricing
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="CV Design Example"
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">The CV Design Process</h4>
                <ol className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-6 h-6 rounded-full flex items-center justify-center font-medium mr-3 flex-shrink-0">1</span>
                    <p>Submit your information through our detailed questionnaire</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-6 h-6 rounded-full flex items-center justify-center font-medium mr-3 flex-shrink-0">2</span>
                    <p>Initial design and content structuring by our experts</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-6 h-6 rounded-full flex items-center justify-center font-medium mr-3 flex-shrink-0">3</span>
                    <p>Collaborative revision process to refine your CV</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-6 h-6 rounded-full flex items-center justify-center font-medium mr-3 flex-shrink-0">4</span>
                    <p>Final delivery of your professionally designed CV</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        
        {/* Resume Writing */}
        <div id="resume-writing" className="mt-20 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Resume Writing Example"
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Why Professional Resume Writing Makes a Difference</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5 mr-2" size={18} />
                    <p>On average, recruiters spend only 6-7 seconds scanning a resume</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5 mr-2" size={18} />
                    <p>75% of resumes are rejected by ATS before reaching human eyes</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5 mr-2" size={18} />
                    <p>Professionally written resumes are 60% more likely to get you an interview</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5 mr-2" size={18} />
                    <p>A strong resume can increase your starting salary by 7-15%</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <MessageSquare size={16} className="mr-1" />
                Resume Writing
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Expert Resume Writing</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our professional writers craft compelling resumes that tell your career story effectively, highlighting achievements and skills that make you stand out from other candidates.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Achievement-Focused Content</h4>
                    <p className="text-gray-600 dark:text-gray-300">Emphasizing results and quantifiable accomplishments rather than just job duties.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Keyword Optimization</h4>
                    <p className="text-gray-600 dark:text-gray-300">Strategic inclusion of industry-specific keywords to enhance visibility in ATS systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Cover Letter Creation</h4>
                    <p className="text-gray-600 dark:text-gray-300">Professionally written cover letters that complement your resume and address specific job requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn Profile Optimization</h4>
                    <p className="text-gray-600 dark:text-gray-300">Ensuring your online presence aligns with and enhances your resume.</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/pricing" 
                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
        
        {/* Portfolio Websites */}
        <div id="portfolio-websites" className="mt-20 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Globe size={16} className="mr-1" />
                Portfolio Websites
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Custom Portfolio Websites</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Showcase your work, skills, and professional identity with a custom-designed portfolio website that helps you stand out in a competitive market and attract new opportunities.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Personalized Design</h4>
                    <p className="text-gray-600 dark:text-gray-300">Custom designs that reflect your personal brand and professional field.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Mobile Responsive</h4>
                    <p className="text-gray-600 dark:text-gray-300">Websites that look and function perfectly on all devices, from smartphones to desktops.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Project Showcases</h4>
                    <p className="text-gray-600 dark:text-gray-300">Elegant galleries and project presentations that highlight your best work.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">SEO Optimization</h4>
                    <p className="text-gray-600 dark:text-gray-300">Basic search engine optimization to help potential clients and employers find you online.</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/pricing" 
                className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                View Pricing
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Portfolio Website Example"
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Portfolio Website Features</h4>
                <div className="grid grid-cols-2 gap-3 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 flex-shrink-0 mr-2" size={16} />
                    <p>About Page</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 flex-shrink-0 mr-2" size={16} />
                    <p>Project Gallery</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 flex-shrink-0 mr-2" size={16} />
                    <p>Resume Section</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 flex-shrink-0 mr-2" size={16} />
                    <p>Contact Form</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 flex-shrink-0 mr-2" size={16} />
                    <p>Social Media Links</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 flex-shrink-0 mr-2" size={16} />
                    <p>Testimonials</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 flex-shrink-0 mr-2" size={16} />
                    <p>Blog Option</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 flex-shrink-0 mr-2" size={16} />
                    <p>SEO Basics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Career Consulting */}
        <div id="career-consulting" className="mt-20 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Career Consulting Example"
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What Our Clients Say</h4>
                <blockquote className="italic text-gray-600 dark:text-gray-300 border-l-4 border-emerald-500 pl-4 mb-4">
                  "The career consultation session was eye-opening. It helped me identify my strengths and how to position myself effectively in job applications. Within a month, I had secured three interviews and landed my dream job!"
                </blockquote>
                <p className="font-medium text-gray-900 dark:text-white">— David K., Software Engineer</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Briefcase size={16} className="mr-1" />
                Career Consulting
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Career Consulting</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get expert guidance on job applications, interview preparation, and career advancement strategies tailored to your specific goals and industry.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Career Path Planning</h4>
                    <p className="text-gray-600 dark:text-gray-300">Strategic guidance on defining and achieving your short and long-term career goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Interview Preparation</h4>
                    <p className="text-gray-600 dark:text-gray-300">Mock interviews, question preparation, and feedback to help you perform at your best.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Salary Negotiation</h4>
                    <p className="text-gray-600 dark:text-gray-300">Techniques and strategies to negotiate better compensation packages.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Personal Branding</h4>
                    <p className="text-gray-600 dark:text-gray-300">Advice on building a cohesive professional image across all platforms and interactions.</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/pricing" 
                className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Professional Image?</h3>
            <p className="text-xl opacity-90 mb-8">
              Let's work together to create the professional materials you need to succeed in today's competitive market.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Book a Free Consultation
              </Link>
              <Link 
                to="/portfolio" 
                className="px-6 py-3 bg-transparent border-2 border-white rounded-lg hover:bg-white/10 transition-colors font-medium"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;