import video from "./assets/Hero_Video.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Lazy } from "swiper";

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
    <section className="min-h-screen w-full mb-[10vh] relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        // mousewheel={true}
        navigation={true}
        modules={[Mousewheel, Navigation]}
        className="relative w-full h-screen"
      >
        {sliderData.map(({ src, h1, nav, blurPic }) =>
          src === video ? (
            <SwiperSlide>
              <SliderVideo src={src} blurPic={blurPic} />
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
