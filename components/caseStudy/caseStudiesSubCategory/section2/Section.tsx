import React from "react";
import { Section } from "./Style";
import Image from "next/image";

interface Case {
    data : {

  section2Title: any ,
  section2Para:any,




    }
  }

const HeroSection: React.FC<Case> = ({data}) => {
  return (
    <Section>
      <div className="section">
        <div className="section_top">
          <div className="section2_data">
            <div
            
              className="section2_data_left"
            >
              <h2>{data.section2Title}</h2>
<p>
{data.section2Para}
</p>
            </div>
          </div>
        </div>

       
      </div>
    </Section>
  );
};

export default HeroSection;
