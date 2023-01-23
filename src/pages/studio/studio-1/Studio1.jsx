import CarouselStudio from "./components/CarouselStudio";
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
import CardPhotoShootPrice from "./components/CardPhotoShootPrice";

// Data for CardPhotoShoot
import {
  couplePhotoSession,
  groupStudioSession,
  imagesPhotoshoot,
} from "./constants/DataPhotoShoot";

const Studio1 = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="w-full min-h-screen text-[#022581]">
      <div className="flex flex-col items-center w-full mt-10 md:mt-20">
        <h1 className="text-4xl font-black md:text-5xl lg:text-6xl">
          Studio. 1
        </h1>
        <p className="font-bold text-md md:text-lg lg:text-xl">
          3 Thematic Korean background + Makeup Room
        </p>
      </div>
      <div className="flex justify-center w-full mt-7 md:mt-15 gap-x-4 md:gap-x-6 lg:gap-x-10">
        <p className="text-sm md:text-lg">Length: 8,2m</p>
        <span className="text-sm font-normal md:text-lg">|</span>
        <p className="text-sm md:text-lg">Height: 3m</p>
        <span className="text-sm font-normal md:text-lg">|</span>
        <p className="text-sm md:text-lg">Width: 9,4m</p>
      </div>

      {/* Carousel */}
      <div className="carousel carousel-center gap-[1.25rem] md:gap-[3rem] bg-transparent h-full w-full mt-1 px-[1.25rem] md:px-[3rem]">
        {dataCarStudio1.map(({ img, blurPic }) => {
          return <CarouselStudio src={img} blurPic={blurPic} />;
        })}
      </div>

      {/* Pricelist */}
      <PriceList />

      {/* Video */}
      <div className="flex justify-center w-full h-full px-[5vw] md:px-[19vw] lg:px-[15vw] mt-16 md:mt-32">
        <AspectRatio sx={{ width: 900 }}>
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
        <h1 className="text-lg text-center md:text-xl lg:text-2xl">
          Photoshoot by our photographer
        </h1>
        <div className="flex justify-center w-full h-full gap-3 px-[2vw] md:px-[4vw] lg:px-[8vw] mt-5 md:mt-10">
          {imagesPhotoshoot.map(({ img, blurPic }) => (
            <div className="relative">
              <LazyLoadImage
                beforeLoad={() => setIsLoading(true)}
                afterLoad={() => setIsLoading(false)}
                src={img}
                alt=""
                className="w-[7rem] md:w-[14rem] lg:w-[21rem]"
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
        <div className="flex flex-col items-center justify-center gap-8 p-8 md:p-14 md:gap-20 md:flex-row">
          <CardPhotoShootPrice
            p="Rp550.000"
            h1="Couple/Studio Photo Session"
            li={couplePhotoSession.map(({ li }) => {
              return (
                <li className="mx-auto ml-12 font-semibold md:ml-16">- {li}</li>
              );
            })}
          />
          <CardPhotoShootPrice
            p="Rp750.000"
            h1="Group Studio Photo Session"
            li={groupStudioSession.map(({ li }) => {
              return (
                <li className="mx-auto ml-12 font-semibold md:ml-16">- {li}</li>
              );
            })}
          />
        </div>
      </div>

      {/* Additional Prices */}
      <div className="flex flex-col text-center text-md md:text-lg">
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

export default Studio1;
