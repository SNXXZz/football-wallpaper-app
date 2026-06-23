import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useAuthStore } from '../store/authStore';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAdmin, logout } = useAuthStore();

  const menuItems = [
    { label: 'Contact Admin', href: 'mailto:footemjid@gmail.com' },
    { label: 'Follow Us (WhatsApp)', href: 'https://wa.me/1234567890' },
    { label: 'Terms & Conditions', href: '#terms' },
  ];

  return (
    <header className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-highlight">
        ⚽ FootemJID
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label.includes('WhatsApp') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-highlight transition-colors"
            >
              {item.label}
            </a>
          ))}
          {isAdmin && (
            <>
              <Link
                to="/admin/upload"
                className="bg-highlight text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Upload
              </Link>
              <button
                onClick={() => {
                  logout();
                  window.location.href = '/';
                }}
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                Logout
              </button>
            </>
          )}
          {!isAdmin && (
            <Link
              to="/admin/login"
              className="bg-accent text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Admin
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-highlight text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-secondary p-4 flex flex-col gap-4"
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label.includes('WhatsApp') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-highlight transition-colors"
            >
              {item.label}
            </a>
          ))}
          {isAdmin && (
            <>
              <Link
                to="/admin/upload"
                className="bg-highlight text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Upload
              </Link>
              <button
                onClick={() => {
                  logout();
                  window.location.href = '/';
                }}
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                Logout
              </button>
            </>
          )}
          {!isAdmin && (
            <Link
              to="/admin/login"
              className="bg-accent text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Admin
            </Link>
          )}
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
