import CardSlider from "./components/CardSlider";
import { dataCardPHouse } from "../../our-work/production-house/constants/DataCardPHouse";

const ProductionHouse = () => {
  return (
    <section className="w-full mb-[10vh] p-[4vw] mt-[3vh]">
      <h1 className="text-[#022581] text-4xl lg:text-6xl text-center tracking-wide mb-[2vh]">
        Production House
      </h1>
      <div className="carousel carousel-center gap-[1.25rem] sm:gap-[3rem] bg-transparent">
        {dataCardPHouse?.map(({ srcvideo, h3, p, isHomepage }) => (
          <CardSlider
            srcvideo={srcvideo}
            h3={h3}
            p={p}
            isHomepage={isHomepage}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductionHouse;
