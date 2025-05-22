import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Logo from '../ui/Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img 
              src="https://imgur.com/mUShMN5.png" 
              alt="Website Logo" 
              className="logo w-12 h-12 object-contain" 
            />
            
          </Link>
            <span className="ml-2 text-lg font-bold text-gray-900 dark:text-white">Saffire Tech</span>
          
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({isActive}) => `
                text-sm font-medium transition-colors duration-200
                ${isActive 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                }
              `}
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              className={({isActive}) => `
                text-sm font-medium transition-colors duration-200
                ${isActive 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                }
              `}
            >
              Services
            </NavLink>
            <NavLink 
              to="/pricing" 
              className={({isActive}) => `
                text-sm font-medium transition-colors duration-200
                ${isActive 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                }
              `}
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({isActive}) => `
                text-sm font-medium transition-colors duration-200
                ${isActive 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                }
              `}
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({isActive}) => `
                text-sm font-medium transition-colors duration-200
                ${isActive 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                }
              `}
            >
              Blog
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => `
                text-sm font-medium transition-colors duration-200
                ${isActive 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                }
              `}
            >
              About
            </NavLink>
          </nav>
          
          {/* CTA and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <Link 
              to="/contact" 
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              type="button"
              className="p-2 text-gray-700 rounded-md dark:text-gray-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({isActive}) => `
                  px-3 py-2 rounded-lg transition-colors duration-200
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400' 
                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800'
                  }
                `}
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink 
                to="/services" 
                className={({isActive}) => `
                  px-3 py-2 rounded-lg transition-colors duration-200
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400' 
                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800'
                  }
                `}
                onClick={closeMenu}
              >
                Services
              </NavLink>
              <NavLink 
                to="/pricing" 
                className={({isActive}) => `
                  px-3 py-2 rounded-lg transition-colors duration-200
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400' 
                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800'
                  }
                `}
                onClick={closeMenu}
              >
                Pricing
              </NavLink>
              <NavLink 
                to="/portfolio" 
                className={({isActive}) => `
                  px-3 py-2 rounded-lg transition-colors duration-200
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400' 
                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800'
                  }
                `}
                onClick={closeMenu}
              >
                Portfolio
              </NavLink>
              <NavLink 
                to="/blog" 
                className={({isActive}) => `
                  px-3 py-2 rounded-lg transition-colors duration-200
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400' 
                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800'
                  }
                `}
                onClick={closeMenu}
              >
                Blog
              </NavLink>
              <NavLink 
                to="/about" 
                className={({isActive}) => `
                  px-3 py-2 rounded-lg transition-colors duration-200
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400' 
                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800'
                  }
                `}
                onClick={closeMenu}
              >
                About
              </NavLink>
              <Link 
                to="/contact" 
                className="px-3 py-2 text-center text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
                onClick={closeMenu}
              >
                Book a Consultation
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;