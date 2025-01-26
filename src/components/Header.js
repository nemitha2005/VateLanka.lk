import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-green-500 text-white py-20 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">VateLanka</h1>
        <p className="text-xl mb-8">Revolutionizing Waste Management in Sri Lanka</p>
        <button className="bg-white text-green-500 py-3 px-6 rounded-full hover:bg-gray-200">
          Get it on Google Play
        </button>
      </motion.div>
    </header>
  );
};

export default Header;