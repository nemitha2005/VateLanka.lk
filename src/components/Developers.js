import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import nemithaPic from "../assets/dev/nemitha.png";
import binathPic from "../assets/dev/binath.jpg";
import nisalaPic from "../assets/dev/nisala.jpg";
import samalyaPic from "../assets/dev/samalya.jpg";
import ovinduPic from "../assets/dev/ovindu.png";
import pamodPic from "../assets/dev/pamod.jpg";

const developers = [
  {
    name: "S.M.N.N. Wijerathna",
    role: "Team Leader",
    photo: nemithaPic,
    linkedin: "https://www.linkedin.com/in/nemitha-wijerathna-7a715b299",
    github: "https://www.github.com/nemitha2005",
  },
  {
    name: "W.M.P. Sachintha",
    photo: pamodPic,
    linkedin: "https://www.linkedin.com/in/pamod-sachintha-0baba4294/",
    github: "#",
  },
  {
    name: "W.D.S. Dulkini",
    photo: samalyaPic,
    linkedin: "https://www.linkedin.com/in/samalya-dulkini-6a2035294/",
    github: "#",
  },
  {
    name: "M.M.B. Marasinghe",
    photo: binathPic,
    linkedin: "https://www.linkedin.com/in/menura-binath-280434309/",
    github: "#",
  },
  {
    name: "N.S. Driberge",
    photo: nisalaPic,
    linkedin: "https://www.linkedin.com/in/nisala-driberge-1190612a6/",
    github: "#",
  },
  {
    name: "O.B.W. Yapa",
    photo: ovinduPic,
    linkedin: "https://www.linkedin.com/in/ovindu-buddima-494a60294/",
    github: "#",
  },
];

const Developers = () => {
  return (
    <section id="developers" className="py-16 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-10 text-customGreen">Meet the Developers</h2>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {developers.map((developer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={developer.photo}
                  alt={developer.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Text Section */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{developer.name}</h3>
                <p className="text-sm text-gray-600">{developer.role}</p>

                {/* Social Media Links */}
                <div className="mt-3 flex justify-center space-x-3">
                  {developer.linkedin && (
                    <a
                      href={developer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  )}
                  {developer.github && (
                    <a
                      href={developer.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black transition-colors"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Developers;
