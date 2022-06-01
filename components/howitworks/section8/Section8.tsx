import React from "react";
import { Section } from "./Style";
import Image from "next/image";
;


interface SectionEighth {
  data: {
    valveasheronineleftcontent: string;
    valveasheroninerightimage: string;

  }; // Change the required prop to an optional prop.
}


const SectionEighth: React.FC<SectionEighth> = (data) => {
  return (
    <Section>
      <div className="section">
        <div className="section2_data">
          <div className="section2_data_right">
            <Image
              alt="Picture of the author"
              objectFit="contain"
              layout="fill"
              src={data.data.valveasheroninerightimage }
            />
          </div>
          <div
           dangerouslySetInnerHTML={{
              __html: data.data.valveasheronineleftcontent
          }}
          
          className="section2_data_left">
          
          </div>

          
        </div>
      </div>
    </Section>
  );
};

export default SectionEighth;
