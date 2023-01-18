import video from "./assets/Hero_Video.webm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Lazy } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// components
import SliderImg from "./components/SliderImg";
import SliderVideo from "./components/SliderVideo";

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
        {sliderData.map(({ src, h1 }) =>
          src === video ? (
            <SwiperSlide>
              <SliderVideo src={src} />
            </SwiperSlide>
          ) : (
            <SwiperSlide>
              <SliderImg src={src} h1={h1} p="Explore Work" />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default Header;
