// Constants
import {
  dataCarStudio2First,
  dataCarStudio2Second,
} from "./constants/DataCarStudio2";

import {
  imagesPhotoshoot,
  couplePhotoSession,
  groupStudioSession,
} from "./constants/DataSelfStudio";

// Components
import CarouselStudio from "../components/CarouselStudio";
import PriceList from "./components/PriceList";
import CardPhotoShootPrice from "../components/CardPhotoShootPrice";
import CardContactUs from "../components/CardContactUs";

// For Lazy Load Image
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BlurhashCanvas } from "react-blurhash";

const Studio2 = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="w-full py-24 text-[#022581]">
      <h1 className="text-center text-4xl font-black md:text-6xl lg:text-7xl">
        STUDIO 2
      </h1>
      <p className="text-lg text-center md:text-xl mt-7 md:mt-15 font-[400]">
        Area 3.6 x 5.5m²
      </p>

      {/* Carousel 1 */}
      <div className="carousel carousel-center gap-[3vw]  bg-transparent h-full w-full mt-1">
        {dataCarStudio2First.map(({ img, blurPic }) => {
          return <CarouselStudio src={img} blurPic={blurPic} />;
        })}
      </div>

      {/* Price List */}
      <PriceList />

      {/* Carousel 2 */}
      <div className="carousel carousel-center gap-[3vw]  bg-transparent h-full w-full mt-12 md:mt-24">
        {dataCarStudio2Second.map(({ img, blurPic }) => {
          return <CarouselStudio src={img} blurPic={blurPic} />;
        })}
      </div>

      {/* Self Studio */}
      <div className="w-full mt-16 md:mt-32">
        <h1 className="text-center text-2xl lg:text-3xl">Self Studio</h1>
        <div className="flex justify-center items-center w-full h-full gap-[3vw] px-[6vw] mt-5 md:mt-10">
          {imagesPhotoshoot.map(({ img, blurPic }) => (
            <div className="relative">
              <LazyLoadImage
                beforeLoad={() => setIsLoading(true)}
                afterLoad={() => setIsLoading(false)}
                src={img}
                alt=""
                className="w-full"
              />
              {isLoading ? (
                <BlurhashCanvas
                  hash={blurPic}
                  className="absolute top-0 left-0 w-full h-full"
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>

        {/* Photoshoot Card Prices */}
        <div className="flex items-center justify-center gap-[6vw] flex-wrap p-[6vw]">
          <CardPhotoShootPrice
            p="Rp150.000"
            h1="Couple/Studio Photo Session"
            li={couplePhotoSession.map(({ li }) => {
              return <li>- {li}</li>;
            })}
          />
          <CardPhotoShootPrice
            p="Rp350.000"
            h1="Group Studio Photo Session"
            li={groupStudioSession.map(({ li }) => {
              return <li>- {li}</li>;
            })}
          />
        </div>
      </div>

      {/* Additional Prices */}
      <div className="flex flex-col text-center text-lg md:text-2xl">
        <p> Additional printed photo: Rp10.000</p>
        <p>
          Soft copy all photo: Rp25.000/person <br /> or tag @belinsky.studio on
          IG story
        </p>
      </div>

      {/* Card Contact Us */}
      <CardContactUs />
    </section>
  );
};

export default Studio2;
