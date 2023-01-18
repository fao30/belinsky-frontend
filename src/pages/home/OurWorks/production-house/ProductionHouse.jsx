import { sliderDataCard } from "./constants/DataCardSlider";
import CardSlider from "./components/CardSlider";
import AspectRatio from "@mui/joy/AspectRatio";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

const ProductionHouse = () => {
  return (
    <section className="w-full min-h-screen p-[4vw]">
      <h1 className="text-[#022581] text-4xl lg:text-6xl text-center tracking-wide">
        Production House
      </h1>
      <div className="flex w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide mt-[5vh]">
        {/* <div className="bg-[#02258191]/50 absolute h-full w-full group-hover:opacity-0 transition ease-in-out duration-300" /> */}
        {sliderDataCard.map(({ src }) => (
          <>
            <video
              autoPlay
              loop
              muted
              className="px-4 md:px-8 lg:px-12 duration-300 ease-in-out w-[100%] md:w-[70%] lg:w-[60%]"
            >
              <source src={src} />
            </video>
          </>
        ))}
      </div>
    </section>
  );
};

export default ProductionHouse;
