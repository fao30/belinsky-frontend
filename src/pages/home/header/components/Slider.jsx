// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ src }) => {
  return (
    <>
      <img
        alt={src}
        src={src}
        className="absolute top-0 left-0 object-cover w-full h-full"
      />
    </>
  );
};

export default Slider;
