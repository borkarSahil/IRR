import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = () => {
  return (
    <nav className="py-5 px-4">
      <ol className="list-none p-0 inline-flex flex-wrap">
        <li className="flex items-center">
          <a href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </a>
          <IoIosArrowForward className="text-gray-800 ml-1" />
        </li>
        <li className="flex items-center ml-2">
          <a href="/lib" className="text-gray-500 hover:text-gray-700">
            Hosting for all
          </a>
          <IoIosArrowForward className="text-gray-800 ml-1" />
        </li>
        <li className="flex items-center ml-2">
          <span className="text-gray-700">Hosting</span>
          <IoIosArrowForward className="text-gray-800 ml-1" />
        </li>

        <li className="flex items-center ml-2">
          <span className="text-gray-700">Hosting6</span>
          <IoIosArrowForward className="text-gray-800 ml-1" />
        </li>
        <li className="flex items-center ml-2">
          <span className="text-gray-700">Hosting5</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
