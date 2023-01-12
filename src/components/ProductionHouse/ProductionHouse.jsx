import React from "react";
import image1 from "../../pages/home/assets/bel1.png";
import image2 from "../../pages/home/assets/bel2.png";
import image3 from "../../pages/home/assets/bel3.png";
// import HoverGhost from "../components/HoverGhost/

export const ProductionHouse = () => {
  return (
    <div className="flex flex-wrap sm:flex-col items-center  justify-around bg-white">
      <div className="flex lg:justify-between  flex-wrap items-center">
        <div className="grid place-items-center items-end">
          <div className="my-24 lg:mb-12  z-10 md:w-4/5 lg:w-full">
            <div className=" flex flex-row mx-10">
              <div className="flex flex-col justify-center flex-wrap items-center mb-6">
                <h1 className="md:lg:text-5xl text-4xl font-bold text-[#424242]">
                  Production House
                </h1>
                <h1 className=" text-3xl md:lg:text-2xl font-poppins  text-[#5484F2]  text-center">
                  Our Services
                </h1>
              </div>
              <div className="flex flex-wrap justify-end right-0">
                <p className=" md:w-96 font-poppins lg:w-[872px] sm:text-center text-left text-[#424242] w-96 sm:w-5/12 mt-4 indent-8 text-m max-md:mt-6">
                  Our specialties include model photography, food photography,
                  corporate, family, professional photos for LinkedIn, wedding
                  photography, and graduation photography.
                </p>
              </div>
            </div>

            {/* image */}
            <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 pt-12 sm:pt-20 text-black">
              <div className="h-[37vw] w-[5vw] md:w-[32.2vw] bg-slate-400 relative group">
                <img
                  src={image2}
                  alt=""
                  className="absolute object-cover w-full h-full"
                />
                <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-gradient-to-t from-[#363636] to-transparent">
                  <div className="absolute bottom-[46.27%] right-[10%] top-[46.27%] text-center">
                    <h3 className="text-2xl font-semibold text-white">
                      Short Movie
                    </h3>
                    <p className="text-white drop-shadow-md">
                      Belinsky has 4 short movies directed by Turah Parthayana
                      <br />
                      Squery Penty, Wong Tilar, Jangan Sebut Setan & Yubi
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[37vw] w-[5vw] md:w-[32.2vw] bg-slate-400 relative group">
                <img
                  src={image3}
                  alt=""
                  className="absolute object-cover w-full h-full"
                />
                <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-gradient-to-t from-[#363636] to-transparent">
                  <div className="absolute bottom-[46.27%] item-center left-[5%] top-[46.27%] text text-center">
                    <h3 className="text-2xl font-semibold text-white   ">
                      Webseries
                    </h3>
                    <p className="text-white drop-shadow-md">
                      Collaborating with IndiHome creating “Join The Series”{" "}
                      <br /> Starring Turah Prthayana, Tretan Muslim and Dustin
                      Tiffany
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[37vw] w-[5vw] md:w-[32.2vw] bg-slate-400 relative group">
                <img
                  src={image1}
                  alt=""
                  className="absolute object-cover w-full h-full"
                />
                <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-gradient-to-t from-[#363636] to-transparent">
                  <div className="absolute bottom-[46.27%] left-[15%] top-[46.27%] text-center">
                    <h3 className="text-2xl font-semibold text-white">
                      Photo Product
                    </h3>
                    <p className="text-white drop-shadow-md">
                      Belinsky Production House ready to make your <br />
                      product launch brilliantly
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

export default ProductionHouse;
