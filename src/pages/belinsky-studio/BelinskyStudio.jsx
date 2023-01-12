import React from "react";
import studio1 from "./assets/studio_1.png";
import studio2 from "./assets/studio_2.png";
import studio3 from "./assets/studio_3.png";
import CardOverlay from "./components/CardOverlay";

const dataCardBStudio = [
  {
    src: studio1,
    h3: "Korean Background",
    p: "3 Thematic Korean background, inspired by the set up of Korean Series Our Beloved Summer",
  },
  {
    src: studio2,
    h3: "White limbo background",
    p: "We provide self photo studio and photoshoot services by Belinsky Team",
  },
  {
    src: studio3,
    h3: "Podcast Studio",
    p: "Classic dark green living room with table lamp Equipment provided",
  },
];

export const BelinskyStudio = () => {
  return (
    <section className="flex flex-col w-full justify-around px-[6vw] pt-[6vw] lg:px-[3vw] lg:pt-[3vw] mb-[5vw]">
      {/* TEXT */}
      <div className="flex flex-col w-full lg:flex-row">
        <div className="w-[100%] lg:w-[50%]">
          <h1 className="text-[#424242] text-5xl lg:text-6xl font-bold">
            Belinsky Studio
          </h1>
          <p className="text-[#5484F2] text-lg lg:text-2xl font-medium">
            Our Services
          </p>
        </div>
        <p className="text-[#424242] w-[100%] lg:w-[50%] my-auto">
          Our specialties include model photography, food{" "}
          <br className="hidden lg:inline-block" />
          photography, corporate, family, professional photos for{" "}
          <br className="hidden lg:inline-block" />
          LinkedIn, wedding photography, and graduation
          <br className="hidden lg:inline-block" /> photography.
        </p>
      </div>

      {/* Studio Images */}
      <div className="flex flex-col gap-1 justify-around md:flex-row mt-[2vh] lg:mt-[4vh]">
        {dataCardBStudio.map(({ src, h3, p }) => (
          <CardOverlay src={src} h3={h3} p={p} />
        ))}
      </div>
    </section>
  );
};
