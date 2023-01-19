const CardSlider = ({ srcvideo, src, h3, p, isHomepage }) => {
  return (
    <div className={`${isHomepage ? "carousel-item" : "hidden"}`}>
      <div className="h-[15rem] w-[22rem] sm:h-[15rem] sm:w-[30rem] md:h-[25rem] md:w-[40rem] bg-slate-400 relative group">
        <img
          src={src}
          alt=""
          className={`${
            src ? "absolute object-cover w-full h-full" : "hidden"
          }`}
        />
        <video
          loop
          muted
          autoPlay
          src={srcvideo}
          alt=""
          className={`${
            srcvideo ? "absolute object-cover w-full h-full " : "hidden"
          }`}
        />
        <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-[#0225818C] text-white ">
          <div className="flex flex-col items-center pt-[8rem] px-6 sm:pt-[8rem] sm:px-6 md:pt-[17rem] md:px-12 justify-start w-full h-full text-left text-white">
            <h3 className="text-[20px]  font-bold text-white w-full">{h3}</h3>
            <p className="w-full drop-shadow-md text-[14px] mt-2">{p}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
