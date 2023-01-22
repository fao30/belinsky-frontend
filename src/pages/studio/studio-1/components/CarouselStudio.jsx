const CarouselStudio = ({ src }) => {
  return (
    <>
      <div className="relative carousel-item">
        <img
          src={src}
          alt="Burger"
          className="object-cover w-[15rem] h-[25rem] md:w-[30rem] md:h-[40rem]"
        />
      </div>
    </>
  );
};

export default CarouselStudio;
