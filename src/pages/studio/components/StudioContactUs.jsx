import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import LoadToTop from "../../../helper/LoadToTop";

const StudioContactUs = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center">
      <div className="rounded-xl my-20 w-full lg:w-[80%] px-12 lg:pl-24 lg:pr-12 py-12 bg-[#022581] text-white">
        <div className="flex justify-between items-center gap-6">
          <div className="w-full lg:w-[70%] flex flex-col">
            <h1 className="text-2xl lg:text-3xl">
              For Reservation Contact Us Through Whatsapp
            </h1>
            <p
              className="cursor-pointer mt-2"
              onClick={() => {
                LoadToTop();
                navigate("/termsconditions");
              }}
            >
              TERMS & CONDITIONS
            </p>
          </div>
          <div className="hidden lg:flex justify-end lg:w-[25%]">
            <button className="text-[#022581] bg-white rounded-xl font-bold flex justify-center items-center px-4 py-2">
              <span>
                {" "}
                <Icon icon="ic:baseline-whatsapp" width="30" height="30" />
              </span>
              <span className="ml-2">Contact Us</span>
            </button>{" "}
          </div>
        </div>
        <div className="flex justify-end items-center lg:hidden w-full mt-6">
          <button className="text-[#022581] bg-white rounded-xl font-bold flex justify-center items-center px-4 py-2">
            <span>
              {" "}
              <Icon icon="ic:baseline-whatsapp" width="30" height="30" />
            </span>
            <span className="ml-2">Contact Us</span>
          </button>{" "}
        </div>
      </div>
    </section>
  );
};

export default StudioContactUs;
