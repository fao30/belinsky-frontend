import React from "react";
import Header from "./header/Header";
// import WWOffer from "./WhatWeOffer/WWOffer";
// import OurWorks from "./OurWorks/OurWorks";
import Studio from "../../Studio";
import Studio2 from "../../Studio2";
const Home = () => {
  return (
    <>
      <Header />
      <Studio/>
      <Studio2/>
      {/* <WWOffer />
      <OurWorks /> */}
     
    </>
  );
};

export default Home;
