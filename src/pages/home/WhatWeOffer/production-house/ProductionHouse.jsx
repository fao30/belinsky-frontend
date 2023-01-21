import ph1 from "./assets/wwo-ph-1.png";
import ph2 from "./assets/wwo-ph-2.png";
import ph3 from "./assets/wwo-ph-3.png";
import ButtonCard from "./components/ButtonCard";
import { dataButton } from "./constants/DataButton";

const ProductionHouse = () => {
  return (
    <>
      <section className="w-full min-h-screen px-[4vw] py-[4vh]">
        <div className="flex flex-wrap-reverse justify-around w-full h-full lg:flex-row text-[#022581] group">
          {/* Mobile */}
          {/* <div className="p-5 md:p-10 w-[100%] lg:w-[50%] my-auto lg:hidden">
            <h1 className="text-xl font-black uppercase md:text-2xl xl:text-3xl">
              Production House
            </h1>
            <p className="text-sm font-bold md:text-md lg:text-lg xl:text-xl">
              Belinsky strives for great quality and exclusiveness in every
              video that exhibits a flawless result. We may help you in the
              production of TVC advertisement for your advertising needs.
            </p>
            <div className="flex justify-between">
              {dataButton.map(({ icon, name }) => (
                <ButtonCard icon={icon} name={name} />
              ))}
            </div>
          </div> */}

          {/* The 3 images */}
          <div className="flex w-[100%] lg:w-[50%] h-full p-8 items-center gap-5">
            <div className="flex flex-col w-[50%] xl:w-[40%] items-end gap-5">
              <img
                alt=""
                src={ph1}
                className="w-[100%] object-cover transition duration-700 ease-in-out translate-x-16 translate-y-20 rounded-2xl grayscale hover:grayscale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-700 group-hover:ease-in-out group-hover:delay-200"
              />
              <img
                alt=""
                src={ph2}
                className="w-[90%] object-cover transition duration-700 ease-in-out rounded-2xl grayscale hover:grayscale-0 translate-x-16 -translate-y-20 z-20 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-700 group-hover:ease-in-out group-hover:delay-75"
              />
            </div>
            <div className="w-[50%] xl:w-[40%]">
              <img
                alt=""
                src={ph3}
                className="object-cover transition duration-700 ease-in-out -translate-x-16 rounded-2xl grayscale hover:grayscale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-700 group-hover:ease-in-out group-hover:delay-150 "
              />
            </div>
          </div>

          {/* Large Screen (lg breakpoint) */}
          <div className="md:p-10 w-[100%] lg:w-[50%]">
            <h1 className="text-4xl font-black tracking-wide text-center lg:text-4xl xl:text-5xl">
              Production House
            </h1>
            <p className="mt-2 text-xl font-bold leading-6 text-justify md:text-md lg:text-lg xl:text-xl">
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
