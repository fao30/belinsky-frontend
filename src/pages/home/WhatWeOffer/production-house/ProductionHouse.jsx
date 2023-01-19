import img1 from "./assets/wwo-ph-1.png";
import img2 from "./assets/wwo-ph-2.png";
import img3 from "./assets/wwo-ph-3.png";
import ButtonCard from "./components/ButtonCard";
import { dataButton } from "./constants/DataButton";

const ProductionHouse = () => {
  return (
    <>
      <section className="w-full min-h-screen p-[4vw] my-[10vh]">
        {/* FOR XL screen size */}
        <div className="hidden w-full h-full gap-8 xl:flex md:justify-center">
          {/* The 3 images */}
          <div className="flex flex-col gap-8 w-[30%] h-full">
            <div className="w-[80%] self-end">
              <img
                src={img1}
                alt="img1"
                className="object-cover w-full duration-300 ease-in-out grayscale hover:grayscale-0"
              />
            </div>
            <div className="self-end w-[55%]">
              <img
                src={img2}
                alt="img2"
                className="object-cover w-full duration-300 ease-in-out grayscale hover:grayscale-0"
              />
            </div>
          </div>

          <div className="self-center w-[20%]">
            <img
              src={img3}
              alt="img3"
              className="object-cover w-full duration-300 ease-in-out grayscale hover:grayscale-0"
            />
          </div>

          {/* Title / description */}
          <div className="flex flex-col self-center w-[33%] gap-3">
            <h1 className="text-5xl text-[#022581]">Production House</h1>
            <p className="text-justify text-lg md:text-xl text-[#022581]">
              Belinsky strives for great quality and exclusiveness inevery video
              that exhibits a flawless result. We may help you in the production
              of TVC advertisement for your advertising needs.
            </p>
            <div className="flex flex-row gap-3 mt-4">
              {dataButton.map(({ name, icon }) => (
                <ButtonCard name={name} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductionHouse;
