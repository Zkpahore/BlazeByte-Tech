import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <h1 className="relative text-white text-4xl md:text-6xl font-extrabold text-center tracking-wider drop-shadow-lg">
          Who We Are
        </h1>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-16 py-12 space-y-16">
        {/* Introduction */}
        <section className="text-center">
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            BlazeByte Tech is a dynamic team of digital experts, committed to delivering innovative web development, SEO, and digital marketing solutions tailored to the unique needs of each client. We create digital experiences that captivate, engage, and deliver measurable results.
          </p>
        </section>

        {/* Mission, Vision, Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">Our Mission</h2>
            <p className="text-gray-600 text-center">
              Empowering businesses with innovative web solutions and effective SEO strategies that drive growth.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">Our Vision</h2>
            <p className="text-gray-600 text-center">
              To be a global leader in web development and digital marketing, continuously pushing the boundaries of innovation.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">Our Values</h2>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">Integrity:</span> Ethical practices in every project.
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">Innovation:</span> Creative solutions for complex challenges.
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">Collaboration:</span> A team approach with our clients.
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">Customer-Centric:</span> Your success drives our mission.
              </li>
            </ul>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Tailored Solutions</h3>
              <p className="text-gray-600">
                Customized strategies that align with your unique goals, ensuring a perfect fit every time.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Cutting-Edge Technology</h3>
              <p className="text-gray-600">
                Leveraging the latest technologies to ensure performance, security, and scalability.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Experienced Team</h3>
              <p className="text-gray-600">
                Our experts bring years of industry knowledge to deliver innovative and practical solutions.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                500+ satisfied clients and a portfolio of success stories that speak for themselves.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section>
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Web Development</h3>
              <p className="text-gray-600">
                Crafting custom web applications and responsive websites that fit your business needs.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">SEO Optimization</h3>
              <p className="text-gray-600">
                Boost your search rankings and drive organic traffic with our expert SEO strategies.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Digital Marketing</h3>
              <p className="text-gray-600">
                Comprehensive digital marketing solutions that cover content, social media, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section>
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Client Success Stories</h2>
          <p className="max-w-2xl mx-auto text-center text-gray-600 mb-12">
            Our partnerships have led to measurable success. See how our innovative strategies have driven growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">E-commerce Growth</h3>
              <p className="text-gray-600">
                Increased online sales by 200% with a tailored SEO and digital marketing strategy.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Increased Visibility</h3>
              <p className="text-gray-600">
                A local business experienced a 150% boost in website traffic and leads within six months.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-indigo-50 rounded-2xl shadow-lg">
              <p className="text-4xl font-bold text-indigo-700">5+</p>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="p-8 bg-indigo-50 rounded-2xl shadow-lg">
              <p className="text-4xl font-bold text-indigo-700">100+</p>
              <p className="text-gray-600">Successful Projects</p>
            </div>
            <div className="p-8 bg-indigo-50 rounded-2xl shadow-lg">
              <p className="text-4xl font-bold text-indigo-700">500+</p>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="text-center bg-indigo-700 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
          <p className="max-w-xl mx-auto text-indigo-200 text-lg mb-6">
            Have a project in mind? Reach out to us and let&apos;s create something extraordinary.
          </p>
          <Link to="/contact">
            <button className="bg-white text-indigo-700 px-10 py-3 rounded-full font-semibold hover:bg-indigo-100 transition duration-300">
              Contact Us
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
