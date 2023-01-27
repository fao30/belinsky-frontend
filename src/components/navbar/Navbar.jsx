import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import logoBelinsky from "../../assets/logo-belinsky.png";
import LoadToTop from "../../helper/LoadToTop";
import { NavFooterItems } from "../constants/NavFooterItems";
import logo from "../../assets/logo-belinsky.png";

const Navbar = () => {
  // Toggle mobile menu

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  let navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-20 w-full flex justify-between px-[6vw] py-[3.5vh] md:py-[2vh] items-center bg-white/90 text-[#022581] shadow-lg shadow-black/30">
      <div className="flex justify-between w-full md:hidden">
        {/* Belinsky logo top-left */}
        <div className="w-[50%]">
          <img
            src={logo}
            alt="logoBelinsky"
            className="w-[5rem] md:hidden shadow-lg z-10 cursor-pointer"
            onClick={() => {
              navigate("/");
              LoadToTop();
            }}
          />
        </div>
        {/* burger menu icon */}
        {nav ? (
          <AiOutlineClose
            size={30}
            color="white"
            className="text-white cursor-pointer z-30 md:hidden my-[2vh]"
            onClick={handleNav}
          />
        ) : (
          <HiOutlineMenuAlt4
            size={30}
            color="#022581"
            className="text-white cursor-pointer z-30 md:hidden my-[2vh]"
            onClick={handleNav}
          />
        )}
      </div>

      {/* Desktop Menu OLD */}
      {/* <div className="w-[100%] h-full hidden md:flex z-20 mx-auto relative">
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
                  isActive && location.pathname !== "/"
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
      </div> */}

      {/* New Desktop Menu */}
      <div className="hidden w-full lg:w-[80%] lg:mx-auto h-full md:flex">
        <div className="w-[50%]">
          <img
            src={logo}
            alt=""
            className="w-[5rem] cursor-pointer"
            onClick={() => {
              navigate("/");
              LoadToTop();
            }}
          />
        </div>
        <ul className="w-[50%] flex md:justify-between lg:justify-evenly text-[#022581] drop-shadow-[#022581] text-base font-semibold items-center cursor-pointer md:text-lg lg:text-lg">
          {NavFooterItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className="text-[#022581] h-full flex items-center"
              onClick={() => {
                LoadToTop();
              }}
            >
              {label}
            </NavLink>
          ))}
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
                  isActive && location.pathname !== "/"
                    ? "text-[#022581]"
                    : "text-white"
                }
                onClick={() => {
                  handleNav();
                  LoadToTop();
                }}
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
