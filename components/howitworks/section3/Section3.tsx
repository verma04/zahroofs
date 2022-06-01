import React from "react";
import { Section } from "./Style";
import Image from "next/image";



interface SectionThree {
  data: {
    valveasherothreeLeftContent: string;
    valveasherothreeLeftImage: string;
    valveasherothreeRightContent: string;

  }; // Change the required prop to an optional prop.
}

const SectionThree: React.FC<SectionThree> = (data) => {
  
  return (
    <Section>
      <div className="section3">
        <div className="section2_data">
          <div className="section2_data_left">

            <div  className="set" dangerouslySetInnerHTML={{
              __html: data.data.valveasherothreeLeftContent,
            }} >
            </div>
           

            <div className="img_wrapper">
              <Image
                objectFit="contain"
                layout="fill"
                src={data.data.valveasherothreeLeftImage}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="section2_data_right"
             dangerouslySetInnerHTML={{
               __html: data.data.valveasherothreeRightContent,
            }} />
        </div>
      </div>
    </Section>
  );
};

export default SectionThree;
