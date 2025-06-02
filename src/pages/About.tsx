import React from 'react';
import { Shield, Users, Globe, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1200")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Rajasthan Tourism</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Promoting the rich heritage and culture of India's largest state
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-8">
              Rajasthan Tourism is dedicated to promoting and preserving the rich cultural heritage,
              historical monuments, and natural beauty of Rajasthan. We strive to provide authentic
              travel experiences while supporting local communities and sustainable tourism practices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4">What We Do</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Promote cultural heritage and traditions</li>
                  <li>Support local artisans and communities</li>
                  <li>Organize cultural events and festivals</li>
                  <li>Facilitate tourism infrastructure development</li>
                  <li>Provide authentic travel experiences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Cultural preservation</li>
                  <li>Sustainable tourism</li>
                  <li>Community development</li>
                  <li>Authentic experiences</li>
                  <li>Environmental responsibility</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
            <div className="text-center">
              <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-bold mb-2">20+ Years</h4>
              <p className="text-gray-600">Of Excellence</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-bold mb-2">1M+ Visitors</h4>
              <p className="text-gray-600">Annually</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-bold mb-2">100+ Destinations</h4>
              <p className="text-gray-600">To Explore</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-bold mb-2">50+ Awards</h4>
              <p className="text-gray-600">For Excellence</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-2">Head Office</h4>
                <p className="text-gray-600">
                  Tourism Bhawan, Government of Rajasthan<br />
                  M.I. Road, Jaipur - 302001<br />
                  Rajasthan, India
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Get in Touch</h4>
                <p className="text-gray-600">
                  Email: info@rajasthantourism.gov.in<br />
                  Phone: +91-141-2822800<br />
                  Toll Free: 1800-103-3500
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;