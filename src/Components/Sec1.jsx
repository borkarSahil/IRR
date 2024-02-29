import React from "react";
import Breadcrumb from "./BreadCrumb";
import { CiCircleCheck, CiCircleAlert } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Sec1 = () => {
  return (
    <div className="py-4 md:py-6">
      <hr className="border-gray-600 my-4" />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left side content */}
        <div className="flex items-center mb-4 md:mb-0">
          <CiCircleCheck className="ml-7 mr-2" />
          <p className="mr-4 text-slate-600">Last Updated -</p>
          <p className="text-slate-600">Feb 22, 2020</p>
          <CiCircleAlert className="ml-7 mr-2" />
          <p className="text-slate-600">Advertising Disclosure</p>
        </div>

        {/* Right side content */}
        <div className="flex items-center">
          <p className="ml-2 text-slate-600">Top Relevants</p>
          <MdOutlineKeyboardArrowDown className="ml-2" />
        </div>
      </div>

      <hr className="border-gray-600 my-4" />

      <div className="flex flex-wrap justify-around w-full my-4 text-slate-600">
        <p>Tools</p>
        <p>AWS Builder</p>
        <p>Start Build</p>
        <p>Build Supplies</p>
        <p>Tooling</p>
        <p>BlueHosting</p>
      </div>

      <Breadcrumb />
    </div>
  );
};

export default Sec1;
