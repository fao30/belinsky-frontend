import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import LoadToTop from "../../../../helper/LoadToTop";

const CardContactUsPodcast = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="rounded-xl my-20 w-full md:w-[70%] lg:w-[90%] px-12 lg:pl-24 lg:pr-12 py-12 bg-[#022581] text-white">
        <div className="flex items-center justify-between gap-6">
          <div className="w-full lg:w-[70%] flex flex-col">
            <h1 className="text-xl font-bold lg:text-2xl">
              For Reservation Contact Us Through Whatsapp
            </h1>
            <p
              className="mt-2 text-sm cursor-pointer hover:underline"
              onClick={() => {
                LoadToTop();
                navigate("/termsconditions");
              }}
            >
              TERMS & CONDITIONS
            </p>
          </div>

          {/* Button Whatsapp Desktop Version */}
          <div className="hidden lg:flex justify-end lg:w-[25%]">
            <a
              href="https://wa.me/6285810559415"
              target="break"
              className="ml-2"
            >
              <button className="text-[#022581] bg-white rounded-xl font-bold flex justify-center items-center px-4 py-2">
                <span>
                  <Icon icon="ic:baseline-whatsapp" width="30" height="30" />
                </span>
                <span className="ml-2">Contact Us</span>
              </button>{" "}
            </a>
          </div>
        </div>

        {/* Button Contact Us Mobile Version */}
        <div className="flex items-center justify-end w-full mt-6 lg:hidden">
          <a href="https://wa.me/6285810559415" target="break" className="ml-2">
            <button className="text-[#022581] bg-white rounded-xl font-bold flex justify-center items-center px-4 py-2">
              <span>
                {" "}
                <Icon icon="ic:baseline-whatsapp" width="30" height="30" />
              </span>
              Contact Us
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardContactUsPodcast;
