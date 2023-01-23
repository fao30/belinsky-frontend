import React from "react";

const PodcastCarousel = ({ src }) => {
  return (
    <div className="carousel-item">
      <img src={src} />
    </div>
  );
};

export default PodcastCarousel;
