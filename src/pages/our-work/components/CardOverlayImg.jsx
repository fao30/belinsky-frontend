import LoadToTop from "../../../helper/LoadToTop";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

const CardOverlayImg = ({ src, h3, p, navigate, blurPic, isDetails }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="h-[20rem] w-full lg:w-[27rem] bg-slate-400 relative group rounded-[1rem]">
        <LazyLoadImage
          src={src}
          alt=""
          beforeLoad={() => setIsLoading(true)}
          afterLoad={() => setIsLoading(false)}
          className="absolute object-cover w-full h-full rounded-[1rem]"
        />
        {isLoading ? (
          <BlurhashCanvas
            hash={blurPic}
            className="w-full h-full rounded-[1rem]"
          />
        ) : (
          <div
            className={`absolute flex flex-col  rounded-[1rem] justify-end z-10 w-full h-full bg-[#02258191]/50 text-[#FFFFFF] px-6 py-6 sm:px-8 sm:py-8 text-sm  group-hover:opacity-0 transition-all duration-300 ${
              isDetails ? "cursor-pointer" : ""
            }`}
            onClick={() => {
              if (isDetails) {
                navigate();
                LoadToTop();
              }
            }}
          >
            <h3 className="text-[22px] text-white w-full">{h3}</h3>
            <p className="mt-2 w-full pr-6 drop-shadow-md text-[14px]">{p}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CardOverlayImg;
