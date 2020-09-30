import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";
import Navbar from "../../Navbar";
import Footer from "../Footer.js/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;
