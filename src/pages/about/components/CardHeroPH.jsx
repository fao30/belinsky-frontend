import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardHeroPH = ({ src, className, blurPic }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="relative">
        <LazyLoadImage
          loading="lazy"
          alt="Belinsky Studio"
          src={src}
          className={className}
          beforeLoad={() => setIsLoading(true)}
          afterLoad={() => setIsLoading(false)}
        />
        {isLoading ? (
          <BlurhashCanvas
            hash={blurPic}
            className={`absolute top-0 right-0 w-full h-full ${className}`}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CardHeroPH;
