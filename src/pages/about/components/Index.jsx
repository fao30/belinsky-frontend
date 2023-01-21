import React from "react";
import img1 from "../assets/img1_1.png";
import img2 from "../assets/img2_2.png";

import ph1 from "../../../assets/production-house/wwo-ph1.png";
import ph2 from "../../../assets/production-house/wwo-ph2.png";
import ph3 from "../../../assets/production-house/wwo-ph3.png";

// Constants
import { dataFounders } from "../constants/DataFounders";

// components
import CardsVisionMission from "./CardsVisionMission";
import CardFounders from "./CardFounders";

export const Index = () => {
  return (
    <section className="text-[#022581] h-full w-full">
      <h1 className="font-[900] text-center text-3xl md:text-4xl xl:text-5xl my-[2vh]">
        Taking off to a sky, where creativity is limitless.
      </h1>

      {/* Vision / Mission Cards */}
      <div className="flex flex-col py-10">
        <CardsVisionMission
          src={img1}
          h1="Our Vision"
          p="Our vision is to become a home for filmmakers/creators to create and share those that have constructive values and can fulfill one of the needs of the community, especially in the entertainment industry."
        />
      </div>
      <div className="flex flex-col items-end py-10 text-end">
        <CardsVisionMission
          src={img2}
          h1="Our Mission"
          p="In terms of the Belinsky studio, our mission is to provide the greatest ambiance and service so that clients are delighted with the outcomes produced by the Belinsky Team."
        />
      </div>

      {/* Founders Cards */}
      <h1 className="font-[900] text-center text-3xl md:text-4xl xl:text-5xl my-[2vh] mb-[4vh]">
        Founders Of Belinsky
      </h1>
      <div className="flex w-full h-full justify-evenly lg:justify-center lg:gap-20">
        {dataFounders.map(({ src, h3 }) => (
          <CardFounders src={src} h3={h3} />
        ))}
      </div>
    </section>
  );
};

export default Index;
