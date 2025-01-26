import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Developers = () => {
  const developers = [
    {
      name: 'S.M.N.N. Wijerathna',
      image: 'https://via.placeholder.com/150',
      github: 'https://github.com/example',
      linkedin: 'https://www.linkedin.com/in/example',
    },
    {
      name: 'W.M.P. Sachintha',
      image: 'https://via.placeholder.com/150',
      github: 'https://github.com/example',
      linkedin: 'https://www.linkedin.com/in/example',
    },
    {
      name: 'W.D.S. Dulkini',
      image: 'https://via.placeholder.com/150',
      github: 'https://github.com/example',
      linkedin: 'https://www.linkedin.com/in/example',
    },
    {
      name: 'M.M.B. Marasinghe',
      image: 'https://via.placeholder.com/150',
      github: 'https://github.com/example',
      linkedin: 'https://www.linkedin.com/in/example',
    },
    {
      name: 'N.S. Driberge',
      image: 'https://via.placeholder.com/150',
      github: 'https://github.com/example',
      linkedin: 'https://www.linkedin.com/in/example',
    },
    {
      name: 'O.B.W. Yapa',
      image: 'https://via.placeholder.com/150',
      github: 'https://github.com/example',
      linkedin: 'https://www.linkedin.com/in/example',
    },
  ];

  return (
    <section id="developers" className="py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <h2 className="text-3xl font-bold mb-8">Meet the Developers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((developer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img src={developer.image} alt={developer.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{developer.name}</h3>
                <div className="flex space-x-4 mb-4">
                  <a href={developer.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-500 hover:text-gray-700" />
                  </a>
                  <a href={developer.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-gray-500 hover:text-gray-700" />
                  </a>
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