import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BlurhashCanvas } from "react-blurhash";

const PodcastCarousel = ({ src, blurPic }) => {
  const [isLoading, SetIsLoading] = useState(false);
  return (
    <div className="relative carousel-item">
      <LazyLoadImage
        src={src}
        beforeLoad={() => SetIsLoading(true)}
        afterLoad={() => SetIsLoading(false)}
        className="h-[22rem] md:h-[25rem] lg:h-[30rem] xl:h-[45rem]"
        alt="podcast studio  Belinsky Studio  backgroun color self studio studio2 turah parthayana  sijabat jerome polin"
      />
      {isLoading ? (
        <BlurhashCanvas
          hash={blurPic}
          className="absolute object-cover w-full h-full"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default PodcastCarousel;
