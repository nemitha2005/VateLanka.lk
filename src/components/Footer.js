import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-green-600 text-white py-8"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">VateLanka</h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-gray-100"
            >
              &copy; 2025 VateLanka. All rights reserved.
            </motion.p>
          </div>

          {/* Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-medium mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-white hover:underline transition-all duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-white hover:underline transition-all duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-medium mb-3">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/vatelanka/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transform hover:scale-110 transition-all duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61573443273979"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transform hover:scale-110 transition-all duration-300"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="mailto:vatelanka@gmail.com"
                className="text-white hover:text-gray-200 transform hover:scale-110 transition-all duration-300"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
