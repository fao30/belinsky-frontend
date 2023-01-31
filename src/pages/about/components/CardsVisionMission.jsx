import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardsVisionMission = ({ src, h1, p, blurPic }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[65%] h-full lg:mx-[8vw] relative">
        {/* <div className="relative"> */}
        <LazyLoadImage
          loading="lazy"
          alt=""
          src={src}
          beforeLoad={() => setIsLoading(true)}
          afterLoad={() => setIsLoading(false)}
          className="object-cover w-full h-full transition duration-300 ease-in-out grayscale hover:grayscale-0"
        />
        {isLoading ? (
          <BlurhashCanvas
            hash={blurPic}
            className="absolute top-0 object-cover w-full h-full transition duration-300 ease-in-out grayscale hover:grayscale-0"
          />
        ) : (
          <>
            {" "}
            <div className="flex justify-center max-md:px-[4vw] max-md:py-[4vw] px-8 pt-8">
              <div className="flex flex-col">
                <h1 className="uppercase aboutTitleSize">{h1}</h1>
                <p className="mt-1 aboutSize">{p}</p>
              </div>
            </div>
          </>
        )}
        {/* </div> */}
        {/* <div className="flex justify-center max-md:px-[4vw] max-md:py-[4vw] px-8 pt-8">
          <div className="flex flex-col">
            <h1 className="uppercase aboutTitleSize">{h1}</h1>
            <p className="mt-1 aboutSize ">{p}</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CardsVisionMission;
