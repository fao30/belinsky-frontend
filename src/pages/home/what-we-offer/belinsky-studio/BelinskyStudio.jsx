import CardOverlay from "./components/CardOverlay";
import { dataCardBStudio } from "./constants/DataCardBStudio";

const BelinskyStudio = () => {
  return (
    <section className="flex flex-col w-full justify-around px-[6vw] pt-[6vw] lg:px-[3vw] lg:pt-[3vw] mb-[5vw]">
      {/* Title */}
      <div className="flex flex-col w-full lg:flex-row">
        <div className="w-[100%] lg:w-[50%]">
          <h1 className="font-bold lg:text-6xl">Belinsky Studio</h1>
        </div>
        <p className="w-[100%] lg:w-[50%] my-auto">
          Our specialties include model photography, food{" "}
          <br className="hidden lg:inline-block" />
          photography, corporate, family, professional photos for{" "}
          <br className="hidden lg:inline-block" />
          LinkedIn, wedding photography, and graduation
          <br className="hidden lg:inline-block" /> photography.
        </p>
      </div>

      {/* Studio Images */}
      <div className="flex flex-col gap-1 justify-around md:flex-row mt-[2vh] lg:mt-[4vh]">
        {dataCardBStudio.map(({ src, h3, p }) => (
          <CardOverlay src={src} h3={h3} p={p} />
        ))}
      </div>
    </section>
  );
};

export default BelinskyStudio;
