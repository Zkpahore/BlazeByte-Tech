import React, { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / totalHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden isolate bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl top-20 -left-20 animate-float" />
        <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl bottom-20 -right-20 animate-float-delayed" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-36 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-4 group">
              <div className="h-1 w-12 bg-cyan-400 transition-all duration-500 group-hover:w-16" />
              <span className="text-sm uppercase tracking-widest text-cyan-400 font-medium">
                Digital Innovation
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Elevate
              </span>
              <span className="text-white block mt-4">Your Digital Strategy</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Transform your online presence with cutting-edge web solutions and data-driven marketing strategies
            </p>

            <div className="flex justify-center lg:justify-start space-x-4">
              <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                Start Now
              </button>
              <button className="px-8 py-3 border-2 border-white/20 hover:border-cyan-400 text-white rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                Explore Solutions
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 backdrop-blur-xl bg-black/30 p-8 rounded-3xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-cyan-500/10 rounded-2xl">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold text-white">Core Services</h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Comprehensive digital solutions designed to boost your business growth and online visibility
            </p>

            <div className="grid grid-cols-2 gap-4">
              {['Web Development', 'SEO Strategy', 'E-Commerce', 'WordPress'].map((item) => (
                <div key={item} className="flex items-center gap-2 p-3 bg-white/5 rounded-xl hover:bg-cyan-500/10 transition-colors duration-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Progress */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;