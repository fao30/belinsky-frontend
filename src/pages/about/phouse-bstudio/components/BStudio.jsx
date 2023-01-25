import CardHeroBS from "../../components/CardHeroBS";
import bh1 from "../../assets/about-bh-1.png";
import bh2 from "../../assets/about-bh-2.png";

const BStudio = () => {
  return (
    <>
      <section className="flex flex-col justify-around w-full h-full md:flex-row text-[#022581] group my-[8vh] md:my-[16vh]">
        <div className="p-5 md:p-10 w-[100%] h-full md:w-[50%] my-auto">
          <h1 className="font-black uppercase text-2xl lg:text-3xl">
            Belinsky Studio
          </h1>
          <p className="text-base lg:text-xl font-bold">
            Our specialties include model photography, food photography,
            corporate, family, professional photos for LinkedIn, wedding
            photography, and graduation photography.
          </p>
        </div>
        <div className="flex w-[100%] md:w-[50%] h-[30rem] p-5 gap-x-5 items-center justify-center">
          <div className="w-[50%] sm:w-[30%] md:w-[50%] lg:w-[40%] xl:w-[30%] self-start">
            <CardHeroBS
              src={bh1}
              className="self-start object-cover transition duration-700 ease-in-out translate-x-16 translate-y-24 rounded-2xl grayscale hover:grayscale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:delay-300 group-hover:duration-700 group-hover:ease-in-out"
              blurPic="LAGuK_-;9^00D4xY4:IU00$~-;_N"
            />
          </div>
          <div className="w-[50%] sm:w-[30%] md:w-[50%] lg:w-[40%] xl:w-[30%] self-end">
            <CardHeroBS
              src={bh2}
              className="object-cover transition duration-700 ease-in-out -translate-x-24 -translate-y-28 rounded-2xl grayscale hover:grayscale-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:delay-200 group-hover:duration-700 group-hover:ease-in-out"
              blurPic="LBIEqi8^9ut5_NxU%Mt64;WUjEIV"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BStudio;
