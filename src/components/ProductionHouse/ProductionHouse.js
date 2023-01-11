import React from "react";
import image1 from "../../pages/home/assets/bel1.png";
import image2 from "../../pages/home/assets/bel2.png";
import image3 from "../../pages/home/assets/bel3.png";

export const ProductionHouse = () => {
  return (
    <div class="flex flex-col  justify-around bg-white">
      <div class="flex lg:justify-around justify-center flex-wrap items-center">
        <div class="grid place-items-center items-end">
          <div class="my-24 lg:mb-12  z-10 md:w-4/5 lg:w-full">
            <div class="flex flex-col justify-center flex-wrap items-center mb-6">
              <h1 class="md:lg:text-5xl text-4xl font-bold text-[#424242]">
                Production House
              </h1>
              <h1 class=" text-3xl md:lg:text-2xl font-poppins  text-[#5484F2]  text-center">
                Our Services
              </h1>
              <p class="md:w-96 font-poppins lg:w-[872px] sm:text-center text-center text-[#424242] w-96 sm:w-5/12 mt-4 indent-8 text-m">
                Our specialties include model photography, food photography,
                corporate, family, professional photos for LinkedIn, wedding
                photography, and graduation photography.
              </p>
            </div>

            {/* image */}
            <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 pt-12 sm:pt-20 text-black">
              <div className="relative mx-auto ">
                <img src={image2} alt="image" className=" " />
                <div className="absolute text-3xl top-[2.24%] left-[5.62%] text-[#F5F5F5] drop-shadow-[0px_1.0px_10.0px_#424242]"></div>
                <div className="absolute text-2xl top-[46.27%] left-[5.62%] text-[#F5F5F5] text-center drop-shadow-[0px_1.0px_15.0px_#424242]">
                  <h2>Short Movie</h2>
                  <p className="text-sm">
                    Belinsky has 4 short movies directed by Turah Parthayana
                    Squery Penty, Wong Tilar, Jangan Sebut Setan & Yubi
                  </p>
                </div>
              </div>
              <div className="relative mx-auto ">
                <img src={image3} alt="image" className="" />
                <div className="absolute text-3xl top-[2.24%] left-[5.62%] text-[#F5F5F5] text-center drop-shadow-[0px_1.0px_10.0px_#424242]"></div>
                <div className="absolute text-2xl top-[46.27%] left-[5.62%] text-[#F5F5F5] text-center drop-shadow-[0px_1.0px_15.0px_#424242]">
                  <h2>Webseries</h2>
                  <p className="text-sm">
                    Collaborating with IndiHome creating “Join The Series”
                    Starring Turah Prthayana, Tretan Muslim and Dustin Tiffany
                  </p>
                </div>
              </div>
              <div className="relative mx-auto ">
                <img src={image1} alt="image" className="" />
                {/* <div className="absolute text-3xl top-[2.24%] left-[5.62%] text-[#F5F5F5] text-center drop-shadow-[0px_0.5px_0.5px_#424242]">
                  <h1>Studio 3</h1>
                </div> */}
                <div className="absolute text-2xl top-[46.27%] left-[5.62%] text-[#F5F5F5] text-center drop-shadow-[0px_1.0px_15.0px_#424242]">
                  <h2>TVC</h2>
                  <p className="text-sm">
                    We may help you in the production of TVC advertisement for
                    your advertising needs.
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

export default ProductionHouse;
