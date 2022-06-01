import React from "react";
import HeroSection from "../heroSection/heroSection";
import Slider from "./slider/slider";
import Section from './section/section'
import Section3 from './section3/Section'
import Head from "next/head";



const index: React.FC = () => {
  return (
    <div>
 

      <HeroSection  />
      <Section/>
      <Section3/>
   <Slider/>
    </div>
  );
};

export default index;
