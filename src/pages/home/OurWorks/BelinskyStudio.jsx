import CardSlider from "./components/CardSlider";
import { dataCardBStudio } from "../../our-work/constants/DataCardBStudio";

const BelinskyStudio = () => {
  return (
    <section className="w-full p-[4vw]">
      <h1 className="text-[#022581] text-4xl lg:text-6xl text-center tracking-wide mb-[2vh]">
        Belinsky Studio
      </h1>
      <div className="carousel carousel-center gap-[1.25rem] sm:gap-[3rem] bg-transparent">
        {dataCardBStudio?.map(({ src, h3, p, isHomepage, blurPic }) => (
          <CardSlider
            src={src}
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

export default BelinskyStudio;
