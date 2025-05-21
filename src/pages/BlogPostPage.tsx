import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

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
    content: `
      <p>In today's digital job market, most resumes are first screened by Applicant Tracking Systems (ATS) before they ever reach human eyes. Understanding how to optimize your resume for these systems is crucial to getting your application noticed.</p>
      
      <h2>What is an ATS?</h2>
      <p>An Applicant Tracking System is software that employers use to collect, sort, scan, and rank job applications. These systems help employers manage high volumes of applications and identify the most qualified candidates based on keywords, skills, experience, and other criteria.</p>
      
      <h2>Why Does ATS-Optimization Matter?</h2>
      <p>Studies show that 75% of resumes are rejected by ATS before they're ever seen by a hiring manager. This means that even highly qualified candidates can be overlooked if their resumes aren't properly optimized.</p>
      
      <h2>Top 10 Tips for ATS-Friendly Resumes</h2>
      
      <h3>1. Use Standard Resume Formats</h3>
      <p>Stick with clean, simple formats and standard section headings like "Experience," "Education," and "Skills." Avoid tables, headers/footers, text boxes, and columns as many ATS systems can't properly parse these elements.</p>
      
      <h3>2. Include Relevant Keywords</h3>
      <p>Carefully review the job description and incorporate relevant keywords and phrases throughout your resume. Focus on hard skills, certifications, and technical qualifications that match what the employer is seeking.</p>
      
      <h3>3. Optimize Your Job Titles</h3>
      <p>Use standard job titles that ATS systems will recognize. If your official title is unique to your company, consider including a more standard equivalent in parentheses.</p>
      
      <h3>4. Choose the Right File Format</h3>
      <p>Unless otherwise specified, submit your resume as a .docx file. While PDFs maintain formatting better, some older ATS systems have trouble reading them properly.</p>
      
      <h3>5. Use a Simple, Professional Font</h3>
      <p>Stick with standard fonts like Arial, Calibri, or Times New Roman in 10-12 point size. Avoid fancy fonts that may not render correctly in ATS software.</p>
      
      <h3>6. Include Location Information</h3>
      <p>Many ATS systems screen candidates based on location. Be sure to include your city and state (or "Remote" if applicable).</p>
      
      <h3>7. Avoid Images and Graphics</h3>
      <p>Photos, logos, and other graphics cannot be read by most ATS systems and may cause parsing errors that affect your entire resume.</p>
      
      <h3>8. Use Standard Section Headers</h3>
      <p>Use conventional section titles like "Work Experience" rather than creative ones like "Where I've Made an Impact."</p>
      
      <h3>9. List Dates Properly</h3>
      <p>Include months and years for employment dates (e.g., "January 2020 - March 2022"). Inconsistent date formats can confuse ATS systems.</p>
      
      <h3>10. Keep Formatting Simple</h3>
      <p>Use standard bullets (• or -) rather than custom symbols. Stick with basic formatting like bold and italics, avoiding underlining or color when possible.</p>
      
      <h2>Testing Your Resume</h2>
      <p>After optimizing your resume, test how it performs through an ATS by using online tools that simulate ATS scanning. This can help identify any potential issues before you submit your application.</p>
      
      <h2>Conclusion</h2>
      <p>While optimizing for ATS systems is important, remember that your resume should still be engaging and readable for the human recruiters who will review it after it passes the ATS screen. Balance ATS optimization with compelling content that showcases your unique value to potential employers.</p>
      
      <p>Need help crafting an ATS-friendly resume that still stands out to hiring managers? Our professional CV design and resume writing services can help you create application materials that pass both automated and human screening with flying colors.</p>
    `,
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
  }
];

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  
  useEffect(() => {
    // Find the post with the matching ID
    const foundPost = blogPosts.find(post => post.id === id);
    setPost(foundPost || null);
    
    // Update page title
    if (foundPost) {
      document.title = `${foundPost.title} - Saffire Tech Consult`;
    } else {
      document.title = 'Blog Post Not Found - Saffire Tech Consult';
    }
  }, [id]);
  
  // Find next and previous posts
  const currentIndex = blogPosts.findIndex(post => post.id === id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  
  // If post not found
  if (!post) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link 
              to="/blog" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ChevronLeft size={20} className="mr-1" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="h-64 md:h-96 relative">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                {post.category}
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-300"
                  >
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </div>
                ))}
              </div>
              
              {/* Blog Content */}
              <div 
                className="prose max-w-none dark:prose-invert prose-blue prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Share Section */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="text-gray-700 dark:text-gray-300 font-medium">Share this article:</div>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                    <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                    <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </button>
                    <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Navigation between posts */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {prevPost && (
                  <Link 
                    to={`/blog/${prevPost.id}`} 
                    className="flex items-start p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <ChevronLeft size={20} className="mr-2 mt-1 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Previous Article</div>
                      <p className="font-medium text-gray-900 dark:text-white">{prevPost.title}</p>
                    </div>
                  </Link>
                )}
                
                {nextPost && (
                  <Link 
                    to={`/blog/${nextPost.id}`} 
                    className={`flex items-start p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${!prevPost ? 'md:col-start-2' : ''}`}
                  >
                    <div className="text-right flex-grow">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Next Article</div>
                      <p className="font-medium text-gray-900 dark:text-white">{nextPost.title}</p>
                    </div>
                    <ChevronRight size={20} className="ml-2 mt-1 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  </Link>
                )}
              </div>
            </div>
          </div>
          
          {/* Back to blog link */}
          <div className="mt-6 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              <ChevronLeft size={20} className="mr-1" />
              Back to all articles
            </Link>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Need Professional Help With Your CV or Portfolio?</h3>
            <p className="text-xl opacity-90 mb-6">
              Our experts can help you create standout professional materials that get results.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;