// src/components/CTASection.js
import React from 'react';

const CTASection = () => {
  return (
    <section className="py-16 bg-blue-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
      <p className="mb-8">Contact us for a free consultation and see how BlazeByte Tech can help you succeed.</p>
      <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded hover:bg-yellow-400">
        Get Started
      </button>
    </section>
  );
};

export default CTASection;
