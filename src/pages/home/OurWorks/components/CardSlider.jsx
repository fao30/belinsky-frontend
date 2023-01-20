import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardSlider = ({ srcvideo, src, h3, p, isHomepage, blurPic }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={`${isHomepage ? "carousel-item" : "hidden"}`}>
      <div className="h-[15rem] w-[22rem] sm:h-[15rem] sm:w-[30rem] md:h-[25rem] md:w-[40rem] bg-slate-400 relative group">
        <LazyLoadImage
          src={src}
          alt="belinsky-studio"
          beforeLoad={() => setIsLoading(false)} //some how doesnt work when this code is active
          afterLoad={() => setIsLoading(false)}
          className={`${
            src ? "absolute object-cover w-full h-full" : "hidden"
          }`}
        />

        {isLoading ? (
          <BlurhashCanvas hash={blurPic} className="w-full h-full" />
        ) : (
          <>
            <video
              loop
              muted
              autoPlay
              playsInline
              src={srcvideo}
              alt=""
              type="video/webm"
              className={`${
                srcvideo ? "absolute object-cover w-full h-full " : "hidden"
              }`}
            />
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
          </>
        )}

        {/* OLD CODE */}
        {/* <video
          loop
          muted
          autoPlay
          playsInline
          src={srcvideo}
          alt=""
          type="video/mp4"
          className={`${
            srcvideo ? "absolute object-cover w-full h-full " : "hidden"
          }`}
        />
        <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-[#0225818C] text-white ">
          <div className="flex flex-col items-center pt-[8rem] px-6 sm:pt-[8rem] sm:px-6 md:pt-[15rem] md:px-12 justify-start w-full h-full text-left text-white">
            <h3 className="w-full text-xl font-extrabold text-white md:text-4xl ">
              {h3}
            </h3>
            <p className="w-full mt-2 text-sm md:text-lg drop-shadow-md">{p}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CardSlider;
