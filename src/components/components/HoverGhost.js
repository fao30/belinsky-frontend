import React from "react";

export const HoverGhost = ({
  hoverImgProps,
  hoverTittleProps,
  hoverDescProps,
}) => {
  return (
    <div className="h-[50vh] w-[100vw] md:w-[50vw] bg-slate-400 relative group">
      <img
        src={hoverImgProps}
        alt=""
        className="absolute object-cover w-full h-full"
      />
      <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-gradient-to-t from-[#363636] to-transparent">
        <div className="absolute bottom-[15%] left-[4.4%]">
          <h3 className="text-2xl font-semibold text-white">
            {hoverTittleProps}
          </h3>
          <p className="text-white drop-shadow-md">{hoverDescProps}</p>
        </div>
      </div>
    </div>
  );
};

export default HoverGhost;
