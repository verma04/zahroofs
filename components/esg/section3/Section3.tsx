import React from "react";
import { Section } from "./Style";
interface Section {
  data: {
    esgbenifitsthreerightcontent: string;
  };
}

const HeroSection: React.FC<Section> = (data) => {
  return (
    <Section>
      <div className="section2">
        <div
          className="section_data"
          dangerouslySetInnerHTML={{
            __html: data.data.esgbenifitsthreerightcontent,
          }}
        ></div>

        <div className="tringle"></div>


      
      </div>
    </Section>
  );
};

export default HeroSection;
