import React from "react";

const Founder = ({ imageProps, nameProps }) => {
  return (
    <div className="flex flex-col items-center mt-6 w-[33%]">
      <img
        src={imageProps}
        alt="Founder Images"
        className="transition-all rounded-full w-36 hover:scale-110"
      />
      <h3 className="mt-4 text-[20px] lg:text-[24px] text-center text-[#424242] font-[600] drop-shadow-[0px_0.5px_0.5px_#424242]">
        {nameProps}
      </h3>
    </div>
  );
};

export default Founder;
