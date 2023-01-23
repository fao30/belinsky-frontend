import CardSliderImg from "./components/CardSliderImg";
import { dataCardBStudio } from "../../our-work/constants/DataCardBStudio";

const BelinskyStudio = () => {
  return (
    <section className="w-full mb-[10vh] px-[4vw] ">
      <h1 className="text-4xl font-black tracking-wide text-center lg:text-4xl xl:text-5xl mb-[3vh] text-[#022581] ">
        Belinsky Studio
      </h1>
      <div className="carousel carousel-center gap-[1.25rem] sm:gap-[3rem] bg-transparent">
        {dataCardBStudio?.map(({ src, h3, p, isHomepage, blurPic }) => (
          <CardSliderImg
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
