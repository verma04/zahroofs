import React from "react";
import { Section } from "./Style";
import Image from "next/image";


interface SectionFive {
  data: {
    valveasherosixLeftContent: string;
    valveasherosixRightImageOne: string;
    valveasherosixRightImageTwo: string;

  }; // Change the required prop to an optional prop.
}

const SectionFive: React.FC<SectionFive> = (data) => {
  return (
    <Section>
      <div className="section4">
        <div className="section2_data_left" dangerouslySetInnerHTML={{
          __html: data.data.valveasherosixLeftContent }} >
        
        </div>
        <div className="section2_data_right"> 
          <div className="wrapper">
            <Image
              alt="Picture of the author"
              objectFit="contain"
              layout="fill"
              src={data.data.valveasherosixRightImageOne}
            />
          </div>

          <div className="wrapper">
            <Image
              alt="Picture of the author"
              objectFit="contain"
              layout="fill"
              src={data.data.valveasherosixRightImageTwo}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SectionFive;
