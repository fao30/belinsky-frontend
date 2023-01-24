import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardFounders = ({ src, h3, blurPic }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="flex flex-col w-[25%] md:w-[15%] lg:w-[10%] gap-y-2">
        <LazyLoadImage
          loading="lazy"
          alt=""
          src={src}
          className=" bg-[#626161] rounded-full"
          beforeLoad={() => setIsLoading(true)}
          afterLoad={() => setIsLoading(false)}
        />
        {isLoading ? (
          <BlurhashCanvas
            hash={blurPic}
            height="200"
            width="200"
            className="absolute rounded-full w-[25%] md:w-[15%] lg:w-[10%] gap-y-2"
          />
        ) : (
          <h3 className="font-extrabold text-center mx-auto w-[80%] md:w-full text-md md:text-lg">
            {h3}
          </h3>
        )}
        {/* <h3 className="font-extrabold text-center mx-auto w-[80%] md:w-full text-md md:text-lg">
          {h3}
        </h3> */}
      </div>
    </>
  );
};

export default CardFounders;
