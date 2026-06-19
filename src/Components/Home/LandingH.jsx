import React from "react";
import Hero from "./Hero";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

// Agar aap wo Pricing/Why Choose Us wala Dashboard bhi Home pe dikhana chahte hain to neeche wali line uncomment karein:
// import Dashboard from "../Dashboard";

const LandingH = () => {
  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />

      {/* <Dashboard /> */}
    </>
  );
};

export default LandingH;
