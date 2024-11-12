import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Developed a fully responsive e-commerce platform with custom features, enhancing user experience and boosting sales.",
    image: "Movies.png", // Replace with actual image paths
  },
  {
    id: 2,
    title: "SEO Optimization for XYZ Corp",
    description: "Implemented comprehensive SEO strategies that led to a 200% increase in organic traffic, significantly improving online visibility.",
    image: "solar.png",
  },
  {
    id: 3,
    title: "Marketing Campaign for ABC Ltd.",
    description: "Executed a data-driven digital marketing campaign that resulted in a 50% increase in sales, showcasing our expertise in driving results.",
    image: "solar.png",
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto py-28 px-4">
      {/* Portfolio Header Section */}
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-6">
        Our Portfolio
      </h2>
      <p className="text-center text-lg text-gray-700 mb-12">
        Explore our past projects to see how we've empowered businesses to succeed through innovative solutions and strategic execution.
      </p>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform transform hover:scale-110" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-white">{project.description}</p>
              <Link to={`/case-study/${project.id}`} className="mt-4 inline-block bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200">
                View Case Study
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-purple-600 mb-6">What Our Clients Say</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-lg p-8 w-80">
            <p className="text-lg text-white italic">"BlazeByte Tech transformed our online store. We saw a significant increase in sales and user engagement."</p>
            <h4 className="mt-4 font-semibold text-white">John Doe, CEO of XYZ Corp</h4>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg p-8 w-80">
            <p className="text-lg text-white italic">"Their SEO strategy increased our traffic by 200%. We are now ranking on the first page of Google!"</p>
            <h4 className="mt-4 font-semibold text-white">Jane Smith, Marketing Head at ABC Ltd.</h4>
          </div>
        </div>
      </div>

      {/* Technologies Used Section */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-teal-500 mb-6">Technologies We Work With</h3>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg shadow-md p-6 text-center w-48">
            <h4 className="text-xl font-semibold text-white">React.js</h4>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-teal-400 rounded-lg shadow-md p-6 text-center w-48">
            <h4 className="text-xl font-semibold text-white">Node.js</h4>
          </div>
          <div className="bg-gradient-to-r from-red-400 to-yellow-400 rounded-lg shadow-md p-6 text-center w-48">
            <h4 className="text-xl font-semibold text-white">Tailwind CSS</h4>
          </div>
          <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg shadow-md p-6 text-center w-48">
            <h4 className="text-xl font-semibold text-white">MongoDB</h4>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-yellow-500 mb-6">Our Process</h3>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg shadow-md p-8 w-64 text-center">
            <h4 className="text-2xl font-semibold text-white">1. Discover</h4>
            <p className="mt-3 text-white">We begin by understanding your business, goals, and target audience to tailor the right solution.</p>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg shadow-md p-8 w-64 text-center">
            <h4 className="text-2xl font-semibold text-white">2. Design</h4>
            <p className="mt-3 text-white">We create innovative and user-friendly designs to ensure a seamless user experience.</p>
          </div>
          <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-lg shadow-md p-8 w-64 text-center">
            <h4 className="text-2xl font-semibold text-white">3. Develop</h4>
            <p className="mt-3 text-white">We develop high-quality, scalable web applications using the latest technologies and best practices.</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md p-8 w-64 text-center">
            <h4 className="text-2xl font-semibold text-white">4. Deliver</h4>
            <p className="mt-3 text-white">We ensure the final product meets your business objectives and is ready for launch.</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-red-500 mb-6">Our Core Skills</h3>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-md p-6 w-48 text-center">
            <h4 className="text-xl font-semibold text-white">Web Development</h4>
            <p className="text-white">Expert in building responsive, scalable web applications.</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-md p-6 w-48 text-center">
            <h4 className="text-xl font-semibold text-white">SEO Optimization</h4>
            <p className="text-white">Improve site visibility and increase organic traffic with SEO best practices.</p>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg shadow-md p-6 w-48 text-center">
            <h4 className="text-xl font-semibold text-white">E-commerce Solutions</h4>
            <p className="text-white">Customized e-commerce platforms to help businesses increase sales and customer satisfaction.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-12">
        <h3 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h3>
        <p className="text-lg mb-6">Let's turn your ideas into reality with a powerful digital solution.</p>
        <Link to="/contact" className="bg-yellow-500 text-black py-2 px-6 rounded-md hover:bg-yellow-600 transition-all duration-200">
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default Portfolio
