import React from 'react';
import { FaRocket, FaCrown, FaGem } from 'react-icons/fa';

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "299",
      features: ["3 Page Website", "Mobile Optimization", "Basic SEO Setup", "1 CMS Integration", "Weekly Backups"],
      icon: <FaRocket className="text-blue-500 w-8 h-8" />,
      accent: "from-blue-400 to-cyan-400",
    },
    {
      name: "Professional",
      price: "599",
      features: ["5 Page Website", "Advanced SEO", "3 CMS Integrations", "E-Commerce Ready", "Daily Backups", "Premium Support"],
      icon: <FaCrown className="text-purple-500 w-8 h-8" />,
      accent: "from-purple-400 to-pink-400",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "999",
      features: ["Unlimited Pages", "Custom Development", "Priority Support", "Dedicated SSL", "Advanced Analytics", "API Integration", "24/7 Monitoring"],
      icon: <FaGem className="text-emerald-500 w-8 h-8" />,
      accent: "from-emerald-400 to-teal-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect solution for your digital presence. Scale with ease as your business grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? "ring-2 ring-purple-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <div className={`mb-6 w-14 h-14 rounded-xl bg-gradient-to-br ${plan.accent} flex items-center justify-center`}>
                  {plan.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="ml-2 text-gray-600">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg 
                        className={`flex-shrink-0 w-5 h-5 mr-3 ${
                          i < 5 ? 'text-green-500' : 'text-gray-400'
                        }`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3.5 font-medium rounded-lg transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:shadow-purple'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Need custom solutions? <a href="#contact" className="text-purple-600 hover:underline">Contact our team</a></p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;