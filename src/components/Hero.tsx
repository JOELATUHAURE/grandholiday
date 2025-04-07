import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[500px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Welcome to Our Site
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Experience excellence in everything we do
        </p>
      </div>
    </div>
  );
};

export default Hero;