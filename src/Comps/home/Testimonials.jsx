import React from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  { 
    name: 'John Doe',
    role: 'CEO, Tech Solutions',
    feedback: 'Working with BlazeByte Tech transformed our online presence. Their expert web development and digital marketing strategies helped us increase our website traffic by over 150% in just three months!',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  { 
    name: 'Sarah Johnson', 
    role: 'Marketing Director',
    feedback: 'BlazeByte Tech’s SEO services are top-notch! They not only improved our search rankings but also provided us with actionable insights that resulted in a 30% increase in conversions.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  { 
    name: 'Michael Chen', 
    role: 'E-commerce Owner',
    feedback: 'The team at BlazeByte Tech truly understands our business needs. Their custom WordPress solutions streamlined our operations and enhanced our customer engagement significantly.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 mb-4" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses like yours achieve remarkable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-cyan-400 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-cyan-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 relative">
                <span className="absolute -top-4 -left-2 text-4xl text-cyan-400/30 font-serif">“</span>
                {testimonial.feedback}
                <span className="absolute -bottom-4 -right-2 text-4xl text-cyan-400/30 font-serif">”</span>
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Join hundreds of satisfied clients who've transformed their digital presence with us
          </p>
          <Link 
            to="contact"
            className="inline-block bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Journey Now
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;