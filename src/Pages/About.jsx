import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto py-20 px-4 lg:px-16 bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400 mb-8">
        Who We Are
      </h2>

      {/* Company Background */}
      <p className="text-center text-base text-gray-700 max-w-2xl mx-auto mb-8 lg:mb-10">
        BlazeByte Tech is a dynamic team of digital experts, committed to delivering innovative web development, SEO, and digital marketing solutions tailored to the unique needs of each client. We believe in creating digital experiences that captivate, engage, and deliver measurable results, helping businesses thrive in a fast-paced digital world.
      </p>

      {/* Mission, Vision, Values Section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 text-center">Our Mission</h3>
          <p className="text-center text-gray-600 mt-1 max-w-xl mx-auto">
            To empower businesses by providing innovative web solutions and effective SEO strategies that drive results and growth. Our mission is to create a digital environment that supports business expansion, enhances customer engagement, and fuels long-term success.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 text-center">Our Vision</h3>
          <p className="text-center text-gray-600 mt-1 max-w-xl mx-auto">
            Our vision is to become a globally recognized leader in web development and SEO services. We aim to consistently push the boundaries of innovation and quality.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 text-center">Our Values</h3>
          <ul className="mt-2 list-disc list-inside text-center text-gray-600 max-w-xl mx-auto space-y-1">
            <li><strong>Integrity:</strong> We uphold honesty and ethical standards in all that we do.</li>
            <li><strong>Innovation:</strong> We seek creative solutions that solve real problems.</li>
            <li><strong>Collaboration:</strong> We believe in teamwork and partner with our clients to achieve their vision.</li>
            <li><strong>Customer-Centric:</strong> Our clients are our priority. Their success is our success.</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-12 lg:mt-16">
        <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400 mb-6">
          Why Choose Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600 max-w-3xl mx-auto">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-700">Tailored Solutions</h4>
            <p>We customize our solutions to align with your unique goals, ensuring a strategic approach to every project.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-700">Cutting-Edge Technology</h4>
            <p>We use the latest technologies to ensure high performance, security, and scalability.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-700">Experienced Team</h4>
            <p>Our experts bring years of industry knowledge, delivering innovative and practical solutions.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-700">Proven Track Record</h4>
            <p>We've helped 500+ clients achieve digital growth and top search rankings through our data-driven strategies.</p>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400 mb-6">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600 max-w-5xl mx-auto">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-700">Web Development</h4>
            <p>Custom web applications and responsive websites tailored to meet client-specific requirements.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-700">SEO Optimization</h4>
            <p>Strategies to boost search rankings, improve visibility, and drive organic traffic.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-700">Digital Marketing</h4>
            <p>End-to-end digital marketing services, from content creation to social media strategy.</p>
          </div>
        </div>
      </div>

      {/* Client Success Stories */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400 mb-6">
          Client Success Stories
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Over the years, we have partnered with businesses from various industries, delivering measurable results that have fueled growth and success. Here are just a few examples of how our services have made a positive impact.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-700">E-commerce Growth</h4>
            <p>We helped a retail client increase online sales by 200% through a tailored SEO and digital marketing strategy.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-700">Increased Visibility</h4>
            <p>A local business saw a 150% increase in website traffic and leads within six months of our SEO optimization.</p>
          </div>
        </div>
      </div>

      {/* Client Logos and Statistics Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400 mb-6">
          Trusted by Leading Brands
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-6 mb-8">
          {Array(4).fill("").map((_, index) => (
            <img key={index} src="/zkpahore.jpg" alt={`Client ${index + 1}`} className="h-16 w-16 rounded-full bg-white p-2 shadow-md" />
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-800 text-base">
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <p className="text-2xl font-bold">5+</p>
            <p>Years of Experience</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <p className="text-2xl font-bold">100+</p>
            <p>Successful Projects</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <p className="text-2xl font-bold">500+</p>
            <p>Satisfied Clients</p>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-20 text-center bg-blue-800 text-white p-12 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold mb-4">Let's Work Together</h3>
        <p className="text-lg mb-6">Have a project in mind? Reach out to us today, and let's start creating something amazing.</p>
        <Link to='/contact'>
        <button className="bg-white text-blue-800 px-6 py-3 rounded-lg transform hover:scale-105 transition">
          Contact Us
        </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
