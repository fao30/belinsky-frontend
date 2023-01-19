import React from "react";
import img1 from "../../about/assets/Jerome.jpeg";
import img2 from "../../about/assets/Jehian.jpeg";
import img3 from "../../about/assets/Turah.jpeg";

export const Founder = () => {
  return (
    <section className="w-full min-h-screen">
      <h1 className="text-[81.67px] font-bold text-[#022581] text-center p-[12vw]">
        Founders of Belinsky
      </h1>
      {/* founder images */}
      <div className=" flex justify-center gap-6 items-center">
        <div className="flex flex-col justify-center gap-4 items-center w-[33%]">
          <img src={img1} alt="img1" className="rounded-full bg-slate-600" />
          <h1 className="text-[40px] justify-end items-end font-bold text-[#022581]">
            Jerome Polin
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-4 items-center w-[33%]">
          <img src={img2} alt="img2" className="rounded-full" />
          <h1 className="text-[40px] justify-end items-end font-bold text-[#022581]">
            Jehian Sijabat
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-4 items-center w-[33%]">
          <img src={img3} alt="img3" className=" rounded-full" />
          <h1 className="text-[40px] justify-end items-end font-bold text-[#022581]">
            Turah Parthayana
          </h1>
        </div>
      </div>
    </section>
  );
};
export default Founder;
