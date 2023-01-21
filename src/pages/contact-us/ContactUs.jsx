import bg from "./assets/bg-contactus.png";
import Form from "./components/Form";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div
      className="pb-[30vh] h-full w-full"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative h-[25rem] -z-10">
        <img
          alt="bgContact"
          src={bg}
          className="absolute object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#0225818C]" />
        <div className="absolute flex flex-col items-center justify-center w-full h-full gap-5">
          <h1 className="text-3xl font-black text-center text-white md:text-5xl lg:text-6xl xl:tracking-wider">
            REQUEST A PROPOSAL
          </h1>
          <p className="text-lg font-bold text-white md:text-xl lg:text-3xl xl:text-4xl">
            let's create something great together
          </p>
        </div>
      </div>
      {/* FORM */}
      <Form />
    </motion.div>
  );
};

export default ContactUs;
