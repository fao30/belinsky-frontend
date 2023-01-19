import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { useNavigate, NavLink } from "react-router-dom";
import logoBelinsky from "../../assets/logo-belinsky.png";
import LoadToTop from "../../helper/LoadToTop";
import { NavFooterItems } from "../constants/NavFooterItems";

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

  let navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full flex justify-between px-[6vw] py-[3.5vh] md:py-[2vh] items-center bg-[#022581] shadow-lg shadow-black/30">
      {/* burger menu icon */}
      <img
        src={logoBelinsky}
        alt="logoBelinsky"
        className="absolute left-0 top-0 w-[6.5rem] bg-white rounded-br-xl md:hidden shadow-lg z-10 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <BiMenuAltRight
        size={30}
        className="text-white cursor-pointer z-30 md:hidden absolute top-0 right-4 my-[2vh]"
        onClick={handleNav}
      />

      {/* Desktop Menu */}
      <div className="w-[100%] h-full hidden md:flex z-20 mx-auto relative">
        <ul className="flex w-full text-lg font-bold text-[#F5F5F5] justify-between lg:justify-center items-center lg:gap-10 text-center">
          {NavFooterItems?.map(({ label, type, path }) => {
            return type === "img" ? (
              <NavLink
                to={path}
                className="w-[15%]"
                onClick={() => {
                  LoadToTop();
                }}
              >
                {label}
              </NavLink>
            ) : (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#5484F2] drop-shadow-[0_1px_1px_black] w-[15%]"
                    : "text-white drop-shadow-[0_1px_1px_black] w-[15%]"
                }
                onClick={() => {
                  LoadToTop();
                }}
              >
                {label}
              </NavLink>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? `transition ease-in-out duration-300 absolute text-white left-0 top-0 w-full h-screen bg-black/90 px-4 py-7`
            : `transition ease-in-out duration-500 fixed top-0 h-screen right-[-100%]`
        }
      >
        <ul className="flex flex-col items-center justify-center w-full h-full gap-10 text-4xl font-extrabold">
          {NavFooterItems.map(({ label, type, path }) =>
            type === "img" ? (
              ""
            ) : (
              <NavLink
                to={path}
                key={label}
                className={({ isActive }) =>
                  isActive ? "text-[#5484F2]" : "text-white"
                }
                onClick={handleNav}
              >
                {label}
              </NavLink>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
