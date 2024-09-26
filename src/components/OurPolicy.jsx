import React from "react";
import Title from "./Title";
import PolicyCard from "./PolicyCard";

function OurPolicy() {
  return (
    <div className="px-4  sm:px-[5vw] md:px-[7vw] lg:px-[9vw]  my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Our"} text2={"Services"} />
      </div>
      <PolicyCard/>
    </div>
  );
}

export default OurPolicy;
