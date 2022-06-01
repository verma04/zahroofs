import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

interface SectionTwoProps {
  data: {
    engineeringtwoleftcontent: string;
    engineeringtworightcontent: string;
  }; // Change the required prop to an optional prop.
}

const HeroSection: React.FC<SectionTwoProps> = (data) => {
  return (
    <Section>
      <div className="section6">
        <div className="section2_data">
          <div
            className="section2_data_left"
            dangerouslySetInnerHTML={{
              __html: data.data.engineeringtwoleftcontent,
            }}
          />
          <div
            className="section2_data_right"
            dangerouslySetInnerHTML={{
              __html: data.data.engineeringtworightcontent,
            }}
          />
        </div>
        <div className="tringle"></div>
      </div>
    </Section>
  );
};

export default HeroSection;
