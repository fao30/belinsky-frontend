import React from "react";
import img1 from "../../about/assets/img2_2.png";

export const Misi = () => {
  return (
    <section className="w-full">
      {/* image on visi*/}
      <div className="w-full h-full md:flex md:justify-end">
        <div className="flex h-full">
          <div className="self-end ">
            <img
              src={img1}
              alt="img1"
              className="object-cover duration-500 ease-in-out grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>

      {/* title description */}
      <div className="flex flex-col justify-end w-full p-[2vw] text-right">
        <h1 className="lg:text-[60px] text-[30px] font-bold text-[#022581]">
          OUR MISSION
        </h1>
        <h2 className="lg:text-[36px] text-[18px] text-wrap [word-spacing:2px] text-[#022581]">
          In terms of the Belinsky studio, our mission is to provide the
          greatest ambiance and service so that clients are delighted with the
          outcomes produced by the Belinsky Team.
        </h2>
      </div>
    </section>
  );
};
export default Misi;
