import CarouselStudio from "../components/CarouselStudio";
import { dataCarStudio1 } from "./constants/DataCarStudio1";
import PriceList from "./components/PriceList";
import { AspectRatio } from "@mui/joy";
import video1 from "./assets/video_studio1.mp4";
import CardContactUs from "../components/CardContactUs";

// For Lazy Load
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BlurhashCanvas } from "react-blurhash";

// Photoshoot Card
import CardPhotoShootPrice from "../components/CardPhotoShootPrice";

// Data for CardPhotoShoot
import {
  couplePhotoSession,
  groupStudioSession,
  imagesPhotoshoot,
} from "./constants/DataPhotoShoot";

const Studio1 = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="py-24 w-full text-[#022581]">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-center text-4xl font-black md:text-6xl lg:text-7xl">
          STUDIO 1
        </h1>
        <p className="font-bold   md:text-lg lg:text-2xl">
          3 Thematic Korean background + Makeup Room
        </p>
      </div>
      <div className="flex justify-center w-full mt-7 md:mt-15 gap-x-4 md:gap-x-6 lg:gap-x-10 text-lg text-center md:text-xl">
        <p className="font-[400]">Length: 8,2m</p>
        <span>|</span>
        <p className="font-[400]">Height: 3m</p>
        <span>|</span>
        <p className="font-[400]">Width: 9,4m</p>
      </div>

      {/* Carousel */}
      <div className="carousel carousel-center gap-[6vw] lg:gap-[3vw] bg-transparent h-full w-full mt-1">
        {dataCarStudio1.map(({ img, blurPic }) => {
          return <CarouselStudio src={img} blurPic={blurPic} />;
        })}
      </div>

      {/* Pricelist */}
      <PriceList />

      {/* Video */}
      <div className="flex justify-center w-full h-full px-[6vw] mt-16 md:mt-32">
        <AspectRatio sx={{ width: 1280 }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            alt=""
            className="rounded-sm shadow-lg"
          >
            <source src={video1} type="video/mp4" />
          </video>
        </AspectRatio>
      </div>

      {/* Photoshoot Erika */}
      <div className="w-full mt-16 md:mt-32">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
          Photoshoot by our photographer
        </h1>
        <div className="flex justify-center w-full h-full gap-[3vw] px-[6vw] mt-5 md:mt-10">
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
        <div className="flex items-center justify-center gap-[6vw] lg:gap-[3vw] flex-wrap p-[6vw]">
          <CardPhotoShootPrice
            p="Rp 550.000"
            h1="Couple/Studio Photo Session"
            li={couplePhotoSession.map(({ li }) => {
              return <li>- {li}</li>;
            })}
          />
          <CardPhotoShootPrice
            p="Rp 750.000"
            h1="Group Studio Photo Session"
            li={groupStudioSession.map(({ li }) => {
              return <li>- {li}</li>;
            })}
          />
        </div>
      </div>

      {/* Additional Prices */}
      <div className="flex flex-col text-center text-lg md:text-2xl">
        <p> Additional printed photo: Rp 10.000</p>
        <p>
          Soft copy all photo: Rp 25.000/person <br /> or tag @belinsky.studio
          on IG story
        </p>
      </div>

      {/* Card Contact Us */}
      <CardContactUs />
    </section>
  );
};

export default Studio1;
