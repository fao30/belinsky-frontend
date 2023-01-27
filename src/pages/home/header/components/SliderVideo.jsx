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
      <div className="absolute flex flex-col justify-start h-full md:left-[3.5rem] gap-y-6 px-4 md:px-0 top-[60%] z-20  sm:w-[70%] md:w-[50%] lg:w-[60%] xl:w-[40%] w-full">
        <h1
          className="text-5xl text-white uppercase lg:text-8xl"
          // style={{ textShadow: "1px 1px red" }}
        >
          BELINSKY STUDIO
        </h1>
        <p className="text-lg leading-4 text-white lg:text-xl lg:leading-5 w-full sm:w-[90%]">
          Taking off to a sky where creativity is limitless
        </p>
        <button
          onClick={() => {
            navigate("/contact");
            LoadToTop();
          }}
          className="self-start px-7 py-3 bg-[#5484F2] text-white font-extrabold hover:bg-[#4a6cb3] active:bg-[#5484F2] drop-shadow-[0_1px_1px_#5484F2]"
        >
          Contact Us
        </button>

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
