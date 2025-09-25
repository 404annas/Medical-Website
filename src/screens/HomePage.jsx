import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Faqs from "../components/Faqs";
import Animation from "../components/Animation";
import DepthAnimation from "../components/DepthAnimation";

const HomePage = () => {
  return (
    <div>
      <Hero />

      <Services />
      {/* <Animation /> */}
      <DepthAnimation />
      <Faqs />
    </div>
  );
};

export default HomePage;
