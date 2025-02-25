import React from 'react';
import { FaLaptopCode, FaRocket, FaSearch, FaLock } from 'react-icons/fa';

const Vision = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
            We are a Globally Leading Website Design Company
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Your website is important. With BlazeByte Tech, boost your business and reach the top! We’re here to create powerful, professional websites that captivate your audience and drive real growth.
          </p>
        </div>

        {/* Vision Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Vision Point 1 */}
          <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-blue-100 rounded-lg">
                  <FaLaptopCode className="text-blue-600 text-3xl sm:text-4xl" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-blue-900">Engaging & Responsive Design</h3>
              </div>
              <p className="text-gray-600 text-base sm:text-lg">
                Our team crafts engaging, responsive designs that capture attention on any device. BlazeByte Tech’s websites adapt seamlessly across platforms, delivering a polished and unified brand experience.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>

          {/* Vision Point 2 */}
          <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-blue-100 rounded-lg">
                  <FaRocket className="text-blue-600 text-3xl sm:text-4xl" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-blue-900">Optimized for Speed & Performance</h3>
              </div>
              <p className="text-gray-600 text-base sm:text-lg">
                We build websites that load fast and operate smoothly, ensuring visitors have a seamless experience. Faster sites mean lower bounce rates and higher user satisfaction, which translates to better conversion.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>

          {/* Vision Point 3 */}
          <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-blue-100 rounded-lg">
                  <FaSearch className="text-blue-600 text-3xl sm:text-4xl" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-blue-900">Built-In SEO Foundation</h3>
              </div>
              <p className="text-gray-600 text-base sm:text-lg">
                Our websites are optimized for search engines from the ground up, helping your brand gain visibility. With BlazeByte Tech’s SEO-focused approach, your site ranks higher and reaches more potential customers.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>

          {/* Vision Point 4 */}
          <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-blue-100 rounded-lg">
                  <FaLock className="text-blue-600 text-3xl sm:text-4xl" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-blue-900">Secure & Scalable Solutions</h3>
              </div>
              <p className="text-gray-600 text-base sm:text-lg">
                We prioritize security and scalability, building a strong foundation for your website to grow. BlazeByte Tech’s architecture supports future expansion, keeping your business safe and prepared for success.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;