import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); 
    }
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#developers", label: "Developers" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-green-600 shadow-md" : "bg-customGreen"
      } font-poppins`}
    >
      <div className="container mx-auto px-6 lg:px-10 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <a
            href="#"
            className="text-2xl font-bold text-white hover:text-green-100 transition-colors"
          >
            VateLanka
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={handleToggle}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-8 absolute lg:static top-full left-0 w-full lg:w-auto bg-green-500 lg:bg-transparent transition-all duration-500 ease-in-out ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 lg:opacity-100 invisible lg:visible -translate-y-10 lg:translate-y-0"
          }`}
        >
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="block lg:inline-block py-3 lg:py-0 text-center"
            >
              <a
                href={link.href}
                className="text-white block lg:inline hover:underline hover:underline-offset-4 hover:decoration-green-200 px-4 lg:px-0 text-base lg:text-lg font-medium transition-all duration-200"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
