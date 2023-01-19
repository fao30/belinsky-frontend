import { useNavigate } from "react-router-dom";
import CardOverlay from "../components/CardOverlay";
import { dataCardPHouse } from "./constants/DataCardPHouse";

export const ProductionHouse = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-wrap w-full justify-center gap-x-14 gap-y-8 md:gap-y-20 px-[6vw] lg:px-[3vw] pt-[6vw] lg:pt-[1vw] mb-[5vw]">
      {dataCardPHouse?.map(({ srcvideo, h3, p, nav }) => (
        <CardOverlay
          srcvideo={srcvideo}
          h3={h3}
          p={p}
          navigate={() => {
            navigate(`${nav}`);
          }}
        />
      ))}
    </section>
  );
};
