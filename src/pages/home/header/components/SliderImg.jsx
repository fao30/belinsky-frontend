const SliderImg = ({ src, h1, p }) => {
  return (
    <>
      <img
        src={src}
        alt={src}
        className="absolute top-0 left-0 object-cover w-full h-full"
      />

      {/* bg overlay */}
      <div className="absolute top-0 left-0 object-cover w-full h-full bg-gradient-to-t from-[#0225818C] to-transparent" />

      {/* H1, Explore Work */}
      <div className="absolute left-[5%] sm:left-[10%] top-[60%] lg:top-[65%] flex flex-col justify-start h-full">
        <h1 className="text-6xl md:text-8xl text-white font-[700]">{h1}</h1>
        <div className="flex justify-start w-full group">
          <div className="border-b-2 border-white w-[4.5rem] self-center group-hover:border-opacity-0 transition duration-500 ease-in-out scale-x-100 md:w-[10rem]" />
          <p className="flex flex-col text-lg tracking-wide text-white w-[8rem] text-center">
            {p}
            <span className="transition duration-500 ease-in-out scale-0 group-hover:scale-100 lg:group-hover:scale-150">
              <div className="border-b-2" />
            </span>
          </p>
          <div className="border-b-2 border-white w-[4.5rem] self-center group-hover:border-opacity-0 transition duration-500 ease-in-out scale-x-100 md:w-[10rem]" />
        </div>
      </div>
    </>
  );
};

export default SliderImg;
