import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

interface SectionOneProps {
  data: {
    engineeringfirstleftcontent: string;
    engineeringfirstrightcontent: string;
  }; // Change the required prop to an optional prop.
}

const HeroSection: React.FC<SectionOneProps> = (data) => {
  return (
    <Section>
      <div className="section">
        <div className="section_bottom">
          {/* <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625219977/h3f70ouyykgpoigbcpgb.jpg'} alt="Picture of the author" /> */}
          <div className="section2_data">
            <div
              className="section2_data_left"
              dangerouslySetInnerHTML={{
                __html: data.data.engineeringfirstleftcontent,
              }}
            />
            <div
              className="section2_data_right"
              dangerouslySetInnerHTML={{
                __html: data.data.engineeringfirstrightcontent,
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
