import LoadToTop from "../../../helper/LoadToTop";
import { useState } from "react";
import logoBelinsky from "../../../assets/logo-belinsky.png";
import { BlurhashCanvas } from "react-blurhash";

const CardOverlayVid = ({ srcvideo, h3, p, navigate, blurPic }) => {
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);
  return (
    <div className="h-[20rem] w-full lg:w-[27rem] bg-slate-400 relative group rounded-[1rem]">
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
        alt=""
        onLoadStart={() => setIsLoadingVideo(true)}
        onLoadedData={() => setIsLoadingVideo(false)}
        className="absolute object-cover w-full h-full rounded-[1rem]"
      >
        <source src={srcvideo} type="video/mp4" />
      </video>
      {!isLoadingVideo ? (
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardOverlayVid;
