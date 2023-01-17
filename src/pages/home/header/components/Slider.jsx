// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Lazy } from "swiper";

const Slider = ({ src }) => {
  return (
    <>
      <img
        alt={src}
        src={src}
        className="absolute top-0 left-0 object-cover w-full h-full"
      />
    </>
  );
};

export default Slider;
