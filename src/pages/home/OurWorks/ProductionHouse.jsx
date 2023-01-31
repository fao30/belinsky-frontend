import { useNavigate } from "react-router-dom";
import { dataCardPHouse } from "../../our-work/constants/DataCardPHouse";
import CardSliderVid from "./components/CardSliderVid";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ProductionHouse = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full my-[5vh] lg:my-[10vh] xl:my-[15vh]">
      <h1 className="text-4xl tracking-wide text-center md:text-5xl xl:text-6xl mb-[3vh] text-[#022581]">
        Production House
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
          nextEl: "#nav-right",
          prevEl: "#nav-left",
        }}
        className="relative"
      >
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-between w-full md:px-4 z-10">
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
        {dataCardPHouse?.map(
          ({ srcvideo, h3, p, isHomepage, blurPic, nav, isDetails }) => (
            <SwiperSlide className="relative group">
              <CardSliderVid
                srcvideo={srcvideo}
                h3={h3}
                p={p}
                blurPic={blurPic}
                isHomepage={isHomepage}
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

export default ProductionHouse;
