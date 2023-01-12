import React from "react";

export const Image = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 pt-12 sm:pt-20 text-black">
      <div className="relative mx-auto ">
        <img src="" alt="image" className=" " />
        <div className="absolute text-3xl top-[2.24%] left-[5.62%] text-[#F5F5F5] drop-shadow-[0px_1.0px_10.0px_#424242]">
          <h1>Studio 1</h1>
        </div>
        <div className="absolute text-2xl top-[46.27%] left-[5.62%] text-[#F5F5F5] text-center drop-shadow-[0px_1.0px_15.0px_#424242]">
          <h2>Korean Background</h2>
          <p className="text-sm">
            3 Thematic Korean background, inspired by the set up of Korean
            Series “Our Beloved Summer”
          </p>
        </div>
      </div>
      <div className="relative mx-auto ">
        <img src="" alt="image" className="" />
        <div className="absolute text-3xl top-[2.24%] left-[5.62%] text-[#F5F5F5] text-center drop-shadow-[0px_1.0px_10.0px_#424242]">
          <h1>Studio 2</h1>
        </div>
        <div className="absolute text-2xl top-[46.27%] left-[5.62%] text-[#F5F5F5] text-center drop-shadow-[0px_1.0px_15.0px_#424242]">
          <h2>White limbo background</h2>
          <p className="text-sm">
            We provide self photo studio and photoshoot services by Belinsky
            Team
          </p>
        </div>
      </div>
      <div className="relative mx-auto ">
        <img src="" alt="image" className="" />
        {/* <div className="absolute text-3xl top-[2.24%] left-[5.62%] text-[#F5F5F5] text-center drop-shadow-[0px_0.5px_0.5px_#424242]">
        <h1>Studio 3</h1>
      </div> */}
        <div className="absolute text-2xl top-[46.27%] left-[5.62%] text-[#F5F5F5] text-center drop-shadow-[0px_1.0px_15.0px_#424242]">
          <h2>Podcast Studio</h2>
          <p className="text-sm">
            Classic dark green living room with table lamp Equipment provided
          </p>
        </div>
      </div>
    </div>
  );
};

export default Image;
