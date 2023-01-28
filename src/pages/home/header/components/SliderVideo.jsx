import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadToTop from "../../../../helper/LoadToTop";
import logoBelinsky from "../assets/logo-belinsky.png";
import { BlurhashCanvas } from "react-blurhash";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SliderVideo = ({ src, blurPic }) => {
  const navigate = useNavigate();
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);
  return (
    <>
      {isLoadingVideo ? (
        <div className="absolute z-10 w-full h-full">
          <BlurhashCanvas hash={blurPic} className="w-full h-full" />
          <img
            alt=""
            src={logoBelinsky}
            className="absolute w-64 md:w-96 animate-bounce left-1 md:left-6 top-44"
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
        <source src={src} type="video/mp4" />
      </video>

      {/* Text Content */}
      <div className="absolute flex flex-col justify-start h-full md:left-[3.5rem] px-4 md:px-0 top-[60%] lg:top-[57.5%] xl:top-[55%] z-20  sm:w-[70%] md:w-full lg:w-[90%] xl:w-[80%] w-full">
        <h1
          className="text-[2rem] leading-[2rem] md:text-[3rem] md:leading-[3rem] lg:text-[4rem] lg:leading-[4rem] xl:text-[4.5rem] xl:leading-[4.5rem] text-white mb-2"
          // style={{ textShadow: "1px 1px red" }}
        >
          BELINSKY STUDIO
        </h1>
        <div className="flex flex-col gap-y-6 sm:ml-1">
          <p className="text-base sm:text-lg text-white w-full sm:w-[90%] md:w-[50%] lg:w-[50%] xl:w-[45%]">
            Given that Belinsky is both a production house and a creative
            studio, our areas of expertise include producing both photography
            and filmmaking
          </p>
          <button
            onClick={() => {
              navigate("/contact");
              LoadToTop();
            }}
            className="self-start px-7 py-3 bg-[#5484F2] text-white     hover:bg-[#4a6cb3] active:bg-[#5484F2] drop-shadow-[0_1px_1px_#5484F2]"
          >
            Contact Us
          </button>
        </div>

        {/* Custom Arrow Swiper */}
        {/* <div className="flex self-center">
          <IoIosArrowBack
            size={30}
            className="text-white drop-shadow-[0_1px_1px_black]"
          />
          <IoIosArrowForward
            size={30}
            className="text-white drop-shadow-[0_1px_1px_black]"
          />
        </div> */}
      </div>
    </>
  );
};

export default SliderVideo;
