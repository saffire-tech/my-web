import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  MessageSquare, 
  FileText, 
  Tag, 
  Megaphone, 
  LogOut 
} from 'lucide-react';

const AdminSidebar: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h2>
      </div>
      
      <nav className="mt-6">
        <NavLink
          to="/admin/messages"
          className={({ isActive }) => `
            flex items-center px-6 py-3 text-gray-700 dark:text-gray-200
            ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}
          `}
        >
          <MessageSquare size={20} className="mr-3" />
          <span>Messages</span>
        </NavLink>
        
        <NavLink
          to="/admin/blog"
          className={({ isActive }) => `
            flex items-center px-6 py-3 text-gray-700 dark:text-gray-200
            ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}
          `}
        >
          <FileText size={20} className="mr-3" />
          <span>Blog Posts</span>
        </NavLink>
        
        <NavLink
          to="/admin/services"
          className={({ isActive }) => `
            flex items-center px-6 py-3 text-gray-700 dark:text-gray-200
            ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}
          `}
        >
          <Tag size={20} className="mr-3" />
          <span>Services</span>
        </NavLink>
        
        <NavLink
          to="/admin/promotions"
          className={({ isActive }) => `
            flex items-center px-6 py-3 text-gray-700 dark:text-gray-200
            ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}
          `}
        >
          <Megaphone size={20} className="mr-3" />
          <span>Promotions</span>
        </NavLink>
      </nav>
      
      <div className="absolute bottom-0 w-full p-6">
        <button
          onClick={() => signOut()}
          className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <LogOut size={20} className="mr-3" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;