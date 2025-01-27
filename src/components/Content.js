import React from "react";
import { motion } from "framer-motion";
import {
  FaRoute,
  FaRecycle,
  FaClock,
  FaTruck,
  FaMapMarkedAlt,
  FaComments,
  FaArrowRight,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaClock className="text-customGreen text-5xl mb-4" />,
      title: "Real-Time Tracking",
      description: "Monitor garbage truck locations in real-time for timely waste collection.",
      category: "Household",
    },
    {
      icon: <FaRoute className="text-customGreen text-5xl mb-4" />,
      title: "Route Optimization",
      description: "Optimize routes for garbage trucks to minimize time and fuel usage.",
      category: "Drivers",
    },
    {
      icon: <FaRecycle className="text-customGreen text-5xl mb-4" />,
      title: "Recycling Guidelines",
      description: "Provide detailed resources for proper recycling and waste disposal.",
      category: "Household",
    },
    {
      icon: <FaTruck className="text-customGreen text-5xl mb-4" />,
      title: "Efficient Resource Management",
      description: "Track and manage resources efficiently to improve operations.",
      category: "Supervisors",
    },
    {
      icon: <FaMapMarkedAlt className="text-customGreen text-5xl mb-4" />,
      title: "Collection Schedules",
      description: "Notify households of garbage collection schedules to avoid delays.",
      category: "Household",
    },
    {
      icon: <FaComments className="text-customGreen text-5xl mb-4" />,
      title: "Complaint Management",
      description: "Enable easy reporting of missed pickups or other waste issues.",
      category: "Supervisors",
    },
  ];

  const handleScroll = () => {
    const targetSection = document.getElementById("home");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="features" className="py-16 bg-customGreen text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-10 text-center">Key Features</h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white text-gray-800 shadow-lg rounded-xl p-6 border-t-4 border-green-500 hover:shadow-2xl transition-shadow duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>

              {/* Feature Category Badge */}
              <p className="mt-2 text-sm font-medium bg-green-100 text-green-700 inline-block px-3 py-1 rounded-full">
                {feature.category}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to experience smarter waste management?
          </h3>
          <button
            onClick={handleScroll}
            className="bg-white text-green-500 py-3 px-8 rounded-full hover:bg-gray-100 shadow-lg transition-all duration-300"
          >
            Get Started
            <FaArrowRight className="inline-block ml-2" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
