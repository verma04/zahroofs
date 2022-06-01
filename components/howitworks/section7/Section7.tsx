import React from "react";
import { Section } from "./Style";
import Image from "next/image";


interface SectionSeven {
  data: {
    valveasheroeighthleftcontent: string;
    valveasheroeighthrightimage: string;

  }; // Change the required prop to an optional prop.
}

const SectionSeven: React.FC<SectionSeven> = (data) => {
  return (
    <Section>
      <div className="section4">
        <Image
          objectFit="cover"
          layout="fill"
          src={
            "https://res.cloudinary.com/dzcmadjl1/image/upload/v1624000545/rsukles8twyiyukry6ws.png"
          }
          alt="Picture of the author"
        />
        <div className="section2_data">
          <div
           dangerouslySetInnerHTML={{
              __html: data.data.valveasheroeighthleftcontent
            }} 
            className="section2_data_left">
          </div>

          <div className="section2_data_right">
            <Image
              alt="Picture of the author"
              objectFit="contain"
              layout="fill"
              src={data.data.valveasheroeighthrightimage}
            />
          </div>
        </div>

        <div className="tringle"></div>
      </div>
    </Section>
  );
};

export default SectionSeven;
