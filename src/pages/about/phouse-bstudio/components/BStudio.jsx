import CardHeroBS from "../../components/CardHeroBS";
import bh1 from "../../assets/about-bh-1.png";
import bh2 from "../../assets/about-bh-2.png";

const BStudio = () => {
  return (
    <>
      <section className="flex flex-wrap justify-around w-full h-full text-[#022581] group my-[8vh] md:my-[16vh]">
        <div className="flex flex-col max-xl:text-right max-md:px-[4vw] px-8 pb-8 w-[100%] md:w-[90%] lg:-[70%] xl:w-[50%] my-auto">
          <h1 className="uppercase aboutTitleSize">Belinsky Studio</h1>
          <p className="aboutSize max-sm:mt-3 mt-6">
            Our specialities include model photography, food photography,
            corporate, family, professional photos for LinkedIn, wedding
            photography, and graduation photography.
          </p>
        </div>
        <div className="px-8 flex w-[100%] md:w-[90%] lg:-[70%] xl:w-[50%] h-full items-end gap-5">
          <div className="flex flex-col w-[50%] items-end gap-5 z-10">
            <CardHeroBS
              src={bh1}
              alt="Belinsky Production House Studio Belinsky Korea Background"
              className="self-start object-cover transition duration-700 ease-in-out translate-x-16 md:translate-x-32 rounded-2xl grayscale hover:grayscale-0 group-hover:translate-x-0"
              blurPic="LAGuK_-;9^00D4xY4:IU00$~-;_N"
            />
          </div>
          <div className="w-[50%]">
            <CardHeroBS
              src={bh2}
              alt="Belinsky Production House Studio Belinsky White Limbo Background"
              className="object-cover transition duration-700 ease-in-out -translate-x-16 md:-translate-x-32 rounded-2xl grayscale hover:grayscale-0 group-hover:translate-x-0"
              blurPic="LBIEqi8^9ut5_NxU%Mt64;WUjEIV"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BStudio;
