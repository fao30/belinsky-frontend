import React from "react";
import img1 from "../../about/assets/Podcast1.png";
import img2 from "../../about/assets/Podcast1.png";
import img3 from "../../about/assets/Podcast1.png";
import CardReservation from "../components/CardReservation";

export const Photos = [
  {
    image: img1,
    title: "studio podcaster",
  },
  {
    image: img2,
    title: "studio podcaster",
  },
  {
    image: img3,
    title: "studio podcaster",
  },
];
export const StudioPodcast = () => {
  return (
    <section className="w-full my-[8vw]">
      <div className="w-full mx-auto">
        <div className="text-end px-[4vw]">
          <h1 className="text-[#022581] text-[30px]  md:text-[105.66px] font-extrabold ">
            Studio Podcast
          </h1>
          <h3 className="text-blue-900 text-[15px] md:text-[33.81px] font-bold ">
            Classic Dark Green Living Room with tamble lamp
          </h3>
        </div>
        <div
          className="relative flex items-center py-20"
          style={{ marginTop: "-4.5em" }}
        >
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {Photos.map((item) => (
              <img
                className=" md:w-[1429px]  md:h-[805px]  w-[400px] inline-block  p-2 md:p-9 cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={item.image}
                alt="/"
              />
            ))}
          </div>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold text-blue-900 md:text-3xl">
            <span className="mr-4 md:mr-8">
              Area 2.2 x 3.5m² with 70% soundproof
            </span>
            <span className="md:mr-7"> |</span>
            <span className="mr-3 md:mr-7">
              Montana Table : 240 x 120 x 75 cm
            </span>
          </p>
        </div>
        <CardReservation />
      </div>
    </section>
  );
};

export default StudioPodcast;
