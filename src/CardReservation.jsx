import React from "react";
import { Icon } from "@iconify/react";

export const CardReservation = () => {
  return (
    <div class="w-full">
      <div class="my-16 md:mx-[5rem] lg:mx-[9.5rem] mx-10 px-12 flex justify-end md:lg:justify-between content-center flex-wrap items-center rounded-xl h-60 md:h-[216px] bg-[#022581] ">
        <div class="flex justify-between items-center">
          <div class="w-full mr-6">
            <p class="text-[#FEFEFF] font-bold text-xl md:text-[36px] mb-8">
              For Reservation Contact Us Through Whatsapp
            </p>
            <p class="mt-2 md:text-[20px] text-[#FEFEFF] font-bold ">
              {" "}
              TERMS & CONDITIONS{" "}
            </p>
          </div>
        </div>
        <button class=" mt-4 lg:mt-0 pl-4 btn text-2xl text-center font-semibold hover:bg-blue-700 rounded-xl border-none bg-white text-[#022581] md:w-[257px] md:h-[60px]">
          <span className="flex justify-start items-center pl-5">
            <Icon
              icon="ic:round-whatsapp"
              color="#022581"
              width="50"
              height="30"
            />
            Contact Us
          </span>
        </button>
      </div>
    </div>
  );
};

export default CardReservation;