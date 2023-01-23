const CardPhotoShootPrice = ({ p, h1, li }) => {
  return (
    <>
      <div className=" h-fit w-full md:w-[40%] lg:w-[30rem] text-xl lg:text-2xl border-2 border-[#022581] text-left bg-white rounded-xl drop-shadow-[0_1px_1px_black]">
        <p className="text-white bg-[#022581] w-1/2 mx-auto rounded-b-md p-2 text-center">
          {p}
        </p>
        <div className="max-sm:p-6 px-[2vw] py-[4vw]">
          <h1>{h1}:</h1>
          <ul className="text-left w-full mt-2 font-semibold">{li}</ul>
        </div>
      </div>
    </>
  );
};

export default CardPhotoShootPrice;
