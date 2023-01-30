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
import "swiper/css/pagination";

// constants
import { dataCarouselPHouse } from "../../our-work/constants/DataCarouselPHouse";

const ProductionHouse = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full my-[5vh] lg:my-[10vh] xl:my-[15vh]">
      <h1 className="text-4xl tracking-wide text-center md:text-5xl xl:text-6xl mb-[3vh] text-[#022581] ">
        Production House
      </h1>
      <Swiper
        modules={[Navigation, Mousewheel, Keyboard]}
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
        }}
        loop={true}
        scrollbar={{ draggable: true }}
        navigation={{
          nextEl: "#nav-right",
          prevEl: "#nav-left",
        }}
        className="relative"
      >
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-between w-full sm:w-[88%] md:w-[85%] lg:w-[83%] z-10">
          <IoIosArrowBack
            size={50}
            id="nav-left"
            className="cursor-pointer text-[#022581]"
          />
          <IoIosArrowForward
            size={50}
            id="nav-right"
            className="cursor-pointer text-[#022581]"
          />
        </div>
        {dataCardPHouse?.map(
          ({ srcvideo, h3, p, isHomepage, blurPic, nav, isDetails }) => (
            <SwiperSlide>
              <div className="relative w-full h-full py-5">
                {/* <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 flex justify-between w-full px-2 md:px-4">
                  <IoIosArrowBack
                    size={40}
                    id="nav-left"
                    className="text-black transition cursor-pointer hover:text-[#5484f1]"
                  />
                  <IoIosArrowForward
                    size={40}
                    id="nav-right"
                    className="text-black transition cursor-pointer hover:text-[#5484f1]"
                  />
                </div> */}
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  alt=""
                  // onLoadStart={() => setIsLoadingVideo(true)}
                  // onLoadedData={() => setIsLoadingVideo(false)}
                  className="object-cover w-[100vw] h-[35vh] md:h-[45vh] lg:h-[55vh] xl:h-[70vh] xl:w-[95%] md:drop-shadow-[10px_10px_5px_gray] mx-auto"
                >
                  <source src={srcvideo} type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default ProductionHouse;

/* 
<CardSliderVid
                srcvideo={srcvideo}
                h3={h3}
                p={p}
                isHomepage={isHomepage}
                blurPic={blurPic}
                isDetails={isDetails}
                navigate={() => {
                  navigate(`${nav}`);
                }}
              /> 
*/

// MY CODE width/height too big

/*
 {dataCardPHouse?.map(
          ({ srcvideo, h3, p, isHomepage, blurPic, nav, isDetails }) => (
            <SwiperSlide>
              <div className="relative w-full h-full py-5">
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  alt=""
                  // onLoadStart={() => setIsLoadingVideo(true)}
                  // onLoadedData={() => setIsLoadingVideo(false)}
                  className="object-cover w-[100vw] h-[35vh] md:h-[45vh] lg:h-[55vh] xl:h-[70vh] xl:w-[95%] md:drop-shadow-[10px_10px_5px_gray] mx-auto"
                >
                  <source src={srcvideo} type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
          )
        )}
*/
