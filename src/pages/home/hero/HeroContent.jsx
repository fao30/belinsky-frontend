import React from "react";
import HeroVideo from "./assets/Hero_Video.mp4";

const HeroContent = () => {
  return (
    <section className="px-[6vw] pt-[6vw] pb-[10vw] lg:px-[3vw] lg:pt-[6vw]">
      <div className="flex items-center justify-between w-full max-lg:flex-wrap-reverse ">
        <div className="w-full lg:w-[60%]">
          <div className="max-lg:mt-6">
            <video src={HeroVideo} autoPlay muted loop />
          </div>
        </div>
        <div className="w-full lg:w-[35%] text-left">
          <h1 className="text-[#022581] my-2">
            Taking off to a sky, where creativity is limitless
          </h1>
          <p className="text-[20px] lg:text-[24px] text-[#022581]">
            Given that Belinsky is both a production house and a creative
            studio, our areas of expertise include producing both photography
            and filmmaking.
          </p>
          <button className="my-6 bg-[#022581] text-[20px] font-[600] text-[#F5F5F5] group relative inline-flex items-start overflow-hidden">
            <span className="h-0 w-full group-hover:h-full absolute block transition-all bg-[#5484F2] duration-500 ease"></span>
            <span className="z-10 mx-8 my-3">Contact Us</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
