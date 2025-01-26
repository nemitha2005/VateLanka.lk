import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const Content = () => {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaCheckCircle className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Real-Time Tracking</h3>
            <p>Track the location of garbage trucks in real-time.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaCheckCircle className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Route Optimization</h3>
            <p>Efficient routes for garbage truck drivers to minimize time and fuel usage.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <FaCheckCircle className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Recycling Information</h3>
            <p>Guidelines and resources for proper waste disposal and recycling.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Content;