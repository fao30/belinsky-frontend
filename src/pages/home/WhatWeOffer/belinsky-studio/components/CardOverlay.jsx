import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import LoadToTop from "../../../../../helper/LoadToTop";

const CardOverlay = ({ src, h2, h3, p, blurPic, navigate }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative w-[100%]  md:w-[33%] lg:w-[32%] h-[40rem] md:h-[30rem] lg:h-[35rem] xl:h-[42rem] group">
      <LazyLoadImage
        src={src}
        alt="belinsky-studio"
        beforeLoad={() => setIsLoading(true)}
        afterLoad={() => setIsLoading(false)}
        className="absolute object-cover w-full h-full"
      />

      {isLoading ? (
        <BlurhashCanvas hash={blurPic} className="absolute w-full h-full" />
      ) : (
        <div
          className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-[#0225818C] text-white cursor-pointer"
          onClick={() => {
            navigate();
            LoadToTop();
          }}
        >
          <h2 className="absolute z-10 text-2xl md:text-xl lg:text-3xl font-bold text-white transition duration-500 ease-in-out top-5 left-5 group-hover:opacity-0 drop-shadow-[0_1px_1px_black] ">
            {h2}
          </h2>
          <div className="flex justify-center items-center text-center w-full h-full flex-col">
            <h3 className="text-3xl font-black text-center xl:text-4xl">
              {h3}
            </h3>
            <p className="mt-[1vh] mx-[2vw] md:mx-[1vw] text-lg md:text-sm  lg:font-[600] tracking-wider text-center lg:text-lg">
              {p}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardOverlay;
