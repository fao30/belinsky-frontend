import LoadToTop from "../../../helper/LoadToTop";
import { useState } from "react";
import logoBelinsky from "../../../assets/logo-belinsky.png";

const CardOverlayVid = ({ srcvideo, h3, p, navigate }) => {
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);
  return (
    <div className="h-[20rem] w-full lg:w-[27rem] bg-slate-400 relative group rounded-[1rem]">
      {isLoadingVideo ? (
        <div className="flex justify-center w-full h-full  items-center z-10">
          <img src={logoBelinsky} className="w-24 animate-bounce" />
        </div>
      ) : (
        <></>
      )}
      <video
        loop
        muted
        autoPlay
        type="video/mp4"
        playsInline
        src={srcvideo}
        alt=""
        onLoadStart={() => setIsLoadingVideo(true)}
        onLoadedData={() => setIsLoadingVideo(false)}
        className="absolute object-cover w-full h-full rounded-[1rem]"
      />
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
