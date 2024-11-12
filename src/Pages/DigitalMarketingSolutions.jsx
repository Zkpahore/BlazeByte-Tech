import React, { useState } from 'react';

const DigitalMarketingSolutions = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const marketingServices = [
    {
      level: "Social Media Management",
      description: "Build your brand presence on platforms like Instagram, Facebook, and Twitter.",
      services: [
        "Content Creation",
        "Post Scheduling",
        "Audience Engagement",
        "Performance Analytics"
      ],
      moreInfo: [
        "Targeted Ad Campaigns",
        "Platform-Specific Strategies",
        "Influencer Collaboration"
      ],
      gradient: "bg-gradient-to-br from-blue-400 to-blue-600",
      shadowColor: "shadow-blue-600/50",
      buttonColor: "bg-yellow-500 hover:bg-yellow-400",
    },
    {
      level: "Pay-Per-Click Advertising",
      description: "Drive targeted traffic to your website and maximize ROI with paid ads.",
      services: [
        "Google Ads Management",
        "Keyword Research",
        "A/B Testing for Ads",
        "Budget Optimization"
      ],
      moreInfo: [
        "Ad Copywriting",
        "Retargeting Campaigns",
        "Detailed Performance Reports"
      ],
      gradient: "bg-gradient-to-br from-green-400 to-green-600",
      shadowColor: "shadow-green-600/50",
      buttonColor: "bg-red-500 hover:bg-red-400",
    },
    {
      level: "SEO Services",
      description: "Enhance your website's visibility on search engines to attract organic traffic.",
      services: [
        "On-Page Optimization",
        "Off-Page Link Building",
        "Keyword Optimization",
        "Technical SEO Audit"
      ],
      moreInfo: [
        "Content Marketing",
        "Competitor Analysis",
        "Local SEO Strategies"
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
          Digital Marketing Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          BlazeByte Tech provides tailored digital marketing strategies to boost your brand's online presence and conversions.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {marketingServices.map((service, index) => (
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
        <h3 className="text-3xl font-semibold mb-4">Elevate Your Digital Strategy</h3>
        <p className="text-lg mb-6">
          Partner with us to grow your digital presence and achieve measurable results. Let's make your brand stand out!
        </p>
        <button className="bg-white text-blue-800 px-6 py-3 rounded-lg transform hover:scale-105 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default DigitalMarketingSolutions;
