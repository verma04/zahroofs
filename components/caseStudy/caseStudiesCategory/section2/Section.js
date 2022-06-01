import React from "react";
import { Section } from "./Style";
import Image from "next/image";



const HeroSection = ({data}) => {
  return (
    <Section>
      <div className="section">
        <div className="section_top">
          <div className="section2_data">
            <div
            
              className="section2_data_left"
            >
              <h2>{data.section2Title}</h2>
<p
dangerouslySetInnerHTML={{
  __html: data.section2Para
}}

/>

            </div>
          </div>
        </div>

       
      </div>
    </Section>
  );
};

export default HeroSection;
