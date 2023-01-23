const CardPhotoShootPrice = ({ p, h1, li }) => {
  return (
    <>
      <div className="border border-[#022581] w-[15rem] md:w-[20rem] lg:w-[25rem] lg:h-[15rem] text-center bg-white rounded-md pb-5 md:pb-10">
        <p className="text-white bg-[#022581] w-1/2 mx-auto rounded-b-md">
          {p}
        </p>
        <h1 className="mt-5 text-sm md:text-lg md:mt-8">{h1} :</h1>
        <ul className="flex flex-col mt-2 md:mt-4 text-md md:text-lg">{li}</ul>
      </div>
    </>
  );
};

export default CardPhotoShootPrice;
