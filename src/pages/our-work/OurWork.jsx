import { React } from "react";
import header from "./assets/OurWorkHeader.png";
import useLocalStrorage from "./components/LocalStorage";
import { dataCardBStudio } from "./constants/DataCardBStudio";
import { dataCardPHouse } from "./constants/DataCardPHouse";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CardOverlayVid from "./components/CardOverlayVid";
import CardOverlayImg from "./components/CardOverlayImg";

const OurWork = () => {
  const navigate = useNavigate();
  const [isProductionHouse, setIsProductionHouse] = useLocalStrorage(
    "prodution-house",
    false
  );
  const [isBelinskyStudio, setIsBelinskyStudio] = useLocalStrorage(
    "belinsky-studio",
    true
  );

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
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
      {isBelinskyStudio ? (
        <motion.div
          className="flex flex-wrap w-full justify-center mb-[5vw] gap-[4vw] lg:gap-[3vw] lg:px-[3vw] px-[4vw]"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {dataCardBStudio?.map(({ src, h3, p, nav, blurPic }) => (
            <CardOverlayImg
              src={src}
              h3={h3}
              p={p}
              blurPic={blurPic}
              navigate={() => {
                navigate(`${nav}`);
              }}
            />
          ))}
        </motion.div>
      ) : (
        ""
      )}
      {isProductionHouse ? (
        <motion.div
          className="flex flex-wrap w-full justify-center mb-[5vw] gap-[4vw] lg:gap-[3vw] lg:px-[3vw] px-[4vw]"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {dataCardPHouse?.map(({ srcvideo, h3, p, nav, blurPic }) => (
            <CardOverlayVid
              srcvideo={srcvideo}
              h3={h3}
              p={p}
              blurPic={blurPic}
              navigate={() => {
                navigate(`${nav}`);
              }}
            />
          ))}
        </motion.div>
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default OurWork;
