import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaShieldAlt,
  FaUserLock,
  FaDatabase,
  FaClipboardCheck,
  FaBalanceScale,
  FaEnvelope,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-green-600 to-green-400 py-8">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-green-100 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mt-4 text-white"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-green-50 mt-2"
          >
            Last Updated: February 28, 2025
          </motion.p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow">
        <div className="container mx-auto px-6 py-10">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-10"
              >
                {/* Introduction */}
                <motion.section
                  variants={itemVariants}
                  className="policy-section"
                >
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full text-green-600">
                      <FaShieldAlt size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Introduction
                      </h2>
                      <div className="prose prose-green max-w-none">
                        <p>
                          Welcome to VateLanka. We respect your privacy and are
                          committed to protecting your personal data. This
                          privacy policy will inform you about how we look after
                          your personal data when you visit our website and use
                          our services, and tell you about your privacy rights
                          and how the law protects you.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Data We Collect */}
                <motion.section
                  variants={itemVariants}
                  className="policy-section"
                >
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full text-green-600">
                      <FaUserLock size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Data We Collect
                      </h2>
                      <div className="prose prose-green max-w-none">
                        <p>
                          We may collect, use, store and transfer different
                          kinds of personal data about you which we have grouped
                          together as follows:
                        </p>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-medium text-green-600">
                              Identity Data
                            </h3>
                            <p className="text-sm">
                              Includes first name, last name, username or
                              similar identifier.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-medium text-green-600">
                              Contact Data
                            </h3>
                            <p className="text-sm">
                              Includes email address and telephone numbers.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-medium text-green-600">
                              Technical Data
                            </h3>
                            <p className="text-sm">
                              Includes IP address, browser type, operating
                              system and other device information.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-medium text-green-600">
                              Usage Data
                            </h3>
                            <p className="text-sm">
                              Includes information about how you use our website
                              and services.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-medium text-green-600">
                              Location Data
                            </h3>
                            <p className="text-sm">
                              Includes your current location disclosed by GPS
                              technology.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* How We Use Your Data */}
                <motion.section
                  variants={itemVariants}
                  className="policy-section"
                >
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full text-green-600">
                      <FaDatabase size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        How We Use Your Data
                      </h2>
                      <div className="prose prose-green max-w-none">
                        <p>
                          We will only use your personal data when the law
                          allows us to. Most commonly, we will use your personal
                          data in the following circumstances:
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-center">
                            <span className="bg-green-100 text-green-600 p-1 mr-2 rounded-full">
                              ✓
                            </span>
                            To register you as a new customer.
                          </li>
                          <li className="flex items-center">
                            <span className="bg-green-100 text-green-600 p-1 mr-2 rounded-full">
                              ✓
                            </span>
                            To provide and improve our services to you.
                          </li>
                          <li className="flex items-center">
                            <span className="bg-green-100 text-green-600 p-1 mr-2 rounded-full">
                              ✓
                            </span>
                            To manage our relationship with you.
                          </li>
                          <li className="flex items-center">
                            <span className="bg-green-100 text-green-600 p-1 mr-2 rounded-full">
                              ✓
                            </span>
                            To administer and protect our business and this
                            website.
                          </li>
                          <li className="flex items-center">
                            <span className="bg-green-100 text-green-600 p-1 mr-2 rounded-full">
                              ✓
                            </span>
                            To make suggestions and recommendations to you about
                            services that may be of interest to you.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Data Security */}
                <motion.section
                  variants={itemVariants}
                  className="policy-section"
                >
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full text-green-600">
                      <FaClipboardCheck size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Data Security
                      </h2>
                      <div className="prose prose-green max-w-none">
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                          <p className="font-medium">
                            We have put in place appropriate security measures
                            to prevent your personal data from being
                            accidentally lost, used, or accessed in an
                            unauthorized way, altered, or disclosed.
                          </p>
                        </div>
                        <p>
                          In addition, we limit access to your personal data to
                          those employees, agents, contractors, and other third
                          parties who have a business need to know. They will
                          only process your personal data on our instructions
                          and they are subject to a duty of confidentiality.
                        </p>
                        <p>
                          We have put in place procedures to deal with any
                          suspected personal data breach and will notify you and
                          any applicable regulator of a breach where we are
                          legally required to do so.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Your Legal Rights */}
                <motion.section
                  variants={itemVariants}
                  className="policy-section"
                >
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full text-green-600">
                      <FaBalanceScale size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Your Legal Rights
                      </h2>
                      <div className="prose prose-green max-w-none">
                        <p>
                          Under certain circumstances, you have rights under
                          data protection laws in relation to your personal
                          data:
                        </p>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                            <h3 className="font-medium text-green-600">
                              Request Access
                            </h3>
                            <p className="text-sm">
                              Request access to your personal data.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                            <h3 className="font-medium text-green-600">
                              Request Correction
                            </h3>
                            <p className="text-sm">
                              Request correction of your personal data.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                            <h3 className="font-medium text-green-600">
                              Request Erasure
                            </h3>
                            <p className="text-sm">
                              Request erasure of your personal data.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                            <h3 className="font-medium text-green-600">
                              Object to Processing
                            </h3>
                            <p className="text-sm">
                              Object to processing of your personal data.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                            <h3 className="font-medium text-green-600">
                              Request Restriction
                            </h3>
                            <p className="text-sm">
                              Request restriction of processing your personal
                              data.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                            <h3 className="font-medium text-green-600">
                              Withdraw Consent
                            </h3>
                            <p className="text-sm">
                              Right to withdraw consent at any time.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Contact Us */}
                <motion.section
                  variants={itemVariants}
                  className="policy-section"
                >
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full text-green-600">
                      <FaEnvelope size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Contact Us
                      </h2>
                      <div className="prose prose-green max-w-none">
                        <p>
                          If you have any questions about this privacy policy or
                          our privacy practices, please contact us at:
                        </p>
                        <div className="bg-green-50 p-6 rounded-lg mt-4 text-center">
                          <p className="font-medium text-green-800">
                            <strong>Email:</strong> vatelanka@gmail.com
                          </p>
                          <p className="font-medium text-green-800">
                            <strong>Contact:</strong> 070-530-6619
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
