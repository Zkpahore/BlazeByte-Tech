import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Developed a fully responsive e-commerce platform with custom features, enhancing user experience and boosting sales.",
    image: "Movies.png",
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Web Development'
  },
  {
    id: 2,
    title: "SEO Optimization Strategy",
    description: "Implemented comprehensive SEO strategies that led to a 200% increase in organic traffic.",
    image: "solar.png",
    tech: ['SEO Audit', 'Technical SEO', 'Content Strategy'],
    category: 'SEO Services'
  },
  {
    id: 3,
    title: "WordPress CMS Solution",
    description: "Custom WordPress theme development with advanced plugin integration.",
    image: "solar.png",
    tech: ['WordPress', 'PHP', 'Elementor'],
    category: 'CMS Development'
  },
];

const Portfolio = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl -top-20 -left-20 animate-float" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl -bottom-20 -right-20 animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 py-28 relative z-10">
        {/* Portfolio Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Digital Creations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful web development, SEO, and WordPress projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <span className="absolute top-4 right-4 px-4 py-1 bg-white/90 text-sm rounded-full">
                  {project.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link 
                  to={`/case-study/${project.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  View Case Study
                  <span className="text-xl">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Tech Stack</h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Leveraging cutting-edge technologies for optimal performance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['WordPress', 'React', 'Node.js', 'MongoDB', 'SEO Tools', 'GraphQL', 'Tailwind CSS', 'AWS'].map((tech, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-4">
                  {index % 2 === 0 ? '🚀' : '💻'}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">{tech}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Development Process</h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              A structured approach to delivering exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Requirement analysis & planning' },
              { step: '02', title: 'Design', desc: 'UI/UX & architectural design' },
              { step: '03', title: 'Development', desc: 'Agile implementation phase' },
              { step: '04', title: 'Delivery', desc: 'Deployment & optimization' }
            ].map((step, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl -top-20 -left-20 animate-float" />
            <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl -bottom-20 -right-20 animate-float-delayed" />
          </div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Start Your Digital Journey</h2>
            <p className="text-white/90 text-xl max-w-xl mx-auto">
              Let's collaborate to create something extraordinary
            </p>
            <Link to="/contact">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;