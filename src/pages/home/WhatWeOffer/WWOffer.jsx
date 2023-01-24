import React from "react";
import BelinskyStudio from "./belinsky-studio/BelinskyStudio";
import ProductionHouse from "./production-house/ProductionHouse";

const WWOffer = () => {
  return (
    <>
      <h1 className="text-white text-center text-4xl lg:text-6xl bg-[#0225818C] p-5 pb-2 my-[5vh] md:my-[10vh]">
        What We Offer
      </h1>
      <ProductionHouse />
      <BelinskyStudio />
    </>
  );
};

export default WWOffer;
