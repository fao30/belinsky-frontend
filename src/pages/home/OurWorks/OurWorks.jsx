import React from "react";
import BelinskyStudio from "./belinsky-studio/BelinskyStudio";
import ProductionHouse from "./production-house/ProductionHouse";

const OurWorks = () => {
  return (
    <>
      <h1 className="text-white text-center text-5xl lg:text-6xl bg-[#0225818C] p-5 pb-2">
        Our Works
      </h1>
      <ProductionHouse />
      <BelinskyStudio />
    </>
  );
};

export default OurWorks;
