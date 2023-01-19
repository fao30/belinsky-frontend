import bg from "./assets/bg-contactus.png";
import InputForm from "./components/InputForm";
import Form from "./components/Form";

const ContactUs = () => {
  return (
    <section className="pb-[30vh] h-full w-full">
      <div className="relative h-[25rem] -z-10">
        <img
          alt="bgContact"
          src={bg}
          className="absolute object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#0225818C]" />
        <div className="absolute flex flex-col items-center justify-center w-full h-full gap-5">
          <h1 className="text-3xl font-black text-center text-white md:text-4xl lg:text-5xl xl:tracking-wider xl:text-7xl">
            REQUEST A PROPOSAL
          </h1>
          <p className="text-sm font-bold text-white lg:text-xl xl:text-2xl">
            LET’S CREATE SOMETHING GREAT TOGETHER
          </p>
        </div>
      </div>

      {/* FORM */}
      <Form />
    </section>
  );
};

export default ContactUs;
