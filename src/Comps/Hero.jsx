import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Professional Website Design & SEO to Boost Traffic",
      description: "Get a website that’s built to engage customers and increase your visibility online. BlazeByte Tech offers SEO-driven website design and optimization to help your business rank higher and attract more clients.",
      buttons: [
        { text: "Request Your Free Consultation", bgColor: "bg-yellow-500", hoverColor: "hover:bg-yellow-400", url: "/contact" },
        { text: "Discover Our Services", bgColor: "bg-gray-100", hoverColor: "hover:bg-gray-200", url: "/services" }
      ],
      bgColor: "bg-blue-900"
    },
    {
      title: "Custom E-commerce Solutions for Your Business",
      description: "Build an online store tailored to your brand with secure, fast, and SEO-optimized e-commerce solutions. BlazeByte Tech supports your business growth with engaging, user-friendly designs.",
      buttons: [
        { text: "Start Your Store", bgColor: "bg-green-500", hoverColor: "hover:bg-green-400", url: "/contact" },
        { text: "Learn More", bgColor: "bg-gray-100", hoverColor: "hover:bg-gray-200", url: "/learn-more" }
      ],
      bgColor: "bg-blue-900"
    },
    {
      title: "Data-Driven SEO Strategies to Increase Visibility",
      description: "Our team uses advanced SEO techniques to enhance your site's performance, attract organic traffic, and drive conversions. Trust BlazeByte Tech for strategies that work.",
      buttons: [
        { text: "Improve Your SEO", bgColor: "bg-blue-500", hoverColor: "hover:bg-blue-400", url: "/contact" },
        { text: "Explore SEO Services", bgColor: "bg-gray-100", hoverColor: "hover:bg-gray-200", url: "/seo-services" }
      ],
      bgColor: "bg-blue-900"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden">
      <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className={`min-w-full ${slide.bgColor} text-white py-16 px-6 md:py-24 lg:py-32`}>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-10 md:mb-12 lg:mb-16">
                {slide.description}
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                {slide.buttons.map((button, i) => (
                  <a
                    key={i}
                    href={button.url}
                    className={`${button.bgColor} text-blue-900 px-8 py-3 rounded-full font-semibold shadow-lg ${button.hoverColor} transition-all duration-200`}
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
