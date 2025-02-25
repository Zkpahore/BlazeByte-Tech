import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Fixed Menu Icon */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 p-3 rounded-full bg-blue-800 text-white shadow-lg hover:bg-blue-700 transition-all duration-300"
      >
        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-blue-800 shadow-xl transform transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 mt-16">
          {/* Navigation Links */}
          <nav className="space-y-4">
            {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact', 'FAQ'].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="block py-3 px-4 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-medium"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default Navbar;