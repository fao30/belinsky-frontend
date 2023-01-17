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
        <h1 className="text-[3.5rem] font-[800] lg:text-[5rem] underline decoration-[3.5px] underline-offset-[8px]">
          {title}
        </h1>
        <h2 className="text-[2rem] lg:text-[2.5rem] text-[#022581]">{byWho}</h2>
      </div>
      {/* THE PIC */}
      <div className="w-full">
        <img src={src} className={`${src ? "w-full h-full" : "hidden"}`} />
        <video
          muted
          loop
          autoPlay
          src={srcvideo}
          className={`${srcvideo ? "w-full h-full" : "hidden"}`}
        />
      </div>
      {/* DESC */}
      <div className="py-[6vw] lg:pt-12 lg:pb-24 px-[6vw] lg:px-[3vw] flex justify-between w-full flex-wrap">
        <h2 className="text-[1.75rem] lg:text-[2rem] font-[800] text-[#022581] w-full lg:w-[45%]">
          {byWho2}
        </h2>
        <div className="w-full lg:w-[40%]">
          <h2 className="text-[1.25rem] text-[#022581]">{desc}</h2>
          <div className="flex justify-between max-lg:mt-8 lg:pt-24 flex-wrap">
            <div className="flex flex-col w-full md:w-[55%]">
              <h2 className="text-[1.5rem] font-[800] text-[#022581]">Date</h2>
              <p className="text-[1.25rem] text-[#022581]">{date}</p>
            </div>
            <div className="flex flex-col max-md:mt-4 w-full md:w-[45%]">
              <h2 className="text-[1.5rem] font-[800] text-[#022581]">
                Category
              </h2>
              <p className="text-[1.25rem] text-[#022581]">{category}</p>
            </div>
          </div>
        </div>
      </div>
      {/* IMAGES */}
      <div className="px-[6vw] lg:px-[10vw] w-full flex justify-between pb-24 max-md:hidden">
        <div className="flex flex-col justify-between w-[50%]">
          <img src={img1} className="transition-all hover:scale-110" />
          <img src={img2} className="transition-all hover:scale-110" />
        </div>
        <div className="w-[45%]">
          <img src={img3} className="transition-all hover:scale-110 " />
        </div>
      </div>
      {/* IMAGES MOBILE */}
      <div className="px-[6vw] lg:px-[10vw] w-full hidden flex-wrap gap-7 pb-24 max-md:flex">
        <img src={img1} className="transition-all hover:scale-110" />
        <img src={img2} className="transition-all hover:scale-110" />
        <img src={img3} className="transition-all hover:scale-110" />
      </div>
    </section>
  );
};

export default ProjectDetails;
