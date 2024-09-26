import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const handleShopClick = (e) => {
    navigate("/collection");
  };
  return (
    <div className="flex flex-row sm:flex-row ">
      <img
        className="absoulte   t-[130px] w-[20vw] h-[500px]"
        src={assets.heroLeft}
        alt=""
      />
      <div className="  w-full sm:w-1/2 sm:items-start items-center flex flex-col sm:-mt-10 sm:-ml-12 -ml-[8rem]  justify-center sm:py-0">
        <p  className="prata-regular font-semiboldbold text-[5vw] ml-[12%] sm:py-3 lg:text-4xl text-[rgb(255,105,95)]">
          Fashion That Fits Your Life!
        </p>
        <TypeAnimation
          sequence={["Elevate Your Style: Where Fashion Meets Passion.", 2000]}
          wrapper="h1"
          cursor={false}
          repeat={Infinity}
          className="typing text-[3vw] ml-[12%] py-[8px] text-[#515151]  sm:py-3 lg:text-lg font-semibold leading-relaxed"
        />

        <button
          onClick={handleShopClick}
          className="rounded-[50px] bg-[rgb(255,105,95)] hover:bg-blue-500 mt-[20px] py-[8px] px-[30px] text-[15px] ml-[12%] text-white duration-[0.6s]"
        >
          SHOP NOW
        </button>
      </div>

      <img
        className="hidden sm:block w-[50vw] h-[500px]"
        src={assets.heroImage}
        alt=""
      />
    </div>
  );
}

export default Hero;
