import { ContactItems } from "./constants/ContactItems";
import { GoLocation } from "react-icons/go";
import logo from "./assets/logo-belinsky.png";

const Footer = () => {
  return (
    <>
      <div className="px-[6vw] py-[5vh] lg:px-[6vw] w-full bg-[#F5F5F5]">
        <div className="flex flex-col">
          <img src={logo} alt="Belinsky Logo" className="w-[9rem]" />
          <p className="text-[#022581]">
            Taking off to a sky, where creativity is limitless
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between w-full h-full gap-y-7">
          <div className="flex flex-col w-[100%] lg:w-[35%]">
            <div className="flex flex-col mt-6 gap-y-3 md:gap-y-5 text-[#8B8585]">
              <h3 className=" text-[#424242] text-2xl   ">Belinsky Studio</h3>
              {ContactItems?.map(({ icon, p, href }) => (
                <a
                  href={href}
                  target="break"
                  className="flex flex-row hover:underline"
                >
                  <span>{icon}</span>
                  <span className="ml-1 font-[500]">{p}</span>
                </a>
              ))}
            </div>
          </div>
          {/* Feature */}
          <div className="lg:w-[60%] flex-wrap flex h-full gap-x-5  items-center ">
            <iframe
              title="map"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=belinsky%20studio%20jakarta&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              className="w-full h-[18rem] shadow-[0px_1px_4px_gray] rounded-xl lg:w-[50%]"
            ></iframe>
            <div className="font-[500] text-[#8B8585] flex gap-x-3 h-full w-full items-center    max-lg:mt-6 md:w-[50%] lg:w-[40%] xl:w-[30%]">
              <span className="self-start">
                <GoLocation size={25} className="" />
              </span>
              Jl. Kemang Utara No. 15A, Bangka, Kec. Mampang Prpt., Jakarta
              Selatan, Daerah Khusus Ibukota Jakarta 12730
            </div>
          </div>
        </div>
      </div>
      <footer className="py-5 bg-[#f5f5f5] border-t-2">
        <p className="text-[#474747] text-center md:text-base tracking-wide underline-offset-1">
          © Belinsky Production 2023. Powered by{" "}
          <a
            href="https://faotech.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="underline cursor-pointer">faoTech</span>
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
