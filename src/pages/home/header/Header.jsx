import img0 from "./assets/logo-belinsky.png";
import video from "./assets/Hero_Video.mp4";

const Header = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="flex items-center justify-center w-full h-full">
        <video
          type="video/mp4"
          src={video}
          autoPlay
          loop
          alt="Belinsky logo"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Header;
