import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardsVisionMission = ({ src, h1, p, blurPic }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="md:w-[80%] lg:w-[60%] h-full">
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
        <div className="flex justify-center max-md:px-[4vw] px-8 pt-4">
          <div className="flex flex-col">
            <h1 className="font-black uppercase text-2xl lg:text-3xl">{h1}</h1>
            <p className="mt-1 font-bold text-base md:text-xl">{p}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsVisionMission;
