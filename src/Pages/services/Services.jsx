import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      desc: 'Custom websites, web apps, and e-commerce solutions',
      gradient: 'from-blue-600 via-cyan-600 to-blue-700',
      link: '/web-development',
      icon: '💻'
    },
    {
      title: 'SEO Services',
      desc: 'Comprehensive search engine optimization strategies',
      gradient: 'from-purple-600 via-fuchsia-600 to-purple-700',
      link: '/seo-services',
      icon: '🔍'
    },
    {
      title: 'Digital Marketing',
      desc: 'Targeted campaigns across all digital channels',
      gradient: 'from-indigo-600 via-blue-600 to-indigo-700',
      link: '/digital-marketing',
      icon: '📈'
    },
    {
      title: 'E-commerce Solutions',
      desc: 'Scalable online store development & optimization',
      gradient: 'from-pink-600 via-rose-600 to-pink-700',
      link: '/E-commerce-Solutions',
      icon: '🛒'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl -top-20 -left-20 animate-float" />
          <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl -bottom-20 -right-20 animate-float-delayed" />
        </div>
        <div className="relative text-center space-y-4 px-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Digital Excellence Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Transform your digital presence with our comprehensive solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-16 py-20 space-y-20">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl backdrop-blur-xl bg-white/80 border border-gray-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link to={service.link}>
                  <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                    Explore Service
                    <span className="text-xl">→</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Services */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-block h-1 w-16 bg-cyan-400 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Specialized Solutions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'API Integration',
                desc: 'Seamless system connectivity & third-party integrations',
                icon: '🔗'
              },
              { 
                title: 'CMS Migration', 
                desc: 'Smooth platform transitions with zero downtime',
                icon: '🚚'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl backdrop-blur-lg bg-white/80 border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-block h-1 w-16 bg-cyan-400 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: '01', 
                title: 'Discovery & Strategy', 
                desc: 'Deep dive into your business objectives'
              },
              { 
                step: '02', 
                title: 'Design & Development', 
                desc: 'Crafting pixel-perfect solutions'
              },
              { 
                step: '03', 
                title: 'Launch & Optimize', 
                desc: 'Deployment and continuous improvement'
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl -top-20 -left-20 animate-float" />
            <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl -bottom-20 -right-20 animate-float-delayed" />
          </div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Transform Your Business?</h2>
            <p className="text-white/90 text-xl max-w-xl mx-auto">
              Let's create something extraordinary together
            </p>
            <Link to="/contact">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;