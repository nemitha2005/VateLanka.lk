import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaFileContract,
  FaCopyright,
  FaUserCheck,
  FaMoneyBillWave,
  FaExclamationTriangle,
  FaBalanceScale,
  FaEdit,
  FaPhoneAlt,
} from "react-icons/fa";

const TermsConditions = () => {
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
          <a
            href="/"
            className="inline-flex items-center text-white hover:text-green-100 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Home
          </a>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mt-4 text-white"
          >
            Terms & Conditions
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
                  className="terms-section"
                >
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full text-green-600">
                      <FaFileContract size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Introduction
                      </h2>
                      <div className="prose prose-green max-w-none">
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                          <p className="font-medium">
                            Welcome to VateLanka. These terms and conditions
                            outline the rules and regulations for the use of our
                            website and services.
                          </p>
                        </div>
                        <p>
                          By accessing this website and using our services, we
                          assume you accept these terms and conditions in full.
                          Do not continue to use VateLanka's website and
                          services if you do not accept all of the terms and
                          conditions stated on this page.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* License to Use */}
                <motion.section
                  variants={itemVariants}
                  className="terms-section"
                >
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full text-green-600">
                      <FaCopyright size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        License to Use
                      </h2>
                      <div className="prose prose-green max-w-none">
                        <p>
                          Unless otherwise stated, VateLanka and/or its
                          licensors own the intellectual property rights for all
                          material on this website. All intellectual property
                          rights are reserved. You may view and/or print pages
                          from the website for your own personal use subject to
                          restrictions set in these terms and conditions.
                        </p>

                        <div className="mt-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                          <h3 className="text-red-600 font-medium mb-2">
                            You must not:
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <span className="text-red-500 mr-2">•</span>
                              Republish material from this website
                            </li>
                            <li className="flex items-center">
                              <span className="text-red-500 mr-2">•</span>
                              Sell, rent, or sub-license material from this
                              website
                            </li>
                            <li className="flex items-center">
                              <span className="text-red-500 mr-2">•</span>
                              Reproduce, duplicate, or copy material from this
                              website
                            </li>
                            <li className="flex items-center">
                              <span className="text-red-500 mr-2">•</span>
                              Redistribute content from VateLanka (unless
                              content is specifically made for redistribution)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* User Account */}
                <motion.section
                  variants={itemVariants}
                  className="terms-section"
                >
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full text-green-600">
                      <FaUserCheck size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        User Account
                      </h2>
                      <div className="prose prose-green max-w-none">
                        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-medium text-green-600">
                              Accurate Information
                            </h3>
                            <p className="text-sm">
                              When you create an account, you guarantee that the
                              information you provide is accurate, complete, and
                              current at all times.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-medium text-green-600">
                              Account Security
                            </h3>
                            <p className="text-sm">
                              You are responsible for maintaining the
                              confidentiality of your account and password,
                              including restricting access to your computer
                              and/or account.
                            </p>
                          </div>
                        </div>
                        <p>
                          You agree to accept responsibility for any and all
                          activities or actions that occur under your account
                          and/or password. You must notify us immediately upon
                          becoming aware of any breach of security or
                          unauthorized use of your account.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Services and Fees */}
                <motion.section
                  variants={itemVariants}
                  className="terms-section"
                >
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full text-green-600">
                      <FaMoneyBillWave size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Services and Fees
                      </h2>
                      <div className="prose prose-green max-w-none">
                        <p>
                          VateLanka provides waste management solutions,
                          including but not limited to garbage collection
                          tracking, recycling guidelines, and resource
                          management.
                        </p>
                        <div className="my-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                          <p className="text-yellow-700">
                            We reserve the right to modify or discontinue,
                            temporarily or permanently, our services with or
                            without notice. We shall not be liable to you or to
                            any third party for any modification, suspension, or
                            discontinuance of the service.
                          </p>
                        </div>
                        <p>
                          Fees for our services, if applicable, will be clearly
                          communicated before you engage with the paid services.
                          All fees are non-refundable unless otherwise
                          specified.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Limitation of Liability */}
                <motion.section
                  variants={itemVariants}
                  className="terms-section"
                >
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full text-green-600">
                      <FaExclamationTriangle size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Limitation of Liability
                      </h2>
                      <div className="prose prose-green max-w-none">
                        <div className="p-4 bg-gray-100 rounded-lg mb-4">
                          <p className="italic">
                            In no event shall VateLanka, nor its directors,
                            employees, partners, agents, suppliers, or
                            affiliates, be liable for any indirect, incidental,
                            special, consequential or punitive damages,
                            including without limitation, loss of profits, data,
                            use, goodwill, or other intangible losses, resulting
                            from:
                          </p>
                        </div>
                        <div className="mt-4 space-y-3">
                          <div className="flex items-start">
                            <span className="bg-green-100 text-green-700 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                              1
                            </span>
                            <p>
                              Your access to or use of or inability to access or
                              use our service
                            </p>
                          </div>
                          <div className="flex items-start">
                            <span className="bg-green-100 text-green-700 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                              2
                            </span>
                            <p>
                              Any conduct or content of any third party on the
                              service
                            </p>
                          </div>
                          <div className="flex items-start">
                            <span className="bg-green-100 text-green-700 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                              3
                            </span>
                            <p>Any content obtained from the service</p>
                          </div>
                          <div className="flex items-start">
                            <span className="bg-green-100 text-green-700 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                              4
                            </span>
                            <p>
                              Unauthorized access, use, or alteration of your
                              transmissions or content
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Governing Law */}
                <motion.section
                  variants={itemVariants}
                  className="terms-section"
                >
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full text-green-600">
                      <FaBalanceScale size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Governing Law
                      </h2>
                      <div className="prose prose-green max-w-none">
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
                          <p className="text-blue-700">
                            These Terms shall be governed and construed in
                            accordance with the laws of Sri Lanka, without
                            regard to its conflict of law provisions.
                          </p>
                        </div>
                        <p>
                          Our failure to enforce any right or provision of these
                          Terms will not be considered a waiver of those rights.
                          If any provision of these Terms is held to be invalid
                          or unenforceable by a court, the remaining provisions
                          of these Terms will remain in effect.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Changes to Terms */}
                <motion.section
                  variants={itemVariants}
                  className="terms-section"
                >
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full text-green-600">
                      <FaEdit size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Changes to Terms
                      </h2>
                      <div className="prose prose-green max-w-none">
                        <p>
                          We reserve the right, at our sole discretion, to
                          modify or replace these Terms at any time. If a
                          revision is material, we will provide at least 30
                          days' notice prior to any new terms taking effect.
                          What constitutes a material change will be determined
                          at our sole discretion.
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg mt-4">
                          <p className="text-green-800 font-medium">
                            By continuing to access or use our service after any
                            revisions become effective, you agree to be bound by
                            the revised terms. If you do not agree to the new
                            terms, you are no longer authorized to use the
                            service.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Contact Us */}
                <motion.section
                  variants={itemVariants}
                  className="terms-section"
                >
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full text-green-600">
                      <FaPhoneAlt size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Contact Us
                      </h2>
                      <div className="prose prose-green max-w-none">
                        <p>
                          If you have any questions about these Terms, please
                          contact us at:
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

export default TermsConditions;
