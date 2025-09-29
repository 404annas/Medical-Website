import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Faqs from "../components/Faqs";
import Animation from "../components/Animation";
import DepthAnimationSerivces from "../components/DepthAnimationServices";

const HomePage = () => {
  return (
    <div>
      <Hero />

      <Services />
      <DepthAnimationSerivces />
      <Faqs />
    </div>
  );
};

export default HomePage;
