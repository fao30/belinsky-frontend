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
        className="absolute top-0 left-0 object-cover w-full h-full"
      />

      {isLoading ? (
        <BlurhashCanvas hash={blurPic} className="w-full h-full" />
      ) : (
        <>
          <div className="absolute top-0 left-0 object-cover w-full h-full bg-gradient-to-t from-[#0225818C] to-transparent" />
          <div className="absolute flex flex-col justify-end mx-10 md:mx-20 pb-48 h-full">
            <h1 className="text-6xl text-white md:text-8xl ">{h1}</h1>
            <div className="flex justify-start w-full group">
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
        </>
      )}
    </>
  );
};

export default SliderImg;
