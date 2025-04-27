import React, { useState } from 'react';
import { MegaphoneIcon, CheckCircleIcon, SparklesIcon, ArrowRightIcon, CursorArrowRaysIcon, ChartBarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const DigitalMarketingSolutions = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const marketingServices = [
    {
      level: "Social Media Management",
      description: "Strategic brand development across major social platforms",
      services: [
        "Content strategy & calendar planning",
        "Platform-specific optimization",
        "Community engagement management",
        "Performance analytics & reporting"
      ],
      moreInfo: [
        "Influencer partnership programs",
        "Crisis management protocols",
        "Competitor benchmarking analysis"
      ],
      icon: MegaphoneIcon,
      color: "blue",
    },
    {
      level: "PPC Advertising",
      description: "Precision-targeted paid media campaigns",
      services: [
        "Conversion-focused ad creation",
        "Bid strategy optimization",
        "Cross-channel campaign management",
        "ROI-driven budget allocation"
      ],
      moreInfo: [
        "Shopping feed optimization",
        "Dynamic remarketing strategies",
        "Conversion rate optimization"
      ],
      icon: CursorArrowRaysIcon,
      color: "green",
    },
    {
      level: "Search Engine Optimization",
      description: "Organic growth through technical excellence",
      services: [
        "Technical SEO audit & implementation",
        "Content gap analysis",
        "Enterprise-level link building",
        "Local search domination"
      ],
      moreInfo: [
        "International SEO strategy",
        "E-A-T optimization",
        "Voice search optimization"
      ],
      icon: ChartBarIcon,
      color: "purple",
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Advanced Digital Marketing
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Data-driven marketing strategies that combine creative excellence with measurable business outcomes
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {marketingServices.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className={`p-8 border-t-8 border-${service.color}-500 rounded-t-xl`}>
              <div className={`mb-6 p-4 w-fit rounded-2xl bg-${service.color}-100`}>
                <service.icon className={`w-8 h-8 text-${service.color}-600`} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.level}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.services.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <div className={`flex-shrink-0 w-5 h-5 mt-1 mr-3 text-${service.color}-600`}>
                      <CheckCircleIcon className="w-full h-full" />
                    </div>
                    <span className="leading-normal">{item}</span>
                  </li>
                ))}
              </ul>

              <div className={`overflow-hidden transition-all duration-500 ${expandedIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}>
                <ul className="space-y-3 pt-4 border-t border-gray-200">
                  {service.moreInfo.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <div className={`flex-shrink-0 w-5 h-5 mt-1 mr-3 text-${service.color}-600`}>
                        <SparklesIcon className="w-full h-full" />
                      </div>
                      <span className="leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => toggleExpand(index)}
                className={`w-full mt-6 flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all ${
                  expandedIndex === index 
                    ? `text-${service.color}-600 bg-${service.color}-50 hover:bg-${service.color}-100`
                    : `text-${service.color}-600 hover:bg-${service.color}-50`
                }`}
              >
                <span className="mr-2">{expandedIndex === index ? "Collapse" : "Expand Services"}</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-7xl mx-auto text-center bg-gradient-to-br from-blue-700 to-purple-700 rounded-2xl shadow-2xl overflow-hidden">
        <div className="px-8 py-12 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready for Marketing Transformation?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Leverage our expertise to create campaigns that drive real business growth and market leadership
          </p>
          <Link to="/contact">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1">
            Schedule Strategy Session
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSolutions;