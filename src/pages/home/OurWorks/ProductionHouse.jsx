import CardSlider from "./components/CardSlider";
import { dataCardPHouse } from "../../our-work/production-house/constants/DataCardPHouse";

const ProductionHouse = () => {
  return (
    <section className="w-full min-h-screen p-[4vw]">
      <h1 className="text-[#022581] text-4xl lg:text-6xl text-center tracking-wide">
        Production House
      </h1>
      <div className="carousel carousel-center gap-[3rem] bg-transparent mt-12">
        {dataCardPHouse?.map(({ srcvideo, h3, p }) => (
          <CardSlider srcvideo={srcvideo} h3={h3} p={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductionHouse;
