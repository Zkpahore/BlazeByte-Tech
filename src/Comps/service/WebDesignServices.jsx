import React from 'react';

const MonitorWithImage = ({ image }) => {
  return (
    <div className="flex flex-col items-center h-auto bg-gray-100 justify-center">
      {/* Monitor frame */}
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto bg-gray-300 rounded-t-lg border-4 border-gray-400 shadow-lg overflow-hidden">
        <div className="flex justify-center items-center w-full">
          <img
            src={image}
            alt="Screen Content"
            className="w-full h-auto object-contain"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
      </div>

      {/* Stand */}
      <div className="w-8 h-12 sm:w-10 sm:h-14 md:w-12 md:h-16 bg-gray-600 mt-2 shadow-lg"></div>
      <div className="w-24 h-3 sm:w-28 sm:h-4 md:w-32 md:h-4 lg:w-36 lg:h-4 bg-gray-400 rounded-full mt-1 shadow-md"></div>
      <div className="w-28 h-2 sm:w-32 sm:h-2 md:w-36 md:h-2 lg:w-40 lg:h-2 bg-gray-500 rounded-full mt-1 shadow-sm"></div>
    </div>
  );
};

const WebDesignServices = () => {
  const images = ["/Movies.png", "/solar.png"]; // Add paths to your images here

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        
        {/* Section 1 */}
        <div className="flex flex-col-reverse md:flex-row items-center mb-12">
          <div className="w-full md:w-1/2 md:pr-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
              Ready to Transform Your Online Presence? BlazeByte Tech Provides Exceptional Web Design Solutions for Your Success!
            </h2>
            <p className="text-gray-700 text-lg lg:text-xl mb-4">
              At BlazeByte Tech, we believe that a website is more than just a digital presence; it’s a powerful tool to connect with your audience. Our web design services are tailored to provide an intuitive experience that reflects your brand’s identity.
            </p>
          </div>

          {/* Monitor with Single Image */}
          <MonitorWithImage image={images[0]} />
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Monitor with Single Image */}
          <MonitorWithImage image={images[1]} />

          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
              Unlock the potential of your business with our expert developers who elevate your website’s performance and maximize your returns!
            </h2>
            <p className="text-gray-700 text-lg lg:text-xl mb-4">
              With a focus on maximizing your return on investment, our skilled developers at BlazeByte Tech craft competitive websites that stand out in the crowded digital marketplace. We utilize cutting-edge technology and industry best practices to create websites that are not only aesthetically pleasing but also highly functional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignServices;
