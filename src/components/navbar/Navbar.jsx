import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import logoBelinsky from "../../assets/logo-belinsky.png";
import { NavFooterItems } from "../components/NavFooterItems";

const Navbar = () => {
  // Toggle mobile menu
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full flex justify-between px-[6vw] py-[3.5vh] md:py-[2vh] items-center bg-[#5484F2] shadow-lg shadow-black/30">
      {/* burger menu icon */}
      <img
        src={logoBelinsky}
        alt="logoBelinsky"
        className="fixed left-0 top-0 w-[8rem] bg-white rounded-br-xl md:hidden shadow-lg z-10"
      />
      <BiMenuAltRight
        size={30}
        className="text-white cursor-pointer z-30 md:hidden absolute top-0 right-4 my-[2vh]"
        onClick={handleNav}
      />

      {/* Desktop Menu */}
      <div className="w-[100%] h-full hidden md:flex z-20 mx-auto relative">
        <ul className="flex w-full text-lg font-bold text-[#F5F5F5] justify-evenly">
          {NavFooterItems.map(({ label, type }) =>
            type === "img" ? (
              <li key={label} className="md:w-[8rem] cursor-pointer">
                {label}
              </li>
            ) : (
              <li key={label} className="cursor-pointer">
                {label}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? `transition ease-in-out duration-300 fixed text-white left-0 top-0 w-full h-screen bg-black px-4 py-7 z-10`
            : `transition ease-in-out duration-500 absolute top-0 h-screen right-[-100%]`
        }
      >
        <ul className="flex flex-col items-center justify-center w-full h-full gap-10 text-4xl font-semibold">
          {NavFooterItems.map(({ label, type }) =>
            type === "img" ? (
              ""
            ) : (
              <li key={label} className="cursor-pointer">
                {label}
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
