import React from "react";
import img1 from "../assets/img1_1.png";
import img2 from "../assets/img2_2.png";

// Constants
import { dataFounders } from "../constants/DataFounders";

// components
import CardsVisionMission from "./CardsVisionMission";
import CardFounders from "./CardFounders";

export const VisionMission = () => {
  return (
    <section className="text-[#022581] h-full w-full ">
      <h1 className=" font-[900] text-center text-3xl lg:text-4xl xl:text-5xl mt-[2vh]">
        Taking off to a sky, where creativity is limitless.
      </h1>

      {/* Vision / Mission Cards */}
      <div className="flex flex-col mt-[6vh]">
        <CardsVisionMission
          src={img1}
          h1="Our Vision"
          p="Our vision is to become a home for filmmakers/creators to create and share those that have constructive values and can fulfill one of the needs of the community, especially in the entertainment industry."
          blurPic="LCF~aN00~W-r~p00t7wa-mIVIV?a"
        />
      </div>
      <div className="flex flex-col items-end text-end my-[8vh] md:my-[16vh]">
        <CardsVisionMission
          src={img2}
          h1="Our Mission"
          p="In terms of the Belinsky studio, our mission is to provide the greatest ambiance and service so that clients are delighted with the outcomes produced by the Belinsky Team."
          blurPic="LFF~BVtR9ZIU~qt7aMxu%e-pxvNa"
        />
      </div>

      {/* Founders Cards */}
      <div className="my-[8vh] md:my-[16vh]">
        <h1 className="font-[900] text-center text-3xl md:text-4xl xl:text-5xl">
          Founders Of Belinsky
        </h1>
        <div className="flex w-full h-full justify-evenly lg:justify-center lg:gap-20 mt-[4vh] md:mt-[8vh]">
          {dataFounders.map(({ src, h3, blurPic }) => (
            <CardFounders src={src} h3={h3} blurPic={blurPic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
