import React from "react";
import image1 from "../../pages/home/assets/bel1.png";
import image2 from "../../pages/home/assets/bel2.png";
import image3 from "../../pages/home/assets/bel3.png";

export const ProductionHouse = () => {
  return (
    <div className="flex flex-col justify-around bg-white">
      <div className="flex flex-wrap items-center justify-center lg:justify-around">
        <div className="grid items-end place-items-center">
          <div className="z-10 my-24 lg:mb-12 md:w-4/5 lg:w-full">
            <div className="flex flex-col flex-wrap items-center justify-center mb-6">
              <h1 className="md:lg:text-5xl text-4xl font-bold text-[#424242]">
                Belinsky Studio
              </h1>
              <h1 className=" text-3xl md:lg:text-2xl font-poppins  text-[#5484F2]  text-center">
                Our Services
              </h1>
              <p className="md:w-96 font-poppins lg:w-[872px] sm:text-center text-center text-[#424242] w-96 sm:w-5/12 mt-4 indent-8 text-m">
                Our specialties include model photography, food photography,
                corporate, family, professional photos for LinkedIn, wedding
                photography, and graduation photography.
              </p>
            </div>

            {/* image */}
            <div className="relative grid grid-cols-1 px-4 pt-12 text-black lg:grid-cols-3 gap-x-8 gap-y-16 sm:pt-20">
              <div className="relative mx-auto ">
                <img src={image2} alt="image" />
                <div className="absolute text-2xl bottom-[5.38%] left-[5.62%] text-[#F5F5F5]">
                  <h2>Short Movie</h2>
                  <p className="text-sm">
                    Belinsky has 4 short movies directed by Turah Parthayana
                    Squery Penty, Wong Tilar, Jangan Sebut Setan & Yubi
                  </p>
                </div>
              </div>
              <div className="relative mx-auto ">
                <img src={image3} alt="image" />
                <div className="absolute text-2xl bottom-[5.38%] left-[5.62%] text-[#F5F5F5]">
                  <h2>Webseries</h2>
                  <p className="text-sm">
                    Collaborating with IndiHome creating “Join The Series
                    Starring Turah Prthayana, Tretan Muslim and Dustin Tiffany
                  </p>
                </div>
              </div>
              <div className="relative mx-auto ">
                <img src={image1} alt="image" />
                <div className="absolute text-2xl bottom-[5.38%] left-[5.62%] text-[#F5F5F5]">
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
