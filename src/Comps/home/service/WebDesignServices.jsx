import React, { useState, useEffect } from 'react';

const MonitorWithImage = ({ image, isActive }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 group perspective-3d">
      {/* Monitor Frame */}
      <div className="relative w-full max-w-md lg:max-w-xl rounded-t-2xl border-8 border-gray-900 shadow-2xl overflow-hidden transform transition-all duration-500 hover:rotate-x-3 hover:rotate-y-3 hover:scale-[1.02]">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-t-2xl">
          <div className="bg-gray-900 rounded-t-lg overflow-hidden relative">
            <img
              src={image}
              alt="Screen Content"
              className={`w-full h-auto object-cover transition-opacity duration-1000 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {/* Screen Glare Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          </div>
        </div>
        {/* Monitor Bezel Details */}
        <div className="absolute inset-0 border-4 border-gray-700/50 rounded-t-2xl pointer-events-none" />
      </div>

      {/* Monitor Stand */}
      <div className="w-16 h-3 bg-gradient-to-b from-gray-900 to-gray-800 mt-3 rounded-full shadow-lg" />
      <div className="w-24 h-4 bg-gray-700 rounded-full mt-2 shadow-md" />
      <div className="w-32 h-2 bg-gray-600 rounded-full mt-1 shadow-sm" />
    </div>
  );
};

const MonitorSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setProgress(0);
      }, 5000);

      const progressInterval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 50);

      return () => {
        clearInterval(interval);
        clearInterval(progressInterval);
      };
    }
  }, [isHovered, images.length]);

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MonitorWithImage image={images[currentIndex]} isActive={true} />
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gray-300/50 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-50 ease-linear" 
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setProgress(0);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? 'bg-blue-500 scale-125' : 'bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const WebDesignServices = () => {
  const imagesFirst = ['/Movies.png', '/solar.png'];
  const imagesSecond = ['/ecommerce.webp', '/ecome.webp'];

  return (
    <div className="py-20 px-6 md:px-12 lg:px-24 border-b-2">
      <div className="container mx-auto space-y-24">
        {/* Section 1 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight animate-fade-in-up">
              Transform Your Digital Presence with Cutting-Edge Web Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in-up delay-100">
              At BlazeByte Tech, we engineer digital experiences that combine stunning aesthetics with 
              robust functionality. Our full-stack approach ensures your website not only captivates 
              visitors but also drives measurable business results.
            </p>
            {/* <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up delay-200">
              Start Your Transformation
            </button> */}
          </div>
          
          <div className="w-full md:w-1/2 animate-float">
            <MonitorSlider images={imagesSecond} />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full md:w-1/2 animate-float">
            <MonitorSlider images={imagesFirst} />
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight animate-fade-in-up">
              Enterprise-Grade Development for Scalable Growth
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in-up delay-100">
              Leverage our expertise in modern web technologies to build secure, high-performance 
              platforms ready for global scale. We implement CI/CD pipelines, cloud-native architectures, 
              and real-time analytics to future-proof your digital assets.
            </p>
            {/* <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up delay-200">
              Explore Our Solutions
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignServices;