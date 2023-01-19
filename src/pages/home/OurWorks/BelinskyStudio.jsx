import CardSlider from "./components/CardSlider";
import { dataCardBStudio } from "../../our-work/belinsky-studio/constants/DataCardBStudio";

const BelinskyStudio = () => {
  return (
    <section className="w-full min-h-screen p-[4vw]">
      <h1 className="text-[#022581] text-4xl lg:text-6xl text-center tracking-wide">
        Belinsky Studio
      </h1>
      <div className="carousel carousel-center gap-[3rem] bg-transparent mt-12">
        {dataCardBStudio?.map(({ src, h3, p }) => (
          <CardSlider src={src} h3={h3} p={p} />
        ))}
      </div>
    </section>
  );
};

export default BelinskyStudio;
