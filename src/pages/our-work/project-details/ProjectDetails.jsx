import React from "react";

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
  return (
    <section>
      {/* THE TITLE */}
      <div className="pt-24 lg:pt-36 px-[6vw] lg:px-[3vw] pb-10 flex flex-col">
        <h1 className="text-[#022581] text-[2.5rem] md:text-[4rem] lg:text-[5rem]     underline decoration-[3.5px] leading-[3rem] md:leading-[4rem] lg:leading-[5rem] underline-offset-[8px]">
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
          className={`${src ? "w-full h-full" : "hidden"}`}
        />
        <video
          className={`${srcvideo ? "w-full h-full" : "hidden"}`}
          playsInline
          controls
          preload="metadata"
        >
          <source src={srcvideo} type="video/mp4" />
        </video>
      </div>

      {/* DESC */}
      <div className="py-[6vw] lg:pt-12 lg:pb-16 px-[6vw] xl:px-[16vw] flex justify-between w-full flex-wrap">
        <div className="flex flex-col w-full">
          <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]    text-[#022581] w-full">
            {byWho2}
          </h2>
          <div className="w-full lg:w-[50%]">
            <p className="text-[1rem] lg:text-[1.2rem] text-[#022581]">
              {desc}
            </p>
          </div>
          <div className="mt-6 w-full lg:w-[50%] flex justify-between flex-wrap">
            <div className="w-[50%]">
              <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]    text-[#022581]">
                Date
              </h2>
              <p className="text-[1rem] lg:text-[1.2rem] text-[#022581]">
                {date}
              </p>
            </div>
            <div className="w-[50%] md:w-[45%]">
              <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]    text-[#022581]">
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
