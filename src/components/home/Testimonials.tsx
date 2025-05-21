import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Developer",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Saffire Tech created an amazing portfolio website for me. The design is sleek, modern, and perfectly showcases my work. It's helped me land several freelance opportunities since launching!",
    rating: 5
  },
  {
    id: 2,
    name: "Mark Williams",
    role: "Marketing Graduate",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "After struggling with job applications for months, I had Saffire Tech redesign my CV. The transformation was incredible! I started getting interview calls within a week of using my new CV.",
    rating: 5
  },
  {
    id: 3,
    name: "Aisha Mensah",
    role: "Graphic Designer",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "The portfolio website Saffire created for me perfectly represents my design aesthetic. The process was smooth, and they really listened to my needs. Highly recommend their services!",
    rating: 4
  },
  {
    id: 4,
    name: "David Nkrumah",
    role: "Recent MBA Graduate",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "The team at Saffire Tech helped me translate my academic achievements into a professional CV that stands out. Their career consultation was invaluable as I transition into the corporate world.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto my-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Success stories from professionals who transformed their career prospects with our services.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Version */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8">
              {[
                testimonials[currentIndex % testimonials.length],
                testimonials[(currentIndex + 1) % testimonials.length]
              ].map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i}
                        size={18} 
                        className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-600 dark:text-gray-300 mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Version */}
          <div className="md:hidden">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    size={16} 
                    className={i < testimonials[currentIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-600 dark:text-gray-300 mb-6">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;