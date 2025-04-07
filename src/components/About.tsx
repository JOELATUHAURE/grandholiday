import React from 'react';
import { Building2 } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Hotel</h2>
            <p className="text-gray-600 mb-6">
              Welcome to our luxurious hotel, where comfort meets elegance. Nestled in the heart of the city,
              we offer an unforgettable experience with world-class amenities and exceptional service.
            </p>
            <div className="flex items-center gap-4 text-gray-700">
              <Building2 className="w-6 h-6" />
              <span className="font-semibold">Established in 1995</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80"
              alt="Hotel Exterior"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;