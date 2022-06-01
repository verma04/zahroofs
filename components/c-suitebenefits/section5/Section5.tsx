import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

interface SectionProps {
  data: {
    enterprisethreeTopContent: string;
  };
}
const Section5: React.FC<SectionProps> = (data) => {

  console.log(data)
  return (
    <Section>
      <div className="section">
        <div className="section_top">
          <div className="section2_data">
            <div
             dangerouslySetInnerHTML={{
              __html: data.data.enterprisethreeTopContent
            }}
            
            className="section2_data_left">
            
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Section5;
