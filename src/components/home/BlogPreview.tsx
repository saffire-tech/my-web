import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Tips for Crafting an ATS-Friendly Resume",
    excerpt: "Learn how to optimize your resume to pass through Applicant Tracking Systems and land more interviews.",
    image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "June 15, 2025",
    category: "Resume Tips"
  },
  {
    id: "2",
    title: "Building Your Personal Brand as a Recent Graduate",
    excerpt: "Discover strategies to establish a strong professional identity when you're just starting your career.",
    image: "https://images.pexels.com/photos/6325954/pexels-photo-6325954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "June 02, 2025",
    category: "Career Advice"
  },
  {
    id: "3",
    title: "Portfolio Essentials: What Every Designer Should Include",
    excerpt: "The key elements every creative professional should showcase in their online portfolio.",
    image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "May 28, 2025",
    category: "Portfolio Design"
  }
];

const BlogPreview: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Latest Career Tips
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto my-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Insights and advice to help you advance your career and make a great impression.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
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
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  <Link to={`/blog/${post.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
                >
                  Read more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all inline-flex items-center"
          >
            <span>View All Articles</span>
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;