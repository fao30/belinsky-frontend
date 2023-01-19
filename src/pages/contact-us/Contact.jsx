import bg from "./assets/bg.png";
import InputForm from "./components/InputForm";

const Contact = () => {
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
          <h1 className="text-4xl font-black text-center text-white lg:text-5xl xl:tracking-wider xl:text-7xl">
            REQUEST A PROPOSAL
          </h1>
          <p className="font-bold text-white text-md lg:text-xl xl:text-2xl">
            LET’S CREATE SOMETHING GREAT TOGETHER
          </p>
        </div>
      </div>

      {/* FORM */}
      <form className="h-fit w-[90%] p-[0.5rem] md:w-[85%] xl:w-[70rem] bg-white mx-auto -mt-16 drop-shadow-[0_1.5px_1.5px_black]">
        <div className="flex flex-col md:flex-row p-[1.5rem] xl:px-[7rem] xl:py-[3rem] justify-center w-full h-full text-[#022581] xl:text-2xl font-semibold gap-7">
          <InputForm label="Name" type="text" name="name" />
          <InputForm label="Company Name" type="text" name="companyName" />
        </div>
        <div className="flex flex-col md:flex-row px-[1.5rem] xl:px-[7rem] xl:py-[3rem] justify-center w-full h-full text-[#022581] xl:text-2xl font-semibold gap-7">
          <InputForm label="Email" type="email" name="email" />
          <InputForm label="Phone" type="tel" name="phone" />
        </div>
        <div className="flex flex-col p-5 md:flex-row xl:px-[7rem] xl:py-[3rem] justify-start w-full h-full text-[#022581] xl:text-2xl font-semibold gap-4">
          <div className="flex flex-col w-full h-full md:gap-y-2">
            <label htmlFor="textarea" className="text-md lg:text-xl">
              Your Message
            </label>
            <textarea
              name="textarea"
              id="textarea"
              className="text-area bg-[#E0E0E0] px-3 py-5 caret-[#022581] rounded-lg"
              rows="7"
            ></textarea>
            <input
              type="submit"
              value="send"
              className="py-4 w-[8rem] xl:py-[1.1rem] xl:w-[25%] text-lg xl:text-xl text-center bg-[#022581] text-white mt-5 rounded-2xl uppercase font-bold"
              onClick={(e) => e.target.value}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
