import React from "react";
import StudioContactUs from "../components/StudioContactUs";
import PodcastCarousel from "./components/PodcastCarousel";
import PodcastPriceList from "./components/PodcastPriceList";
import { podcastCarouselData } from "./constants/PodcastCarouselData";

const PodcastStudio = () => {
  return (
    <section className="py-24">
      {/* THE TITLE */}
      <div className=" px-[6vw]  flex flex-col justify-center items-end text-end w-full text-[#022581] mb-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black">
          Studio Podcast
        </h1>
        <h2 className="font-semibold text-xl lg:text-2xl">
          Classic Dark Green Living Room with tamble lamp
        </h2>
      </div>
      {/* CAROUSEL */}
      <div class="carousel carousel-center w-full h-[12.5rem] sm:h-[22rem] md:h-[25rem] lg:h-[30rem] xl:h-[45rem] mb-4 space-x-2 lg:space-x-12">
        {podcastCarouselData.map(({ src }) => {
          return <PodcastCarousel src={src} />;
        })}
      </div>
      <h2 className="px-[6vw] text-center text-[#022581] font-semibold text-xl lg:text-2xl mb-16">
        Area 2.2 x 3.5m² with 70% soundproof
        <br /> Montana Table : 240 x 120 x 75 cm
      </h2>
      <div className="px-[6vw] ">
        <PodcastPriceList />
        <StudioContactUs />
      </div>
    </section>
  );
};

export default PodcastStudio;
