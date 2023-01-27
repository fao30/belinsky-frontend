import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import LoadToTop from "../../../helper/LoadToTop";

const CardContactUs = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center px-[6vw]">
      <div className="rounded-xl my-20 w-full md:w-[80%] lg:w-full xl:w-[90%] px-8 lg:px-20 lg:py-16 py-8 md:p-12 bg-[#022581] text-white">
        <div className="flex items-center justify-between gap-6">
          <div className="w-full lg:w-[60%] xl:w-[80%] flex flex-col">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              For Reservation Contact Us Through Whatsapp
            </h1>
            <p
              className="mt-2 text-sm md:text-lg cursor-pointer hover:underline"
              onClick={() => {
                LoadToTop();
                navigate("/termsconditions");
              }}
            >
              TERMS & CONDITIONS
            </p>
          </div>

          {/* Button Whatsapp Desktop Version */}
          <div className="hidden lg:flex justify-end lg:-[30%] xl:w-[25%]">
            <a
              href="https://wa.me/6285810559415"
              target="break"
              className="ml-2"
            >
              <button className=" text-xl md:text-2xl text-[#022581] bg-white rounded-xl font-bold flex justify-center items-center px-6 py-2">
                <span>
                  <Icon icon="ic:baseline-whatsapp" width="35" height="35" />
                </span>
                <span className="ml-2">Contact Us</span>
              </button>{" "}
            </a>
          </div>
        </div>

        {/* Button Contact Us Mobile Version */}
        <div className="flex items-center justify-end w-full mt-6 lg:hidden">
          <a href="https://wa.me/6285810559415" target="break" className="ml-2">
            <button className=" text-[#022581] bg-white rounded-xl font-bold flex justify-center items-center px-4 py-2">
              <span>
                {" "}
                <Icon icon="ic:baseline-whatsapp" width="30" height="30" />
              </span>
              <span className="ml-2">Contact Us</span>
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardContactUs;
