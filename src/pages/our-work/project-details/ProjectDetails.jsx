import { Icon } from "@iconify/react";
import { React, useState, useRef } from "react";
import PauseButton from "../components/PauseButton";
import PlayButton from "../components/PlayButton";

const ProjectDetails = ({
  title,
  byWho,
  src,
  srcvideo,
  byWho2,
  desc,
  date,
  category,
  img1,
  img2,
  img3,
}) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    } else if (control === "fullscreen") {
      toggleFullScreen();
    }
  };

  const toggleFullScreen = () => {
    var el = document.getElementById("full-screenVideo");
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  };

  return (
    <section>
      {/* THE TITLE */}
      <div className="pt-24 lg:pt-36 px-[6vw] lg:px-[3vw] pb-10 flex flex-col">
        <h1 className="text-[#022581] text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-[800]  underline decoration-[3.5px] leading-[3rem] md:leading-[4rem] lg:leading-[5rem] underline-offset-[8px]">
          {title}
        </h1>
        <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-[#022581]">
          {byWho}
        </h2>
      </div>
      {/* THE PIC */}
      <div className="w-full">
        <img
          src={src}
          alt=""
          className={`${src ? "w-full h-full relative" : "hidden"}`}
        />
      </div>

      {srcvideo ? (
        <div className="relative w-full h-full">
          <video
            id="full-screenVideo"
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            onClick={() => videoHandler("pause")}
            onEnded={() => setPlaying(false)}
          >
            <source src={srcvideo} type="video/mp4" />
          </video>
          <div className="absolute top-[40%]  w-full">
            <div className="flex justify-center">
              {playing ? (
                <></>
              ) : (
                <button
                  onClick={() => {
                    videoHandler("play");
                  }}
                >
                  <Icon
                    icon="material-symbols:play-circle"
                    className="w-[4rem] h-[4rem] md:w-[8rem] md:h-[8rem] text-[#022581] hover:text-[#5484F2] transition-all ease-in-out duration-200"
                  />
                </button>
              )}
            </div>
          </div>
          <div className="absolute bottom-0 right-0">
            <div className="flex justify-end p-3">
              <button
                onClick={() => {
                  videoHandler("fullscreen");
                }}
              >
                <Icon
                  icon="icon-park-outline:full-screen-two"
                  className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] text-[#022581] hover:text-[#5484F2] transition-all ease-in-out duration-200"
                />
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* DESC */}
      <div className="py-[6vw] lg:pt-12 lg:pb-24 px-[6vw] xl:px-[16vw] flex justify-between w-full flex-wrap">
        <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-[800] text-[#022581] w-full lg:w-[50%]">
          {byWho2}
        </h2>
        <div className="w-full lg:w-[45%]">
          <h2 className="text-[1rem] lg:text-[1.2rem] text-[#022581]">
            {desc}
          </h2>
          <div className="flex flex-wrap justify-between max-lg:mt-8 lg:pt-24">
            <div className="flex flex-col w-full md:w-[55%]">
              <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-[800] text-[#022581]">
                Date
              </h2>
              <p className="text-[1rem] lg:text-[1.2rem] text-[#022581]">
                {date}
              </p>
            </div>
            <div className="flex flex-col max-md:mt-4 w-full md:w-[45%]">
              <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-[800] text-[#022581]">
                Category
              </h2>
              <p className="text-[1rem] lg:text-[1.2rem] text-[#022581]">
                {category}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* IMAGES */}
      <div className="px-[6vw] xl:px-[16vw] w-full h-[35rem] lg:h-[50rem] flex justify-between pb-24 max-md:hidden">
        <div className="flex flex-col justify-between w-[50%]">
          <div className="h-[45%]">
            <img
              src={img1}
              alt="project details"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[45%]">
            <img
              src={img2}
              alt="project details"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="w-[45%]">
          <img
            src={img3}
            alt="project details"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {/* IMAGES MOBILE */}
      <div className="px-[6vw] lg:px-[10vw] w-full hidden flex-wrap gap-7 pb-24 max-md:flex">
        <img src={img1} alt="project details" />
        <img src={img2} alt="project details" />
        <img src={img3} alt="project details" />
      </div>
    </section>
  );
};

export default ProjectDetails;
