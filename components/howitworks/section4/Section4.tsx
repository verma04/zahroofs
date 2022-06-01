import React from "react";
import { Section } from "./Style";
import Image from "next/image";


interface SectionFour {
  data: {
    valveasherofourLeftContent: string;
    valveasherofourRightContent: string;
    valveasherofourRightImage: string;

  }; // Change the required prop to an optional prop.
}

const SectionFour: React.FC<SectionFour> = (data) => {
  const set:any = "<h2>REED VALVE MODULES WITH A STRAIGHT-THROUGH FLOW PATH</h2>   <p>  Whats more the modules plastic components don t move or impact the  metal housingsSo not only is wear-and-tear completely contained    inside the modules but compressors with StraightFlo<sup>TM </sup> valves   typically operate at 1/10th the vibration levels of those with     conventional valves  </p><p>   Each StraightFlo<sup>TM </sup> module is an enhanced reed valve designed with a straight-through flow pathSince the gas doesnt have to traverse the usual tortuous high-loss path our valves have the highest    effective area for a given diameter </p> <h3> With StraightFlo <sup>TM </sup> Valves noise can be reduced by more than 7dB </h3>"
  return (
    <Section>
      <div className="section4">
        <div className="section2_data">
          <div 
            dangerouslySetInnerHTML={{
              __html: data.data.valveasherofourLeftContent}}
            className="section2_data_left" >
           
          </div>
          <div className="section2_data_right">
            <div className="img_wrapper">
              <Image
                alt="Picture of the author"
                objectFit="contain"
                layout="fill"
                src={data.data.valveasherofourRightImage}
              />
            </div>
            <div 
              dangerouslySetInnerHTML={{
                __html: data.data.valveasherofourRightContent}}
            >
           
          </div>
          </div>
        </div>

        <div className="tringle"></div>
      </div>
    </Section>
  );
};

export default SectionFour;
