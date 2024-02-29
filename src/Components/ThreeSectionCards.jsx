import React from "react";

const ThreeSectionCards = () => {
  return (
    <div className="flex justify-center bg-white rounded-xl overflow-hidden md:flex md:mr-5 md:w-1/3">
      {/* First Section */}
      <div className="w-full p-4">
        <div className="max-w-sm rounded overflow-hidden">
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68H8bGhlyiGmd8RLiP9dj2hXG6MAeqn1PWw&usqp=CAU"
            alt="Card image cap"
          />
          <div className="px-6 py-4">
            <div className="flex flex-wrap items-center mb-2">
              <div className="bg-slate-100 h-6 rounded p-1 mr-2 text-blue-800 font-semibold">
                20% off
              </div>
              <div className="bg-slate-100 h-6 rounded p-1 text-blue-800 font-semibold">
                Limited Time
              </div>
            </div>

            <div className="font-bold text-gray-600 text-xl text-center mb-2">
              Web Builder
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              ipsum dolor sit amet, consectetur
            </p>
          </div>

          <div className="px-6 py-4 flex items-center justify-between">
            <div className="text-slate-800 text-lg mr-2">
              <span className="font-bold">$39.96</span>{" "}
              <span className="text-gray-400 line-through">$49.96</span>
            </div>
            <div className="text-red-600">Save 20%</div>
          </div>

          <div className="px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSectionCards;
