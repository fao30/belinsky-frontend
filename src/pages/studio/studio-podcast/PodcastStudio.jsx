import React from "react";
import CardContactUs from "../components/CardContactUs";
import CarouselStudio from "../components/CarouselStudio";
import PodcastPriceList from "./components/PodcastPriceList";
import { podcastCarouselData } from "./constants/PodcastCarouselData";

const PodcastStudio = () => {
  return (
    <section className="py-24">
      {/* THE TITLE */}
      <div className=" px-[6vw]  flex flex-col justify-center items-end text-end w-full text-[#022581] mb-12">
        <h1 className="text-4xl   md:text-6xl lg:text-7xl">STUDIO PODCAST</h1>
        <p className="    md:text-lg lg:text-2xl">
          Classic Dark Green Living Room with tamble lamp
        </p>
      </div>
      {/* CAROUSEL */}
      <div class="carousel carousel-center w-full mb-4 space-x-2 lg:space-x-12">
        {podcastCarouselData?.map((e) => {
          return <CarouselStudio src={e?.src} blurPic={e?.blurPic} />;
        })}
      </div>
      <h2 className="px-[6vw] text-center text-[#022581]  font-[400] text-lg md:text-xl mb-16">
        Area 2.2 x 3.5m² with 70% soundproof | Montana Table: 240 x 120 x 75 cm
      </h2>
      <div className="px-[6vw] ">
        <PodcastPriceList />
      </div>
      <CardContactUs />
    </section>
  );
};

export default PodcastStudio;
