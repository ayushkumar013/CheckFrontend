import React from "react";
import SubScriptionForm from "./SubScriptionForm";
import { assets } from "../assets/frontend_assets/assets";

function Subscription() {
  return (
    <div className="px-4  sm:px-[5vw] md:px-[7vw] lg:px-[9vw]  my-10">
      <p className="text-center  font-semibold text-[#1f2937cc] text-2xl py-8">
        Subscribe now & get
        <span className="text-[#FF695F]"> 20% off</span>
      </p>
      <SubScriptionForm />;
      
    </div>
  );
}

export default Subscription;
