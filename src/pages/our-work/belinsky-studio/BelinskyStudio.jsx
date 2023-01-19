import { useNavigate } from "react-router-dom";
import CardOverlay from "../components/CardOverlay";
import { dataCardBStudio } from "./constants/DataCardBStudio";

export const BelinskyStudio = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-wrap w-full justify-center mb-[5vw] gap-[4vw] lg:gap-[3vw] lg:px-[3vw] px-[4vw]">
      {dataCardBStudio?.map(({ src, h3, p, nav }) => (
        <CardOverlay
          src={src}
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
