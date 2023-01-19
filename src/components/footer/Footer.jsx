import { ContactItems } from "./constants/ContactItems";
import { GoLocation } from "react-icons/go";
import logo from "./assets/logo-belinsky.png";

const Footer = () => {
  return (
    <footer className="px-[6vw] py-[5vh] lg:px-[6vw] w-full bg-[#F5F5F5]">
      <div className="flex flex-wrap items-center w-full h-full justify-evenly gap-y-7">
        <div className="flex flex-col w-[100%] lg:w-[40%]">
          <img src={logo} alt="Belinsky Logo" className="w-[9rem]" />
          <p className="text-[#022581]">
            Taking off to a sky, where creativity is limitless
          </p>
          <div className="flex flex-col mt-6 gap-y-3 md:gap-y-5 text-[#8B8585]">
            <h3 className="mt-2 text-[#424242] text-2xl font-[600]">
              Belinsky Studio
            </h3>
            {ContactItems.map(({ icon, p, href }) => (
              <div className="flex gap-x-1">
                <a href={href} target="break">
                  {icon}
                </a>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature */}
        <div className="w-full h-[20rem] flex flex-col md:w-[100%] lg:w-[50%] md:flex-row md:h-[15rem] gap-x-5 sm:flex-row lg:self-end">
          <iframe
            title="map"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=belinsky%20studio%20jakarta&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            className="w-full h-full shadow-xl rounded-xl sm:w-[50%]"
          ></iframe>
          <p className="text-[#8B8585] flex gap-x-3 sm:w-[50%] h-full w-full items-center">
            <GoLocation size={30} className="" />
            Jl. Kemang Utara No. 15A, Bangka, Kec. Mampang Prpt., Jakarta
            Selatan, Daerah Khusus Ibukota Jakarta 12730
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
