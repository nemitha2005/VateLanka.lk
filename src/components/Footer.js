import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-green-500 text-white py-8"
    >
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2023 VateLanka. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;