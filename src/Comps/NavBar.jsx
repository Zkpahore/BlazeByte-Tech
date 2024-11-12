import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-800 text-white py-4 px-6 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">
            <img
              src="blazebytetech.png"
              alt="Blazebyte tech"
              className="w-64 top-2 absolute h-auto"
            />
          </Link>
        </h1>

        {/* Hamburger icon for mobile */}
        <button
          onClick={toggleMenu}
          className="text-3xl md:hidden focus:outline-none transition-transform duration-300 transform hover:scale-110"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 items-center text-lg font-medium">
          <li>
            <Link to="/about" className="hover:text-yellow-400 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-yellow-400 transition duration-200">
              Services
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-yellow-400 transition duration-200">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-yellow-400 transition duration-200">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition duration-200">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-yellow-400 transition duration-200">
              Faq
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu with rounded pop-up transition */}
      <div
        className={`md:hidden fixed inset-0 bg-blue-900 bg-opacity-90 backdrop-blur-md transform transition-all duration-700 ease-in-out ${
          isOpen
            ? 'translate-y-0 scale-100 opacity-100 rounded-none'
            : '-translate-y-full scale-75 opacity-0 rounded-full'
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-3xl text-white focus:outline-none transition-transform duration-300 transform hover:scale-110"
          aria-label="Close Menu"
        >
          <FaTimes />
        </button>

        <ul className="flex flex-col items-center justify-center min-h-screen gap-6 text-2xl font-semibold tracking-wide text-white">
          {['About', 'Services', 'Portfolio', 'Blog', 'Contact', 'Faq'].map((item, index) => (
            <li key={index} className="w-full text-center">
              <Link
                to={`/${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="block w-full py-2 hover:text-yellow-400 transition duration-200"
              >
                {item}
              </Link>
              {index < 5 && <hr className="w-1/2 mx-auto border-gray-500" />}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
