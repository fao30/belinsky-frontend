const CardPhotoShootPrice2 = ({ p, h1, li }) => {
  return (
    <>
      <div className=" h-fit w-full md:w-[45%] lg:w-[30rem] text-xl lg:text-2xl border-2 border-[#022581] text-left bg-white rounded-xl drop-shadow-[0_1px_1px_black]">
        <p className="text-white bg-[#022581] w-1/2 mx-auto rounded-b-md p-2 text-center">
          {p}
        </p>
        <div className="max-sm:p-6 px-[2vw] py-[4vw]">
          <h3>{h1}:</h3>
          <ul className="text-left w-full mt-2">{li}</ul>
          <div className="flex justify-between items-center">
            <p>- All soft copy</p>
            <p>
              <span className="text-gray-500 line-through mr-2">25K</span>
              <span className="font-semibold">FREE</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPhotoShootPrice2;
