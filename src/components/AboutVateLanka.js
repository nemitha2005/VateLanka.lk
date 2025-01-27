import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.png";

const AboutVateLanka = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 lg:px-10"
      >
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-10 text-green-600">
          About VateLanka
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-bold text-green-600">VateLanka</span> is a
              cutting-edge waste management solution designed to revolutionize
              how garbage collection, recycling, and resource management are
              handled in Sri Lanka.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By connecting households, garbage truck drivers, and supervisors,
              our app ensures timely waste collection, optimized routes, and a
              cleaner environment. With features like real-time tracking and
              recycling guidelines, VateLanka is a step toward a greener future.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="About VateLanka"
              className="rounded-lg shadow-lg w-full lg:w-3/4 h-auto object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutVateLanka;
