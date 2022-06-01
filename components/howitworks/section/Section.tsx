import React from "react";
import { Section } from "./Style";
import Image from "next/image";


interface SectionOne {
  data: {
    valveasherofirstcontent: string;
    valveasherofirstbottomcontent: string;
  }; // Change the required prop to an optional prop.
}

const SectionOne: React.FC<SectionOne> = (data) => {
  return (
    <Section>
      <div className="section">
        <div className="section_top"
            dangerouslySetInnerHTML={{
              __html: data.data.valveasherofirstcontent
            }}
        >
        
        </div>

        <div className="section_bottom">
          <Image
            objectFit="cover"
            layout="fill"
            src={
              "https://res.cloudinary.com/dzcmadjl1/image/upload/v1625219977/h3f70ouyykgpoigbcpgb.jpg"
            }
            alt="Picture of the author"
          />

          <div className="section2_data">
            <div            
              dangerouslySetInnerHTML={{
                  __html: data.data.valveasherofirstbottomcontent
              }}
            className="section2_data_left">
              
             
              
            </div>
            <div className="section2_data_right">
              <Image
                alt="Picture of the author"
                objectFit="contain"
                layout="fill"
                src={
                  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1624345653/gi631r3x8sk1e38jq8mk.png"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SectionOne;
