import React, { useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { CarouselData } from "../../home/header/components/CarouselData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BlurhashCanvas } from "react-blurhash";

const Header = () => {
  // Lazy Loader
  const [isLoading, setIsLoading] = useState(false);

  // Slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? CarouselData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === CarouselData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="relative w-full min-h-screen">
      {/* carousel/slider bg image */}
      {CarouselData.map(({ image, title }) => (
        <>
          <LazyLoadImage
            src={CarouselData[currentIndex].image}
            alt="bg-home"
            className="absolute top-0 left-0 object-cover w-full h-full"
            beforeLoad={() => setIsLoading(true)}
            afterLoad={() => setIsLoading(false)}
          />
          {isLoading ? (
            <BlurhashCanvas
              hash={CarouselData[currentIndex].blurPic}
              className="absolute top-0 left-0 object-cover w-full h-full"
            />
          ) : (
            <></>
          )}
        </>
      ))}

      {/* <div
        style={{ backgroundImage: `url(${CarouselData[0].image})` }}
        className="transition ease-in-out duration=700 top-0 left-0 w-full h-full bg-cover"
      ></div> */}

      {/* bg overlay */}
      <div className="relative top-0 left-0 w-full min-h-screen bg-[#0225818C]" />

      {/* Content */}
      <div className="absolute bottom-[20%] left-[20%] md:left-[12%] md:top-[60%] text-white">
        <h1 className="text-5xl md:text-7xl xl:text-8xl drop-shadow-2xl text-[background: #F5F5F5]">
          <span className="font-semibold">Menantea</span>
        </h1>
        <div className="relative group w-[95%]">
          <p className="text-sm text-center cursor-pointer">Explore Work</p>
          {/* line left */}
          <div className="transition duration-500 absolute border-b-[2px] w-[28%] md:w-[35%] left-1 top-[50%] opacity-100 group-hover:opacity-0" />
          {/* line right */}
          <div className="transition duration-500 absolute border-b-[2px] w-[28%] md:w-[35%] right-1 top-[50%] opacity-100 group-hover:opacity-0" />
          {/* line bottom */}
          <div className="transition duration-500 w-0 absolute border-b-[2px] group-hover:w-[40%] group-hover:md:w-[29%] group-hover:left-[30%] group-hover:md:left-[35%] opacity-0 group-hover:opacity-100"></div>
        </div>

        <div className="relative mt-3">
          {/* right arrow */}
          <div className="transition ease-in-out duration-500 absolute left-[50%] md:right-[40%] opacity-100 group-hover:opacity-100">
            <RiArrowRightSLine
              size={30}
              color="white"
              className="cursor-pointer"
              onClick={nextSlide}
            />
          </div>
          {/* left arrow */}
          <div className="transition ease-in-out duration-500 absolute right-[50%] md:left-[40%] opacity-100 group-hover:opacity-100">
            <RiArrowLeftSLine
              size={30}
              color="white"
              className="cursor-pointer"
              onClick={prevSlide}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;