import ph1 from "../../../assets/production-house/wwo-ph1.png";
import ph2 from "../../../assets/production-house/wwo-ph2.png";
import ph3 from "../../../assets/production-house/wwo-ph3.png";

import bh1 from "../assets/about-bh-1.png";
import bh2 from "../assets/about-bh-2.png";

const PhBs = () => {
  return (
    <>
      {/* Production House */}
      <div className="flex flex-col justify-around w-full h-full md:flex-row text-[#022581]">
        <div className="flex w-[100%] md:w-[50%] h-full p-8 items-center gap-5 group">
          <div className="flex flex-col w-[50%] xl:w-[40%] items-end gap-5">
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
          <div className="w-[50%] xl:w-[40%]">
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
      {/* <div className="flex flex-col justify-around w-full h-full md:flex-row text-[#022581] mt-16">
        <div className="p-5 md:p-10 w-[100%] md:w-[50%] my-auto">
          <h1 className="text-xl font-black uppercase md:text-2xl xl:text-3xl">
            Belinsky Studio
          </h1>
          <p className="text-sm font-bold md:text-md lg:text-lg xl:text-xl">
            Our specialties include model photography, food photography,
            corporate, family, professional photos for LinkedIn, wedding
            photography, and graduation photography.
          </p>
        </div>
        <div className="flex w-[100%] md:w-[50%] h-full p-8 items-center gap-5 group">
          <div className="w-[50%] xl:w-[40%] h-[30rem] justify-center gap-5">
            <img alt="" src={bh1} className="" />
          </div>
          <div className="w-[50%] xl:w-[40%]">
            <img alt="" src={bh2} className="" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default PhBs;
