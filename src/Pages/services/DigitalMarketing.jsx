import React from 'react';
import { ShoppingCartIcon, CheckCircleIcon, ChartBarIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const EcommerceSolutions = () => {
  const ecommerceServices = [
    {
      level: "Starter Package",
      description: "Essential tools for launching your digital storefront",
      features: [
        "Mobile-optimized responsive design",
        "Basic product management system",
        "Secure payment gateway integration",
        "Inventory tracking & order management",
        "SEO-optimized product listings"
      ],
      icon: ShoppingCartIcon,
      color: "blue",
      price: "From $4,999"
    },
    {
      level: "Growth Package",
      description: "Advanced solutions for scaling businesses",
      features: [
        "Customizable storefront themes",
        "Multi-channel sales integration",
        "Advanced analytics dashboard",
        "Customer loyalty programs",
        "Automated marketing tools"
      ],
      icon: ChartBarIcon,
      color: "green",
      price: "From $12,999"
    },
    {
      level: "Enterprise Suite",
      description: "Premium platform for market leaders",
      features: [
        "AI-powered personalization engine",
        "Global tax compliance system",
        "Predictive inventory management",
        "Enterprise-grade security protocols",
        "Dedicated technical support"
      ],
      icon: SparklesIcon,
      color: "purple",
      price: "Custom Pricing"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Enterprise Ecommerce Solutions
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Scalable commerce platforms engineered for conversion optimization and sustainable growth
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {ecommerceServices.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className={`p-8 border-t-8 border-${service.color}-500 rounded-t-xl`}>
              <div className={`mb-6 p-4 w-fit rounded-2xl bg-${service.color}-100`}>
                <service.icon className={`w-8 h-8 text-${service.color}-600`} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.level}</h2>
              <p className="text-lg font-medium text-gray-600 mb-4">{service.price}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-4">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <div className={`flex-shrink-0 w-5 h-5 mt-1 mr-3 text-${service.color}-600`}>
                      <CheckCircleIcon className="w-full h-full" />
                    </div>
                    <span className="leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-7xl mx-auto text-center bg-gradient-to-br from-blue-700 to-purple-700 rounded-2xl shadow-2xl overflow-hidden">
        <div className="px-8 py-12 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready for Digital Transformation?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Leverage our expertise to build a future-proof commerce platform
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1">
            Schedule Consultation
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSolutions;