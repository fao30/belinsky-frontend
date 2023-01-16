import img1 from "./Menantea_1.png";
import img2 from "./Lazada.png";
import img3 from "./Paragon.png";
import img4 from "./Toyota.png";
import img5 from "./Traveloka.png";
import img6 from "./TACO.png";
import img7 from "./BaranEnergy.png";

const marqueeData = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
  {
    image: img6,
  },
  {
    image: img7,
  },
];

const MarqueeData = () => {
  return (
    <section className="w-full py-8 bg-transparent">
      <div className="container mx-auto">
        <div className="flex justify-around gap-6">
          {marqueeData.map((e) => {
            return (
              <div className="flex items-center ">
                <img src={e.image} alt="brand images" className="w-24" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarqueeData;