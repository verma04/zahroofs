import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";



const HeroSection: React.FC = () => {
  return (
    <Section>
      <div className="section6">
        <div className="section2_data">
          <div  className="section2_data_left"  >

            <h2>Jack bolts 
are a thing 
of the past. 
</h2>
            </div>
          <div className="section2_data_right" >
            <h2> introducing the 
JACK BOLT ELIMINATOR</h2>

<h3>Zahroof  has a solution to the those pesky jack bolts 
</h3>
            </div>

         
        </div>
        <div className="tringle"></div>
     
      </div>
    </Section>
  );
};

export default HeroSection;
