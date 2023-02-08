import { React, useState } from "react";
import LoadToTop from "../../../../helper/LoadToTop";
import logoBelinsky from "../assets/logo-belinsky.png";
import { BlurhashCanvas } from "react-blurhash";

const SliderVideo = ({ src, blurPic, type, vidOrder, h1, p, navigate }) => {
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);
  return (
    <>
      {isLoadingVideo ? (
        <div className="absolute z-10 w-full h-full">
          <BlurhashCanvas hash={blurPic} className="w-full h-full" />
          <img
            alt=""
            src={logoBelinsky}
            className="absolute w-64 md:w-96 animate-bounce left-5 md:left-12 top-44"
          />
        </div>
      ) : (
        <></>
      )}
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadStart={() => setIsLoadingVideo(true)}
        onLoadedData={() => setIsLoadingVideo(false)}
        className="absolute top-0 left-0 object-cover w-full h-full"
      >
        <source src={src} type={type} />
      </video>

      {/* Text Content */}
      {vidOrder === "video1" ? (
        <>
          {/* Desktop Version */}
          <div className="absolute z-10 flex-col justify-end hidden h-full mx-10 sm:flex md:mx-20 pb-28 md:pb-44 lg:pb-36">
            <h1 className="text-[2rem] leading-[2rem] md:text-[3rem] md:leading-[3rem] lg:text-[4rem] lg:leading-[4rem] xl:text-[4.5rem] xl:leading-[4.5rem] text-[#022581] sm:text-white mb-2">
              BELINSKY STUDIO
            </h1>
            <div className="flex flex-col gap-y-6 sm:ml-0.5">
              <p className="text-base sm:text-lg text-[#022581] sm:text-white w-full sm:w-[90%] md:w-[60%] lg:w-[45%] xl:w-[45%]">
                Given that Belinsky is both a production house and a creative
                studio, our areas of expertise include producing both
                photography and filmmaking
              </p>
              <button
                onClick={() => {
                  navigate();
                  LoadToTop();
                }}
                className="self-start px-7 py-3 bg-[#5484F2] text-white hover:bg-[#4a6cb3] active:bg-[#5484F2] drop-shadow-[0_1px_1px_#5484F2]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0225818C] to-transparent" />
          <div className="absolute flex flex-col items-center justify-end w-full h-full pb-5 sm:mx-10 sm:w-auto sm:pb-48 sm:justify-end md:mx-20">
            <h1 className="text-3xl tracking-wide text-white sm:tracking-normal sm:text-5xl md:text-5xl lg:text-7xl">
              {h1}
            </h1>
            <div className="flex justify-center w-full sm:justify-start group">
              <div className="border-b-2 border-white w-[4.5rem] self-center group-hover:border-opacity-0 transition duration-500 ease-in-out scale-x-100 md:w-[10rem]" />
              <p
                onClick={() => {
                  navigate();
                  LoadToTop();
                }}
                className="flex flex-col text-lg tracking-wide text-white w-[8rem] text-center cursor-pointer"
              >
                {p}
                <span className="transition duration-500 ease-in-out scale-0 group-hover:scale-125 lg:group-hover:scale-150">
                  <div className="border-b-2" />
                </span>
              </p>
              <div className="border-b-2 border-white w-[4.5rem] self-center group-hover:border-opacity-0 transition duration-500 ease-in-out scale-x-100 md:w-[10rem]" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SliderVideo;
