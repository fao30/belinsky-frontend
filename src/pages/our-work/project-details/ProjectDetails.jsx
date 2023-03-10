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
  descDirector,
  imgDirector,
  nameDirector,
  director,
}) => {
  return (
    <section>
      {/* THE TITLE */}
      <div className="pt-16 lg:pt-36 px-[6vw] lg:px-[3vw] pb-10 flex flex-col">
        <h1 className="text-[#022581] text-[2.5rem] md:text-[4rem] lg:text-[5rem]     underline decoration-[3.5px] leading-[3rem] md:leading-[4rem] lg:leading-[5rem] underline-offset-[8px]">
          {title}
        </h1>
        <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-[#022581]">
          {byWho}
        </h2>
      </div>
      {/* THE MAIN CONTENT (IMG/MP4) */}
      <div className="w-full">
        <img
          src={src}
          alt="Belinsky Studio"
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
      {/* CASE "DIRECTOR" */}
      {director ? (
        <div
          className="py-[6vw] lg:pt-12 lg:pb-16 px-[6vw]  flex justify-between w-full flex-wrap ${
     lg:px-[4vw]"
        >
          <div className="flex flex-col w-full lg:w-[50%]">
            <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]    text-[#022581]">
              {byWho2}
            </h2>
            <div className="w-full">
              <p className="text-[1rem] lg:text-[1.2rem] text-[#022581]">
                {desc}
              </p>
            </div>
            <div className="mt-6 w-full flex justify-between flex-wrap">
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
          {/* DIRECTOR DESC */}
          <div className="w-full lg:w-[48%] xl:w-[48.5%] flex flex-col max-md:gap-2 max-lg:mt-6">
            <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2rem]    text-[#022581]">
              The Project is directed by
            </h2>
            {/* img director for mobile */}
            <div className="mt-4 justify-center flex-col items-center w-full max-md:flex hidden">
              <img
                src={imgDirector}
                alt="Belinsky Studio - Director"
                className="max-sm:w-56 w-36 rounded-full"
              />
              <h3 className="text-center uppercase text-2xl  text-[#022581] mt-4">
                {nameDirector}
              </h3>
            </div>
            <div className=" text-[#022581] flex justify-between items-center gap-6 mt-4">
              <div className="max-md:hidden w-[27.5%] flex flex-col gap-2">
                <img
                  src={imgDirector}
                  alt="Belinsky Studio - Director"
                  className="rounded-full"
                />
                <h3 className="text-center uppercase text-xl">
                  {nameDirector}
                </h3>
              </div>
              <p className=" text-sm  w-full lg:w-[70%]">{descDirector}</p>
            </div>
          </div>
        </div>
      ) : (
        /* CASE "WITHOUT DIRECTOR" */
        <div className="py-[6vw] lg:pt-12 lg:pb-24 px-[6vw] lg:px-[4vw] xl:px-[18vw] flex justify-between w-full flex-wrap">
          <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-[#022581] w-full lg:w-[50%]">
            {byWho2}
          </h2>
          <div className="w-full lg:w-[48%] lg:mt-2">
            <p className="text-[1rem] lg:text-[1.2rem] text-[#022581]">
              {desc}
            </p>
            <div className="flex justify-between max-lg:mt-8 lg:pt-16">
              <div className="flex flex-col w-full md:w-[50%]">
                <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-[#022581]">
                  Date
                </h2>
                <p className="text-[1rem] lg:text-[1.2rem] text-[#022581]">
                  {date}
                </p>
              </div>
              <div className="flex flex-col w-full md:w-[48%]">
                <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-[#022581]">
                  Category
                </h2>
                <p className="text-[1rem] lg:text-[1.2rem] text-[#022581]">
                  {category}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* IMAGES */}
      <div className="px-[6vw] lg:px-[4vw] xl:px-[18vw] w-full h-[35rem] lg:h-[50rem] flex justify-between pb-24 max-md:hidden">
        <div className="flex flex-col justify-between w-[50%]">
          <div className="h-[48%]">
            <img
              src={img1}
              alt="Belinsky Studio - Project Details"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[48%]">
            <img
              src={img2}
              alt="Belinsky Studio - Project Details"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="w-[48%]">
          <img
            src={img3}
            alt="Belinsky Studio - Project Details"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {/* IMAGES MOBILE */}
      <div className="px-[6vw] lg:px-[10vw] w-full hidden flex-wrap gap-6 pb-24 max-md:flex">
        <img src={img1} alt="Belinsky Studio - Project Details" />
        <img src={img2} alt="Belinsky Studio - Project Details" />
        <img src={img3} alt="Belinsky Studio - Project Details" />
      </div>
    </section>
  );
};

export default ProjectDetails;
