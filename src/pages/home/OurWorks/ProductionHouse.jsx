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

import AspectRatio from "@mui/joy/AspectRatio";

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
            <SwiperSlide className="relative">
              <AspectRatio className="relative p-2 drop-shadow-[2px_2px_4px_gray]">
                <div className="w-full h-full">
                  <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    alt=""
                    // onLoadStart={() => setIsLoadingVideo(true)}
                    // onLoadedData={() => setIsLoadingVideo(false)}
                    className="object-cover w-full h-full"
                  >
                    <source src={srcvideo} type="video/mp4" />
                  </video>
                  <div className="absolute flex flex-col justify-end z-10 w-full h-full bg-[#02258191]/50 text-[#FFFFFF] px-4 py-4 text-sm md:p-10">
                    <h3>{h3}</h3>
                    <p>{p}</p>
                  </div>
                </div>
              </AspectRatio>
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

/*
object-cover w-full h-[35vh] md:h-[45vh] lg:h-[55vh] xl:h-[70vh] xl:w-[95%] drop-shadow-[10px_10px_5px_gray] mx-auto
*/

// <AspectRatio className="object-cover w-full h-full drop-shadow-[10px_10px_5px_gray]">
// <div className="relative w-full h-full">
//   <video
//     loop
//     muted
//     autoPlay
//     playsInline
//     alt=""
//     // onLoadStart={() => setIsLoadingVideo(true)}
//     // onLoadedData={() => setIsLoadingVideo(false)}
//     className="object-cover w-full h-full"
//   >
//     <source src={srcvideo} type="video/mp4" />
//   </video>
//   {/* <div className="absolute w-full h-[35vh] md:h-[45vh] lg:h-[55vh] xl:h-[70vh] xl:w-[95%] drop-shadow-[10px_10px_5px_gray] bg-blue-500/50"></div> */}
//   <div className="absolute top-0 w-full h-full transition duration-500 bg-blue-400/50 hover:opacity-0">
//     {h3}
//   </div>
// </div>
// </AspectRatio>

// CORRECT

// {dataCardPHouse?.map(
//   ({ srcvideo, h3, p, isHomepage, blurPic, nav, isDetails }) => (
//     <SwiperSlide className="relative">
//       <AspectRatio className="">
//         <div className="w-full h-full rounded-2xl">
//           <video
//             loop
//             muted
//             autoPlay
//             playsInline
//             alt=""
//             // onLoadStart={() => setIsLoadingVideo(true)}
//             // onLoadedData={() => setIsLoadingVideo(false)}
//             className="object-cover w-full h-full rounded-2xl"
//           >
//             <source src={srcvideo} type="video/mp4" />
//           </video>
//         </div>
//       </AspectRatio>
//     </SwiperSlide>
//   )
// )}
