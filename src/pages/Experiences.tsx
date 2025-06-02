import React from 'react';
import { Calendar, Camera, Music, Utensils, Mountain, Palmtree } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const experiences = [
  {
    title: 'Cultural Performances',
    description: 'Experience traditional Rajasthani folk music and dance performances',
    icon: Music,
    image: 'https://i.postimg.cc/fLC1LFk7/events-and-shows-in-Rajasthan.webp',
  },
  {
    title: 'Heritage Photography',
    description: 'Capture the architectural marvels and colorful streets',
    icon: Camera,
    image: 'https://i.postimg.cc/PJR3mBgm/Blue-city-of-Jodhpur-Rajasthan.jpg',
  },
  {
    title: 'Desert Safari',
    description: 'Adventure through the golden sands of the Thar Desert',
    icon: Palmtree,
    image: 'https://i.postimg.cc/W3ngLgSz/Thrilling-Safaris-and-Camel-Rides-in-rajasthan.webp',
  },
  {
    title: 'Culinary Tours',
    description: 'Savor the rich flavors of authentic Rajasthani cuisine',
    icon: Utensils,
    image: 'https://i.postimg.cc/XJJHPjcR/2bebb0-bb5a20add41344c69f6726e13c369122.avif',
  },
  {
    title: 'Festival Celebrations',
    description: 'Participate in vibrant local festivals and celebrations',
    icon: Calendar,
    image: 'https://i.postimg.cc/5tYyxv3p/Rajasthan-International-Folk-Festival-Main.jpg',
  },
  {
    title: 'Adventure Sports',
    description: 'Experience thrilling activities in scenic locations',
    icon: Mountain,
    image: 'https://i.postimg.cc/pdGrvCzm/16-hot-air-balloon-ride-over-Jaipur-1.webp',
  },
];

const Experiences = () => {
  const navigate = useNavigate();

  const handleBooking = (title) => {
    // Navigates to '/book-now' and passes experience title in state
    navigate('/book-now', { state: { experience: title } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Unique Experiences</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Immerse yourself in the rich cultural heritage and adventure experiences of Rajasthan
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => {
            const Icon = experience.icon;
            return (
              <div key={experience.title} className="bg-white rounded-lg overflow-hidden shadow-lg group">
                <div className="relative h-48">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                  <p className="text-gray-600">{experience.description}</p>
                  <button
                    onClick={() => handleBooking(experience.title)}
                    className="mt-4 w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
