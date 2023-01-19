import React from "react";
import Header from "./header/Header";
import WWOffer from "./WhatWeOffer/WWOffer";
import OurWorks from "./OurWorks/OurWorks";
import Marquee from "./marquee/Marquee";

const Home = () => {
  return (
    <>
      <Header />
      <WWOffer />
      <OurWorks />
      <Marquee />
    </>
  );
};

export default Home;
