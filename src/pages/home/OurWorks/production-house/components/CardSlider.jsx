import AspectRatio from "@mui/joy/AspectRatio";

const CardSlider = ({ src, h1, p }) => {
  return (
    <>
      <AspectRatio sx={{ width: 700 }} className="relative group">
        <video autoPlay loop muted src={src} />
        <div className="bg-[#02258191] absolute top-0 left-0 h-full w-full group-hover:opacity-0 transition ease-in-out duration-300" />
        <div className="absolute flex flex-col justify-end w-[50%] text-white bottom-[2rem] left-[2rem] group-hover:opacity-0 transition ease-in-out duration-300">
          <h1 className="[word-spacing:5px] drop-shadow-[0px_1px_1px_black]">
            {h1}
          </h1>
          <p className=" drop-shadow-[0px_1px_1px_black]">{p}</p>
        </div>
      </AspectRatio>
    </>
  );
};

export default CardSlider;

// <AspectRatio sx={{ width: 700 }} className="relative group">
// <video autoPlay loop muted src={src} />
// <div className="bg-[#02258191] absolute top-0 left-0 h-full w-full group-hover:opacity-0 transition ease-in-out duration-300" />
// <div className="absolute flex flex-col justify-end w-[50%] text-white bottom-[2rem] left-[2rem] group-hover:opacity-0 transition ease-in-out duration-300">
//   <h1 className="[word-spacing:5px] drop-shadow-[0px_1px_1px_black]">
//     {h1}
//   </h1>
//   <p className=" drop-shadow-[0px_1px_1px_black]">{p}</p>
// </div>
// </AspectRatio>
