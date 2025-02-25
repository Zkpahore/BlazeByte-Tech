import React, { useState } from 'react';

const EcommerceSolutions = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const ecommerceServices = [
    {
      level: "Basic E-commerce",
      description: "Ideal for startups or small businesses looking to enter the online market.",
      services: [
        "Responsive Website Design",
        "Basic Product Catalog",
        "Payment Gateway Integration",
        "Inventory Management",
        "Customer Support Integration"
      ],
      moreInfo: [
        "Basic SEO Setup",
        "User-friendly Checkout Process",
        "Social Media Integration"
      ],
      gradient: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      shadowColor: "shadow-yellow-600/50",
      buttonColor: "bg-blue-500 hover:bg-blue-400",
    },
    {
      level: "Intermediate E-commerce",
      description: "For businesses aiming to expand their online presence with additional features.",
      services: [
        "Advanced Product Filtering",
        "Customizable Product Pages",
        "SEO Optimization for Products",
        "Customer Account System",
        "Promotional Tools and Discounts"
      ],
      moreInfo: [
        "Enhanced Product Reviews",
        "Email Marketing Integration",
        "Enhanced Reporting & Analytics"
      ],
      gradient: "bg-gradient-to-br from-green-400 to-green-600",
      shadowColor: "shadow-green-600/50",
      buttonColor: "bg-yellow-500 hover:bg-yellow-400",
    },
    {
      level: "Advanced E-commerce",
      description: "For established brands looking to dominate the e-commerce space.",
      services: [
        "Custom User Experience Design",
        "Multi-channel Integration",
        "Dynamic Pricing Options",
        "Advanced Data Analytics",
        "AI-Driven Product Recommendations"
      ],
      moreInfo: [
        "Custom Loyalty Programs",
        "Advanced Security Protocols",
        "24/7 Maintenance and Support"
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
          E-commerce Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          BlazeByte Tech offers customized e-commerce solutions to meet your business needs. Choose the package that best suits your growth stage.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {ecommerceServices.map((service, index) => (
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
        <h3 className="text-3xl font-semibold mb-4">Transform Your E-commerce Potential</h3>
        <p className="text-lg mb-6">
          Let’s work together to build an exceptional online store that drives sales and enhances customer satisfaction. Connect with us today!
        </p>
        <button className="bg-white text-blue-800 px-6 py-3 rounded-lg transform hover:scale-105 transition">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default EcommerceSolutions;
