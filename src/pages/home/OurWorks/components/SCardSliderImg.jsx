import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadToTop from "../../../../helper/LoadToTop";

const SCardSliderImg = ({
  src,
  h3,
  p,
  isHomepage,
  blurPic,
  isDetails,
  navigate,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className=" w-[50rem] h-[20rem] bg-slate-400 relative group">
      <LazyLoadImage
        src={src}
        alt="belinsky-studio"
        beforeLoad={() => setIsLoading(true)}
        afterLoad={() => setIsLoading(false)}
        className="absolute object-cover w-full h-full"
      />
      {isLoading ? (
        <BlurhashCanvas hash={blurPic} className="w-full h-full" />
      ) : (
        <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-[#0225818C] text-white ">
          <div
            onClick={() => {
              if (isDetails) {
                navigate();
                LoadToTop();
              }
            }}
            className={`flex flex-col items-center pt-[8.5rem] xl:pt-72 px-6 sm:pt-[8rem] sm:px-6 md:pt-[15rem] md:px-12 justify-start w-full h-full text-left text-white ${
              isDetails ? "cursor-pointer" : ""
            }`}
          >
            <h3 className="w-full text-xl     text-white md:text-4xl ">{h3}</h3>
            <p className="w-full mt-2 text-xs md:text-lg drop-shadow-md">{p}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SCardSliderImg;
