import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function SubScriptionForm() {
  return (
    <div className="relative">
      {/* Form Container */}
      <div className="relative flex justify-center z-20">
        {" "}
        {/* Ensure higher z-index here */}
        <div
          className="form-box shadow-lg rounded-xl w-[400px] h-[400px] sm:w-[500px]  sm:h-[350px] m-4 bg-cover bg-no-repeat bg-top-right flex items-center justify-center"
          style={{ backgroundImage: `url(${assets.subscriptionForm})` }}
        >
          <div className="w-[95%]">
            <form>
              {/* Name Input */}
              <div className="relative mb-8 border-b border-[#FF695F]">
                <input
                  type="text"
                  autoComplete="off"
                  name="name"
                  placeholder="Name"
                  className="w-full h-12 bg-transparent border-none outline-none text-base px-2 text-[#FF695F] custom-placeholder"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative mb-8 border-b border-[#FF695F]">
                <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full h-12 bg-transparent border-none outline-none text-base px-2 text-[#FF695F] custom-placeholder"
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full mt-7 h-10 rounded-full bg-[#FF695F] text-white border-none outline-none cursor-pointer text-base font-medium transition duration-500 ease-in-out hover:bg-blue-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <div className="images absolute top-0 left-0 right-0 z-10 flex justify-between w-full">
        <img
          className="hidden sm:block opacity-60 w-[40%] h-[100%]"
          src={assets.subLeft}
          alt="Left Image"
        />
        <img
          className="hidden sm:block opacity-40 w-[40%] h-[100%]"
          src={assets.subRight}
          alt="Right Image"
        />
      </div>
    </div>
  );
}

export default SubScriptionForm;
