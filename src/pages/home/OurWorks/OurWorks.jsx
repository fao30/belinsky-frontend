import React from "react";
import BelinskyStudio from "./BelinskyStudio";
import ProductionHouse from "./ProductionHouse";

const OurWorks = () => {
  return (
    <>
      <h1 className="text-white text-center text-4xl lg:text-6xl bg-[#0225818C] p-5 pb-2 my-[8vw] md:my-[3vw]">
        Our Works
      </h1>
      <ProductionHouse />
      <BelinskyStudio />
    </>
  );
};

export default OurWorks;
