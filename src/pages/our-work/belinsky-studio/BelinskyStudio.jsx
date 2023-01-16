import CardOverlay from "./components/CardOverlay";
import { dataCardBStudio } from "./constants/DataCardBStudio";

export const BelinskyStudio = () => {
  return (
    <section className="flex flex-wrap w-full justify-center gap-x-14 gap-y-8 md:gap-y-16 px-[6vw] pt-[6vw] lg:px-[3vw] lg:pt-[1vw] mb-[5vw]">
      {dataCardBStudio?.map(({ src, h3, p }) => (
        <CardOverlay src={src} h3={h3} p={p} />
      ))}
    </section>
  );
};
