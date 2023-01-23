import React from "react";

const PodcastCarousel = ({ src }) => {
  return (
    <div className="carousel-item">
      <img src={src} className="object-contain" />
    </div>
  );
};

export default PodcastCarousel;
