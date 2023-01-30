import video from "./assets/Hero_Video.mp4";

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
    <section className="relative w-full min-h-screen">
      {/* Custom Swiper Arrows */}
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex z-10 w-full justify-between px-2 md:px-4">
        <IoIosArrowBack
          size={40}
          id="nav-left"
          className="text-white transition cursor-pointer hover:text-[#5484f1]"
        />
        <IoIosArrowForward
          size={40}
          id="nav-right"
          className="text-white transition cursor-pointer hover:text-[#5484f1]"
        />
      </div>
      <Swiper
        speed={600}
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
          nextEl: "#nav-right",
          prevEl: "#nav-left",
        }}
        modules={[Mousewheel, Navigation, Keyboard, Autoplay]}
        className="relative w-full h-screen"
      >
        {sliderData?.map(({ src, h1, nav, blurPic, type }) =>
          type === "video/mp4" ? (
            <SwiperSlide>
              <SliderVideo src={src} blurPic={blurPic} type="video/mp4" />
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
    </section>
  );
};

export default Header;
