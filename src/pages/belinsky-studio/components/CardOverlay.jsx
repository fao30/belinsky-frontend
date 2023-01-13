const CardOverlay = ({ src, h3, p }) => {
  return (
    <div className="h-[50vh] w-[100%] md:w-[33%] bg-slate-400 relative group">
      <img
        src={src}
        alt="studio1-img"
        className="absolute object-cover w-full h-full"
      />
      <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-[#0225818C] text-white">
        <div className="flex flex-col items-center justify-center w-full h-full text-center">
          <h3 className="text-2xl font-semibold">{h3}</h3>
          <p className="px-3 drop-shadow-md">{p}</p>
        </div>
      </div>
    </div>
  );
};

export default CardOverlay;
