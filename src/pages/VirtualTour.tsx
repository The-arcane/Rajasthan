import React from 'react';
import { Compass, Camera, Map, Info } from 'lucide-react';

const VirtualTour = () => {
  const tours = [
    {
      title: 'Amber Fort, Jaipur',
      description: 'Explore the majestic halls and courtyards of this historic fortress',
      image: 'https://i.postimg.cc/MpqKtfJT/images-30-largejpg.jpg',
    },
    {
      title: 'City Palace, Udaipur',
      description: 'Walk through the royal chambers and gardens of the Lake City palace',
      image: 'https://i.postimg.cc/sX6wHhLR/city-palace3.jpg',
    },
    {
      title: 'Mehrangarh Fort, Jodhpur',
      description: 'Discover the mighty fortress overlooking the Blue City',
      image: 'https://i.postimg.cc/jjJM32bW/homegrown-2024-04-937a15bb-f868-422b-b68c-db03949abaf2-Untitled-design-2024-04-29-T182658-598.png',
    },
    {
      title: 'Jaisalmer Fort',
      description: 'Experience life inside a living desert fortress',
      image: 'https://i.postimg.cc/hjtcpSq7/jaislamer-fort-night-view-1914.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-orange-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Virtual Tours</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Experience Rajasthan's magnificent heritage from anywhere in the world
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Compass className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">360° Views</h3>
            <p className="text-gray-600">Immersive panoramic experiences of historic sites</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Camera className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">HD Quality</h3>
            <p className="text-gray-600">High-definition visuals with crystal clear details</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Map className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
            <p className="text-gray-600">Navigate through monuments with ease</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Info className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Audio Guide</h3>
            <p className="text-gray-600">Detailed narration of historical significance</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tours.map((tour) => (
            <div key={tour.title} className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="relative h-64">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors">
                    Start Tour
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                <p className="text-gray-600">{tour.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Virtual Journey?</h2>
          <p className="text-gray-600 mb-6">
            Experience the magnificence of Rajasthan's heritage from the comfort of your home
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 transition-colors">
            Begin Virtual Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;