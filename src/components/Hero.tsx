import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1200")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to the Land of Kings
          </h1>
          <p className="text-xl text-white mb-8">
            Experience the royal heritage, vibrant culture, and majestic landscapes of Rajasthan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 transition-colors">
              Explore Destinations
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-orange-600 transition-colors">
              Virtual Tours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;