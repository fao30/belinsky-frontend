import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-fade";

import img0 from "./assets/logo-belinsky.png";

const Header = () => {
  return (
    <section className="w-full minh-screen">
      <div className="flex items-center justify-center h-screen">
        <img src={img0} alt="Belinsky logo" />
      </div>
    </section>
  );
};

export default Header;
