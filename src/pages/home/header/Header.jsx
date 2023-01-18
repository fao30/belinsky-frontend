import video from "./assets/Hero_Video.webm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Lazy } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

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
        {sliderData.map(({ src, h1, p }) =>
          src === video ? (
            <SwiperSlide>
              <video
                autoPlay
                loop
                muted
                src={src}
                className="absolute top-0 left-0 object-cover w-full h-full"
              ></video>
              <div className="absolute flex flex-col justify-start h-full md:left-[3.5rem] gap-y-6 px-4 md:px-0 top-[60%]">
                <h1
                  className="text-2xl text-white uppercase"
                  // style={{ textShadow: "1px 1px red" }}
                >
                  Taking off to a sky,
                  <br className="hidden md:inline-block" /> where creativity is
                  limitless
                </h1>
                <p className="text-lg leading-4 text-white font-[500]">
                  Given that Belinsky is both a production house and a creative
                  <br className="hidden md:inline-block" />
                  studio, our areas of expertise include producing both
                  <br className="hidden md:inline-block" /> photography and
                  filmmaking
                </p>
                <button className="self-start px-7 py-3 bg-[#5484F2] text-white font-semibold hover:bg-[#4a6cb3] active:bg-[#5484F2]">
                  Contact Us
                </button>
              </div>
            </SwiperSlide>
          ) : (
            <SwiperSlide>
              <img
                src={src}
                alt={src}
                className="absolute top-0 left-0 object-cover w-full h-full"
              />

              {/* bg overlay */}
              <div className="absolute top-0 left-0 object-cover w-full h-full bg-gradient-to-t from-[#0225818C] to-transparent" />

              {/* H1, Explore Work */}
              <div className="absolute left-[5%] sm:left-[10%] top-[60%] lg:top-[65%] flex flex-col justify-start h-full">
                <h1 className="text-6xl md:text-8xl text-white font-[700]">
                  {h1}
                </h1>
                <div className="flex justify-start w-full group">
                  <div className="border-b-2 border-white w-[4.5rem] self-center group-hover:border-opacity-0 transition duration-500 ease-in-out scale-x-100 md:w-[10rem]" />
                  <p className="flex flex-col text-lg tracking-wide text-white w-[8rem] text-center">
                    Explore Work
                    <span className="transition duration-500 ease-in-out scale-0 group-hover:scale-100 lg:group-hover:scale-150">
                      <div className="border-b-2" />
                    </span>
                  </p>
                  <div className="border-b-2 border-white w-[4.5rem] self-center group-hover:border-opacity-0 transition duration-500 ease-in-out scale-x-100 md:w-[10rem]" />
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default Header;
