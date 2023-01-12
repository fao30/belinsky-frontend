import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";
import logo from "./assets/logo-belinsky.png";
import { NavFooterItems } from "../components/NavFooterItems";
import { ContactItems } from "./components/ContactItems";

const Footer = () => {
  return (
    <footer className="px-[6vw] pb-[5vh] lg:px-[3vw] w-full">
      <div className="flex flex-wrap w-full h-full gap-y-7">
        <div className="flex flex-col lg:w-[50%] w-[100%]">
          <img src={logo} alt="Belinsky Logo" className="w-[9rem]" />
          <p className="text-[#424242]">Let’s create creativity together</p>
          <div className="flex mt-2 text-[#424242] gap-x-2">
            <a href="https://www.instagram.com/belinsky.studio/" target="break">
              <AiOutlineInstagram size={20} className="cursor-pointer" />
            </a>
            <AiFillLinkedin size={20} className="cursor-pointer" />
            <a href="https://www.tiktok.com/@belinsky.id" target="break">
              <TbBrandTiktok size={20} className="cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Feature */}
        <div className="w-[100%] lg:w-[25%]">
          <div className="flex flex-col gap-y-2 lg:gap-y-5">
            <h3 className="text-[#8B8585]">Feature</h3>
            {NavFooterItems.map(({ label, path, type }) =>
              type === "img" ? (
                ""
              ) : (
                <h6>
                  <span className="cursor-pointer">{label}</span>
                </h6>
              )
            )}
          </div>
        </div>

        {/* Contact */}
        <div className="w-[100%] lg:w-[25%]">
          <div className="flex flex-col gap-y-2 lg:gap-y-5">
            <h3 className="text-[#8B8585]">Contact</h3>
            {ContactItems.map(({ label, icon, href }, index) =>
              index === 3 ? (
                <div className="flex items-center gap-x-2">
                  <a href={href} className="-mt-12 lg:-mt-12 md:-mt-7">
                    {icon}
                  </a>
                  <p>{label}</p>
                </div>
              ) : (
                <div className="flex items-center gap-x-2">
                  <a href={href} target="break">
                    {icon}
                  </a>
                  <p>{label}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
