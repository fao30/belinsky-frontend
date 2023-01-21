import { useState } from "react";
import logoBelinsky from "../../../../assets/logo-belinsky.png";
import { BlurhashCanvas } from "react-blurhash";

const CardSlider = ({ srcvideo, h3, p, isHomepage, blurPic }) => {
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);

  return (
    <div className={`${isHomepage ? "carousel-item" : "hidden"}`}>
      <div className="h-[15rem] w-[22rem] sm:h-[15rem] sm:w-[30rem] md:h-[25rem] md:w-[40rem] bg-slate-400 relative group">
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
          type="video/mp4"
          playsInline
          src={srcvideo}
          alt=""
          onLoadStart={() => setIsLoadingVideo(true)}
          onLoadedData={() => setIsLoadingVideo(false)}
          className="absolute object-cover w-full h-full"
        />
        {!isLoadingVideo ? (
          <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-[#0225818C] text-white ">
            <div className="flex flex-col items-center pt-[8rem] px-6 sm:pt-[8rem] sm:px-6 md:pt-[15rem] md:px-12 justify-start w-full h-full text-left text-white">
              <h3 className="w-full text-xl font-extrabold text-white md:text-4xl ">
                {h3}
              </h3>
              <p className="w-full mt-2 text-sm md:text-lg drop-shadow-md">
                {p}
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CardSlider;
