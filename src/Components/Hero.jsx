import React from "react";
import Sec1 from "./Sec1";
import Card from "./Card";
import LastCard from "./LastCard";
import ThreeSectionCards from "./ThreeSectionCards";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="ml-10 mr-10 md:ml-52 md:mr-52 mt-10">
      <h1 className="text-5xl text-center mb-4 text-slate-700">
        Best Website Builders in US
      </h1>
      <Sec1 />
      <Card
        showOrangeBox={true}
        filledStars={5}
        ratingNos={9.8}
        ratingText={"Exceptional"}
      />
      <Card
        showOrangeBox={true}
        filledStars={4.5}
        ratingNos={9.5}
        ratingText={"Excellent"}
      />
      <Card
        showOrangeBox={false}
        filledStars={5}
        ratingNos={9.3}
        ratingText={"Exceptional"}
      />
      <LastCard filledStars={4} ratingNos={9.1} ratingText={"Very Good"} />
      <h2 className="text-4xl mt-12 mb-4 text-gray-700">
        Related Deals You Might Like
      </h2>
      <div className="flex flex-col md:flex-row pr-4 pl-4 md:pr-40 md:pl-40">
        <ThreeSectionCards />
        <ThreeSectionCards />
        <ThreeSectionCards />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10 mb-10">
        <div className="text-gray-600 text-2xl mb-4 md:mb-0 md:mr-5">
          <p>Sign up and get exclusive</p>
          <p>special deals</p>
        </div>
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Hero;
