import React from 'react';

const SEOServices = () => {
  const seoServices = [
    {
      title: "Benefits",
      description: "Explore the advantages of our tailored SEO strategies:",
      points: [
        "Improved search engine rankings, ensuring your site is easily found.",
        "Increased organic traffic, driving more visitors to your site.",
        "Enhanced user experience and faster site performance."
      ],
      gradient: "bg-gradient-to-br from-green-400 to-green-600",
      shadowColor: "shadow-green-600/50",
    },
    {
      title: "Our Process",
      description: "A comprehensive and proven approach to SEO success:",
      points: [
        "Comprehensive Website Audit: Identify strengths and areas for improvement.",
        "Keyword Research: Analyze high-value keywords to target your audience.",
        "On-page & Off-page Optimization: Boost visibility and credibility.",
        "Content Optimization: Align content with search intent.",
        "Performance Tracking: Monitor and refine strategies for continuous growth."
      ],
      gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
      shadowColor: "shadow-blue-700/50",
    },
    {
      title: "How It Helps You Succeed",
      description: "Bridge the gap between your business and potential customers:",
      points: [
        "Reach your target audience effectively with improved visibility.",
        "Boost conversions and revenue with a strategic online presence.",
        "Achieve long-term growth with tailored and sustainable SEO practices."
      ],
      gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
      shadowColor: "shadow-purple-700/50",
    }
  ];

  return (
    <section className="py-16 px-6 md:py-24 lg:py-32 bg-gray-50">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900">
          SEO Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Our expert SEO strategies are designed to enhance your website's visibility, drive organic traffic, and deliver measurable results.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {seoServices.map((service, index) => (
          <div
            key={index}
            className={`rounded-3xl p-8 transition-transform transform hover:-translate-y-3 hover:scale-105 shadow-lg ${service.gradient} ${service.shadowColor} hover:shadow-2xl`}
          >
            <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
            <p className="text-gray-100 mb-6">{service.description}</p>
            <ul className="list-disc list-inside space-y-2 text-white">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center bg-blue-800 text-white p-12 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold mb-4">Ready to Elevate Your Online Presence?</h3>
        <p className="text-lg mb-6">
          Let us help you achieve your business goals with our proven SEO solutions. Connect with us today!
        </p>
        <button className="bg-white text-blue-800 px-6 py-3 rounded-lg transform hover:scale-105 transition">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default SEOServices;
