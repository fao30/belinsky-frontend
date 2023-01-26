import { useNavigate } from "react-router-dom";
import { dataCardPHouse } from "../../our-work/constants/DataCardPHouse";
import CardSliderVid from "./components/CardSliderVid";

const ProductionHouse = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full px-[4vw] my-[5vh] lg:my-[10vh] xl:my-[15vh]">
      <h1 className="text-4xl font-black tracking-wide text-center md:text-5xl xl:text-6xl mb-[3vh] text-[#022581] ">
        Production House
      </h1>
      <div className="carousel carousel-center gap-[1.25rem] sm:gap-[2rem] bg-transparent">
        {dataCardPHouse?.map(
          ({ srcvideo, h3, p, isHomepage, blurPic, nav, isDetails }) => (
            <CardSliderVid
              srcvideo={srcvideo}
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

export default ProductionHouse;
