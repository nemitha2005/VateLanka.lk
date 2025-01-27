import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ipptzs",
        "template_2z9pcyb",
        form.current,
        "o9YZbdjt-yFvT9UMI" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Message sent successfully, We will get back to you soon!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setSuccessMessage("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-customGreen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Contact Us
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-transparent rounded-lg p-8 max-w-4xl mx-auto space-y-6"
        >
          {/* Name and Email Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label
                htmlFor="name"
                className="block text-white font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label
                htmlFor="email"
                className="block text-white font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              />
            </motion.div>
          </div>

          {/* Message Input */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <label
              htmlFor="message"
              className="block text-white font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500 bg-gray-100"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <button
              type="submit"
              className="bg-white text-customGreen py-2 px-4 w-full rounded-lg hover:bg-gray-100 transition-all"
            >
              Send Message
              <IoIosSend className="inline-block ml-2" />
            </button>
          </motion.div>

          {/* Success Message */}
          {successMessage && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-4 text-center text-white font-semibold"
            >
              {successMessage}
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
