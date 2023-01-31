import { useState } from "react";
import logoBelinsky from "../../../../assets/logo-belinsky.png";
import { BlurhashCanvas } from "react-blurhash";
import LoadToTop from "../../../../helper/LoadToTop";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AspectRatio from "@mui/joy/AspectRatio";

const CardSliderVid = ({
  srcvideo,
  h3,
  p,
  isHomepage,
  blurPic,
  isDetails,
  navigate,
}) => {
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);

  return (
    <AspectRatio
      className={`relative p-2 drop-shadow-[2px_2px_4px_gray] ${
        isHomepage ? "" : "hidden"
      }`}
    >
      <div className="w-full h-full">
        {isLoadingVideo ? (
          <div className="absolute z-10 w-full h-full">
            <BlurhashCanvas hash={blurPic} className="w-full h-full" />
            <img
              alt=""
              src={logoBelinsky}
              className="absolute w-24 animate-bounce left-16 top-16"
            />
          </div>
        ) : (
          <></>
        )}
        <video
          loop
          muted
          autoPlay
          playsInline
          alt=""
          onLoadStart={() => setIsLoadingVideo(true)}
          onLoadedData={() => setIsLoadingVideo(false)}
          className="absolute object-cover w-full h-full"
        >
          <source src={srcvideo} type="video/mp4" />
        </video>
        {!isLoadingVideo ? (
          <div
            className={`absolute flex flex-col justify-end z-10 w-full h-full bg-[#02258191]/50 text-[#FFFFFF] px-6 py-6 sm:px-4 sm:py-4 text-sm md:p-10 group-hover:opacity-0 transition-all duration-300 ${
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
            <p className="lg:w-[50%] w-full mt-1 text-sm md:text-lg drop-shadow-md">
              {p}
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </AspectRatio>
  );
};

export default CardSliderVid;
