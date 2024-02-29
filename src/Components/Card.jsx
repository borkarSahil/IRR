import React from "react";
import { GoTrophy } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiStarSFill, RiStarLine } from "react-icons/ri";

const Card = ({ showOrangeBox, filledStars, ratingNos, ratingText }) => {
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
    <>
      <div className="relative flex flex-col">
        {/* Card */}
        <div className=" mx-auto bg-white rounded-xl overflow-hidden md:flex m-4 relative">
          {/* Image section */}
          <div className="md:flex-shrink-0 md:w-1/3 relative">
            {/* Orange box */}
            {showOrangeBox && (
              <div className="absolute flex items-center top-0 left-0 bg-orange-500 text-white p-2 rounded-md z-10">
                <GoTrophy className="m-1" />
                <span className="pl-1">Best Choice</span>
              </div>
            )}
            {/* Number 1 */}
            <div className="absolute mt-12 left-1 bg-white text-gray-400 font-bold text-xl rounded-full w-8 h-8 flex items-center justify-center z-10">
              1
            </div>

            <div>
              <img
                className="mt-16 m-10  md:h-40 md:w-full object-cover md:object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68H8bGhlyiGmd8RLiP9dj2hXG6MAeqn1PWw&usqp=CAU"
                alt="Card image"
              />
            </div>
          </div>

          {/* Text section */}
          <div className="md:w-2/3 m-10 mt-2 p-4 flex flex-col justify-between relative">
            {/* Text paragraph */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-slate-800">
                  WixPro 72-inch Responsive Website-Builder-{" "}
                </span>
                Comprehensive Digital Platform Creation Tool, Streamlined Design
                Interface for Professional Website and Online Stores
              </p>

              <div className="text-sm text-gray-600 pt-2">
                <p className="text-slate-800 font-bold mb-1">Main Highlights</p>
                <p className="ml-2">
                  [What You Get]: Receive the WixPro website builder suite,
                  access to premium design templates, an extensive library of
                  widgets and apps, and detailed step-by-step guides.
                </p>
              </div>
            </div>
            {/* Show More button */}
            <div className="flex items-center mt-auto md:w-2/3 ml-10">
              <button className="text-blue-500 mt-1">Show More</button>
              <MdOutlineKeyboardArrowDown className="ml-2" />
            </div>
          </div>

          {/* Rating section */}
          <div className="md:flex-shrink-0 md:w-1/6 text-center md:text-left py-4 flex flex-col justify-between">
            {/* Blue box containing rating information */}
            <div className="bg-sky-100 text-white p-2 rounded-md z-10 flex flex-col items-center">
              <p className="text-3xl text-sky-800  font-semibold mb-1">
                {ratingNos}
              </p>
              <p className="text-sm text-sky-800 font-semibold mb-1">
                {ratingText}
              </p>
              <div className="flex">{renderStars()}</div>
            </div>

            <div className="text-right mt-auto md:w-1/6 mr-10 m-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
