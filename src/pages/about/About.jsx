import { motion } from "framer-motion";
import React from "react";
import Index from "./components/Index";
import PhBs from "./phouse-bstudio/PhBs";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Index />
      <PhBs />
    </motion.div>
  );
};

export default About;
