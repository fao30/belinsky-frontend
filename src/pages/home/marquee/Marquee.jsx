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
      <section className="mt-[5vh] lg:mt-[10vh] xl:mt-[15vh]">
        <div className="px-[4vw]">
          <h1 className="text-[#022581] text-center uppercase text-2xl md:text-4xl mt-10 sm:mt-20 mb-10">
            WHAT OUR CLIENTS SAYS ABOUT US
          </h1>
        </div>
        <div className="relative w-full h-60 lg:h-52 mb-[3vh]">
          <LazyLoadImage
            alt=""
            src={bg}
            className="absolute top-0 left-0 object-cover w-full h-full"
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
              <div className="absolute z-10 flex flex-col items-center justify-center gap-4 w-full h-full px-[4vw]">
                <p className="text-center text-white text-sm md:text-lg lg:w-[80%] xl:w-[75%] tracking-tight">
                  "I think Belinsky Studio has a really cool artistic of the
                  Korean mood set. The location is also very strategic,
                  considering that it is in Kemang, South Jakarta. The access is
                  very easy, and in terms of service, it is also very good.
                  Overall, Belinsky studio is really stunning, this studio can
                  be used for shooting or photoshoots for various things too."
                </p>
                <h3 className="text-xl text-white">Wahyu, Zenius</h3>
              </div>
            </>
          )}
          <div className="absolute top-0 left-0 w-full h-full bg-[#0225818C]/50" />
        </div>
        <h1 className="text-[#022581] text-center uppercase text-2xl md:text-4xl mt-10 sm:mt-20 mb-10">
          Partners & Clients
        </h1>
        <Marquee
          direction="right"
          speed={50}
          gradientWidth={0}
          className="bg-gradient-to-t from-[#D9D9D9] via-[#D9D9D9] to-transparent"
        >
          {dataMarquee.map(({ img }) => (
            <div className="mx-8 lg:mx-16">
              <img
                alt=""
                src={img}
                className="w-[8rem] lg:w-[10rem] custom-marq "
              />
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
};

export default MarqueeSection;
