import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
interface Section {
  data: {
    aboutfirstleftContent: string;
    aboutfirstrightContent: string;
  }; // Change the required prop to an optional prop.
}
const HeroSection: React.FC<Section> = (data) => {
  return (
    <Section>
      <div className="section">
        <Image
          objectFit="cover"
          layout="fill"
          src={
            "https://app.zahroofvalves.com/wp-content/uploads/2021/08/rsukles8twyiyukry6ws.png"
          }
          alt="Picture of the author"
        />
        <div className="section2_data">
          <div
            dangerouslySetInnerHTML={{
              __html: data.data.aboutfirstleftContent,
            }}
            className="section2_data_left"
          >
            {/* <h2>mission</h2>
<p>At Zahroof Valves, Inc., we are driven to vastly improve the efficiency and profitability of all industries that use industrial reciprocating compressors. By bringing our 
revolutionary, yet simplified solutions to this global 
industry, we intend to bring dramatic and sustainable 
economic value to all of our customers, reliably and 
consistently elevating production, while reducing power consumption, downtime, repair costs, and emissions. </p> */}
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: data.data.aboutfirstrightContent,
            }}
            className="section2_data_left"
          >
            {/* <h2>vision</h2>
<p>As a respected, leading, global brand offering world-class engineering and design, we will bring solutions that 
consistently deliver the highest efficiency, highest 
reliability, and lowest total cost of ownership to 
compressor operators, manufacturers, packagers and 
distribution partners. </p> */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
