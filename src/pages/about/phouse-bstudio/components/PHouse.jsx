import ph1 from "../../../../assets/production-house/wwo-ph1.png";
import ph2 from "../../../../assets/production-house/wwo-ph2.png";
import ph3 from "../../../../assets/production-house/wwo-ph3.png";

import CardHeroPH from "../../components/CardHeroPH";

const PHouse = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse justify-around w-full h-full text-[#022581] group my-[8vh] md:my-[16vh]">
        <div className="max-md:px-[4vw] px-8 flex  w-[100%] md:w-[90%] lg:-[70%] xl:w-[50%] h-full items-center gap-5">
          <div className="flex flex-col w-[50%] gap-5 z-10">
            <CardHeroPH
              src={ph1}
              className="w-[100%] object-cover transition duration-700 ease-in-out translate-x-20 translate-y-20 md:translate-x-32 md:translate-y-48 rounded-2xl grayscale hover:grayscale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-700 group-hover:ease-in-out group-hover:delay-200"
              blurPic="LPHeL6~qXSbv?GS5fkWE4UMxV@WB"
            />
            <CardHeroPH
              src={ph2}
              className="w-[90%] object-cover transition duration-700 ease-in-out rounded-2xl grayscale hover:grayscale-0 translate-x-10 -translate-y-20 md:translate-x-14 md:-translate-y-44 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-700 group-hover:ease-in-out group-hover:delay-75 ml-auto"
              blurPic="LBI56w4n01E3019Fx]?b~pWC-;IU"
            />
          </div>
          <div className="w-[80%] md:w-[60%]">
            <CardHeroPH
              src={ph3}
              className="object-cover transition duration-700 ease-in-out -translate-x-8 -translate-y-5 md:-translate-x-28 md:-translate-y-28 rounded-2xl grayscale hover:grayscale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-700 group-hover:ease-in-out group-hover:delay-150"
              blurPic="LGGl6W00yDD%IA4T-;9F4.~q?HRj"
            />
          </div>
        </div>
        <div className="max-md:px-[4vw] px-8 pb-8 w-[100%] md:w-[90%] lg:-[70%] xl:w-[50%] my-auto">
          <h1 className=" font-black uppercase aboutTitleSize">
            Production House
          </h1>
          <p className="font-bold aboutSize">
            Belinsky strives for great quality and exclusiveness in every video
            that exhibits a flawless result. We may help you in the production
            of TVC advertisement for your advertising needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default PHouse;
