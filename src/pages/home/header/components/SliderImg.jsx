import LoadToTop from "../../../../helper/LoadToTop";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { useState, useRef } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SliderImg = ({ src, h1, p, navigate, blurPic }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

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
          <div className="absolute left-[5%] sm:left-[10%] top-[60%] lg:top-[65%] flex flex-col justify-start h-full">
            <h1 className="text-6xl md:text-8xl text-white font-[700]">{h1}</h1>
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

            {/* Custom Arrow Swiper */}
            {/* <div className="flex items-center mt-5 pl-52">
              <IoIosArrowBack
                size={30}
                className="text-white drop-shadow-[0_1px_1px_black]"
                ref={swiperNavPrevRef}
              />
              <IoIosArrowForward
                size={30}
                className="text-white drop-shadow-[0_1px_1px_black]"
                ref={swiperNavNextRef}
              />
            </div> */}
          </div>
        </>
      )}
    </>
  );
};

export default SliderImg;
