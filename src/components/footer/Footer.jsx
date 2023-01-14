import React from "react";
import { GoLocation } from "react-icons/go";
import {
  TbBrandInstagram,
  TbBrandTiktok,
  TbBrandWhatsapp,
  TbMail,
} from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io";
import logo from "./assets/logo-belinsky.png";
import { NavFooterItems } from "../constants/NavFooterItems";
import { ContactItems } from "./constants/ContactItems";
// import "../../../src/index.css";
import "./Styles.scss";

const Footer = () => {
  return (
    <footer className="px-[6vw] py-[5vh] lg:px-[3vw] w-full bg-[#F5F5F5]">
      <div className="flex flex-wrap w-full h-full gap-y-7">
        <div className="flex flex-col lg:w-[50%] w-[100%]">
          <img src={logo} alt="Belinsky Logo" className="w-[9rem]" />
          <p className="text-[#022581]">
            Taking off to a sky, where creativity is limitless
          </p>
          <h3 className="mt-2">Belinsky Studio</h3>
          <div className="flex flex-col mt-2 gap-y-2">
            <div className="flex gap-x-1">
              <TbBrandWhatsapp size={20} />
              <p>+62 858-1055-9415</p>
            </div>
            <div className="flex gap-x-1">
              <TbMail size={20} />
              <p>partnership@belinsky.studio</p>
            </div>
            <div className="flex gap-x-1">
              <TbBrandInstagram size={20} />
              <p>@belinsky.studio</p>
            </div>
            <div className="flex gap-x-1">
              <TbBrandTiktok size={20} />
              <p>belinsky.id</p>
            </div>
          </div>
        </div>

        {/* Feature */}
        <div className="w-[100%] lg:w-[25%]">
          <div className="flex flex-col gap-y-2 lg:gap-y-5">
            <h3 className="text-[#424242]">Feature</h3>
            {NavFooterItems.map(({ label, path, type }) =>
              type === "img" ? (
                <></>
              ) : (
                <p>
                  <span className="cursor-pointer">{label}</span>
                </p>
              )
            )}
          </div>
        </div>

        {/* Contact */}
        <div className="w-[100%] lg:w-[25%]">
          <div className="flex gap-x-1">
            <GoLocation size={25} />
            <p className="leading-[2rem]">
              Jl. Kemang Utara No. 15, Bangka, Kec. Mampang Prpt., Jakarta
              Selatan, Daerah Khusus Ibukota Jakarta 12730
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
