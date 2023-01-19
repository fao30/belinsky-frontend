const CardSlider = ({ srcvideo, src, h3, p, isHomepage }) => {
  return (
    <div className={`${isHomepage ? "carousel-item" : "hidden"}`}>
      <div className="h-[18rem] w-[30rem] sm:h-[17rem] sm:w-[32rem] md:h-[28rem] md:w-[50rem] bg-slate-400 relative group">
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
          playsInline
          src={srcvideo}
          alt=""
          className={`${
            srcvideo ? "absolute object-cover w-full h-full " : "hidden"
          }`}
        />
        <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-[#0225818C] text-white ">
          <div className="flex flex-col items-center pt-[8rem] px-6 sm:pt-[8rem] sm:px-6 md:pt-[17rem] md:px-12 justify-start w-full h-full text-left text-white">
            <h3 className="w-full text-4xl font-extrabold text-white ">{h3}</h3>
            <p className="w-full mt-2 text-lg drop-shadow-md">{p}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
