import { ContactItems } from "./constants/ContactItems";
import { GoLocation } from "react-icons/go";
import logo from "./assets/logo-belinsky.png";

const Footer = () => {
  return (
    <footer className="px-[6vw] py-[5vh] lg:px-[6vw] w-full bg-[#F5F5F5]">
      <div className="flex flex-wrap w-full h-full space-x-5 gap-y-7">
        <div className="flex flex-col w-[100%] lg:w-[30%]">
          <img src={logo} alt="Belinsky Logo" className="w-[9rem]" />
          <p className="text-[#022581]">
            Taking off to a sky, where creativity is limitless
          </p>
          <div className="flex flex-col mt-6 gap-y-3 md:gap-y-5 text-[#8B8585]">
            <h3 className="mt-2 text-[#424242] text-2xl">Belinsky Studio</h3>
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
        <div className="w-[45%] h-[14rem] lg:w-[30%] lg:h-[18rem] self-end">
          <iframe
            title="map"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=belinsky%20studio%20jakarta&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            className="w-full h-full shadow-xl rounded-xl"
          ></iframe>
        </div>

        {/* Contact */}
        <div className="w-[45%] lg:w-[22%] self-end lg:self-center">
          <div className="flex gap-x-1 text-[#8B8585] font-[350] text-lg">
            <GoLocation className="w-[5rem]" />
            <p className="leading-[2rem] text-justify">
              Jl. Kemang Utara No. 15A, Bangka, Kec. Mampang Prpt., Jakarta
              Selatan, Daerah Khusus Ibukota Jakarta 12730
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
