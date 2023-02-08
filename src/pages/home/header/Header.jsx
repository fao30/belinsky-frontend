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
    // h-[90vh] for mobile, min-h-screen for desktop
    <section className="relative w-full h-[90vh] sm:min-h-screen">
      {/* Custom Swiper Arrows */}
      <div className="hidden sm:absolute left-0 top-[50%] translate-y-[-50%] z-10 px-2 md:px-4">
        <IoIosArrowBack
          size={40}
          id="nav-left-header"
          className="text-white transition cursor-pointer hover:text-[#5484f1]"
        />
      </div>
      <div className="hidden sm:absolute top-[50%] translate-y-[-50%] right-0 z-10 px-2 md:px-4">
        <IoIosArrowForward
          size={40}
          id="nav-right-header"
          className="text-white transition cursor-pointer hover:text-[#5484f1]"
        />
      </div>
      <Swiper
        speed={1000}
        // autoplay={{
        //   delay: 5000,
        //   pauseOnMouseEnter: true,
        // }}
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
        className="relative w-full h-screen"
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
    </section>
  );
};

export default Header;
