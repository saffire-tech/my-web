import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Personal Portfolio - Photography",
    category: "Portfolio Website",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A minimalist portfolio website for a professional photographer, with elegant galleries and subtle animations.",
    link: "#"
  },
  {
    id: "2",
    title: "Creative Director Resume",
    category: "CV Design",
    image: "https://images.pexels.com/photos/68562/pexels-photo-68562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A bold, creative CV design for an art director with visual elements that showcase their design sensibilities.",
    link: "#"
  },
  {
    id: "3",
    title: "Software Engineer Portfolio",
    category: "Portfolio Website",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A clean, technical portfolio for a software developer featuring project showcases and GitHub integration.",
    link: "#"
  },
  {
    id: "4",
    title: "Marketing Specialist CV",
    category: "CV Design",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A strategic resume layout highlighting campaign results and marketing metrics with a professional look.",
    link: "#"
  },
  {
    id: "5",
    title: "Architect Portfolio",
    category: "Portfolio Website",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A sophisticated portfolio for an architect with 3D project showcases and technical drawings.",
    link: "#"
  },
  {
    id: "6",
    title: "Medical Professional CV",
    category: "CV Design",
    image: "https://images.pexels.com/photos/4226124/pexels-photo-4226124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A trustworthy, professional CV design for healthcare professionals with clear credentials display.",
    link: "#"
  }
];

const PortfolioGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  
  const categories = ['all', ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);
  
  const openModal = (item: PortfolioItem) => {
    setActiveItem(item);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setActiveItem(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div 
            key={item.id}
            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer"
            onClick={() => openModal(item)}
          >
            <div className="relative overflow-hidden h-56">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="w-full">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal */}
      {activeItem && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative h-72 sm:h-96">
              <img 
                src={activeItem.image} 
                alt={activeItem.title}
                className="w-full h-full object-cover" 
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{activeItem.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400">{activeItem.category}</p>
                </div>
                
                {activeItem.link && (
                  <a 
                    href={activeItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">{activeItem.description}</p>
              
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;