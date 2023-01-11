import React from "react";
import HeroVideo from "../assets/HeroVideo.mp4";
import Jerome from "../assets/Jerome.jpeg";
import Jehian from "../assets/Jehian.jpeg";
import Turah from "../assets/Turah.jpeg";
import Marquee from "react-fast-marquee";
import MarqueeData from "../assets/marquee/MarqueeData";
import AspectRatio from "@mui/joy/AspectRatio";
import Founder from "./components/Founder";

const dataFounder = [
  {
    image: Jerome,
    name: "Jerome Polin",
  },
  {
    image: Jehian,
    name: "Jehian Sijabat",
  },
  {
    image: Turah,
    name: "Turah Parthayana",
  },
];

const HeroContent = () => {
  return (
    <div className="px-[6vw] pt-[6vw] lg:px-[3vw] lg:pt-[3vw] bg-zinc-100">
      <div
        className="w-full flex justify-between items-center max-lg:flex-wrap-reverse
      "
      >
        <div className="w-full lg:w-[50%]">
          <div className="max-lg:mt-6">
            <AspectRatio
              variant="plain"
              ratio="4/3"
              sx={{
                width: "100%",
                borderRadius: "lg",
              }}
            >
              <video src={HeroVideo} autoPlay muted loop />
            </AspectRatio>
          </div>
        </div>
        <div className="w-full lg:w-[45%] text-left">
          <h2 className="text-[#5484F2] font-[600] text-xl">
            Taking off to a sky, where creativity is limitless
          </h2>
          <h1 className="text-[#424242] font-[600] text-4xl leading-[3.5rem] lg:text-5xl lg:leading-[4.5rem] my-2">
            Show You Wonder in Creativity
          </h1>
          <p className="text-[20px] lg:text-[24px] font-[300] text-[#424242] leading-[36px]">
            Given that Belinsky is both a production house and a creative
            studio, our areas of expertise include producing both photography
            and filmmaking.
          </p>
          <button className="my-6 bg-[#5484F2] text-[20px] font-[600] text-[#F5F5F5] group relative inline-flex items-end overflow-hidden">
            <span className="h-0 w-full group-hover:h-full absolute block transition-all bg-[#022581] opacity-100 duration-500 ease"></span>
            <span className="z-10 m-3">Contact Us</span>
          </button>
          <h2 className="text-[#5484F2] font-[600] text-xl">
            Founder of Belinskiy
          </h2>
          <div className="flex justify-between items-center w-full">
            {dataFounder?.map((e) => {
              return <Founder nameProps={e.name} imageProps={e.image} />;
            })}
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
