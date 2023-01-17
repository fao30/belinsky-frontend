import video from "./assets/Hero_Video.webm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Lazy } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import img1 from "./assets/Background_1.png";
import img2 from "./assets/Background_2.png";
import img3 from "./assets/Background_3.png";

import Slider from "./components/Slider";
import { sliderData } from "./constants/SliderData";

const Header = () => {
  return (
    <section className="min-h-screen w-full mb-[10vh] relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        // mousewheel={true}
        navigation={true}
        lazy={true}
        modules={[Mousewheel, Navigation, Lazy]}
        className="relative w-full h-screen"
      >
        {/* Video */}
        <SwiperSlide>
          <video
            autoPlay
            loop
            muted
            src={video}
            className="absolute top-0 left-0 object-cover w-full h-full"
          ></video>
          <div className="absolute flex flex-col justify-center h-full left-[3.5rem] gap-y-4">
            <h1 className="text-5xl text-white uppercase">
              Taking off to a sky,
              <br /> where creativity is limitless
            </h1>
            <p className="text-lg text-white">
              Given that Belinsky is both a production house and a creative
              <br />
              studio, our areas of expertise include producing both
              <br /> photography and filmmaking
            </p>
            <button className="self-start px-7 py-3 bg-[#5484F2] text-white font-semibold">
              Contact Us
            </button>
          </div>
        </SwiperSlide>

        {/* images */}
        {sliderData.map(({ src }) => {
          return (
            <SwiperSlide>
              <img src={src} alt={src} />
            </SwiperSlide>
          );
        })}

        <div className="absolute flex flex-col justify-center h-full left-[3.5rem] gap-y-4">
          <h1 className="text-5xl text-white uppercase">
            Taking off to a sky,
            <br /> where creativity is limitless
          </h1>
          <p className="text-lg text-white">
            Given that Belinsky is both a production house and a creative
            <br />
            studio, our areas of expertise include producing both
            <br /> photography and filmmaking
          </p>
          <button className="self-start px-7 py-3 bg-[#5484F2] text-white font-semibold">
            Contact Us
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default Header;
