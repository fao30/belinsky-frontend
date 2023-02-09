import React from "react";

// constants
import { dataAdditionalCat } from "../constants/DataAdditional";

const EquipmentStudio2 = () => {
  return (
    <div className="px-[6vw] flex justify-center">
      <div className="max-sm:p-6 px-12 py-8 w-full md:w-[60%] lg:w-[50%] xl:w-[35%] border-[2px] border-[#022581] rounded-xl bg-white drop-shadow-[0_1px_1px_black]">
        <div className="flex flex-col">
          <div className="w-full text-[#022581] text-xl lg:text-2xl">
            <div className="flex flex-col">
              <h3 className="mb-2">Equipment List</h3>
              <ul>
                <li>- Camera Sony A7III</li>
                <li>- Godox QT400</li>
              </ul>
              <h3 className="mt-6 mb-2">Background Choices</h3>
              <p>White, Black, Grey, Yellow</p>
              <div className="mt-2 flex flex-row drop-shadow-[2px_2px_2px_gray]">
                <div className="bg-white h-2 w-[4.5rem]" />
                <div className="bg-black h-2 w-[4.5rem]" />
                <div className="bg-[#ADADAD] h-2 w-[4.5rem]" />
                <div className="bg-[#FFEF00] h-2 w-[4.5rem]" />
              </div>
              <h3 className="mt-6 mb-2">Additional</h3>
              <ul>
                {dataAdditionalCat.map(({ category, price }) => (
                  <div className="flex justify-between">
                    <li>- {category}</li>
                    <p>{price}</p>
                  </div>
                ))}
              </ul>
              <p className="mt-4 font-semibold">
                Various properties are also available on the spot!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentStudio2;
