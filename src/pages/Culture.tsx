import React from 'react';
import { Music, Palette, Heart, Coffee } from 'lucide-react';

const Culture = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience Rajasthani Culture</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Immerse yourself in the rich traditions, art, and heritage of Rajasthan
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Art & Craft</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Rajasthan is renowned for its intricate handicrafts, including:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>Block printing and tie-dye textiles</li>
                <li>Miniature paintings</li>
                <li>Blue pottery</li>
                <li>Leather work</li>
                <li>Jewelry making</li>
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1590047265471-995ad5dc9f34?auto=format&fit=crop&q=80&w=800"
              alt="Rajasthani Crafts"
              className="mt-6 rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Music & Dance</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Traditional performing arts that define Rajasthan's cultural identity:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>Ghoomar dance</li>
                <li>Kalbeliya folk dance</li>
                <li>Manganiyar & Langa music</li>
                <li>Puppet shows</li>
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800"
              alt="Rajasthani Dance"
              className="mt-6 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Cultural Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Music className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Folk Performances</h3>
              <p className="text-gray-600">Experience traditional music and dance shows</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Palette className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Art Workshops</h3>
              <p className="text-gray-600">Learn traditional art forms from local artisans</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Festival Celebrations</h3>
              <p className="text-gray-600">Participate in colorful local festivals</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Coffee className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cooking Classes</h3>
              <p className="text-gray-600">Master the art of Rajasthani cuisine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;