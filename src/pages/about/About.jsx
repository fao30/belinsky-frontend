import React from "react";
import { motion } from "framer-motion";
import Index from "./components/Index";
import PhBs from "./phouse-bstudio/PhBs";
import TermsAndCondition from "./termsAndConditions/TermsAndCondition";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-10 pb-20 md:pt-20"
    >
      <TermsAndCondition />
      {/* <Index />
      <PhBs /> */}
    </motion.section>
  );
};

export default About;
