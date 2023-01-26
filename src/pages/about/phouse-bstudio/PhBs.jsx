import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useNavigate } from "react-router-dom";
import LoadToTop from "../../../helper/LoadToTop";

import PHouse from "./components/PHouse";
import BStudio from "./components/BStudio";

import bg from "../assets/bg_img.png";

const PhBs = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {/* Production House */}
      <PHouse />

      {/* Belinsky Studio */}
      <BStudio />

      {/* Checkout Company Profile */}
      <div className="w-full h-full">
        <div className="w-[90%] mx-auto">
          <h2 className="text-[#022581] py-[4vh] text-center font-extrabold text-2xl lg:text-3xl">
            CHECK OUT OUR COMPANY PROFILE
          </h2>
        </div>
        <div className="w-[90%] xl:w-[80%] h-full mx-auto bg-[#022581] rounded-lg drop-shadow-[0_2px_2px_transparent] shadow-lg shadow-slate-400 ">
          <div className="relative">
            <LazyLoadImage
              beforeLoad={() => setIsLoading(true)}
              afterLoad={() => setIsLoading(false)}
              src={bg}
              alt=""
              className="object-cover transition duration-300 ease-in rounded-t-lg grayscale hover:grayscale-0"
            />
            {isLoading ? (
              <BlurhashCanvas
                hash="L9DAl4}aHV^iUdUEl?nT%|zrKvEf"
                className="absolute top-0 object-cover w-full h-full transition duration-300 ease-in rounded-t-lg grayscale hover:grayscale-0"
              />
            ) : (
              ""
            )}
          </div>
          <div className="flex items-center flex-wrap justify-between p-[4vw]">
            <div className="w-full lg:w-[70%] xl:w-[60%]">
              <p className="text-[#F5F5F5] text-xl lg:text-3xl text-center">
                Let’s Create Something Great Together
              </p>
            </div>
            <div className="w-full lg:w-[30%] xl-[40%] flex justify-center max-sm:mt-2 max-lg:mt-6">
              <button
                onClick={() => {
                  navigate("/contact");
                  LoadToTop();
                }}
                className=" bg-[#F5F5F5] text-[#022581] font-extrabold px-8 py-2 lg:px-12 lg:py-3 rounded-2xl text-base md:text-xl"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhBs;
