import React from 'react';

const testimonials = [
  { 
    name: 'Client A', 
    feedback: 'Working with BlazeByte Tech transformed our online presence. Their expert web development and digital marketing strategies helped us increase our website traffic by over 150% in just three months!' 
  },
  { 
    name: 'Client B', 
    feedback: 'BlazeByte Tech’s SEO services are top-notch! They not only improved our search rankings but also provided us with actionable insights that resulted in a 30% increase in conversions.' 
  },
  { 
    name: 'Client C', 
    feedback: 'The team at BlazeByte Tech truly understands our business needs. Their custom WordPress solutions streamlined our operations and enhanced our customer engagement significantly.' 
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8">What Our Clients Say</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto">
            <p className="mb-4 text-lg italic">"{testimonial.feedback}"</p>
            <p className="font-bold text-blue-900">{testimonial.name}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold">Ready to Transform Your Business?</h3>
        <p className="mb-4">Join our satisfied clients and experience the BlazeByte Tech difference.</p>
        <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded hover:bg-yellow-400 transition-all duration-200">
          Get Started Today
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
