import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardsVisionMission = ({ src, h1, p, blurPic }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="md:w-[60%] md:h-[28rem] lg:h-[35rem] xl:h-[45rem] space-y-5">
        <div className="relative">
          <LazyLoadImage
            loading="lazy"
            alt=""
            src={src}
            beforeLoad={() => setIsLoading(true)}
            afterLoad={() => setIsLoading(false)}
            className="object-cover transition duration-300 ease-in-out grayscale hover:grayscale-0"
          />
          {isLoading ? (
            <BlurhashCanvas
              hash={blurPic}
              className="absolute top-0 object-cover w-full h-full transition duration-300 ease-in-out grayscale hover:grayscale-0"
            />
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col m-5 md:m-10">
          <h1 className="text-xl font-black uppercase md:text-2xl xl:text-3xl">
            {h1}
          </h1>
          <p className="text-sm font-bold md:text-md xl:text-xl lg:text-lg">
            {p}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardsVisionMission;
