import React from "react";
import { motion } from "framer-motion";
import layoutImage from '../assets/layout.png';
import playStoreIcon from '../assets/playstore.png';

const Header = () => {
  const handleDownloadClick = () => {
    window.open("https://vatelanka1234.github.io/fakestore/", "_blank");
  };

  return (
    <header id="home" className="bg-customGreen text-white py-20 mt-16">
      <div className="container mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            VateLanka
          </h1>
          <p className="text-lg lg:text-xl mb-8">
            Revolutionizing Waste Management in Sri Lanka with innovative
            solutions for a cleaner and greener future.
          </p>
          <button 
            className="bg-white text-green-500 font-medium py-3 px-8 rounded-full hover:bg-gray-100 shadow-lg transition-all duration-300"
            onClick={handleDownloadClick}
          >
            <img src={playStoreIcon} alt="Google Play Icon" className="w-6 h-6 inline-block mr-2" />
            Download Now!
          </button>
        </motion.div>

        {/* Right Column: Banner Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src={layoutImage} 
            alt="VateLanka Banner"
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;