import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, CreditCard, Phone, Mail, User } from 'lucide-react';

const PlanTrip = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelers: '',
    startDate: '',
    duration: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you can add any validation or API calls if needed

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
        <div className="max-w-xl bg-white p-10 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4 text-orange-600">Thank You, {formData.name}!</h2>
          <p className="mb-6 text-gray-700 text-lg">
            We will soon contact you and send your itinerary on WhatsApp.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
          >
            Plan Another Trip
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-orange-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Plan Your Perfect Rajasthan Adventure</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Let us help you create an unforgettable journey through the Land of Kings
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg -mt-20 p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select Destination</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Udaipur">Udaipur</option>
                    <option value="Jaisalmer">Jaisalmer</option>
                    <option value="Jodhpur">Jodhpur</option>
                  </select>
                </div>
              </div>

              {/* Number of Travelers */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Travelers
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    name="travelers"
                    min="1"
                    value={formData.travelers}
                    onChange={handleChange}
                    required
                    placeholder="Number of people"
                    className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select Duration</option>
                    <option value="3-5 days">3-5 days</option>
                    <option value="6-8 days">6-8 days</option>
                    <option value="9-12 days">9-12 days</option>
                    <option value="13+ days">13+ days</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition-colors"
            >
              Plan My Trip
            </button>
          </form>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Phone className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our travel experts are available round the clock to assist you with your journey
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <CreditCard className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600">
              We ensure safe and secure payment options for all bookings
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <MapPin className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Itineraries</h3>
            <p className="text-gray-600">
              Personalized plans tailored to your preferences and travel style
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;
