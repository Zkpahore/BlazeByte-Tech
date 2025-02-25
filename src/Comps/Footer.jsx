import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white pt-12 pb-8">
    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-20 w-64 h-64 bg-gradient-to-l from-purple-400/10 to-pink-600/10 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4">
      <div className="text-center space-y-8">
        {/* Social links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com' },
            { icon: <FaFacebookF />, label: 'Facebook', href: 'https://facebook.com' },
            { icon: <FaTwitter />, label: 'Twitter', href: 'https://twitter.com' },
            { 
              icon: <FaEnvelope />, 
              label: 'Email Us', 
              href: 'mailto:techblazebyte@gmail.com?subject=Inquiry%20from%20Website' 
            }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-4 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <span className="text-3xl mb-2 transition-all duration-300 group-hover:text-cyan-400">
                {item.icon}
              </span>
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Copyright and text */}
        <div className="space-y-4 border-t border-white/10 pt-8">
          <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            BlazeByte Tech
          </h3>
          <p className="text-sm opacity-80 max-w-xl mx-auto">
            Transforming digital landscapes with innovative solutions and cutting-edge technology
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm opacity-75">
            <span>&copy; 2024 All rights reserved</span>
            <span className="hidden md:block">•</span>
            <span>Privacy Policy</span>
            <span className="hidden md:block">•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </div>

    {/* Animated border */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse" />
  </footer>
);

export default Footer;