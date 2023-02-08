import LoadToTop from "../../../helper/LoadToTop";

// react-icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Mousewheel, Navigation, Keyboard, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// components
import SliderImg from "./components/SliderImg";
import SliderVideo from "./components/SliderVideo";
import { sliderData } from "./constants/SliderData";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    // h-[85vh] for mobile, min-h-screen for desktop
    <section className="relative w-full h-[85vh] sm:min-h-screen overflow-hidden">
      {/* Custom Swiper Arrows */}
      <div className="absolute left-0 top-[23%] sm:top-[50%] translate-y-[-50%] z-10 sm:px-2 md:px-4">
        <IoIosArrowBack
          size={35}
          id="nav-left-header"
          className="text-white transition cursor-pointer hover:text-[#5484f1]"
        />
      </div>
      <div className="absolute top-[23%] sm:top-[50%] translate-y-[-50%] right-0 z-10 sm:px-2 md:px-4">
        <IoIosArrowForward
          size={35}
          id="nav-right-header"
          className="text-white transition cursor-pointer hover:text-[#5484f1]"
        />
      </div>
      <Swiper
        speed={1000}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={0}
        slidesPerView={1}
        mousewheel={{
          forceToAxis: true,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={{
          nextEl: "#nav-right-header",
          prevEl: "#nav-left-header",
        }}
        modules={[Mousewheel, Navigation, Keyboard, Autoplay]}
        className="relative w-full h-[40vh] sm:h-full"
      >
        {sliderData?.map(({ src, h1, nav, blurPic, type, vidOrder }) =>
          type === "video/mp4" ? (
            <SwiperSlide>
              <SliderVideo
                src={src}
                blurPic={blurPic}
                vidOrder={vidOrder}
                h1={h1}
                navigate={() => {
                  navigate(`${nav}`);
                }}
                p="Explore Work"
              />
            </SwiperSlide>
          ) : (
            <SwiperSlide>
              <SliderImg
                blurPic={blurPic}
                src={src}
                h1={h1}
                navigate={() => {
                  navigate(`${nav}`);
                }}
                p="Explore Work"
              />
            </SwiperSlide>
          )
        )}
      </Swiper>

      {/* MOBILE VERSION: Second Part Text & CTA Button */}
      <div className="block w-full h-full sm:hidden">
        <div className="flex flex-col text-[#022581] h-full gap-3 px-[4vw] py-[5vh]">
          <h1 className="text-4xl font-bold uppercase drop-shadow-[0px_2px_1.5px_#a9a9a9]">
            Belinsky Studio
          </h1>
          <p className="drop-shadow-[0px_2px_1.5px_#a9a9a9]">
            Given that Belinsky is both a production house and a creative
            studio, our areas of expertise include producing both photography
            and filmmaking
          </p>
          <button
            onClick={() => {
              navigate();
              LoadToTop();
            }}
            className="self-start px-7 py-3 bg-[#5484F2] text-white hover:bg-[#4a6cb3] active:bg-[#5484F2] drop-shadow-[0_1px_1px_#5484F2]"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
