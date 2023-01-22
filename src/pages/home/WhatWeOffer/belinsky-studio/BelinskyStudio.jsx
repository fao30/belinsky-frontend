import CardOverlay from "./components/CardOverlay";
import { dataCardBStudio } from "./constants/DataCardBStudio";

const BelinskyStudio = () => {
  return (
    <section className="w-full min-h-screen mb-[10vh]">
      {/* Title */}
      <div className="flex flex-col md:flex-row justify-around items-center px-[4vw] mb-[4vh] gap-y-1">
        <h1 className="md:mb-0 text-4xl lg:text-5xl text-center text-[#022581] tracking-wide">
          Belinsky Studio
        </h1>
        <p className="mt-3 mb-3 text-justify w-[100%] md:w-[50%] lg:w-[40%] leading-6 text-xl lg:text-2xl text-[#022581]">
          Our specialties include model photography, food photography,
          corporate, family, professional photos for LinkedIn, wedding
          photography, and graduation photography.
        </p>
      </div>

      {/* Studio images */}
      <div className="flex flex-col justify-between w-full h-full md:flex-row gap-y-5">
        {dataCardBStudio?.map(({ src, h2, h3, p, blurPic }) => {
          return (
            <CardOverlay src={src} h2={h2} h3={h3} p={p} blurPic={blurPic} />
          );
        })}
      </div>
    </section>
  );
};

export default BelinskyStudio;
