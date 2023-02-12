import LoadToTop from "../../../../helper/LoadToTop";

import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SliderImg = ({ src, h1, p, navigate, blurPic }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <LazyLoadImage
        src={src}
        alt={h1}
        beforeLoad={() => setIsLoading(true)}
        afterLoad={() => setIsLoading(false)}
        className="absolute top-0 left-0 object-cover w-full h-[40vh] sm:h-full"
      />

      {isLoading ? (
        <BlurhashCanvas
          hash={blurPic}
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
      ) : (
        <>
          {/* First Part (Image) */}
          <div className="w-full h-full">
            <div className="absolute top-0 left-0 w-full h-[40vh] sm:h-full bg-gradient-to-t from-[#0225818C] to-transparent" />
            <div className="absolute flex flex-col items-center justify-end w-full h-[40vh] sm:h-full pb-5 sm:mx-10 sm:w-auto sm:pb-48 sm:justify-end md:mx-20">
              <h1 className="text-3xl tracking-wide text-white sm:tracking-normal sm:text-5xl md:text-5xl lg:text-7xl">
                {h1}
              </h1>
              <div className="flex justify-center w-full sm:justify-start group">
                <div className="border-b-2 border-white w-[4.5rem] self-center group-hover:border-opacity-0 transition duration-500 ease-in-out scale-x-100 md:w-[10rem]" />
                <p
                  onClick={() => {
                    navigate();
                    LoadToTop();
                  }}
                  className="flex flex-col text-lg tracking-wide text-white w-[8rem] text-center cursor-pointer"
                >
                  {p}
                  <span className="transition duration-500 ease-in-out scale-0 group-hover:scale-125 lg:group-hover:scale-150">
                    <div className="border-b-2" />
                  </span>
                </p>
                <div className="border-b-2 border-white w-[4.5rem] self-center group-hover:border-opacity-0 transition duration-500 ease-in-out scale-x-100 md:w-[10rem]" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SliderImg;
