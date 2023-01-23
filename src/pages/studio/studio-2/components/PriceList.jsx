import {
  dataPriceList,
  equipmentList_Left,
  equipmentList_Right,
} from "../constants/DataPriceList2";

const PriceList = () => {
  return (
    <div className="flex justify-center mt-16 md:mt-32 px-[6vw]">
      <div className="h-fit w-[20rem] md:w-[60%] lg:w-[80%] xl:w-[60%] border-[2px] border-[#022581] rounded-xl bg-white drop-shadow-[0_1px_1px_black]">
        {/* PRICELIST */}
        <div className="h-[50%] border-b-[2px] border-[#022581]">
          <div className="flex justify-center h-[3rem]">
            <div className="bg-[#022581] w-[10rem] lg:w-[20rem] rounded-b-xl flex justify-center items-center">
              <p className="text-xl text-center text-white lg:text-2xl">
                Pricelist
              </p>
            </div>
          </div>

          {/* Hours in studio */}
          <div className="h-[85%] flex justify-center p-[4vw] md:p-[3vw] lg:py-[2vw] lg:px-[3vw]">
            <div className="flex flex-wrap items-center justify-center w-full lg:justify-between">
              <div className="w-full lg:w-[48%] flex flex-col text-lg md:text-xl lg:text-xl md:text-center">
                {dataPriceList?.map(({ hour, priceNot, price }) => {
                  return (
                    <p className="text-[#022581] ">
                      {hour}
                      <span className="text-lg text-gray-500 line-through">
                        {priceNot} <br className="inline-block md:hidden" />
                      </span>
                      {price}
                    </p>
                  );
                })}
              </div>
              <div className="w-full lg:w-[48%] text-[#022581] text-xl lg:text-2xl max-lg:mt-6">
                <div className="flex flex-col items-center">
                  <h1>Hours in Studio</h1>
                  <p>Rp.400.000/hour</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EQUIPMENT LIST */}
        <div className="h-[50%] text-[#022581] p-[4vw] md:p-[3vw] lg:py-[2vw] lg:px-[3vw] text-xl lg:text-2xl">
          <div className="flex flex-col w-full lg:flex-row gap-y-3">
            <div className="flex flex-col gap-y-3">
              <p className="text-xl font-black">-White limbo background</p>
              <p className="w-full text-xl font-black">
                -Expander background (Max 2 Colours)
              </p>
            </div>
            <p className="text-xl font-black lg:mx-auto">-Makeup room</p>
          </div>
          <div className="h-[30%] flex items-center  max-lg:mb-6 mt-6">
            <h1 className="text-xl md:text-2xl">Equipment List</h1>
          </div>
          <div className="h-[70%] flex justify-center">
            <div className="flex flex-wrap justify-between w-full font-semibold text-md lg:text-xl">
              {/* left content */}
              <div className="w-full lg:w-[48%]">
                <ul>
                  {equipmentList_Left.map((e) => (
                    <li>-{e}</li>
                  ))}
                </ul>
              </div>
              {/* right content */}
              <div className="w-full lg:w-[48%]">
                <ul>
                  {equipmentList_Right.map((e) => (
                    <li>-{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
