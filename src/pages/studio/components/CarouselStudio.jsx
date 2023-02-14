import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BlurhashCanvas } from "react-blurhash";

const CarouselStudio = ({ src, blurPic }) => {
  const [isLoading, SetIsLoading] = useState(false);

  return (
    <>
      <div className="relative carousel-item">
        <LazyLoadImage
          src={src}
          beforeLoad={() => SetIsLoading(true)}
          afterLoad={() => SetIsLoading(false)}
          alt="Belinsky Studio"
          className="object-cover w-[15rem] h-[25rem] md:w-[30rem] md:h-[40rem] lg:w-[30rem] lg:h-[40rem] xl:w-[27.5rem] xl:h-[37.5rem]"
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
    </>
  );
};

export default CarouselStudio;
