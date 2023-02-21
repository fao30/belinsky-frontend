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
          nextEl: "#nav-right-ph",
          prevEl: "#nav-left-ph",
        }}
        className="relative"
      >
        {/* Custom Swiper Arrows */}
        <div className="absolute left-0 mx-2 lg:mx-4 xl:mx-16 top-[50%] translate-y-[-50%] z-10">
          <IoIosArrowBack
            size={35}
            id="nav-left-ph"
            className="text-white transition cursor-pointer hover:text-[#5484f1] md:w-fit md:h-[2.5rem] lg:h-[3rem]"
          />
        </div>
        <div className="absolute top-[50%] translate-y-[-50%] right-0 mx-2 lg:mx-4 xl:mx-16 z-10">
          <IoIosArrowForward
            size={35}
            id="nav-right-ph"
            className="text-white transition cursor-pointer hover:text-[#5484f1] md:w-fit md:h-[2.5rem] lg:h-[3rem]"
          />
        </div>
        {dataCardPHouse?.map(
          ({ srcvideo, h3, p, isHomepage, blurPic, nav, isDetails }) => (
            <SwiperSlide className="relative group">
              <CardSliderVid
                srcvideo={srcvideo}
                h3={h3}
                p={p}
                alt="belinsky production house menante traveloka short movie"
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
