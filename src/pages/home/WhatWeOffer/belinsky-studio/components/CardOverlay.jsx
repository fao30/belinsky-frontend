const CardOverlay = ({ src, h2, h3, p }) => {
  return (
    <div className="relative w-[100%] lg:w-[32%] group">
      <img src={src} alt={src} />
      <h2 className="absolute z-10 text-2xl md:text-xl lg:text-3xl font-bold text-white transition duration-500 ease-in-out top-5 left-5 group-hover:opacity-0 drop-shadow-[0_1px_1px_black]">
        {h2}
      </h2>
      <div className="absolute bg-[#0225818C]/50 group-hover:bg-transparent group-hover:opacity-0 top-0 left-0 h-full w-full flex flex-col pt-[70%] md:pt-[50%] items-center text-white gap-y-1 duration-300 transition ease-in-out">
        <h3 className="text-2xl font-black text-center text-white lg:text-2xl xl:text-5xl">
          {h3}
        </h3>
        <p className="mx-10 md:mx-2 text-lg md:text-sm lg:mx-10 lg:font-[600] tracking-wider text-center text-white lg:text-lg">
          {p}
        </p>
      </div>
    </div>
  );
};

export default CardOverlay;
