import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardFounders = ({ src, h3, blurPic }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="flex flex-col w-[30%] md:w-[25%] lg:w-[20%] xl:w-[15%] gap-y-2 relative">
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
            className="absolute w-full h-full rounded-full"
          />
        ) : (
          <>
            <h3 className="text-center mx-auto w-[80%] md:w-full md:text-lg lg:text-2xl font-semibold mt-1">
              {h3}
            </h3>
          </>
        )}
        {/* <h3 className="text-center mx-auto w-[80%] md:w-full   md:text-lg">
          {h3}
        </h3> */}
      </div>
    </>
  );
};

export default CardFounders;
