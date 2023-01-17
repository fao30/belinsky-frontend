import video from "./assets/Hero_Video.mp4";

const Header = () => {
  return (
    <section className="min-h-screen w-full mb-[10vh]">
      <div className="relative w-full h-screen">
        <video
          autoplay
          loop
          muted
          type="video/mp4"
          src={video}
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className="absolute flex flex-col justify-center h-full left-[3.5rem] gap-y-4">
          <h1 className="text-5xl text-white uppercase">
            Taking off to a sky,
            <br /> where creativity is limitless
          </h1>
          <p className="text-lg text-white">
            Given that Belinsky is both a production house and a creative
            <br />
            studio, our areas of expertise include producing both
            <br /> photography and filmmaking
          </p>
          <button className="self-start px-7 py-3 bg-[#5484F2] text-white font-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
