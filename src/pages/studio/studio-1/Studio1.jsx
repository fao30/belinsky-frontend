import CarouselStudio from "./components/CarouselStudio";
import { dataCarStudio1 } from "./constants/DataCarStudio1";
import PriceList from "./components/PriceList";
import { AspectRatio } from "@mui/joy";

const Studio1 = () => {
  return (
    <section className="w-full min-h-screen text-[#022581]">
      <div className="flex flex-col items-center w-full mt-10 md:mt-20">
        <h1 className="text-4xl font-black md:text-5xl lg:text-6xl">
          Studio. 1
        </h1>
        <p className="font-bold text-md md:text-lg lg:text-xl">
          3 Thematic Korean background + Makeup Room
        </p>
      </div>
      <div className="flex justify-center w-full mt-7 md:mt-15 gap-x-4 md:gap-x-6 lg:gap-x-10">
        <p className="text-sm md:text-lg">Length: 8,2m</p>
        <span className="text-sm font-normal md:text-lg">|</span>
        <p className="text-sm md:text-lg">Height: 3m</p>
        <span className="text-sm font-normal md:text-lg">|</span>
        <p className="text-sm md:text-lg">Width: 9,4m</p>
      </div>

      {/* Carousel */}
      <div className="carousel carousel-center gap-[1.25rem] md:gap-[3rem] bg-transparent h-full w-full mt-1 px-40">
        {dataCarStudio1.map(({ img }) => {
          return <CarouselStudio src={img} />;
        })}
      </div>

      {/* Pricelist */}
      <PriceList />

      {/* Video */}
      <div className="w-full h-full">
        <AspectRatio sx={{ width: 500 }}>
          <h1>16/9</h1>
        </AspectRatio>
      </div>
    </section>
  );
};

export default Studio1;
