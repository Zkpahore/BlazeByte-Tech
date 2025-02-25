import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-indigo-700 to-purple-700">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <h2 className="relative text-4xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg">
          Our Digital Solutions
        </h2>
      </section>

      <div className="container mx-auto px-4 py-20 lg:px-16">
        {/* Intro Text */}
        <p className="text-center max-w-2xl mx-auto text-gray-800 mb-12 text-lg leading-relaxed">
          BlazeByte Tech is your go-to partner for comprehensive digital solutions that empower businesses to thrive in the digital age. We specialize in a wide range of services designed to enhance your online presence, optimize performance, and deliver measurable results.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col justify-between p-6 bg-gradient-to-b from-blue-800 to-blue-900 text-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
              <p className="text-base">
                Building custom websites, dynamic web apps, and e-commerce platforms tailored to your needs.
              </p>
            </div>
            <div className="mt-6">
              <Link to="/web-development">
                <button className="bg-white text-blue-800 font-semibold py-2 px-4 rounded hover:bg-blue-100 transition-colors duration-300">
                  Details
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 bg-gradient-to-b from-purple-800 to-purple-900 text-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-3">SEO Services</h3>
              <p className="text-base">
                Maximize your visibility and organic traffic with comprehensive SEO strategies, including technical SEO and content optimization.
              </p>
            </div>
            <div className="mt-6">
              <Link to="/seo-services">
                <button className="bg-white text-purple-800 font-semibold py-2 px-4 rounded hover:bg-purple-100 transition-colors duration-300">
                  Details
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 bg-gradient-to-b from-blue-800 to-blue-900 text-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Digital Marketing</h3>
              <p className="text-base">
                Enhance brand awareness and drive conversions with our digital marketing services, from PPC to social media management.
              </p>
            </div>
            <div className="mt-6">
              <Link to="/digital-marketing">
                <button className="bg-white text-blue-800 font-semibold py-2 px-4 rounded hover:bg-blue-100 transition-colors duration-300">
                  Details
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 bg-gradient-to-b from-purple-800 to-purple-900 text-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-3">E-commerce Services</h3>
              <p className="text-base">
                Delivering seamless shopping experiences with customizable e-commerce solutions that scale with your business.
              </p>
            </div>
            <div className="mt-6">
              <Link to="/E-commerce-Solutions">
                <button className="bg-white text-purple-800 font-semibold py-2 px-4 rounded hover:bg-purple-100 transition-colors duration-300">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Tailored Services Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            Tailored Services for Every Industry
          </h3>
          <p className="max-w-xl mx-auto text-gray-800 mb-12 text-lg leading-relaxed">
            Whether you’re a small startup or a large corporation, our services are customizable to fit your unique business needs, ensuring success in a competitive digital landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 bg-gradient-to-b from-blue-800 to-blue-900 text-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-2">API Integration</h4>
              <p className="text-base">
                Seamlessly connect and integrate your systems for improved functionality and user experience.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-b from-purple-800 to-purple-900 text-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-2">CMS Migration</h4>
              <p className="text-base">
                Migrate your website between content management systems with minimal disruption and enhanced performance.
              </p>
            </div>
          </div>
        </div>

        {/* Process Overview Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            Our Process
          </h3>
          <p className="max-w-xl mx-auto text-gray-800 mb-12 text-lg leading-relaxed">
            Our client-centric approach ensures a collaborative process every step of the way, from initial discovery to launch and ongoing optimization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-gradient-to-b from-purple-800 to-purple-900 text-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-2">Discovery & Strategy</h4>
              <p className="text-base">
                Understanding your business goals and audience to craft a strategy for success.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-b from-blue-800 to-blue-900 text-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-2">Design & Development</h4>
              <p className="text-base">
                Creating visually stunning and highly functional solutions tailored to your brand.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-b from-purple-800 to-purple-900 text-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-2">Launch & Optimize</h4>
              <p className="text-base">
                Deploying, monitoring, and optimizing for continuous performance improvement.
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 bg-blue-800 text-white py-12 px-6 rounded-lg shadow-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="max-w-xl mx-auto mb-6 text-lg">
            Let’s collaborate to create digital experiences that drive success. Contact us today to bring your vision to life.
          </p>
          <Link to="/contact">
            <button className="mt-4 bg-white text-blue-800 px-8 py-3 rounded-md font-semibold transition transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
