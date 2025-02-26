import React, { useState, useEffect } from 'react';

const FeatureBridge = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const stats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '1.2x', label: 'SEO Performance Boost' },
    { value: '24h', label: 'Support Response' },
    { value: '500+', label: 'WordPress Sites' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden isolate border-t-2">
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -top-20 left-1/4 animate-float" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -bottom-20 right-1/4 animate-float-delayed" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Animated Stats */}
          <div className="space-y-8 text-center lg:text-right">
            <div className="inline-grid grid-cols-2 gap-8 w-full max-w-md mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`p-6 rounded-2xl backdrop-blur-lg transition-all duration-500 ${
                    activeIndex === index 
                      ? 'bg-cyan-500/20 border-2 border-cyan-400/50 scale-105'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Service Features */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-4 group">
                <div className="h-1 w-12 bg-purple-400 transition-all duration-500 group-hover:w-16" />
                <span className="text-sm uppercase tracking-widest text-purple-400 font-medium">
                  Core Services
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Full-Cycle Web Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  title: 'WordPress Mastery', 
                  icon: '🚀',
                  desc: 'Custom themes & plugins development'
                },
                { 
                  title: 'SEO Optimization', 
                  icon: '🔍',
                  desc: 'Data-driven search strategies'
                },
                { 
                  title: 'Web Development', 
                  icon: '💻',
                  desc: 'Modern responsive websites'
                },
                { 
                  title: 'E-Commerce', 
                  icon: '🛒',
                  desc: 'Conversion-focused stores'
                }
              ].map((service, index) => (
                <div 
                  key={service.title}
                  className="p-6 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bridge */}
        <div className="mt-16 w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-1000"
            style={{ width: `${(activeIndex + 1) * 25}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureBridge;