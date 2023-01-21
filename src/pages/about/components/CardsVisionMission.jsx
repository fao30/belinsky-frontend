import React from "react";

const CardsVisionMission = ({ src, h1, p }) => {
  return (
    <>
      <div className="md:w-[60%] md:h-[28rem] lg:h-[35rem] xl:h-[45rem] space-y-5">
        <img
          alt=""
          src={src}
          className="object-cover transition duration-300 ease-in-out grayscale hover:grayscale-0"
        />
        <div className="flex flex-col m-5 md:m-10">
          <h1 className="text-xl font-black uppercase md:text-2xl xl:text-3xl">
            {h1}
          </h1>
          <p className="text-sm font-bold md:text-md xl:text-xl lg:text-lg">
            {p}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardsVisionMission;
