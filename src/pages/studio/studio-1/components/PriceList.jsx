import { dataPriceList } from "../constants/DataPriceList";
import { equipmentList_Left } from "../constants/DataPriceList";
import { equipmentList_Right } from "../constants/DataPriceList";

const PriceList = () => {
  return (
    <div className="flex justify-center mt-16 md:mt-32 px-[6vw]">
      <div className="h-fit w-full md:w-[70%] lg:w-[85%] xl:w-[65%] border-[2px] border-[#022581] rounded-xl bg-white drop-shadow-[0_1px_1px_black]">
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
            <div className="flex flex-wrap items-center justify-center w-full lg:justify-between">
              <div className="w-full lg:w-[48%] flex flex-col">
                {dataPriceList?.map(({ hour, priceNot, price }) => {
                  return (
                    <div className="flex flex-row text-xl lg:text-2xl text-[#022581]">
                      <p className="w-[18%]">{hour}</p>
                      <p className="w-[2%]">:</p>
                      <p className="text-lg text-gray-500 line-through w-[40%]">
                        {priceNot}
                      </p>
                      <p className="w-[45%]"> {price}</p>
                    </div>
                  );
                })}
              </div>
              <div className="w-full lg:w-[48%] text-[#022581] text-xl lg:text-2xl max-lg:mt-6">
                <div className="flex flex-col ">
                  <h1>Hours in studio</h1>
                  <p>Rp 230.000/hour</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EQUIPMENT LIST */}
        <div className="h-[50%] text-[#022581] p-[4vw] md:p-[3vw] lg:py-[2vw] lg:px-[3vw] text-xl lg:text-2xl">
          <div className="flex flex-col gap-2 lg:gap-4">
            <p className=" font-black ">- White limbo background</p>
            <p className=" font-black ">
              - Expander background (Max 2 Colours)
            </p>
            <p className=" font-black ">- Makeup room</p>
          </div>
          <div className="h-[30%] flex items-center mt-3 lg:mt-6">
            <h1>Equipment List</h1>
          </div>
          <div className="h-[70%] flex justify-center">
            <div className="flex flex-wrap justify-between w-full font-semibold">
              {/* left content */}
              <div className="w-full lg:w-[48%]">
                <ul>
                  {equipmentList_Left.map((e) => (
                    <li>- {e}</li>
                  ))}
                </ul>
              </div>
              {/* right content */}
              <div className="w-full lg:w-[48%]">
                <ul>
                  {equipmentList_Right.map((e) => (
                    <li>- {e}</li>
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
