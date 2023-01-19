import React from "react";
import Product1 from "../../pages/home/assets/bel1.png";
import Product2 from "../../pages/home/assets/bel2.png";
import Product3 from "../../pages/home/assets/bel3.png";
import CardOverlay from "./components/CardOverlay";

const dataCardBStudio = [
  {
    src: Product1,
    h3: "Short Movie",
    p: "Belinsky has 4 short movies directed by Turah Parthayana Squery Penty, Wong Tilar, Jangan Sebut Setan & Yubi",
  },
  {
    src: Product2,
    h3: "Webseries",
    p: "Collaborating with IndiHome creating “Join The Series” Starring Turah Prthayana, Tretan Muslim and Dustin Tiffany",
  },
  {
    src: Product3,
    h3: "TVC",
    p: "We may help you in the production of TVC advertisement for your advertising needs.",
  },
];

export const Production = () => {
  return (
    <section className="flex flex-col w-full justify-around px-[6vw] pt-[6vw] lg:px-[3vw] lg:pt-[3vw] mb-[5vw]">
      {/* TEXT */}
      <div className="flex flex-col w-full lg:flex-row">
        <div className="w-[100%] lg:w-[50%]">
          <h1 className="text-[#424242] text-5xl lg:text-6xl font-bold">
            Production House
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
