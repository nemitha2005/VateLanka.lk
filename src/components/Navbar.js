import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-green-500 text-white py-4 px-6 fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          VateLanka
        </a>
        <button
          className="lg:hidden focus:outline-none"
          onClick={handleToggle}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`lg:flex lg:items-center lg:space-x-6 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-gray-300">
              Features
            </a>
          </li>
          <li>
            <a href="#developers" className="hover:text-gray-300">
              Developers
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;