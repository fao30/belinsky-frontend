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
            <div className=" flex flex-row mx-10">
              <div className="flex flex-col justify-center flex-wrap items-center mb-6">
                <h1 className="md:lg:text-5xl text-4xl font-bold text-[#424242]">
                  Belinsky Studio
                </h1>
                <h1 className=" text-3xl md:lg:text-2xl font-[Poppins]  text-[#5484F2]  text-center">
                  Our Services
                </h1>
              </div>
              <p className="md:w-96 font-[Poppins] lg:w-[872px] sm:text-center text-center text-[#424242] w-96 sm:w-5/12 mt-4 indent-8 text-m">
                Our specialties include model photography, food photography,
                corporate, family, professional photos for LinkedIn, wedding
                photography, and graduation photography.
              </p>
            </div>

            {/* image */}
            <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 pt-12 sm:pt-20 text-black">
              <div className="h-[37vw] w-[5vw] md:w-[32.2vw] bg-slate-400 relative group">
                <img
                  src={img1}
                  alt=""
                  className="absolute object-cover w-full h-full"
                />
                <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-gradient-to-t from-[#363636] to-transparent">
                  <div className="absolute text-3xl top-[2.24%] left-[5.62%] text-[#F5F5F5] drop-shadow-[0px_1.0px_10.0px_#424242]">
                    <h1>Studio 1</h1>
                  </div>
                  <div className="absolute bottom-[46.27%] right-[10%] top-[46.27%] text-center">
                    <h3 className="text-2xl font-semibold text-white">
                      Korean Background
                    </h3>
                    <p className="text-white drop-shadow-md">
                      3 Thematic Korean background, inspired by the set up of
                      Korean Series “Our Beloved Summer”
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[37vw] w-[5vw] md:w-[32.2vw] bg-slate-400 relative group">
                <img
                  src={img2}
                  alt=""
                  className="absolute object-cover w-full h-full"
                />
                <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-gradient-to-t from-[#363636] to-transparent">
                  <div className="absolute text-3xl top-[2.24%] left-[5.62%] text-[#F5F5F5] drop-shadow-[0px_1.0px_10.0px_#424242]">
                    <h1>Studio 2</h1>
                  </div>
                  <div className="absolute bottom-[46.27%] right-[10%] top-[46.27%] text-center">
                    <h3 className="text-2xl font-semibold text-white">
                      White limbo background
                    </h3>
                    <p className="text-white drop-shadow-md">
                      We provide self photo studio and photoshoot services by
                      Belinsky Team
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[37vw] w-[5vw] md:w-[32.2vw] bg-slate-400 relative group">
                <img
                  src={img3}
                  alt=""
                  className="absolute object-cover w-full h-full"
                />
                <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-gradient-to-t from-[#363636] to-transparent">
                  <div className="absolute bottom-[46.27%] left-[5%] top-[46.27%] text-center">
                    <h3 className="text-2xl font-semibold text-white">
                      Podcast Studio
                    </h3>
                    <p className="text-white drop-shadow-md">
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
    </div>
  );
};
