import { React, useState } from "react";
import { BelinskyStudio } from "./belinsky-studio/BelinskyStudio";
import { ProductionHouse } from "./production-house/ProductionHouse";
import header from "./assets/OurWorkHeader.png";
import { motion } from "framer-motion";

const OurWork = () => {
  const [isProductionHouse, setIsProductionHouse] = useState(false);
  const [isBelinskyStudio, setIsBelinskyStudio] = useState(true);

  return (
    <div className="w-full">
      {/* THE IMAGE AND THE TITLE */}
      <div className="h-[16rem] w-full bg-slate-400 relative group">
        <img
          src={header}
          alt="ourwork-header"
          className="absolute object-cover w-full h-full"
        />
        <div className="absolute h-full w-full bg-[#0225818C] text-white">
          <div className="flex flex-col items-center justify-center w-full h-full text-center text-white">
            <h3 className="text-[70px] font-semibold text-white w-full">
              Our Work
            </h3>
            <p className="w-full drop-shadow-md text-[25px]">
              “From CUE to CUT, along with Belinsky”
            </p>
          </div>
        </div>
      </div>
      {/* THE BUTTONS */}
      <div className="flex justify-center w-full items-center max-sm:gap-3 gap-6 text-center my-8 max-sm:px-6">
        <button
          onClick={() => {
            setIsProductionHouse(true);
            setIsBelinskyStudio(false);
          }}
          className={` w-[13rem] p-1 text-[20px] sm:text-[24px] rounded-xl border-2 ${
            isProductionHouse
              ? " text-[#022581] border-[#022581]"
              : " text-[#989898] border-[#989898]"
          }`}
        >
          Production House
        </button>
        <button
          onClick={() => {
            setIsBelinskyStudio(true);
            setIsProductionHouse(false);
          }}
          className={` w-[13rem] p-1 text-[20px] sm:text-[24px] rounded-xl border-2 ${
            isBelinskyStudio
              ? " text-[#022581] border-[#022581]"
              : " text-[#989898] border-[#989898]"
          }`}
        >
          Belinsky Studio
        </button>
      </div>
      {/* THE CONTENTS */}
      <div className={`${isBelinskyStudio ? "" : "hidden"}`}>
        <BelinskyStudio />
      </div>
      <div className={`${isProductionHouse ? "" : "hidden"}`}>
        <ProductionHouse />
      </div>
    </div>
  );
};

export default OurWork;
