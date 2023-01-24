import { dataCardPHouse } from "../../our-work/constants/DataCardPHouse";
import CardSliderVid from "./components/CardSliderVid";

const ProductionHouse = () => {
  return (
    <section className="w-full px-[4vw] my-[8vh] md:my-[16vh]">
      <h1 className="text-4xl font-black tracking-wide text-center md:text-5xl xl:text-6xl mb-[3vh] text-[#022581] ">
        Production House
      </h1>
      <div className="carousel carousel-center gap-[1.25rem] sm:gap-[3rem] bg-transparent">
        {dataCardPHouse?.map(({ srcvideo, h3, p, isHomepage, blurPic }) => (
          <CardSliderVid
            srcvideo={srcvideo}
            h3={h3}
            p={p}
            isHomepage={isHomepage}
            blurPic={blurPic}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductionHouse;
