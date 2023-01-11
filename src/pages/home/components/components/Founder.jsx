import React from "react";

const Founder = ({ imageProps, nameProps }) => {
  return (
    <div className="flex flex-col items-center mt-6 w-[33%]">
      <img src={imageProps} className="rounded-full w-36" />
      <h3 className="mt-4 text-[18px] lg:text-[24px] text-center text-[#424242] font-[600] drop-shadow-[0px_0.5px_0.5px_#424242]">
        {nameProps}
      </h3>
    </div>
  );
};

export default Founder;
