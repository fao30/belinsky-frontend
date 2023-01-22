import CarouselStudio from "./components/CarouselStudio";
import { carDataStudio1 } from "./constants/CarDataStudio1";

const Studio1 = () => {
  return (
    <section className="w-full min-h-screen text-[#022581]">
      <div className="flex flex-col items-center w-full mt-10 md:mt-20">
        <h1 className="text-3xl font-black md:text-4xl lg:text-5xl">
          Studio. 1
        </h1>
        <p className="font-bold text-md md:text-lg lg:text-xl">
          3 Thematic Korean background + Makeup Room
        </p>
      </div>
      <div className="flex justify-center w-full mt-7 md:mt-15 gap-x-3 md:gap-x-5 lg:gap-x-10">
        <p className="text-sm md:text-md">Length: 8,2m</p>
        <p className="border-x-[2px] border-[#022581] px-3 md:px-5 lg:px-10 text-sm md:text-md">
          Height: 3m
        </p>
        <p className="text-sm md:text-md">Width: 9,4m</p>
      </div>

      {/* Carousel */}
      <div className="carousel carousel-center gap-[1.25rem] md:gap-[3rem] bg-transparent h-full w-full mt-1 px-40">
        {carDataStudio1.map(({ img }) => {
          return <CarouselStudio src={img} />;
        })}
      </div>
    </section>
  );
};

export default Studio1;
