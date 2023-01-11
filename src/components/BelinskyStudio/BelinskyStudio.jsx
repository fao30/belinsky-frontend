import React from "react";
import img1 from "../../pages/home/assets/Studio 1.png";
import img2 from "../../pages/home/assets/Studio 2.png";
import img3 from "../../pages/home/assets/Studio 3.png";

export const BelinskyStudio = () => {
  return (
    <div className="flex flex-col  justify-around bg-white">
      <div className="flex lg:justify-around justify-center flex-wrap items-center">
        <div className="grid place-items-center items-end">
          <div className="my-24 lg:mb-12  z-10 md:w-4/5 lg:w-full">
            <div className="flex flex-col justify-center flex-wrap items-center mb-6">
              <h1 className="md:lg:text-5xl text-4xl font-bold text-[#424242]">
                Belinsky Studio
              </h1>
              <h1 className=" text-3xl md:lg:text-2xl font-[Poppins]  text-[#5484F2]  text-center">
                Our Services
              </h1>
              <p className="md:w-96 font-[Poppins] lg:w-[872px] sm:text-center text-center text-[#424242] w-96 sm:w-5/12 mt-4 indent-8 text-m">
                Our specialties include model photography, food photography,
                corporate, family, professional photos for LinkedIn, wedding
                photography, and graduation photography.
              </p>
            </div>

            {/* image */}
            <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
              <div className="relative mx-auto ">
                <img src={img1} alt="image" className=" " />
                <div className="absolute text-3xl top-[2.24%] left-[5.62%] text-[#F5F5F5]">
                  <h1>Studio 1</h1>
                </div>
                <div className="absolute text-2xl bottom-[5.38%] left-[5.62%] text-[#F5F5F5]">
                  <h2>Korean Background</h2>
                  <p className="text-sm">
                    3 Thematic Korean background, inspired by the set up of
                    Korean Series “Our Beloved Summer”
                  </p>
                </div>
              </div>
              <div className="relative mx-auto ">
                <img src={img2} alt="image" className="" />
                <div className="absolute text-3xl top-[2.24%] left-[5.62%] text-[#F5F5F5]">
                  <h1>Studio 2</h1>
                </div>
                <div className="absolute text-2xl bottom-[5.38%] left-[5.62%] text-[#F5F5F5]">
                  <h2>White limbo background</h2>
                  <p className="text-sm">
                    We provide self photo studio and photoshoot services by
                    Belinsky Team
                  </p>
                </div>
              </div>
              <div className="relative mx-auto ">
                <img src={img3} alt="image" className="" />
                <div className="absolute text-3xl top-[2.24%] left-[5.62%] text-[#F5F5F5]">
                  <h1>Studio 3</h1>
                </div>
                <div className="absolute text-2xl bottom-[5.38%] left-[5.62%] text-[#F5F5F5]">
                  <h2>Podcast Studio</h2>
                  <p className="text-sm">
                    Classic dark green living room with table lamp Equipment
                    provided
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
