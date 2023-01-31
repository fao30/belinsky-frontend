import CardSliderImg from "./components/CardSliderImg";
import { dataCardBStudio } from "../../our-work/constants/DataCardBStudio";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const BelinskyStudio = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full mt-[10vh] lg:mt-[20vh] xl:mt-[30vh] ">
      <h1 className="text-4xl tracking-wide text-center md:text-5xl xl:text-6xl mb-[3vh] text-[#022581] ">
        Belinsky Studio
      </h1>
      <Swiper
        modules={[Navigation, Mousewheel, Keyboard]}
        lazy={true}
        loop={true}
        speed={1000}
        mousewheel={{
          forceToAxis: true,
        }}
        keyboard={{
          enabled: true,
        }}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          // sm
          640: {
            slidesPerView: 1.3,
          },
          // xl
          1280: {
            slidesPerView: 1.5,
            spaceBetween: 60,
          },
        }}
        navigation={{
          nextEl: "#nav-right-bs",
          prevEl: "#nav-left-bs",
        }}
        className="relative"
      >
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-between w-full md:px-4 z-10">
          <IoIosArrowBack
            size={40}
            id="nav-left-bs"
            className="text-white transition cursor-pointer hover:text-[#5484f1]"
          />
          <IoIosArrowForward
            size={40}
            id="nav-right-bs"
            className="text-white transition cursor-pointer hover:text-[#5484f1]"
          />
        </div>
        {dataCardBStudio?.map(
          ({ src, h3, p, isHomepage, blurPic, nav, isDetails }) => (
            <SwiperSlide className="relative group">
              <CardSliderImg
                src={src}
                h3={h3}
                p={p}
                isHomepage={isHomepage}
                blurPic={blurPic}
                isDetails={isDetails}
                navigate={() => {
                  navigate(`${nav}`);
                }}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default BelinskyStudio;
