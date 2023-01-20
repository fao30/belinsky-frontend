import React from "react";
import Header from "./header/Header";
import WWOffer from "./WhatWeOffer/WWOffer";
import OurWorks from "./OurWorks/OurWorks";
import Marquee from "./marquee/Marquee";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0, duration: 1 }}
    >
      <Header />
      <WWOffer />
      <OurWorks />
      <Marquee />
    </motion.div>
  );
};

export default Home;
