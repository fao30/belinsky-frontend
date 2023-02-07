import React from "react";

const StudioPodcastPrice = [
  {
    hour: "3hrs",
    priceNot: "Rp 1.350.000",
    price: "Rp 1.250.000",
  },
  {
    hour: "5hrs",
    priceNot: "Rp 2.250.000",
    price: "Rp 2.000.000",
  },
  {
    hour: "7hrs",
    priceNot: "Rp 3.150.000",
    price: "Rp 2.700.000",
  },
  {
    hour: "9hrs",
    priceNot: "Rp 4.100.000",
    price: "Rp 3.250.000",
  },
];

const PodcastPriceList = () => {
  return (
    <seection className="flex justify-center">
      <div className="drop-shadow-[0_1px_1px_black] h-fit w-full md:w-[70%] lg:w-[95%] xl:w-[80%] border-[2px] border-[#022581] rounded-xl bg-white">
        {/* PRICELIST */}
        <div className="h-[50%] border-b-[2px] border-[#022581]">
          <div className="flex justify-center h-[3rem]">
            <div className="bg-[#022581] w-[10rem] lg:w-[20rem] rounded-b-xl flex justify-center items-center">
              <p className="text-xl text-center text-white lg:text-2xl">
                Pricelist
              </p>
            </div>
          </div>
          <div className="h-[85%] flex justify-center p-[4vw] md:p-[3vw] lg:py-[2vw] lg:px-[3vw]">
            <div className="xl:ml-12 flex flex-wrap items-center justify-center w-full lg:justify-between">
              <div className="w-full lg:w-[48%] flex flex-col">
                {StudioPodcastPrice?.map((e) => {
                  return (
                    <div className="flex flex-row text-xl lg:text-2xl text-[#022581] items-center">
                      <p className="w-[18%]">{e.hour}</p>
                      <p className="w-[2%]">:</p>
                      <p className="md:text-lg text-gray-500 line-through text-base w-[35%]">
                        {e.priceNot}
                      </p>
                      <p className="w-[45%]">{e.price}</p>
                    </div>
                  );
                })}
              </div>
              <div className="w-full lg:w-[48%] text-[#022581] text-xl lg:text-2xl max-lg:mt-6">
                <div className="flex flex-col ">
                  <h3>Hours in studio</h3>
                  <p>Rp 450.000/hour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* EQUIPMENT LIST */}
        <div className="h-[50%] text-[#022581] p-[4vw] md:p-[3vw] lg:py-[2vw] lg:px-[3vw] text-xl lg:text-2xl   ">
          <div className="xl:ml-12 h-[30%] flex items-center mb-4">
            <h3 className="text-xl md:text-2xl">Equipment List</h3>
          </div>
          <div className=" xl:ml-12 h-[70%] flex justify-center">
            <div className="flex flex-wrap justify-between w-full">
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
                <h3 className="mt-4">Editing + Rp 350.000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </seection>
  );
};

export default PodcastPriceList;
