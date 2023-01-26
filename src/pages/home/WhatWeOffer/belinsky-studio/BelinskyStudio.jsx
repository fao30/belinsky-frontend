import { useNavigate } from "react-router-dom";
import CardOverlay from "./components/CardOverlay";
import { dataCardBStudio } from "./constants/DataCardBStudio";

const BelinskyStudio = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full my-[5vh] lg:my-[10vh] xl:my-[15vh]">
      {/* Title */}
      <div className="flex flex-row justify-around flex-wrap items-center px-[4vw] gap-y-1 w-full">
        <h1 className="w-[100%] md:w-[90%] lg:w-[45%] text-4xl font-black tracking-wide text-center md:text-5xl xl:text-6xl text-[#022581] ">
          Belinsky Studio
        </h1>
        <p className="w-[100%] md:w-[90%] lg:w-[45%] mt-3 mb-3 text-justify leading-6 text-lg md:text-xl font-semibold lg:text-2xl text-[#022581]">
          Our specialties include model photography, food photography,
          corporate, family, professional photos for LinkedIn, wedding
          photography, and graduation photography.
        </p>
      </div>

      {/* Studio images */}
      <div className="flex flex-cols-3 justify-between w-full md:h-[20%] md:flex-row gap-y-5 max-lg:mt-[3vw] mt-[2vw]">
        {dataCardBStudio?.map(({ src, h2, h3, p, blurPic, nav }) => {
          return (
            <CardOverlay
              src={src}
              h2={h2}
              h3={h3}
              p={p}
              blurPic={blurPic}
              className=""
              navigate={() => navigate(`${nav}`)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BelinskyStudio;
