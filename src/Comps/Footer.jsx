import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-blue-900 text-white py-6 px-4 md:px-0">
    <div className="container mx-auto text-center space-y-4 md:space-y-2">
      <p className="text-sm md:text-base">&copy; 2024 BlazeByte Tech. All rights reserved.</p>
      <p className="text-sm md:text-base">Follow us on social media for the latest updates.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-4">
        {/* Social icons with links */}
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center hover:text-yellow-400 transition-all duration-200"
        >
          <FaInstagram className="text-2xl mr-2" /> 
          <span className="text-sm md:text-base">Instagram</span>
        </a>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center hover:text-yellow-400 transition-all duration-200"
        >
          <FaFacebookF className="text-2xl mr-2" /> 
          <span className="text-sm md:text-base">Facebook</span>
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center hover:text-yellow-400 transition-all duration-200"
        >
          <FaTwitter className="text-2xl mr-2" /> 
          <span className="text-sm md:text-base">Twitter</span>
        </a>
        {/* Email link */}
        <a 
          href="mailto:info@blazebytech.com"
          className="flex items-center justify-center hover:text-yellow-400 transition-all duration-200"
        >
          <FaEnvelope className="text-2xl mr-2" /> 
          <span className="text-sm md:text-base">Email Us</span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
