import React from "react";

const StudioPodcastPrice = [
  {
    hour: "3hrs:",
    priceNot: "Rp 1.350.000",
    price: "Rp 1.250.000",
  },
  {
    hour: "5hrs:",
    priceNot: "Rp 2.250.000",
    price: "Rp 2.000.000",
  },
  {
    hour: "7hrs:",
    priceNot: "Rp 3.150.000",
    price: "Rp 2.700.000",
  },
  {
    hour: "9hrs:",
    priceNot: "Rp 4.100.000",
    price: "Rp 3.250.000",
  },
  {
    priceHour: "Rp 450.000",
  },
];

const PodcastPriceList = () => {
  return (
    <seection className="flex justify-center">
      <div className="h-fit w-full md:w-[70%] lg:w-[85%] xl:w-[60%] border-[2px] border-[#022581] rounded-xl">
        {/* PRICELIST */}
        <div className="h-[50%] border-b-[2px] border-[#022581]">
          <div className="flex justify-center h-[3rem]">
            <div className="bg-[#022581] w-[10rem] lg:w-[20rem] rounded-b-xl flex justify-center items-center">
              <p className="text-white text-xl lg:text-2xl text-center">
                Pricelist
              </p>
            </div>
          </div>
          <div className="h-[85%] flex justify-center p-[4vw] md:p-[3vw] lg:py-[2vw] lg:px-[3vw]">
            <div className="flex justify-center lg:justify-between items-center flex-wrap w-full">
              <div className="w-full lg:w-[48%] flex flex-col">
                {StudioPodcastPrice?.map((e) => {
                  return (
                    <p className="text-[#022581] text-xl lg:text-2xl">
                      {e.hour}
                      <span className="text-gray-500 text-lg line-through">
                        {" "}
                        {e.priceNot}{" "}
                      </span>
                      {e.price}
                    </p>
                  );
                })}
              </div>
              <div className="w-full lg:w-[48%] text-[#022581] text-xl lg:text-2xl max-lg:mt-6">
                <div className="flex flex-col ">
                  <h1>Hours in Studio</h1>
                  <p>Rp.450.000/hour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* EQUIPMENT LIST */}
        <div className="h-[50%] text-[#022581] p-[4vw] md:p-[3vw] lg:py-[2vw] lg:px-[3vw] text-xl lg:text-2xl">
          <div className="h-[30%] flex items-center  max-lg:mb-6">
            <h1 className="text-2xl">Equipment List</h1>
          </div>
          <div className="h-[70%] flex justify-center">
            <div className="flex justify-between w-full flex-wrap">
              {/* left content */}
              <div className="w-full lg:w-[48%]">
                <ul>
                  <li>- Mixer sound (Zoom Podtrak P8)</li>
                  <li>- Mic Shure MV7X (4 pcs)</li>
                  <li>- Headphone ATH M40X (4 pcs)</li>
                  <li>- Camera Sony A7III</li>
                </ul>
              </div>
              {/* right content */}
              <div className="w-full lg:w-[48%]">
                <ul>
                  <li>- Lampu lighting SL60W (2 pcs)</li>
                  <li>- Softbox</li>
                  <li>- Sound Operator</li>
                </ul>
                <h1 className="max-lg:mt-2">Editing + Rp 350.000</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </seection>
  );
};

export default PodcastPriceList;