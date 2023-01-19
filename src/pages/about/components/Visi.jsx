import React from "react";
import img1 from "../../about/assets/img1_1.png";

export const Visi = () => {
  return (
    <section className="w-full">
      <h1 className="lg:text-[75px] text-[40px] font-bold text-[#022581] text-center p-[2vw]">
        Taking off to a sky, where creativity is limitless.
      </h1>

      {/* image on visi*/}
      <div className="w-full h-full md:flex md:justify-start">
        <div className="flex justify-center items-start h-full">
          <div className="self-start">
            <img
              src={img1}
              alt="img1"
              className="object-cover duration-500 ease-in-out grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>

      {/* title description */}
      <div className="flex flex-col self-center w-full p-[2vw] text-left">
        <h1 className="lg:text-[60px] text-[30px] font-bold text-[#022581]">
          OUR VISION
        </h1>
        <h2 className="text-wrap lg:text-[36px] text-[18px]  [word-spacing:4px] text-[#022581] w-full">
          Our vision is to become a home for filmmakers/creators to create and
          share those that have constructive values and can fulfill one of the
          needs of the community, especially in the entertainment industry.
        </h2>
      </div>
    </section>
  );
};

export default Visi;
