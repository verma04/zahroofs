import React from "react";
import { Section } from "./Style";
import Image from "next/image";



interface SectionSix {
  data: {
    valveasherosevenLeftContent: string;
    valveasherosevenRightContent: string;

  }; // Change the required prop to an optional prop.
}

const SectionSix: React.FC<SectionSix> = (data) => {

  

  return (
    <Section>
      <div className="section4">
        <div className="section_data">
          <div className="section_data_left" dangerouslySetInnerHTML={{
            __html: data.data.valveasherosevenLeftContent
          }} >
           
          </div>
          <div className="section_data_right" dangerouslySetInnerHTML={{
            __html: data.data.valveasherosevenRightContent
          }} >

          </div>
        </div>
        <div className="tringle"></div>
      </div>
    </Section>
  );
};

export default SectionSix;
