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
import CardPhotoShootPrice2 from "../components/CardPhotoShootPrice2";
import CardContactUs from "../components/CardContactUs";

// For Lazy Load Image
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BlurhashCanvas } from "react-blurhash";
import EquipmentStudio2 from "./components/EquipmentStudio2";

const Studio2 = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="w-full py-24 text-[#022581]">
      <h1 className="text-4xl text-center md:text-6xl lg:text-7xl">STUDIO 2</h1>
      <p className="text-lg text-center md:text-xl mt-7 md:mt-15 font-[400]">
        Area 3.6 x 5.5m²
      </p>

      {/* Carousel 1 */}
      <div className="w-full h-full gap-4 mt-1 bg-transparent carousel carousel-center">
        {dataCarStudio2First.map(({ img, blurPic }) => {
          return <CarouselStudio src={img} blurPic={blurPic} />;
        })}
      </div>

      {/* Price List */}
      <PriceList />

      {/* Carousel 2 */}
      <div className="w-full h-full gap-4 mt-12 bg-transparent carousel carousel-center md:mt-24">
        {dataCarStudio2Second.map(({ img, blurPic }) => {
          return <CarouselStudio src={img} blurPic={blurPic} />;
        })}
      </div>

      {/* Self Studio */}
      <div className="w-full mt-16 md:mt-32">
        <h1 className="text-2xl text-center md:text-3xl lg:text-4xl">
          Self Studio
        </h1>
        <div className="flex justify-center items-center w-full h-full gap-[3vw] px-[6vw] mt-5 md:mt-10">
          {imagesPhotoshoot?.map(({ img, blurPic }) => (
            <div className="relative">
              <LazyLoadImage
                beforeLoad={() => setIsLoading(true)}
                afterLoad={() => setIsLoading(false)}
                src={img}
                alt=""
                className="w-full lg:w-[30rem] lg:h-[40rem] object-cover"
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
          <CardPhotoShootPrice2
            p="Rp 150.000"
            h1="COUPLE SELF PHOTO (2 persons)"
            li={couplePhotoSession.map(({ li }) => {
              return <li>- {li}</li>;
            })}
          />
          <CardPhotoShootPrice2
            p="Rp 250.000"
            h1="GROUP SELF PHOTO (4 persons)"
            li={groupStudioSession.map(({ li }) => {
              return <li>- {li}</li>;
            })}
          />
        </div>
      </div>

      {/* Additional Prices */}
      <EquipmentStudio2 />

      {/* Card Contact Us */}
      <CardContactUs />
    </section>
  );
};

export default Studio2;
