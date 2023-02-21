import ph1 from "./assets/wwo-ph-1.png";
import ph2 from "./assets/wwo-ph-2.png";
import ph3 from "./assets/wwo-ph-3.png";
import ButtonCard from "./components/ButtonCard";
import { dataButton } from "./constants/DataButton";
import { Icon } from "@iconify/react";

// CardHeroPH component from about
import CardHeroPH from "../../../about/components/CardHeroPH";

const ProductionHouse = () => {
  return (
    <>
      <section className="w-full px-[4vw] my-[5vh] lg:my-[10vh] xl:my-[15vh]">
        <div className="flex flex-wrap-reverse justify-around w-full h-full lg:flex-row text-[#022581] group">
          {/* The 3 images */}
          <div className="flex w-[100%] lg:w-[45%] h-full items-center gap-5 max-lg:mt-[4vh] ">
            <div className="flex flex-col w-[50%] gap-5 z-10">
              <CardHeroPH
                src={ph1}
                alt="belinsky studio studio menantea jeremy poline"
                className="w-[100%] object-cover transition duration-700 ease-in-out translate-x-20 translate-y-20 md:translate-x-32 md:translate-y-48 rounded-2xl grayscale hover:grayscale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-700 group-hover:ease-in-out group-hover:delay-200"
                blurPic="LPHeL6~qXSbv?GS5fkWE4UMxV@WB"
              />
              <CardHeroPH
                src={ph2}
                alt="belinsky studio studio menantea turah parthayana short movie squery penty"
                className="w-[90%] object-cover transition duration-700 ease-in-out rounded-2xl grayscale hover:grayscale-0 translate-x-8 -translate-y-28 md:translate-x-16 md:-translate-y-36 z-20 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-700 group-hover:ease-in-out group-hover:delay-75 ml-auto"
                blurPic="LBI56w4n01E3019Fx]?b~pWC-;IU"
              />
            </div>
            <div className="w-[50%] md:w-[60%]">
              <CardHeroPH
                src={ph3}
                alt="belinsky studio studio waseda boys jeremy poline traveloka"
                className="object-cover transition duration-700 ease-in-out -translate-x-16 -translate-y-16 md:-translate-x-28 md:-translate-y-24 rounded-2xl grayscale hover:grayscale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-700 group-hover:ease-in-out group-hover:delay-150"
                blurPic="LGGl6W00yDD%IA4T-;9F4.~q?HRj"
              />
            </div>
          </div>

          {/* Large Screen (lg breakpoint) */}
          <div className="w-[100%] md:w-[90%] lg:w-[45%] self-center">
            <h1 className="text-4xl tracking-wide text-left md:text-5xl xl:text-6xl">
              Production House
            </h1>
            <p className="max-sm:mt-3 mt-6 text-lg  leading-6  md:text-xl lg:text-2xl">
              Belinsky strives for great quality and exclusiveness in every
              video that exhibits a flawless result. We may help you in the
              production of TVC advertisement for your advertising needs.
            </p>
            <div className="flex justify-between mt-3">
              {dataButton.map(({ icon, name }) => (
                <ButtonCard icon={icon} name={name} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductionHouse;
