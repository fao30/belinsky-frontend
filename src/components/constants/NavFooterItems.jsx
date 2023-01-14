// Nav Items
import logoBelinsky from "../../assets/logo-belinsky.png";

const logoBelinskyElement = () => {
  return (
    <img
      src={logoBelinsky}
      alt="logo Belinsky"
      className="absolute w-[140px] h-[85px] p-3 rounded-b-xl -top-5 bg-white shadow-xl"
    />
  );
};

export const NavFooterItems = [
  {
    path: "/",
    label: "Home",
    type: "text",
  },
  {
    path: "/about",
    label: "About",
    type: "text",
  },
  {
    path: "/",
    label: logoBelinskyElement(),
    type: "img",
  },
  {
    path: "/ourwork",
    label: "Our Work",
    type: "text",
  },
  {
    path: "/contact",
    label: "Contact",
    type: "text",
  },
];
