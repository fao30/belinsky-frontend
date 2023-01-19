import React from "react";
import bg from "./assets/bg.png";
import Marquee from "react-fast-marquee";
import { dataMarquee } from "./constants/DataMarquee";
import img1 from "./assets/azarina.png";

const MarqueeSection = () => {
  return (
    <section className="mt-[5vh]">
      <h1 className="text-[#022581] text-center text-2xl">
        WHAT OUR CLIENTS SAYS ABOUT US
      </h1>
      <div className="relative w-full h-64 mb-[3vh] mt-[1vh]">
        <img alt="" src={bg} className="absolute top-0 left-0 w-full h-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-[#0225818C]" />
        <div className="absolute flex flex-col items-center justify-center w-full h-full gap-5">
          <p className="text-center text-white px-[5vw] md:px-[15vw] text-lg">
            “Our goal was to create a digital ad video to promote our latest
            product. From our initial call with Belinsky Studio to the video
            handover, they are knowledgeable, professional, and friendly
            throughout the whole process. Belinsky Studio is definetely one of
            the best video production house we’ve worked with so far. Thank
            you!”
          </p>
          <h3 className="text-xl font-bold text-white">Michael, Traveloka</h3>
        </div>
      </div>
      <h1 className="text-[#022581] text-center uppercase text-2xl mb-[1vh]">
        Partners & Clients
      </h1>
      <Marquee
        speed={50}
        gradientWidth={0}
        className="bg-gradient-to-t from-[#D9D9D9] to-transparent"
      >
        {dataMarquee.map(({ img }) => (
          <div className="w-[50%] mx-10 lg:mx-14">
            <img alt="" src={img} className="w-[10rem]" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
