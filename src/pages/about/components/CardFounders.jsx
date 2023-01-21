import React from "react";

const CardFounders = ({ src, h3 }) => {
  return (
    <>
      <div className="flex flex-col w-[25%] md:w-[15%] lg:w-[10%] gap-y-2">
        <img alt="" src={src} className=" bg-[#626161] rounded-full" />
        <h3 className="font-extrabold text-center mx-auto w-[80%] md:w-full text-md md:text-lg">
          {h3}
        </h3>
      </div>
    </>
  );
};

export default CardFounders;
