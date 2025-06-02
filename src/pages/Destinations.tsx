import React from 'react';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const destinations = [
  {
    title: 'Jaipur',
    description: 'The Pink City known for its stunning palaces and vibrant bazaars',
    image: 'https://i.postimg.cc/P5qm1DCW/Master.jpg',
    highlights: ['Hawa Mahal', 'City Palace', 'Amber Fort', 'Jantar Mantar'],
  },
  {
    title: 'Udaipur',
    description: 'The City of Lakes featuring romantic architecture and serene waters',
    image: 'https://i.postimg.cc/Qtgbf3h1/Lake-Palace-Udaipur-660x400.webp',
    highlights: ['Lake Palace', 'City Palace', 'Fateh Sagar Lake', 'Jagdish Temple'],
  },
  {
    title: 'Jaisalmer',
    description: 'The Golden City with its magnificent desert fortress',
    image: 'https://i.postimg.cc/hjtcpSq7/jaislamer-fort-night-view-1914.jpg',
    highlights: ['Jaisalmer Fort', 'Sam Sand Dunes', 'Patwon Ki Haveli', 'Gadisar Lake'],
  },
  {
    title: 'Pushkar',
    description: 'A sacred town known for its holy lake and annual camel fair',
    image: 'https://i.postimg.cc/N0B7Ln10/image-1.webp',
    highlights: ['Pushkar Lake', 'Brahma Temple', 'Camel Fair', 'Rose Gardens'],
  },
  {
    title: 'Jodhpur',
    description: 'The Blue City with its mighty Mehrangarh Fort',
    image: 'https://i.postimg.cc/NGKG2778/2-mehrangarh-fort-jodhpur-rajasthan-city-hero.jpg',
    highlights: ['Mehrangarh Fort', 'Umaid Bhawan Palace', 'Clock Tower', 'Jaswant Thada'],
  },
];

const Destinations = () => {
  const navigate = useNavigate();  // Get navigate function

  const handlePlanTrip = (title) => {
    // Optional: pass destination title as state or param if needed
    navigate('/plan-trip', { state: { destination: title } }); 
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Explore Rajasthan's Treasures</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.title} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{destination.title}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {destination.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-orange-600" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handlePlanTrip(destination.title)}
                  className="mt-6 w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-colors"
                >
                  Plan Your Trip
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
