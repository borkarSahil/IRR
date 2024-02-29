import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {/* Contact Us */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
            <h3 className="text-lg font-semibold mb-2">CATEGORIES</h3>
            <p className="text-sm">Web Builder</p>
            <p className="text-sm">Hosting</p>
            <p className="text-sm">Data Center</p>
            <p className="text-sm">Robotic Automation</p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
            <h3 className="text-lg font-semibold mb-2">QUICK LINKS</h3>
            <ul className="text-sm">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms Of Service</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
            <h3 className="text-lg font-semibold mb-2">LOCATION</h3>
            <p className="text-sm">United States</p>
            <div className="mt-2">
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
