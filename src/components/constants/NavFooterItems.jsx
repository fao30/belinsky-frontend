// Nav Items
import logoBelinsky from "../../assets/logo-belinsky.png";

const logoBelinskyElement = () => {
  return (
    <div className="flex justify-center ">
      <img
        src={logoBelinsky}
        alt="logo Belinsky"
        className="z-10 absolute w-[140px] h-[85px] p-3 rounded-b-xl -top-6 bg-white shadow-xl border-none"
      />
    </div>
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
    label: "Contact Us",
    type: "text",
  },
];
