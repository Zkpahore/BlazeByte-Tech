import React, { useState } from 'react';

const SeoServices = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const seoServices = [
    {
      level: "Basic SEO",
      description: "Ideal for small businesses to boost visibility with essential SEO practices.",
      services: [
        "Keyword Research",
        "On-Page Optimization",
        "Meta Tags and Descriptions",
        "Google Analytics Setup",
        "Content Optimization"
      ],
      moreInfo: [
        "Site Structure Analysis",
        "Image Optimization",
        "Page Speed Improvement"
      ],
      gradient: "bg-gradient-to-br from-blue-400 to-blue-600",
      shadowColor: "shadow-blue-600/50",
      buttonColor: "bg-yellow-500 hover:bg-yellow-400",
    },
    {
      level: "Intermediate SEO",
      description: "Perfect for businesses aiming for higher rankings with deeper SEO strategies.",
      services: [
        "Advanced Keyword Research",
        "Technical SEO Audit",
        "Content Strategy & Blogging",
        "Link Building",
        "Schema Markup Implementation"
      ],
      moreInfo: [
        "Mobile Optimization",
        "Enhanced Metadata Strategies",
        "User Behavior Analysis"
      ],
      gradient: "bg-gradient-to-br from-green-400 to-green-600",
      shadowColor: "shadow-green-600/50",
      buttonColor: "bg-blue-500 hover:bg-blue-400",
    },
    {
      level: "Advanced SEO",
      description: "For established brands aiming to dominate search rankings with advanced methods.",
      services: [
        "Comprehensive Keyword Strategy",
        "Competitor Analysis",
        "Local SEO Optimization",
        "Conversion Rate Optimization",
        "SEO Analytics and Reporting"
      ],
      moreInfo: [
        "Voice Search Optimization",
        "Video SEO Strategies",
        "Custom SEO Dashboard"
      ],
      gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
      shadowColor: "shadow-purple-700/50",
      buttonColor: "bg-pink-500 hover:bg-pink-400",
    }
  ];

  return (
    <section className="py-16 px-6 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-blue-900">
          SEO Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          BlazeByte Tech offers tailored SEO solutions to elevate your online visibility. Choose the package that best suits your business growth stage.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {seoServices.map((service, index) => (
          <div
            key={index}
            className={`rounded-3xl p-8 transition-transform transform hover:-translate-y-3 hover:scale-105 shadow-lg ${service.gradient} ${service.shadowColor} hover:shadow-2xl`}
          >
            <h2 className="text-2xl font-bold text-white mb-6">{service.level}</h2>
            <p className="text-gray-100 mb-6">{service.description}</p>
            <ul className="mb-4 text-white list-disc list-inside space-y-2">
              {service.services.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* See More Toggle */}
            {expandedIndex === index && (
              <ul className="text-gray-200 list-disc list-inside space-y-2 mb-4">
                {service.moreInfo.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            <button
              onClick={() => toggleExpand(index)}
              className={`px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 ${service.buttonColor} shadow-md hover:shadow-lg`}
            >
              {expandedIndex === index ? "See Less" : "See More"}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center bg-blue-800 text-white p-12 rounded-lg shadow-md">
  <h3 className="text-3xl font-semibold mb-4">Ready to Elevate Your Business?</h3>
  <p className="text-lg mb-6">Let's collaborate to build a powerful online presence that drives growth and success. Connect with us today to bring your vision to life.</p>
  <button className="bg-white text-blue-800 px-6 py-3 rounded-lg transform hover:scale-105 transition">
    Get in Touch
  </button>
</div>

    </section>
  );
};

export default SeoServices;
