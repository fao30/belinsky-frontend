import React from "react";

const PodcastCarousel = ({ src }) => {
  return (
    <div className="carousel-item">
      <img
        src={src}
        className="h-[12.5rem] sm:h-[22rem] md:h-[25rem] lg:h-[30rem] xl:h-[45rem]"
        alt="podcast studio"
      />
    </div>
  );
};

export default PodcastCarousel;
