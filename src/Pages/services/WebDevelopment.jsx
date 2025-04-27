import React from 'react';
import { CheckCircleIcon, ClipboardDocumentCheckIcon, ChartBarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const webDevelopmentDetails = [
    {
      title: "Strategic Benefits",
      description: "Why choose BlazeByte Tech for your web development needs?",
      points: [
        "Custom solutions tailored to your business goals",
        "Scalable applications that grow with your business",
        "Responsive designs optimized for all devices"
      ],
      icon: CheckCircleIcon,
      color: "blue",
    },
    {
      title: "Development Process",
      description: "Structured approach to digital excellence:",
      points: [
        "Initial consultation & requirements analysis",
        "User-centric design & prototyping",
        "Agile development methodology",
        "Rigorous quality assurance testing",
        "Continuous support & maintenance"
      ],
      icon: ClipboardDocumentCheckIcon,
      color: "green",
    },
    {
      title: "Growth Potential",
      description: "Accelerate your digital transformation:",
      points: [
        "Enhanced digital visibility & brand authority",
        "Superior user experience & engagement",
        "Adaptable solutions for future growth"
      ],
      icon: ChartBarIcon,
      color: "purple",
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 bg-clip-text">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Enterprise-Grade Web Development
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Transform your digital presence with our comprehensive web solutions combining technical excellence 
          with strategic business insights
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {webDevelopmentDetails.map((detail, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <div className={`p-8 border-t-8 border-${detail.color}--500 rounded-t-xl`}>
              <div className={`mb-6 p-4 w-fit rounded-2xl bg-${detail.color}-100`}>
                <detail.icon className={`w-8 h-8 text-${detail.color}-600`} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{detail.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{detail.description}</p>
              <ul className="space-y-4">
                {detail.points.map((point, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <div className={`flex-shrink-0 w-5 h-5 mt-1 mr-3 text-${detail.color}-600`}>
                      <CheckCircleIcon className="w-full h-full" />
                    </div>
                    <span className="leading-normal">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 max-w-7xl mx-auto text-center bg-gradient-to-br from-blue-700 to-purple-700 rounded-2xl shadow-2xl overflow-hidden">
        <div className="px-8 py-12 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Revolutionize Your Digital Presence?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with BlazeByte Tech to create web solutions that drive measurable business results 
            and sustainable growth.
          </p>
          <Link to="/contact">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1">
            Schedule Free Consultation
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;