import React from "react";
import bg from "./assets/bg.png";
import Marquee from "react-fast-marquee";
import { dataMarquee } from "./constants/DataMarquee";

import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MarqueeSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <section className="mt-[8vh] md:mt-[16vh]">
        <h1 className="text-[#022581] text-center text-lg md:text-3xl">
          WHAT OUR CLIENTS SAYS ABOUT US
        </h1>
        <div className="relative w-full h-64 mb-[3vh]">
          <LazyLoadImage
            alt=""
            src={bg}
            className="absolute top-0 left-0 w-full h-full"
            beforeLoad={() => setIsLoading(true)}
            afterLoad={() => setIsLoading(false)}
          />
          {isLoading ? (
            <BlurhashCanvas
              hash="LGLWFW~W0M}=-p^jxZE19aIVjFoe"
              className="absolute top-0 w-full h-full"
            />
          ) : (
            <>
              <div className="absolute top-0 left-0 w-full h-full bg-[#0225818C]/50" />
              <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full gap-5">
                <p className="text-center text-white px-[2vw] text-sm md:px-[15vw] md:text-lg">
                  “Our goal was to create a digital ad video to promote our
                  latest product. From our initial call with Belinsky Studio to
                  the video handover, they are knowledgeable, professional, and
                  friendly throughout the whole process. Belinsky Studio is
                  definetely one of the best video production house we’ve worked
                  with so far. Thank you!”
                </p>
                <h3 className="text-lg font-bold text-white md:text-xl">
                  Michael, Traveloka
                </h3>
              </div>
            </>
          )}
          <div className="absolute top-0 left-0 w-full h-full bg-[#0225818C]/50" />
        </div>
        <h1 className="text-[#022581] text-center uppercase text-lg md:text-2xl mt-10 sm:mt-20">
          Partners & Clients
        </h1>
        <Marquee
          direction="right"
          speed={50}
          gradientWidth={0}
          className="bg-gradient-to-t from-[#D9D9D9] via-[#D9D9D9] to-transparent"
        >
          {dataMarquee.map(({ img }) => (
            <div className="mx-10 lg:mx-14">
              <img alt="" src={img} className="w-[5rem] lg:w-[7rem]" />
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
};

export default MarqueeSection;

//
