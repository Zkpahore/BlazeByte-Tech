import React from 'react';

function Sample() {
  const plans = [
    {
      name: "Starter",
      price: "299",
      features: [
        "Basic Website",
        "3 Pages",
        "Mobile Responsive",
        "Basic SEO",
        "1 Month Support",
      ],
      buttonColor: "bg-purple-600",
    },
    {
      name: "Pro",
      price: "599",
      features: [
        "Advanced Website",
        "10 Pages",
        "Mobile & Tablet Responsive",
        "Advanced SEO",
        "3 Months Support",
      ],
      buttonColor: "bg-blue-600",
    },
    {
      name: "Enterprise",
      price: "999",
      features: [
        "Custom Website",
        "Unlimited Pages",
        "Fully Responsive",
        "Premium SEO",
        "6 Months Support",
      ],
      buttonColor: "bg-green-600",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h3>
          <p className="text-gray-600">
            Choose a plan that fits your needs and get started today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h4>
                <div className="text-4xl font-bold text-purple-600 mb-6">
                  ${plan.price}
                  <span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 ${plan.buttonColor} text-white rounded-lg hover:opacity-90 transition-opacity`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sample;
