import React, { useState } from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { carouselData } from "./Carousel";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === carouselData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="relative w-full min-h-screen group">
      {/* carousel/slider bg image */}
      {/* {carouselData.map(({ image, title }) => (
        <img
          src={carouselData[currentIndex].image}
          alt="bg-home"
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
      ))} */}

      <div
        style={{ backgroundImage: `url(${carouselData[currentIndex].image})` }}
        className="transition ease-in-out duration=700 absolute top-0 left-0 w-full h-full bg-cover"
      ></div>

      {/* bg overlay */}
      <div className="absolute top-0 left-0 w-full min-h-screen bg-black/50" />

      {/* Content */}
      <div className="absolute top-[60%] left-[20%] md:left-[12%] md:top-[60%] text-white">
        <h1 className="text-5xl md:text-7xl xl:text-8xl drop-shadow-2xl text-[background: #F5F5F5]">
          <span className="font-semibold">Menantea</span>
        </h1>
        <div className="relative group w-[95%]">
          <p className="text-sm text-center">Explore Work</p>
          {/* line left */}
          <div className="transition duration-500 absolute border-b-[2px] w-[28%] md:w-[35%] left-1 top-[50%] opacity-100 group-hover:opacity-0" />
          {/* line right */}
          <div className="transition duration-500 absolute border-b-[2px] w-[28%] md:w-[35%] right-1 top-[50%] opacity-100 group-hover:opacity-0" />
          {/* line bottom */}
          <div className="transition duration-500 w-0 absolute border-b-[2px] group-hover:w-[40%] group-hover:md:w-[29%] group-hover:left-[30%] group-hover:md:left-[35%] opacity-0 group-hover:opacity-100"></div>
        </div>
      </div>

      {/* right arrow */}
      <div className="transition ease-in-out duration-500 absolute top-[50%] right-[5%] opacity-0 group-hover:opacity-100">
        <BsArrowRightCircle
          size={40}
          color="white"
          className="cursor-pointer"
          onClick={nextSlide}
        />
      </div>
      {/* left arrow */}
      <div className="transition ease-in-out duration-500 absolute top-[50%] left-[5%] opacity-0 group-hover:opacity-100">
        <BsArrowLeftCircle
          size={40}
          color="white"
          className="cursor-pointer"
          onClick={prevSlide}
        />
      </div>
    </section>
  );
};

export default Home;
