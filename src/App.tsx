import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Calendar, Map, MessageCircle, Music, Palmtree, Mountain } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

import Destinations from './pages/Destinations';
import Experiences from './pages/Experiences';
import PlanTrip from './pages/PlanTrip';
import Culture from './pages/Culture';
import Gallery from './pages/Gallery';
import About from './pages/About';
import VirtualTour from './pages/VirtualTour';
import Booking from './pages/Booking';

const HomeContent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <main className="container mx-auto px-4 py-12">
        {/* Popular Destinations */}
        <section className="my-20">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
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
                title: 'Jodhpur',
                description: 'The Blue City with its mighty Mehrangarh Fort',
                image: 'https://i.postimg.cc/NGKG2778/2-mehrangarh-fort-jodhpur-rajasthan-city-hero.jpg',
                highlights: ['Mehrangarh Fort', 'Umaid Bhawan Palace', 'Clock Tower', 'Jaswant Thada'],
              },
            ].map((dest, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={dest.image} alt={dest.title} className="w-full h-64 object-cover" />
                <div className="p-5">
                  <h3 className="text-2xl font-semibold">{dest.title}</h3>
                  <p className="text-gray-600 mb-2">{dest.description}</p>
                  <ul className="text-sm text-orange-600 list-disc pl-5">
                    {dest.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/destinations')}
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full"
            >
              Explore Destinations
            </button>
          </div>
        </section>

        {/* Unique Experiences */}
        <section className="my-20">
          <h2 className="text-3xl font-bold text-center mb-12">Unique Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: 'Cultural Performances',
                description: 'Experience traditional Rajasthani folk music and dance performances',
                icon: Music,
                image: 'https://i.postimg.cc/fLC1LFk7/events-and-shows-in-Rajasthan.webp',
              },
              {
                title: 'Desert Safari',
                description: 'Adventure through the golden sands of the Thar Desert',
                icon: Palmtree,
                image: 'https://i.postimg.cc/W3ngLgSz/Thrilling-Safaris-and-Camel-Rides-in-rajasthan.webp',
              },
              {
                title: 'Adventure Sports',
                description: 'Experience thrilling activities in scenic locations',
                icon: Mountain,
                image: 'https://i.postimg.cc/pdGrvCzm/16-hot-air-balloon-ride-over-Jaipur-1.webp',
              },
            ].map((exp, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={exp.image} alt={exp.title} className="w-full h-56 object-cover" />
                <div className="p-4 flex items-start gap-4">
                  <exp.icon className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/experiences')}
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full"
            >
              Explore Experiences
            </button>
          </div>
        </section>

        {/* Plan Section */}
        <section className="my-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Plan Your Royal Adventure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-orange-50 rounded-lg">
              <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Custom Itineraries</h3>
              <p className="text-gray-600">Create your perfect Rajasthan journey</p>
            </div>
            <div
              onClick={() => navigate('/virtual-tour')}
              className="cursor-pointer p-6 bg-orange-50 rounded-lg hover:shadow-lg transition"
            >
              <Map className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Virtual Tours</h3>
              <p className="text-gray-600">Explore destinations in 360°</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-lg">
              <MessageCircle className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">24/7 Support</h3>
              <p className="text-gray-600">Get assistance anytime, anywhere</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/plan-trip" element={<PlanTrip />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/book-now" element={<Booking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
