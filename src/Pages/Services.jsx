import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-20 lg:px-16 bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800">
      {/* Heading and Intro Text */}
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
        Our Digital Solutions
      </h2>
      <p className="text-center max-w-2xl mx-auto text-gray-700 mb-8 text-lg leading-relaxed">
        BlazeByte Tech is your go-to partner for comprehensive digital solutions that empower businesses to thrive in the digital age. We specialize in a wide range of services designed to enhance your online presence, optimize performance, and deliver measurable results.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <Link to="/services/web-development" className="p-6 bg-gradient-to-r from-blue-200 to-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <h3 className="text-2xl font-semibold text-white">Web Development</h3>
          <p className="mt-2 text-gray-100 text-base">We specialize in building custom websites, dynamic web apps, and e-commerce platforms tailored to your business needs.</p>
        </Link>

        <Link to="/services/seo-services" className="p-6 bg-gradient-to-r from-green-200 to-green-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <h3 className="text-2xl font-semibold text-white">SEO Services</h3>
          <p className="mt-2 text-gray-100 text-base">Maximize your visibility and organic traffic through our comprehensive SEO strategies, including technical SEO and content optimization.</p>
        </Link>

        <Link to="/services/E-commerce-Solutions" className="p-6 bg-gradient-to-r from-orange-200 to-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <h3 className="text-2xl font-semibold text-white">Digital Marketing</h3>
          <p className="mt-2 text-gray-100 text-base">From PPC campaigns to social media management, our digital marketing services help you build brand awareness and drive conversions.</p>
        </Link>

        <Link to="/services/digital-marketing" className="p-6 bg-gradient-to-r from-yellow-200 to-yellow-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <h3 className="text-2xl font-semibold text-white">E-commerce services</h3>
          <p className="mt-2 text-gray-100 text-base">Create a seamless shopping experience for your customers with our customizable e-commerce services that support growth and scalability.</p>
        </Link>
      </div>

      {/* Additional Sections */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
          Tailored Services for Every Industry
        </h3>
        <p className="text-center max-w-xl mx-auto text-gray-700 mb-8 text-lg leading-relaxed">
          Whether you’re a small startup or a large corporation, we offer services that can be customized to fit your unique business needs. Our goal is to help you achieve success in a competitive digital landscape.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gradient-to-r from-gray-200 to-gray-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-white">API Integration</h4>
            <p className="mt-2 text-gray-100 text-base">Connect and integrate your systems for better functionality, data consistency, and improved user experience.</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-indigo-200 to-indigo-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-white">CMS Migration</h4>
            <p className="mt-2 text-gray-100 text-base">Seamlessly migrate your website between content management systems with minimal disruption and data loss.</p>
          </div>
        </div>
      </div>

      {/* Process Overview Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
          Our Process
        </h3>
        <p className="text-center max-w-xl mx-auto text-gray-700 mb-8 text-lg leading-relaxed">
          Our approach is collaborative and client-centric. We work closely with you throughout the process, ensuring that we understand your needs and goals to deliver the best possible outcome.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gradient-to-r from-teal-200 to-teal-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-white">Discovery & Strategy</h4>
            <p className="mt-2 text-gray-100 text-base">We start by understanding your business, goals, and target audience to define a clear strategy that sets us up for success.</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-pink-200 to-pink-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-white">Design & Development</h4>
            <p className="mt-2 text-gray-100 text-base">Next, we create a design that reflects your brand and develop a fully functional, responsive solution tailored to your needs.</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-yellow-200 to-yellow-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-white">Launch & Optimize</h4>
            <p className="mt-2 text-gray-100 text-base">After launch, we monitor performance, optimize, and provide continuous support to ensure ongoing success.</p>
          </div>
        </div>
      </div>
      <div className="mt-16 bg-blue-800 text-white py-12 px-6 rounded-lg shadow-md text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
        <p className="max-w-xl mx-auto mb-6">
          Let's work together to create digital experiences that connect and grow. Get in touch with us today to learn how we can help bring your vision to life.
        </p>
        <Link to='/contact'>
        <button className="mt-4 bg-white text-blue-800 px-8 py-3 rounded-md font-semibold transition transform hover:scale-105">
          Contact Us
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
