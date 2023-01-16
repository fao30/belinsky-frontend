const CardOverlay = ({ src, h3, p }) => {
  return (
    <div className="h-[20rem] w-full sm:w-[28rem] lg:w-[30%] bg-slate-400 relative group rounded-[1rem]">
      <img
        src={src}
        alt="studio1-img"
        className="absolute object-cover w-full h-full rounded-[1rem]"
      />
      <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-[#0225818C] text-white rounded-[1rem]">
        <div className="flex flex-col items-center pt-48 pl-7 justify-start w-full h-full text-left text-white">
          <h3 className="text-[20px] font-semibold text-white w-full">{h3}</h3>
          <p className="w-full pr-6 drop-shadow-md text-[14px]">{p}</p>
        </div>
      </div>
    </div>
  );
};

export default CardOverlay;
