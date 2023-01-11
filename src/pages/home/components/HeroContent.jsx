import React from "react";
import HeroVideo from "../assets/HeroVideo.mp4";
import Jerome from "../assets/Jerome.jpeg";
import Jehian from "../assets/Jehian.jpeg";
import Turah from "../assets/Turah.jpeg";
import Marquee from "react-fast-marquee";
import MarqueeData from "../assets/marquee/MarqueeData";

const HeroContent = () => {
  return (
    <div className="px-[5vw] pt-[5vw] bg-zinc-100">
      <div className="flex items-center justify-between w-full ">
        <div className="w-[50%]">
          <video src={HeroVideo} autoPlay muted loop />
        </div>
        <div className="w-[45%] text-left">
          <h2 className="text-[#5484F2] font-[600] text-xl">
            Taking off to a sky, where creativity is limitless
          </h2>
          <h1 className="text-[#424242] font-[600] text-5xl leading-[4.5rem] my-2">
            Show You Wonder in Creativity
          </h1>
          <p className="text-[24px] font-[300] text-[#424242] leading-[36px]">
            Given that Belinsky is both a production house and a creative
            studio, our areas of expertise include producing both photography
            and filmmaking
          </p>
          <button className="my-6 p-4 bg-[#5484F2] text-[20px] font-[600] text-[#F5F5F5]">
            Contact Us
          </button>
          <h2 className="text-[#5484F2] font-[600] text-xl">
            Founder of Belinskiy
          </h2>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-center mt-6">
              <img src={Jerome} className="rounded-full w-36" />
              <h3 className="mt-4 text-[24px] stext-[#424242] font-[600] drop-shadow-[0px_0.5px_0.5px_#424242]">
                Jerome Polin
              </h3>
            </div>
            <div className="flex flex-col items-center mt-6">
              <img src={Jehian} className="rounded-full w-36" />
              <h3 className="mt-4 text-[24px] stext-[#424242] font-[600] drop-shadow-[0px_0.5px_0.5px_#424242]">
                Jehian Sijabat
              </h3>
            </div>
            <div className="flex flex-col items-center mt-6">
              <img src={Turah} className="rounded-full w-36" />
              <h3 className="mt-4 text-[24px] stext-[#424242] font-[600] drop-shadow-[0px_0.5px_0.5px_#424242]">
                Turah Parthayana
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Marquee
        speed={60}
        gradient={false}
        direction="right"
        pauseOnHover={false}
      >
        <MarqueeData />
      </Marquee>
    </div>
  );
};

export default HeroContent;
