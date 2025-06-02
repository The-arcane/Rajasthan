import React, { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    url: 'https://i.postimg.cc/k5KgJNC7/pexels-ankur-bagai-6440428-770x433.webp',
    title: 'Hawa Mahal, Jaipur',
    category: 'Architecture',
  },
  {
    url: 'https://i.postimg.cc/d0qx3wPD/2-lake-palace-udaipur-rajasthan-attr-hero.jpg',
    title: 'Lake Palace, Udaipur',
    category: 'Landmarks',
  },
  {
    url: 'https://i.postimg.cc/hjtcpSq7/jaislamer-fort-night-view-1914.jpg',
    title: 'Jaisalmer Fort',
    category: 'Architecture',
  },
  {
    url: 'https://i.postimg.cc/pT8hS9k6/Kusum-Bhawai-Dance.webp',
    title: 'Folk Dance Performance',
    category: 'Culture',
  },
  {
    url: 'https://i.postimg.cc/QtyDcSpL/A2108-Unknown-Crafts-of-Rajasthan-Blue-pottery-IMAGE-2.jpg',
    title: 'Traditional Crafts',
    category: 'Culture',
  },
  {
    url: 'https://i.postimg.cc/N0WFcgz2/DAL-BAATI-CHURMA.jpg',
    title: 'Rajasthani Cuisine',
    category: 'Food',
  },
  {
    url: 'https://i.postimg.cc/8c3NhwgJ/Rajasthan-Desert-Stay-Cover.jpg',
    title: 'Desert Safari',
    category: 'Adventure',
  },
  {
    url: 'https://i.postimg.cc/VvT4m0XP/jodhpur-hero.jpg',
    title: 'Blue City, Jodhpur',
    category: 'Landmarks',
  },
  {
    url: 'https://i.postimg.cc/qvBYwyQj/market-jaisalmer-1-1024x683.jpg',
    title: 'Street Market',
    category: 'Culture',
  },
  {
    url: 'https://i.postimg.cc/RZc7WDwY/20170307092647-1.webp',
    title: 'Desert Camping',
    category: 'Adventure',
  },
  {
    url: 'https://i.postimg.cc/WbSSN3cy/Desertfestival6.jpg',
    title: 'Festival Celebrations',
    category: 'Culture',
  },
  {
    url: 'https://i.postimg.cc/DZjLVWXQ/4-U0-A5299-1366x768.jpg',
    title: 'Palace Interior',
    category: 'Architecture',
  },
  {
    url: 'https://i.postimg.cc/d1y69mXk/D5-Lft1ff3h-Cey-Xxy-ANpf.webp',
    title: 'Traditional Textiles',
    category: 'Culture',
  },
  {
    url: 'https://i.postimg.cc/LsT28LvP/18068970-city-view-of-jaisalmer-a-city-in-rajasthan-india.jpg',
    title: 'City View',
    category: 'Landmarks',
  },
  {
    url: 'https://i.postimg.cc/N0WFcgz2/DAL-BAATI-CHURMA.jpg',
    title: 'Local Food',
    category: 'Food',
  },
  {
    url: 'https://i.postimg.cc/YSg86zT4/images.jpg',
    title: 'Desert Sunset',
    category: 'Adventure',
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...new Set(images.map(img => img.category))];
  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Photo Gallery</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Explore the beauty and diversity of Rajasthan through our curated collection of photographs
        </p>

        <div className="flex justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-orange-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.url}
              onClick={() => setSelectedImage(image.url)}
              className="cursor-pointer group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <span className="text-sm">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;