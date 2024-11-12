import React from 'react';

const ScrollingBackgroundComponent = () => {
    return (
        <div
            className="relative flex items-center justify-center h-screen bg-cover bg-fixed text-white"
            style={{ backgroundImage: "url('/picbw.jpg')" }}
        >
            <div className="p-4 sm:p-6 md:p-8 rounded-lg max-w-lg sm:max-w-xl text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-relaxed sm:leading-loose">
                    <span className="text-yellow-400">
                        Web design
                    </span> goes beyond aesthetics; it’s about <span className="text-blue-500">
                        global performance in search engines!
                    </span> Enhance your online presence with our expert 
                    <span className="text-green-400"> WordPress design</span> and 
                    <span className="text-red-500"> SEO services</span>, transforming your brand to 
                    <span className="text-purple-500"> attract visitors</span> and boost conversions worldwide!
                </h2>
            </div>
        </div>
    );
};

export default ScrollingBackgroundComponent;
