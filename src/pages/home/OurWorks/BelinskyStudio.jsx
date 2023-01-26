import CardSliderImg from "./components/CardSliderImg";
import { dataCardBStudio } from "../../our-work/constants/DataCardBStudio";
import { useNavigate } from "react-router-dom";

const BelinskyStudio = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full mt-[10vh] lg:mt-[20vh] xl:mt-[30vh] px-[4vw] ">
      <h1 className="text-4xl font-black tracking-wide text-center md:text-5xl xl:text-6xl mb-[3vh] text-[#022581] ">
        Belinsky Studio
      </h1>
      <div className="carousel carousel-center gap-[1.25rem] sm:gap-[2rem] bg-transparent">
        {dataCardBStudio?.map(
          ({ src, h3, p, isHomepage, blurPic, nav, isDetails }) => (
            <CardSliderImg
              src={src}
              h3={h3}
              p={p}
              isHomepage={isHomepage}
              blurPic={blurPic}
              isDetails={isDetails}
              navigate={() => {
                navigate(`${nav}`);
              }}
            />
          )
        )}
      </div>
    </section>
  );
};

export default BelinskyStudio;
