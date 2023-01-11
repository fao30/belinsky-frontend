import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";
import { TbBuildingCommunity } from "react-icons/tb";
import logo from "./assets/logo-belinsky.png";

const Footer = () => {
  return (
    <footer className="px-[6vw] pb-[5vh] lg:px-[3vw] w-full">
      {/* Parent */}
      <div className="flex flex-wrap w-full h-full gap-y-7">
        {/* child 1 */}
        <div className="flex flex-col lg:w-[50%] w-[100%]">
          <img src={logo} alt="Belinsky Logo" className="w-[9rem]" />
          <p className="text-[#424242]">Let’s create creativity together</p>
          <div className="flex mt-2 text-[#424242] gap-x-2">
            <AiOutlineInstagram size={20} className="cursor-pointer" />
            <AiFillLinkedin size={20} className="cursor-pointer" />
            <TbBrandTiktok size={20} className="cursor-pointer" />
          </div>
        </div>
        <div className="w-[100%] lg:w-[25%]">
          <div className="flex flex-col gap-y-2 lg:gap-y-5">
            <h3 className="text-[#8B8585]">Feature</h3>
            <h6>Home</h6>
            <h6>About</h6>
            <h6>Our Work</h6>
            <h6>Contact</h6>
          </div>
        </div>
        <div className="w-[100%] lg:w-[25%]">
          <div className="flex flex-col gap-y-2 lg:gap-y-5">
            <h3 className="text-[#8B8585]">Contact</h3>
            <div className="flex items-center gap-x-2">
              <AiOutlineInstagram />
              <p>Belinksy.studio</p>
            </div>
            <div className="flex items-center gap-x-2">
              <TbBrandTiktok />
              <p>Belinsky.id</p>
            </div>
            <div className="flex items-center gap-x-2">
              <AiOutlineWhatsApp />
              <p>+62 858-1055-9415</p>
            </div>
            <div className="flex gap-x-2">
              <TbBuildingCommunity size={40} />
              <p>
                Jl. Kemang Utara No. 15, Bangka, Kec. Mampang Prpt., Jakarta
                Selatan, Daerah Khusus Ibukota Jakarta 12730
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
