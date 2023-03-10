import { dataPriceList } from "../constants/DataPriceList";
import { equipmentList_Left } from "../constants/DataPriceList";
import { equipmentList_Right } from "../constants/DataPriceList";

const PriceList = () => {
  return (
    <div className="flex justify-center mt-16 md:mt-32 px-[6vw]">
      <div className="h-fit w-full md:w-[70%] lg:w-[95%] xl:w-[70%] border-[2px] border-[#022581] rounded-xl bg-white drop-shadow-[0_1px_1px_black]">
        {/* PRICELIST */}
        <div className="h-[50%] border-b-[2px] border-[#022581]">
          <div className="flex justify-center h-[3rem]">
            <div className="bg-[#022581] w-[10rem] lg:w-[20rem] rounded-b-xl flex justify-center items-center">
              <p className="text-xl text-center text-white lg:text-2xl">
                Pricelist
              </p>
            </div>
          </div>
          <div className="h-[85%] flex justify-center p-[4vw] md:p-[3vw] lg:py-[2vw] lg:px-[2vw]">
            <div className="xl:ml-4 flex flex-wrap items-center justify-center w-full lg:justify-between">
              <div className="w-full lg:w-[55%] xl:w-[48%] flex flex-col">
                {dataPriceList?.map(({ hour, priceNot, price }) => {
                  return (
                    <div className="flex flex-row text-xl lg:text-2xl text-[#022581] items-center">
                      <p className="w-[18%]">{hour}</p>
                      <p className="w-[2%]">:</p>
                      <p className="md:text-lg text-gray-500 line-through text-base lg:text-xl w-[35%]">
                        {priceNot}
                      </p>
                      <p className="w-[45%]">{price}</p>
                    </div>
                  );
                })}
              </div>
              <div className="w-full lg:w-[40%] text-[#022581] text-xl lg:text-2xl max-lg:mt-6">
                <div className="flex flex-col ">
                  <h3>Hours in studio</h3>
                  <p>Rp 400.000/hour</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EQUIPMENT LIST */}

        <div className="h-[50%] w-full text-[#022581] p-[4vw] md:p-[3vw] lg:py-[2vw] lg:px-[2vw] text-xl lg:text-2xl">
          <div className="xl:ml-4 h-[20%] flex items-center">
            <h3 className="mb-4">Equipment List</h3>
          </div>
          <div className="xl:ml-4 h-[70%] flex justify-center">
            <div className="flex flex-wrap justify-between w-full   ">
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
