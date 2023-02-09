import React from "react";
import { motion } from "framer-motion";
import VisionMission from "./components/VisionMission";
import PhBs from "./phouse-bstudio/PhBs";
import CompanyProfile from "./phouse-bstudio/components/CompanyProfile";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-10 pb-20 md:pt-20"
    >
      <VisionMission />
      <CompanyProfile />
    </motion.section>
  );
};

export default About;
