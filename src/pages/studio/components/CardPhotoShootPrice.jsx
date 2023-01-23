const CardPhotoShootPrice = ({ p, h1, li }) => {
  return (
    <>
      <div className="border-2 border-[#022581] w-[20rem] h-[12rem] md:w-[20rem] md:h-[15rem] lg:w-[25rem] lg:h-[16rem] text-center bg-white rounded-md drop-shadow-[0_1px_1px_black] mt-5 md:mt-10">
        <p className="text-white bg-[#022581] w-1/2 mx-auto rounded-b-md text-md md:text-lg">
          {p}
        </p>
        <h1 className="mt-6 text-md md:text-lg lg:text-xl md:mt-12">{h1} :</h1>
        <ul className="flex flex-col mt-2 md:mt-4 text-md md:text-lg xl:text-xl">
          {li}
        </ul>
      </div>
    </>
  );
};

export default CardPhotoShootPrice;
