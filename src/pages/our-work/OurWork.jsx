import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import bgPHouse from "./assets/bg-PHouse.png";
import bgBStudio from "./assets/bg-BStudio.png";
import useLocalStrorage from "./components/LocalStorage";
import { dataCardBStudio } from "./constants/DataCardBStudio";
import { dataCardPHouse } from "./constants/DataCardPHouse";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CardOverlayVid from "./components/CardOverlayVid";
import CardOverlayImg from "./components/CardOverlayImg";

const OurWork = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
        <LazyLoadImage
          src={isProductionHouse ? bgPHouse : bgBStudio}
          beforeLoad={() => setIsLoading(true)}
          afterLoad={() => setIsLoading(false)}
          alt="ourwork-header belinsky studio"
          className="absolute object-cover w-full h-full"
        />
        {isLoading ? (
          <BlurhashCanvas
            hash="LHGb3HDj5S0M~V%2E2NH%LofR*NG"
            className="absolute object-cover w-full h-full"
          />
        ) : (
          <div className="absolute h-full w-full bg-[#0225818C]/70 text-white">
            <div className="z-10 flex flex-col items-center justify-center w-full h-full text-center text-white leading-[4rem] lg:leading-[5.5rem]">
              <h3 className="w-full text-[4.25rem] md:text-[5rem]   text-white lg:text-[6.5rem] xl:tracking-wider">
                Our Work
              </h3>
              <p className="w-full text-lg   text-white drop-shadow-md md:text-xl lg:text-[1.75rem]">
                “from CUE to CUT, along with Belinsky”
              </p>
            </div>
          </div>
        )}
      </div>

      {/* THE BUTTONS */}
      <div className="flex items-center justify-center w-full gap-6 my-[6vw] lg:my-[3vw] max-sm:gap-3">
        <button
          onClick={() => {
            setIsProductionHouse(true);
            setIsBelinskyStudio(false);
          }}
          className={`lg:w-[15rem] py-[0.25rem] px-[0.5rem] md:px-2 md:py-1 text-[18px] sm:text-[24px] rounded-xl border-2   ${
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
          className={`lg:w-[15rem] py-[0.25rem] px-[0.5rem] md:px-2 md:py-1 text-[18px] sm:text-[24px] rounded-xl border-2   ${
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
          {dataCardBStudio?.map(({ src, h3, p, nav, blurPic, isDetails }) => (
            <CardOverlayImg
              src={src}
              h3={h3}
              p={p}
              alt="ourwork-header belinsky studio"
              blurPic={blurPic}
              isDetails={isDetails}
              navigate={() => {
                navigate(`${nav}`);
              }}
            />
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="flex flex-wrap w-full justify-center mb-[5vw] gap-[4vw] lg:gap-[3vw] lg:px-[3vw] px-[4vw]"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {dataCardPHouse?.map(
            ({ srcvideo, h3, p, nav, blurPic, isDetails }) => (
              <CardOverlayVid
                srcvideo={srcvideo}
                h3={h3}
                p={p}
                alt="ourwork-header belinsky studio"
                blurPic={blurPic}
                isDetails={isDetails}
                navigate={() => {
                  navigate(`${nav}`);
                }}
              />
            )
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default OurWork;
