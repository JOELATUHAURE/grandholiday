import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gray-900 h-[100vh] pt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Welcome to Grand Holiday
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto text-xl text-gray-300"
          >
            Experience comfort and hospitality at its finest in Nyamityobora, Mbarara City
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <a
              href="tel:+256771609698"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
            >
              Book Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;