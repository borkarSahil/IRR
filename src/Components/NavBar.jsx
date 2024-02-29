import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 p-2 flex flex-wrap justify-between">
        {/* Logo or brand */}
        

        {/* Search box */}
        <div className="w-full md:w-auto flex-grow md:flex md:justify-center md:items-center md:px-4 md:py-2 mb-4 md:mb-0">
          <div className="relative w-full md:w-64 px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none flex">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-1 rounded-md bg-gray-700 text-white focus:outline-none w-full"
            />
          </div>
        </div>

        {/* Navigation links (Desktop) */}
        <div className="hidden md:flex items-center justify-end w-full md:w-auto">
          <a href="/" className="text-white hover:text-gray-300 px-4 py-2">
            Home
          </a>
          <a href="/about" className="text-white hover:text-gray-300 px-4 py-2">
            About
          </a>
          <a
            href="/contact"
            className="text-white hover:text-gray-300 px-4 py-2"
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger icon (Mobile) */}
        <div className="md:hidden flex items-center justify-end w-full">
          <button className="focus:outline-none" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Navigation links (Mobile) */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center w-full text-white mt-4">
            <a href="/" className="hover:text-gray-300 px-4 py-2">
              Home
            </a>
            <a href="/about" className="hover:text-gray-300 px-4 py-2">
              About
            </a>
            <a href="/contact" className="hover:text-gray-300 px-4 py-2">
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
