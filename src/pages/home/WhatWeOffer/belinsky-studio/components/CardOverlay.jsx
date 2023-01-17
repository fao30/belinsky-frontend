const CardOverlay = ({ src, h2, h3, p }) => {
  return (
    <div className="relative w-[100%] lg:w-[32%] group">
      <img src={src} alt={src} />
      <h2 className="absolute z-10 text-3xl text-white transition duration-500 ease-in-out top-5 left-5 group-hover:opacity-0">
        {h2}
      </h2>
      <div className="absolute bg-[#0225818C]/50 group-hover:bg-transparent group-hover:opacity-0 top-0 left-0 h-full w-full flex flex-col items-center justify-center text-white gap-y-1 duration-300 transition ease-in-out">
        <h3 className="text-4xl font-black text-center text-white xl:text-5xl">
          {h3}
        </h3>
        <p className="mx-10 tracking-wider text-center text-white text-md">
          {p}
        </p>
      </div>
    </div>
  );
};

export default CardOverlay;
