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
      <div className="w-full h-full mt-[16vh]">
        <h2 className="text-[#022581] text-center font-extrabold text-2xl lg:text-3xl my-[5vh] md:my-[10vh]">
          CHECK OUT OUR COMPANY PROFILE
        </h2>
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
          <div className="flex flex-col items-center justify-between p-4 gap-y-3 md:flex-row sm:p-6 lg:p-8 lg:justify-around lg:gap-52">
            <p className="text-[#F5F5F5] text-lg md:text-2xl">
              Let’s Create Something Great Together
            </p>
            <button
              onClick={() => {
                navigate("/contact");
                LoadToTop();
              }}
              className="bg-[#F5F5F5] text-[#022581] font-extrabold  py-1 px-2 sm:py-2 sm:px-3 rounded-md text-base md:text-xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhBs;
