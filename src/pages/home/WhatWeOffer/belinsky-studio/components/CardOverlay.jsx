import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

const CardOverlay = ({ src, h2, h3, p, blurPic }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative w-[100%] lg:w-[32%] h-[35rem] group">
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
        <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-[#0225818C] text-white pt-[50%] md:pt-[80%] lg:pt-[45%]">
          <h2 className="absolute z-10 text-2xl md:text-xl lg:text-3xl font-bold text-white transition duration-500 ease-in-out top-5 left-5 group-hover:opacity-0 drop-shadow-[0_1px_1px_black] ">
            {h2}
          </h2>
          <h3 className="text-2xl font-black text-center text-white lg:text-2xl xl:text-5xl">
            {h3}
          </h3>
          <p className="mx-10 md:mx-2 text-lg md:text-sm lg:mx-10 lg:font-[600] tracking-wider text-center text-white lg:text-lg">
            {p}
          </p>
        </div>
      )}
    </div>
  );
};

export default CardOverlay;
