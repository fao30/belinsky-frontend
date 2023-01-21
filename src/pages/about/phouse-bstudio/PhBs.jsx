import ph1 from "../../../assets/production-house/wwo-ph1.png";
import ph2 from "../../../assets/production-house/wwo-ph2.png";
import ph3 from "../../../assets/production-house/wwo-ph3.png";

import bh1 from "../assets/about-bh-1.png";
import bh2 from "../assets/about-bh-2.png";

import bg from "../assets/bg_img.png";

const PhBs = () => {
  return (
    <>
      {/* Production House */}
      <div className="flex flex-wrap-reverse justify-around w-full h-full md:flex-row text-[#022581] group mt-10">
        <div className="flex w-[100%] md:w-[50%] h-full p-8 items-center gap-5">
          <div className="flex flex-col w-[50%] xl:w-[35%] items-end gap-5">
            <img
              alt=""
              src={ph1}
              className="w-[100%] object-cover transition duration-700 ease-in-out translate-x-16 translate-y-20 rounded-2xl grayscale hover:grayscale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-700 group-hover:ease-in-out group-hover:delay-200"
            />
            <img
              alt=""
              src={ph2}
              className="w-[90%] object-cover transition duration-700 ease-in-out rounded-2xl grayscale hover:grayscale-0 translate-x-16 -translate-y-20 z-20 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-700 group-hover:ease-in-out group-hover:delay-75"
            />
          </div>
          <div className="w-[50%] xl:w-[30%]">
            <img
              alt=""
              src={ph3}
              className="object-cover transition duration-700 ease-in-out -translate-x-16 rounded-2xl grayscale hover:grayscale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-700 group-hover:ease-in-out group-hover:delay-150 "
            />
          </div>
        </div>
        <div className="p-5 md:p-10 w-[100%] md:w-[50%] my-auto">
          <h1 className="text-xl font-black uppercase md:text-2xl xl:text-3xl">
            Production House
          </h1>
          <p className="text-sm font-bold md:text-md lg:text-lg xl:text-xl">
            Belinsky strives for great quality and exclusiveness in every video
            that exhibits a flawless result. We may help you in the production
            of TVC advertisement for your advertising needs.
          </p>
        </div>
      </div>

      {/* Belinsky Studio */}
      <div className="flex flex-col justify-around w-full h-full md:flex-row text-[#022581] mt-10 group">
        <div className="p-5 md:p-10 w-[100%] h-full md:w-[50%] my-auto">
          <h1 className="text-xl font-black uppercase md:text-2xl xl:text-3xl">
            Belinsky Studio
          </h1>
          <p className="text-sm font-bold md:text-md lg:text-lg xl:text-xl">
            Our specialties include model photography, food photography,
            corporate, family, professional photos for LinkedIn, wedding
            photography, and graduation photography.
          </p>
        </div>
        <div className="flex w-[100%] md:w-[50%] h-[30rem] p-5 gap-x-5 items-center justify-center">
          <div className="w-[50%] sm:w-[30%] md:w-[50%] lg:w-[40%] xl:w-[30%] self-start">
            <img
              src={bh1}
              alt=""
              className="self-start object-cover transition duration-700 ease-in-out translate-x-16 translate-y-24 rounded-2xl grayscale hover:grayscale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:delay-300 group-hover:duration-700 group-hover:ease-in-out"
            />
          </div>
          <div className="w-[50%] sm:w-[30%] md:w-[50%] lg:w-[40%] xl:w-[30%] self-end">
            <img
              src={bh1}
              alt=""
              className="object-cover transition duration-700 ease-in-out -translate-x-24 -translate-y-28 rounded-2xl grayscale hover:grayscale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:delay-200 group-hover:duration-700 group-hover:ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Checkout Company Profile */}
      <div className="h-full">
        <h2 className="text-[#022581] text-center font-bold text-lg mt-10 md:text-xl lg:text-2xl">
          CHECK OUT OUR COMPANY PROFILE
        </h2>
        <div className="mt-10 w-[90%] xl:w-[80%] h-full mx-auto bg-[#022581] rounded-lg drop-shadow-[0_2px_2px_transparent] shadow-lg shadow-slate-400">
          <img
            src={bg}
            alt=""
            className="object-cover transition duration-300 ease-in rounded-t-lg grayscale hover:grayscale-0"
          />
          <div className="flex items-center justify-between p-3 sm:p-6 lg:p-8 lg:justify-around lg:gap-52">
            <p className="text-[#F5F5F5] text-sm sm:text-lg lg:text-xl">
              Let’s Create Something Great Together
            </p>
            <button className="bg-[#F5F5F5] text-[#022581] font-extrabold text-sm py-1 px-2 sm:py-2 sm:px-3 rounded-md sm:text-md md:text-lg lg:text-xl">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhBs;
