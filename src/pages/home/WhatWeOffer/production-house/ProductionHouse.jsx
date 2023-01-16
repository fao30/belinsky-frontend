import img1 from "./assets/wwo-ph-1.png";
import img2 from "./assets/wwo-ph-2.png";

const ProductionHouse = () => {
  return (
    <section className="w-full h-[150vh] px-[6vw] my-[4vh]">
      <h1 className="text-white align-middle text-center bg-[#0225818C] py-5">
        What We Offer
      </h1>

      {/* 2 images of Production House */}
      <div className="flex items-baseline justify-center w-full h-full lg:pt-[15rem] gap-x-9">
        <img
          src={img1}
          alt=""
          className="w-[30%] lg:w-[28%] rounded-xl grayscale"
        />
        <img
          src={img2}
          alt=""
          className="w-[30%] lg:w-[28%] relative lg:top-[11%] rounded-xl grayscale"
        />

        {/* Production House */}
        <div className="flex-col lg:w-[28%] lg:relative">
          <h1 className="mb-2 text-5xl">Production House</h1>
          <p className="text-[#022581] mb-7">
            Belinsky strives for great quality and exclusiveness in every video
            that exhibits a flawless result. We may help you in the production
            of TVC advertisement for your advertising needs.
          </p>
          <div className="flex gap-5">
            <button className="w-[33%] py-[0.5rem] bg-white text-[#022581] shadow-lg rounded-lg hover:bg-[#022581] hover:text-white ease-in-out duration-300">
              TVC
            </button>
            <button className="w-[33%] py-[0.5rem] bg-white text-[#022581] shadow-lg rounded-lg hover:bg-[#022581] hover:text-white ease-in-out duration-300">
              Web Series
            </button>
            <button className="w-[33%] py-[0.5rem] bg-white text-[#022581] shadow-lg rounded-lg hover:bg-[#022581] hover:text-white ease-in-out duration-300">
              Short Movie
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionHouse;
