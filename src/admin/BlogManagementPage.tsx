import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

// Mock data fetching service
// Replace this with your Supabase fetch logic
const fetchBlogPosts = async () => {
  return [
    { id: 1, title: 'First Blog Post', content: 'Lorem ipsum...' },
    { id: 2, title: 'Second Blog Post', content: 'Dolor sit amet...' },
  ];
};

// Mock delete service
const deleteBlogPost = async (id: number) => {
  // Replace this with your Supabase delete logic
  return true;
};

const BlogManagementPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch blog posts on component mount
    const fetchPosts = async () => {
      try {
        const posts = await fetchBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        toast.error('Failed to fetch blog posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteBlogPost(id);
        setBlogPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        toast.success('Blog post deleted successfully.');
      } catch (error) {
        toast.error('Failed to delete the blog post.');
      }
    }
  };

  if (loading) {
    return <div>Loading blog posts...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Management</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogPosts.map((post) => (
            <tr key={post.id}>
              <td className="border border-gray-300 p-2">{post.title}</td>
              <td className="border border-gray-300 p-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 mr-2"
                  onClick={() => alert('Edit functionality is not implemented yet!')}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogManagementPage;
