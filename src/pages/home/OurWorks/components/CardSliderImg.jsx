import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadToTop from "../../../../helper/LoadToTop";
import AspectRatio from "@mui/joy/AspectRatio";

const CardSliderImg = ({
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
    <AspectRatio
      className={`p-2 drop-shadow-[2px_2px_4px_gray] ${
        isHomepage ? "" : "hidden"
      }`}
    >
      <div className="xl:h-[28rem] xl:w-[45rem] h-[15rem] w-[22rem] sm:h-[15rem] sm:w-[30rem] md:h-[25rem] md:w-[40rem] bg-slate-400 relative group">
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
          <div
            className={`absolute flex flex-col justify-end z-10 w-full h-full bg-[#02258191]/50 text-[#FFFFFF] px-5 pb-5 text-sm md:p-10 group-hover:opacity-0 transition-all duration-300 ${
              isDetails ? "cursor-pointer" : ""
            }`}
            onClick={() => {
              if (isDetails) {
                navigate();
                LoadToTop();
              }
            }}
          >
            <h3 className="w-full text-2xl text-white md:text-4xl ">{h3}</h3>
            <p className="sm:mt-2 lg:w-[50%] w-full text-sm md:text-lg drop-shadow-md">
              {p}
            </p>
          </div>
        )}
      </div>
    </AspectRatio>
  );
};

export default CardSliderImg;
