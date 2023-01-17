import img1 from "./assets/wwo-ph-1.png";
import img2 from "./assets/wwo-ph-2.png";
import img3 from "./assets/wwo-ph-3.png";
import Button from "./components/Button";
import { dataButton } from "./constants/DataButton";

const ProductionHouse = () => {
  return (
    <>
      <section className="w-full min-h-screen p-[4vw]">
        <div className="hidden w-full h-full gap-8 md:flex">
          {/* The 3 images */}
          <div className="flex flex-col gap-8 w-[30%] h-full">
            <div className="w-[80%] self-end">
              <img
                src={img1}
                alt="img1"
                className="object-cover duration-500 ease-in-out grayscale hover:grayscale-0"
              />
            </div>
            <div className="self-end w-[55%]">
              <img
                src={img2}
                alt="img2"
                className="object-cover ease-in-out ration-500 w- grayscale hover:grayscale-0"
              />
            </div>
          </div>

          <div className="self-center w-[20%]">
            <img
              src={img3}
              alt="img3"
              className="object-cover w-full duration-500 ease-in-out grayscale hover:grayscale-0"
            />
          </div>

          {/* Title / description */}
          <div className="flex flex-col self-center w-[33%] gap-3">
            <h1 className="text-5xl font-bold">Production House</h1>
            <p className="text-justify text-md tracking-wider [word-spacing:8px]">
              Belinsky strives for great quality and exclusiveness inevery video
              that exhibits a flawless result. We may help you in the production
              of TVC advertisement for your advertising needs.
            </p>
            <div className="flex flex-row gap-3 mt-4">
              {dataButton.map(({ name, icon }) => (
                <Button name={name} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductionHouse;

// cara 1

// <>
//       <h1 className="text-white text-center bg-[#0225818C] py-5">
//         What We Offer
//       </h1>
//       <section className="w-full h-full">
//         {/* 3 images of Production House */}
//         <div className="grid grid-cols-3 w-full gap-6 items-center mt-[20vh] px-[4vw]">
//           <div className="flex flex-col gap-8">
//             <Card
//               src={img1}
//               alt="img1"
//               className="object-cover duration-500 ease-in-out rounded-xl grayscale hover:grayscale-0 w-[65%] mx-auto"
//             />
//             <Card
//               src={img2}
//               alt="img2"
//               className="relative object-cover duration-500 ease-in-out rounded-xl grayscale hover:grayscale-0 w-[55%] left-[27%]"
//             />
//           </div>
//           <Card
//             src={img3}
//             alt="img3"
//             className="object-cover align-middle duration-500 ease-in-out rounded-xl grayscale hover:grayscale-0 w-[65%] translate-x-[-25%]"
//           />
//           <div className="flex flex-col gap-3 translate-x-[-40%]">
//             <h1>Production House</h1>
//             <p className="text-[#022581] text-justify text-[1.3rem]">
//               Belinsky strives for great quality and exclusiveness in every
//               video that exhibits a flawless result. We may help you in the
//               production of TVC advertisement for your advertising needs.
//             </p>
//             <div className="flex flex-row gap-3 mt-4">
//               {dataButton.map(({ name, icon }) => (
//                 <Button name={name} icon={icon} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
