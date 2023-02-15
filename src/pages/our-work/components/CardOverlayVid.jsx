import LoadToTop from "../../../helper/LoadToTop";
import { useState } from "react";
import logoBelinsky from "../../../assets/logo-belinsky.png";
import { BlurhashCanvas } from "react-blurhash";

const CardOverlayVid = ({ srcvideo, h3, p, navigate, blurPic, isDetails }) => {
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);
  return (
    <div className="md:h-[30rem] h-[17rem] lg:h-[20rem] w-full lg:w-[27rem] bg-slate-400 relative group rounded-[1rem]">
      {isLoadingVideo ? (
        <div className="absolute z-10 w-full h-full">
          <BlurhashCanvas
            hash={blurPic}
            className="w-full h-full rounded-[1rem]"
          />
          <img
            src={logoBelinsky}
            className="w-24 animate-bounce absolute left-16 top-16"
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
        preload="metadata"
        alt="Belinsky Studio"
        onLoadStart={() => setIsLoadingVideo(true)}
        onLoadedData={() => setIsLoadingVideo(false)}
        className="absolute object-cover w-full h-full rounded-[1rem]"
      >
        <source src={srcvideo} type="video/mp4" />
      </video>
      {!isLoadingVideo ? (
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
          <h3 className="text-xl md:text-2xl lg:text-xl text-white w-full">
            {h3}
          </h3>
          <p className="w-full md:w-[60%] lg:w-full pr-6 drop-shadow-md text-[14px]">
            {p}
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardOverlayVid;
