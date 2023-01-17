import React from "react";

const ProjectDetails = ({
  title,
  byWho,
  src,
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
      <div className="pt-36 px-[6vw] lg:px-[3vw] pb-10 flex flex-col">
        <h1 className="text-[4rem] lg:text-[5rem] underline decoration-[3.5px] underline-offset-[8px]">
          {title}
        </h1>
        <h2 className="text-[2rem] lg:text-[2.5rem] font-[350] text-[#022581]">
          {byWho}
        </h2>
      </div>
      {/* THE PIC */}
      <div className="w-full">
        <img src={src} className="w-full h-full" />
      </div>
      {/* DESC */}
      <div className="pt-12 px-[6vw] lg:px-[3vw] pb-24 flex justify-between w-full flex-wrap">
        <h2 className="text-[2.5rem] font-[700] text-[#022581] w-full lg:w-[45%]">
          {byWho2}
        </h2>
        <div className="w-full lg:w-[40%]">
          <h2 className="text-[1.25rem] font-[300] text-[#022581]">{desc}</h2>
          <div className="flex justify-between pt-12 lg:pt-24 flex-wrap">
            <div className="flex flex-col">
              <h2 className="text-[1.5rem] font-[700] text-[#022581]">Date</h2>
              <p className="text-[1.25rem] font-[300] text-[#022581]">{date}</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[1.5rem] font-[700] text-[#022581]">
                Categories
              </h2>
              <p className="text-[1.25rem] font-[300] text-[#022581]">
                {category}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* IMAGES */}
      <div className="px-[6vw] lg:px-[10vw] w-full flex justify-between pb-24">
        <div className="flex flex-col justify-between w-[50%]">
          <img src={img1} />
          <img src={img2} />
        </div>
        <div className="w-[45%]">
          <img src={img3} />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
