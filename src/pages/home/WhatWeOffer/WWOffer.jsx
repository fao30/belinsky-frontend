import React from "react";
import BelinskyStudio from "./belinsky-studio/BelinskyStudio";
import ProductionHouse from "./production-house/ProductionHouse";

const WWOffer = () => {
  return (
    <>
      <h1 className="text-white text-center text-6xl bg-[#0225818C] pt-3 font-nanami">
        What We Offer
      </h1>
      <ProductionHouse />
      <BelinskyStudio />
    </>
  );
};

export default WWOffer;
