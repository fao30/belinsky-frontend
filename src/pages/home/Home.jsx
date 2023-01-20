import React from "react";
import Header from "./header/Header";
import WWOffer from "./WhatWeOffer/WWOffer";
import OurWorks from "./OurWorks/OurWorks";
import Studio from "../../Studio";

const Home = () => {
  return (
    <>
      <Header />
      <Studio/>
      <WWOffer />
      <OurWorks />
     
    </>
  );
};

export default Home;
