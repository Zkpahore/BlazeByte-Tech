import React, { useState } from 'react';
import { FaCode, FaFileAlt, FaSearch, FaWordpress } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

const services = [
  // ... (keep the same services array as before)
  {
    id: 1,
    title: "Web Development",
    description: "We can create responsive code for various platforms, allowing you to stay competitive.",
    hiddenContent: "Our web development process includes utilizing modern frameworks like React and Node.js for scalability.",
    icon: <FaCode className="text-purple-700 text-4xl mb-2" />,
  },
  {
    id: 2,
    title: "Brochure Design",
    description: "Our expert brochure designers create professional and impactful brochures tailored to your brand.",
    hiddenContent: "We ensure the brochure aligns with your brand identity and marketing objectives.",
    icon: <FaFileAlt className="text-purple-700 text-4xl mb-2" />,
  },
  {
    id: 3,
    title: "Banner Design",
    description: "Get professionally designed banners that are creative, informative, and eye-catching.",
    hiddenContent: "We design banners that enhance brand visibility and audience engagement.",
    icon: <FaSearch className="text-purple-700 text-4xl mb-2" />,
  },
  {
    id: 4,
    title: "Logo Design",
    description: "A logo is essential for any brand. We offer logo designs that reflect your brand’s essence.",
    hiddenContent: "Our logo designs are crafted to be timeless and visually aligned with your mission.",
    icon: <FaWordpress className="text-purple-700 text-4xl mb-2" />,
  },
];

const ServiceCard = ({ title, description, hiddenContent, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out p-8 overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 transform group-hover:-translate-y-1 transition-all duration-300">
            {React.cloneElement(icon, { className: "text-white text-2xl" })}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-40 mt-4' : 'max-h-0'}`}>
          <p className="text-gray-600 text-sm border-t border-gray-100 pt-4">{hiddenContent}</p>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-auto w-full flex items-center justify-between text-purple-600 hover:text-purple-700 transition-colors duration-200"
        >
          <span className="text-sm font-semibold">
            {isExpanded ? 'Show less' : 'Learn more'}
          </span>
          <MdKeyboardArrowRight 
            className={`transform transition-transform duration-300 text-xl ${isExpanded ? 'rotate-90' : 'rotate-0'}`}
          />
        </button>
      </div>

      {/* Hover effect element */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-100 rounded-xl pointer-events-none transition-all duration-300" />
    </div>
  );
};

const ServicesWeOffer = () => {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            Services We Offer
            <span className="absolute bottom-0 left-0 w-full h-2 bg-purple-200 opacity-50 -mb-2" />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering your business with cutting-edge digital solutions and creative design services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <ServiceCard 
              key={service.id} 
              {...service}
            />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-72  opacity-20 -z-10" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200 rounded-full opacity-10 blur-3xl -z-10" />
      </div>
    </div>
  );
};

export default ServicesWeOffer;