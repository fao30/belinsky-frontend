import LoadToTop from "../../../helper/LoadToTop";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

const CardOverlayImg = ({ src, h3, p, navigate, blurPic }) => {
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
          <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-[#0225818C] text-white rounded-[1rem]">
            <div
              onClick={() => {
                navigate();
                LoadToTop();
              }}
              className="flex flex-col items-center pt-[11.5rem] sm:pt-48 pl-7 justify-start w-full h-full text-left text-white cursor-pointer"
            >
              <h3 className="text-[20px] font-bold text-white w-full">{h3}</h3>
              <p className="w-full pr-6 drop-shadow-md text-[14px]">{p}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardOverlayImg;
