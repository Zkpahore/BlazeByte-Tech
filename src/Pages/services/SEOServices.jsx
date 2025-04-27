import React from 'react';
import { MagnifyingGlassIcon, CommandLineIcon, CheckCircleIcon, ChartBarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const SEOServices = () => {
  const seoServices = [
    {
      title: "Strategic Advantages",
      description: "Maximize your digital potential with our SEO expertise:",
      points: [
        "Dominant search engine rankings & visibility",
        "Targeted organic traffic growth",
        "Enhanced user experience & site performance"
      ],
      icon: MagnifyingGlassIcon,
      color: "green",
    },
    {
      title: "Optimization Process",
      description: "Data-driven approach to search success:",
      points: [
        "Comprehensive technical SEO audit",
        "Strategic keyword mapping",
        "On-page/off-page optimization",
        "AI-powered content strategy",
        "Continuous performance analytics"
      ],
      icon: CommandLineIcon,
      color: "blue",
    },
    {
      title: "Growth Metrics",
      description: "Transform your digital footprint:",
      points: [
        "Increased qualified lead generation",
        "Enhanced conversion rate optimization",
        "Sustainable ROI-focused strategies"
      ],
      icon: ChartBarIcon,
      color: "purple",
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Premier SEO Solutions
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Elevate your search presence with cutting-edge SEO strategies that combine technical excellence 
          with data-driven marketing insights
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {seoServices.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <div className={`p-8 border-t-8 border-${service.color}-500 rounded-t-xl`}>
              <div className={`mb-6 p-4 w-fit rounded-2xl bg-${service.color}-100`}>
                <service.icon className={`w-8 h-8 text-${service.color}-600`} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-4">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <div className={`flex-shrink-0 w-5 h-5 mt-1 mr-3 text-${service.color}-600`}>
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
      <div className="mt-20 max-w-7xl mx-auto text-center bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl shadow-2xl overflow-hidden">
        <div className="px-8 py-12 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Dominate Search Rankings?
          </h3>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with our SEO experts to unlock sustainable growth and measurable business results
          </p>
          <Link to="/contact">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-semibold rounded-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1">
            Start SEO Optimization Now
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SEOServices;