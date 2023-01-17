import CardOverlay from "./components/CardOverlay";
import { dataCardBStudio } from "./constants/DataCardBStudio";

const BelinskyStudio = () => {
  return (
    <section className="w-full min-h-screen">
      {/* Title */}
      <div className="flex flex-col md:flex-row justify-around px-[4vw] mb-[4vh] gap-y-1">
        <h1 className="my-auto text-6xl text-center text-[#022581]">
          Belinsky Studio
        </h1>
        <p className="text-justify w-[100%] md:w-[40%] xl:w-[25%] leading-5 text-lg text-[#022581]">
          Our specialties include model photography, food photography,
          corporate, family, professional photos for LinkedIn, wedding
          photography, and graduation photography.
        </p>
      </div>

      {/* Studio images */}
      <div className="flex flex-col justify-between w-full h-full lg:flex-row gap-y-5">
        {dataCardBStudio.map(({ src, h2, h3, p }) => {
          return <CardOverlay src={src} h2={h2} h3={h3} p={p} />;
        })}
      </div>
    </section>
  );
};

export default BelinskyStudio;
