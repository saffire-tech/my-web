import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import { Search, Tag, Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Tips for Crafting an ATS-Friendly Resume",
    excerpt: "Learn how to optimize your resume to pass through Applicant Tracking Systems and land more interviews.",
    content: "Full blog post content would go here...",
    image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "June 15, 2025",
    category: "Resume Tips",
    tags: ["Resume", "ATS", "Job Search", "Career"]
  },
  {
    id: "2",
    title: "Building Your Personal Brand as a Recent Graduate",
    excerpt: "Discover strategies to establish a strong professional identity when you're just starting your career.",
    content: "Full blog post content would go here...",
    image: "https://images.pexels.com/photos/6325954/pexels-photo-6325954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "June 02, 2025",
    category: "Career Advice",
    tags: ["Personal Branding", "Graduates", "Career Start", "Professional Identity"]
  },
  {
    id: "3",
    title: "Portfolio Essentials: What Every Designer Should Include",
    excerpt: "The key elements every creative professional should showcase in their online portfolio.",
    content: "Full blog post content would go here...",
    image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "May 28, 2025",
    category: "Portfolio Design",
    tags: ["Portfolio", "Design", "Creative", "Professional Development"]
  },
  {
    id: "4",
    title: "How to Prepare for a Technical Interview in 2025",
    excerpt: "Updated strategies and tips for acing technical interviews in today's competitive tech job market.",
    content: "Full blog post content would go here...",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "May 15, 2025",
    category: "Interview Tips",
    tags: ["Technical Interview", "Job Search", "Tech Career", "Interview Prep"]
  },
  {
    id: "5",
    title: "The Impact of AI on Resume Screening: What Job Seekers Need to Know",
    excerpt: "Understanding how artificial intelligence is changing the way employers screen resumes and how to adapt.",
    content: "Full blog post content would go here...",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "May 03, 2025",
    category: "Industry Trends",
    tags: ["AI", "Technology", "Resume Screening", "Job Applications"]
  },
  {
    id: "6",
    title: "Color Psychology in Portfolio Design: Choosing the Right Palette",
    excerpt: "How color choices in your portfolio can influence perceptions and convey your professional personality.",
    content: "Full blog post content would go here...",
    image: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "April 20, 2025",
    category: "Portfolio Design",
    tags: ["Color Psychology", "Design", "Portfolio", "Branding"]
  }
];

const BlogPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog - Saffire Tech Consult';
  }, []);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' || 
                           post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader 
          title="Career Insights & Tips" 
          subtitle="Expert advice, industry trends, and practical tips to help you advance your career and make a great impression."
        />
        
        {/* Search and Filter */}
        <div className="mt-12 mb-8">
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <input 
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category || (category === 'All' && selectedCategory === '')
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <div 
                key={post.id} 
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <Link to={`/blog/${post.id}`} className="block overflow-hidden h-48 relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {post.category}
                  </div>
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    <Link to={`/blog/${post.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <div 
                        key={index}
                        className="inline-flex items-center bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300"
                      >
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
                  >
                    Read more
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try changing your search term or selecting a different category.
              </p>
            </div>
          )}
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Career Tips</h3>
            <p className="text-white/90 mb-6">
              Subscribe to our newsletter for the latest career advice, industry trends, and professional development tips.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-xl mx-auto">
              <input 
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-lg sm:rounded-r-none rounded-r-lg sm:rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
              />
              <button className="mt-2 sm:mt-0 px-6 py-2 bg-white text-blue-600 font-medium rounded-l-lg sm:rounded-l-none rounded-r-lg sm:rounded-r-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="mt-4 text-sm text-white/70">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;