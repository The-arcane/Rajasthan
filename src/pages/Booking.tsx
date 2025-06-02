import React, { useState } from 'react';
import { Calendar, Users, MapPin, CreditCard, Phone, Mail } from 'lucide-react';

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-orange-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Book Your Rajasthan Adventure</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Choose from our curated packages or create your custom itinerary
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg -mt-20 p-8">
          {submitted ? (
            <div className="text-center space-y-6 py-10">
              <h2 className="text-3xl font-bold text-green-600">Booking Confirmed!</h2>
              <p className="text-gray-700 text-lg">
                Thank you for booking with us. We will contact you shortly with payment details and your personalized itinerary.
              </p>
              <button
                onClick={handleReset}
                className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
              >
                Book Another Trip
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      required
                      className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      required
                      className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Package Type
                  </label>
                  <select
                    required
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select Package</option>
                    <option>Heritage Tour</option>
                    <option>Desert Adventure</option>
                    <option>Cultural Experience</option>
                    <option>Luxury Retreat</option>
                    <option>Custom Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Travelers
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      min="1"
                      required
                      className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Number of people"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      required
                      className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  rows={4}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Any special requirements or preferences?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition-colors"
              >
                Book Now
              </button>
            </form>
          )}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Book With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Local Guides</h3>
              <p className="text-gray-600">
                Knowledgeable guides who bring Rajasthan's history to life
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <CreditCard className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Safe and flexible payment options for your peace of mind
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Phone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock assistance throughout your journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
