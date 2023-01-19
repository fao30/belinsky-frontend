import { React } from "react";
import { BelinskyStudio } from "./belinsky-studio/BelinskyStudio";
import { ProductionHouse } from "./production-house/ProductionHouse";
import header from "./assets/OurWorkHeader.png";
import useLocalStrorage from "./components/LocalStorage";

const OurWork = () => {
  const [isProductionHouse, setIsProductionHouse] = useLocalStrorage(
    "prodution-house",
    false
  );
  const [isBelinskyStudio, setIsBelinskyStudio] = useLocalStrorage(
    "belinsky-studio",
    true
  );

  return (
    <div className="w-full">
      {/* THE IMAGE AND THE TITLE */}
      <div className="h-[20rem] w-full bg-slate-400 relative group">
        <img
          src={header}
          alt="ourwork-header"
          className="absolute object-cover w-full h-full"
        />
        <div className="absolute h-full w-full bg-[#0225818C] text-white">
          <div className="flex flex-col items-center justify-center w-full h-full text-center gap-6 text-white">
            <h3 className="text-5xl lg:text-7xl xl:tracking-wider font-black text-white w-full">
              Our Work
            </h3>
            <p className="w-full drop-shadow-md text-lg md:text-xl font-bold text-white lg:text-3xl">
              “From CUE to CUT, along with Belinsky”
            </p>
          </div>
        </div>
      </div>
      {/* THE BUTTONS */}
      <div className="flex items-center justify-center w-full gap-6 my-[6vw] lg:my-[3vw] max-sm:gap-3 max-sm:px-6">
        <button
          onClick={() => {
            setIsProductionHouse(true);
            setIsBelinskyStudio(false);
          }}
          className={` w-[13rem] p-1 text-[18px] sm:text-[24px] rounded-xl border-2 ${
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
          className={` w-[13rem] p-1 text-[18px] sm:text-[24px] rounded-xl border-2 ${
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
