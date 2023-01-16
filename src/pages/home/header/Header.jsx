import img0 from "./assets/logo-belinsky.png";

const Header = () => {
  return (
    <section className="w-full minh-screen">
      <div className="flex items-center justify-center h-screen">
        <img src={img0} alt="Belinsky logo" className="w-[55rem]" />
      </div>
    </section>
  );
};

export default Header;
