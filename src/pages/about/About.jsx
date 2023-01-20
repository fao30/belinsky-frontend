import { motion } from "framer-motion";
import React from "react";
import Founder from "./components/Founder";
import Misi from "./components/Misi";
import Visi from "./components/Visi";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0, duration: 1 }}
    >
      <Visi />
      <Misi />
      <Founder />
    </motion.div>
  );
};

export default About;
