import { useNavigate } from "react-router-dom";
import CardOverlay from "../components/CardOverlay";
import { dataCardPHouse } from "./constants/DataCardPHouse";

export const ProductionHouse = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-wrap w-full justify-center mb-[5vw] gap-[4vw] lg:gap-[3vw] lg:px-[3vw] px-[4vw]">
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
