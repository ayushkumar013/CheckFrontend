import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { assets } from "../assets/frontend_assets/assets";

function PolicyCard() {
  return (
    <div className="relative p-5 flex items-center justify-evenly flex-wrap">
      {/* Card Container */}
      <div className="relative z-20 grid grid-cols-2 sm:flex sm:flex-row items-center gap-8 space-y-4">
        <div className="card bg-[#FFF0EB] mt-[15px] w-auto px-8 h-24 gap-4 flex items-center justify-evenly">
          <i className="fa-solid fa-check fa-bounce text-blue-500 text-4xl"></i>
          <p className="text-[#FF695F] text-xl font-extrabold">Quality Product</p>
        </div>
        <div className="card bg-[#FFF0EB] w-auto px-8 h-24 gap-4 flex items-center justify-evenly">
          <i className="fa-solid fa-truck-fast fa-bounce text-blue-500 text-4xl"></i>
          <p className="text-[#FF695F] text-xl font-extrabold">Free Shipping</p>
        </div>
        <div className="card bg-[#FFF0EB] w-auto px-8 h-24 gap-4 flex items-center justify-evenly">
          <i className="fa-solid fa-arrow-right-arrow-left fa-bounce text-blue-500 text-4xl"></i>
          <p className="text-[#FF695F] text-xl font-extrabold">7-Day Return</p>
        </div>
        <div className="card bg-[#FFF0EB] w-auto px-8 h-24 gap-4 flex items-center justify-evenly">
          <i className="fa-solid fa-phone-volume fa-bounce text-blue-500 text-4xl"></i>
          <p className="text-[#FF695F] text-xl font-extrabold">24/7 Support</p>
        </div>
      </div>
      

    </div>
  );
}

export default PolicyCard;
