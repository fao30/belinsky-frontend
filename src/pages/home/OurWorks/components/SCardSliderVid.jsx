import { useState } from "react";
import logoBelinsky from "../../../../assets/logo-belinsky.png";
import { BlurhashCanvas } from "react-blurhash";
import LoadToTop from "../../../../helper/LoadToTop";

const SCardSliderVid = ({
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
    <div className="h-[40rem] w-[65rem] bg-slate-400  group">
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
            <h3 className="w-full text-xl font-extrabold text-white md:text-4xl ">
              {h3}
            </h3>
            <p className="w-full mt-2 text-xs md:text-lg drop-shadow-md">{p}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SCardSliderVid;
