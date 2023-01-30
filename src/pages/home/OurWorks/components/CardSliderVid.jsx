import { useState } from "react";
import logoBelinsky from "../../../../assets/logo-belinsky.png";
import { BlurhashCanvas } from "react-blurhash";
import LoadToTop from "../../../../helper/LoadToTop";

const CardSlider = ({
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
    <div className={`${isHomepage ? "carousel-item" : "hidden"}`}>
      <div className="xl:h-[28rem] h-[15rem] sm:h-[15rem] md:h-[25rem]  bg-slate-400 relative group w-full">
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
              <h3 className="w-full text-xl text-white md:text-4xl ">{h3}</h3>
              <p className="w-full mt-2 text-xs md:text-lg drop-shadow-md">
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

// CODE RYAN WITH BLURRED
/*   

<div className={`${isHomepage ? "carousel-item" : "hidden"}`}>
      <div className="xl:h-[28rem] xl:w-[45rem] h-[15rem] w-[22rem] sm:h-[15rem] sm:w-[30rem] md:h-[25rem] md:w-[40rem] bg-slate-400 relative group mx-auto">
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
              <h3 className="w-full text-xl text-white md:text-4xl ">{h3}</h3>
              <p className="w-full mt-2 text-xs md:text-lg drop-shadow-md">
                {p}
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
    
*/
