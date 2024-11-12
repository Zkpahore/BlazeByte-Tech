import React from 'react';

const ComputerScreen = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 justify-center">
      {/* Monitor Frame */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto bg-gray-300 rounded-t-lg border-4 border-gray-400 shadow-lg">
        {/* Screen Bezel */}
        <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-gray-900 rounded-md border-b-4 border-gray-400">
          {/* Screen Content */}
          <img src="/blal.jpg" alt="Screen Content" className="w-full h-full" />
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-black rounded-full border-2 border-gray-500 shadow-inner">
          <div className="w-1 h-1 sm:w-2 sm:h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Stand Neck */}
      <div className="w-8 h-12 sm:w-10 sm:h-14 md:w-12 md:h-16 bg-gray-600 mt-2 shadow-lg"></div>

      {/* Stand Base */}
      <div className="w-24 h-3 sm:w-28 sm:h-4 md:w-32 md:h-4 lg:w-36 lg:h-4 bg-gray-400 rounded-full mt-1 shadow-md"></div>
      <div className="w-28 h-2 sm:w-32 sm:h-2 md:w-36 md:h-2 lg:w-40 lg:h-2 bg-gray-500 rounded-full mt-1 shadow-sm"></div>
    </div>
  );
};

export default ComputerScreen;
