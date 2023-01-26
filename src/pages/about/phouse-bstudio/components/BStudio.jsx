import CardHeroBS from "../../components/CardHeroBS";
import bh1 from "../../assets/about-bh-1.png";
import bh2 from "../../assets/about-bh-2.png";

const BStudio = () => {
  return (
    <>
      <section className="flex flex-wrap justify-around w-full h-full text-[#022581] group my-[8vh] md:my-[16vh]">
        <div className="max-sm:text-right max-md:px-[4vw] px-8 pb-8 w-[100%] md:w-[80%] lg:-[70%] xl:w-[50%] my-auto">
          <h1 className="font-black uppercase text-2xl md:text-3xl">
            Belinsky Studio
          </h1>
          <p className="text-base md:text-xl font-bold">
            Our specialties include model photography, food photography,
            corporate, family, professional photos for LinkedIn, wedding
            photography, and graduation photography.
          </p>
        </div>
        <div className="max-md:px-[4vw] px-8 flex w-[100%] md:w-[80%] lg:-[70%] xl:w-[50%] h-full items-center gap-5">
          <div className="flex flex-col w-[50%] items-end gap-5">
            <CardHeroBS
              src={bh1}
              className="max-sm:group-hover:-translate-y-12 self-start object-cover transition duration-700 ease-in-out translate-x-16 translate-y-24 rounded-2xl grayscale hover:grayscale-0 max-lg:translate-y-36 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:delay-300 group-hover:duration-700 group-hover:ease-in-out"
              blurPic="LAGuK_-;9^00D4xY4:IU00$~-;_N"
            />
          </div>
          <div className="w-[50%]">
            <CardHeroBS
              src={bh2}
              className=" -cover transition duration-700 ease-in-out -translate-x-24 -translate-y-28 rounded-2xl grayscale hover:grayscale-0 group-hover:translate-x-0 max-xl:-translate-y-0 group-hover:translate-y-0 group-hover:delay-200 group-hover:duration-700 group-hover:ease-in-out"
              blurPic="LBIEqi8^9ut5_NxU%Mt64;WUjEIV"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BStudio;
