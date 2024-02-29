import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiStarSFill, RiStarLine } from "react-icons/ri";

const LastCard = ({ filledStars, ratingNos, ratingText }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        stars.push(<RiStarSFill key={i} className="text-yellow-500" />);
      } else {
        stars.push(<RiStarLine key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <div className=" mx-auto bg-white rounded-xl overflow-hidden  md:flex m-4 relative">
      {/* Number 1 */}
      <div className="absolute mt-4 ml-4 bg-white text-gray-400 font-bold text-xl rounded-full w-8 h-8 flex items-center justify-center z-10">
        1
      </div>
      {/* Image section */}
      <div className="md:flex-shrink-0 md:w-1/3 p-4">
        <img
          className="mt-16 m-10 pr-5  md:h-40 md:w-full object-cover md:object-center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68H8bGhlyiGmd8RLiP9dj2hXG6MAeqn1PWw&usqp=CAU"
          alt="Card image"
        />
      </div>

      {/* Text section */}
      <div className="md:w-2/3 p-4 flex flex-col justify-between">
        {/* Top text paragraph */}
        <div className="text-center md:text-left mb-4">
          <p className="text-sm text-gray-600">
            <span className="text-slate-800 font-bold">
              CDK Responsive Builder:
            </span>
            An extensive library of widgets and apps,
            <p>and detailed step-by-step guides</p>
          </p>
          <div className="bg-slate-100 h-6 rounded w-16">26 % off</div>{" "}
          {/* 26% off box */}
        </div>

        <p className="text-black font-bold">Main HighLights</p>

        <div className=" pl-4 bg-orange-50 rounded m-2 ml-5 p-1">
          <div className="m-1 flex">
            <p className="bg-gray-100 rounded p-1 mr-1">9.9</p>{" "}
            <p className="text-sm">Building Responsive</p>
          </div>
          <div className="m-1 flex">
            <p className="bg-gray-100 p-1 mr-1 rounded">8.9</p>{" "}
            <p className="text-sm">Cool</p>
          </div>
          <div className="m-1 flex">
            <p className="bg-gray-100 p-1 mr-1 rounded ">8.9</p>{" "}
            <p className="text-sm">Docs</p>
          </div>
        </div>

        {/* Bottom text paragraph */}
        <div className="text-center md:text-left flex flex-col">
          <p className="text-sm text-gray-600">Why we love it</p>
          <div className="flex">
            <input type="checkbox" />
            <p className="m-1">Documentation</p>
          </div>
          <div className="flex">
            <input type="checkbox" />
            <p className="m-1">Easy Use</p>
          </div>
          <div className="flex">
            <input type="checkbox" />
            <p className="m-1">Out Of Box</p>
          </div>
        </div>

        {/* Show More button */}
        <div className="text-left flex items-center mt-auto md:w-2/3 ml-10">
          <button className="text-blue-500 mt-1">Show More</button>
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>

      <div className="md:flex-shrink-0 md:w-1/6 text-center md:text-left py-4 flex flex-col justify-between">
        {/* Blue box containing rating information */}
        <div className="bg-sky-100 text-white p-2 rounded-md z-10 flex flex-col items-center">
          <p className="text-3xl text-sky-800 font-semibold mb-1">
            {ratingNos}
          </p>
          <p className="text-sm text-sky-800 font-semibold mb-1">
            {ratingText}
          </p>
          <div className="flex">{renderStars()}</div>
        </div>

        <div className="text-right mt-auto md:w-1/6 mr-10">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastCard;
