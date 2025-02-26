import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl -top-20 -left-20 animate-float" />
          <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl -bottom-20 -right-20 animate-float-delayed" />
        </div>
        <div className="relative text-center space-y-6 px-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Where innovation meets execution in the digital landscape
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-16 py-16 space-y-20">
        {/* Mission, Vision, Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Our Mission',
              content: 'Empowering businesses with innovative web solutions and effective SEO strategies',
              color: 'from-blue-500 to-cyan-500'
            },
            { 
              title: 'Our Vision',
              content: 'Global leadership in digital innovation and client success',
              color: 'from-purple-500 to-fuchsia-500'
            },
            { 
              title: 'Our Values',
              content: 'Integrity, Innovation, Collaboration, Customer-Centric',
              color: 'from-indigo-500 to-blue-500'
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className={`bg-gradient-to-r ${item.color} w-full h-1 mb-6 rounded-full`} />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </section>

        {/* Why Choose Us */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-block h-1 w-16 bg-cyan-400 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why BlazeByte Tech?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🚀', title: 'Tailored Solutions', desc: 'Custom strategies for unique business needs' },
              { icon: '💻', title: 'Tech Expertise', desc: 'Cutting-edge web technologies stack' },
              { icon: '📈', title: 'Proven Results', desc: '500+ successful client projects' },
              { icon: '🔒', title: 'Secure Solutions', desc: 'Enterprise-grade security protocols' }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl backdrop-blur-lg bg-white/80 border border-gray-200 hover:border-cyan-300 transition-all duration-300 group hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { value: '5+', label: 'Years Experience', color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
            { value: '500+', label: 'Happy Clients', color: 'bg-gradient-to-r from-purple-500 to-fuchsia-500' },
            { value: '100%', label: 'Client Satisfaction', color: 'bg-gradient-to-r from-green-500 to-emerald-500' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl text-white overflow-hidden relative"
            >
              <div className={`absolute inset-0 ${stat.color} opacity-90`} />
              <div className="relative z-10">
                <p className="text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Client Success */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-block h-1 w-16 bg-cyan-400 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Success Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'E-commerce Transformation',
                content: 'Boosted online sales by 200% through optimized platform development',
                client: 'FashionForward Retail'
              },
              { 
                title: 'SEO Dominance',
                content: 'Achieved #1 rankings for 85+ competitive keywords in 6 months',
                client: 'TechInnovate Solutions'
              }
            ].map((story, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl backdrop-blur-lg bg-white/80 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{story.title}</h3>
                    <p className="text-gray-600 mb-3">{story.content}</p>
                    <p className="text-sm font-medium text-cyan-600">{story.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl -top-20 -left-20 animate-float" />
            <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl -bottom-20 -right-20 animate-float-delayed" />
          </div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Ignite Your Digital Presence?</h2>
            <p className="text-white/90 text-xl max-w-xl mx-auto">
              Let's collaborate to create something extraordinary for your business
            </p>
            <Link to="/contact">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Journey
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;