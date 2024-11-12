import React from 'react';
import { FaLaptopCode, FaRocket, FaSearch, FaLock } from 'react-icons/fa';

const Vision = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-800 mb-8 lg:mb-12">
          We are a Globally Leading Website Design Company Building Strong Architecture for Your Websites
        </h2>
        <p className="text-center max-w-2xl md:max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-700 mb-12 lg:mb-20">
          Your website is important. With BlazeByte Tech, boost your business and reach the top! We’re here to create powerful, professional websites that captivate your audience and drive real growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Vision Point 1 */}
          <div className="relative transform perspective-3d transition-transform hover:scale-105 hover:-rotate-y-2 hover:rotate-x-2">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
              <FaLaptopCode className="text-blue-600 text-3xl sm:text-4xl md:text-5xl" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600">Engaging & Responsive Design</h3>
            </div>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
              Our team crafts engaging, responsive designs that capture attention on any device. BlazeByte Tech’s websites adapt seamlessly across platforms, delivering a polished and unified brand experience.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-100 opacity-30 blur-lg rounded-xl -z-10"></div>
          </div>

          {/* Vision Point 2 */}
          <div className="relative transform perspective-3d transition-transform hover:scale-105 hover:rotate-y-2 hover:-rotate-x-2">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
              <FaRocket className="text-blue-600 text-3xl sm:text-4xl md:text-5xl" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600">Optimized for Speed & Performance</h3>
            </div>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
              We build websites that load fast and operate smoothly, ensuring visitors have a seamless experience. Faster sites mean lower bounce rates and higher user satisfaction, which translates to better conversion.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-100 opacity-30 blur-lg rounded-xl -z-10"></div>
          </div>

          {/* Vision Point 3 */}
          <div className="relative transform perspective-3d transition-transform hover:scale-105 hover:-rotate-y-2 hover:rotate-x-2">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
              <FaSearch className="text-blue-600 text-3xl sm:text-4xl md:text-5xl" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600">Built-In SEO Foundation</h3>
            </div>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
              Our websites are optimized for search engines from the ground up, helping your brand gain visibility. With BlazeByte Tech’s SEO-focused approach, your site ranks higher and reaches more potential customers.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-100 opacity-30 blur-lg rounded-xl -z-10"></div>
          </div>

          {/* Vision Point 4 */}
          <div className="relative transform perspective-3d transition-transform hover:scale-105 hover:rotate-y-2 hover:-rotate-x-2">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
              <FaLock className="text-blue-600 text-3xl sm:text-4xl md:text-5xl" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600">Secure & Scalable Solutions</h3>
            </div>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
              We prioritize security and scalability, building a strong foundation for your website to grow. BlazeByte Tech’s architecture supports future expansion, keeping your business safe and prepared for success.
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-100 opacity-30 blur-lg rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
