import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

interface SectionThreeProps {
  data: {
    engineeringthreeleftimage: string;
    engineeringthreerightcontent: string;
  }; // Change the required prop to an optional prop.
}

const HeroSection: React.FC<SectionThreeProps> = (data) => {
  return (
    <Section>
      <div className="section4">
        <div className="section2_data">
          <div className="section2_data_right">
            <div className="img-wrapper">
              <Image
                alt="Picture of the author"
                objectFit="contain"
                layout="fill"
                src={data.data.engineeringthreeleftimage}
              />
            </div>
          </div>

          <div
            className="section2_data_left"
            dangerouslySetInnerHTML={{
              __html: data.data.engineeringthreerightcontent,
            }}
          />
        </div>

        <div className="tringle"></div>
      </div>
    </Section>
  );
};

export default HeroSection;
