import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-green-600 text-white py-8"
    >
      <div className="container mx-auto px-6 text-center">
      <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm text-gray-100"
        >
          &copy; 2025 VateLanka. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;