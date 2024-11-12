import React, { useState } from 'react';
import { FaCode, FaFileAlt, FaSearch, FaWordpress } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

const services = [
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

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="bg-yellow-400 relative rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 min-h-[200px] flex flex-col justify-between">
      <div className="text-center">
        {/* Cloning the icon and adding spin effect on hover */}
        {React.cloneElement(icon, { className: "text-purple-700 text-4xl mb-2 transition-transform duration-300 ease-in-out hover:animate-spin" })}
        <h3 className="text-xl font-semibold text-purple-800 mb-2">{title}</h3>
        <p className="text-gray-800">{description}</p>
        
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-40' : 'max-h-0'}`}>
          <p className="text-gray-700 text-sm mt-2">{hiddenContent}</p>
        </div>
      </div>

      <div
        className="absolute bottom-0 right-0 w-10 h-10 bg-cyan-400 flex items-center justify-center cursor-pointer"
        style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0)',
        }}
        onClick={toggleExpand}
      >
        <MdKeyboardArrowRight 
          className={`text-white transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'rotate-0'}`} 
        />
      </div>
    </div>
  );
};

const ServicesWeOffer = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">SERVICES WE OFFER</h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Discover a range of professional services designed to elevate your business and ensure success.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(service => (
          <ServiceCard 
            key={service.id} 
            title={service.title} 
            description={service.description} 
            hiddenContent={service.hiddenContent} 
            icon={service.icon} 
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesWeOffer;
