import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import BlogPostPage from './pages/BlogPostPage';

// Admin Pages
import LoginPage from './pages/admin/LoginPage';
import AdminLayout from './components/admin/AdminLayout';
import MessagesPage from './pages/admin/MessagesPage';
import BlogManagementPage from './pages/admin/BlogManagementPage';
import ServicesManagementPage from './pages/admin/ServicesManagementPage';
import PromotionsPage from './pages/admin/PromotionsPage';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Context Providers
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Routes>
              {/* Admin Routes */}
              <Route path="/admin/login" element={<LoginPage />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="messages" element={<MessagesPage />} />
                <Route path="blog" element={<BlogManagementPage />} />
                <Route path="services" element={<ServicesManagementPage />} />
                <Route path="promotions" element={<PromotionsPage />} />
              </Route>
              
              {/* Public Routes */}
              <Route
                path="*"
                element={
                  <>
                    <Navbar />
                    <main className="flex-grow">
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/blog/:id" element={<BlogPostPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/about" element={<AboutPage />} />
                      </Routes>
                    </main>
                    <Footer />
                  </>
                }
              />
            </Routes>
          </div>
          <Toaster position="top-right" />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
