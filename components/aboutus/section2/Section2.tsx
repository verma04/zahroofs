import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
interface Section3 {
  data: {
    aboutsecondrightImage: string;
    aboutsecondleftContent: string;

    aboutsecondrightContent: string;
  }; // Change the required prop to an optional prop.
}
const Section3: React.FC<Section3> = (data) => {
  return (
    <Section id="ZEE">
      <div className="section4">
        <div className="section_data">
          <div
            dangerouslySetInnerHTML={{
              __html: data.data.aboutsecondleftContent,
            }}
            className="section_data_left"
          >
            {/* <h2>The story of zee</h2>
          <p>
          Zahroof Mohamed is the founder of Zahroof Valves, Inc and inventor of the StraightFlo™ Valve. Zahroof has over 30 years of experience in compressor design and development, and has 
successfully brought groundbreaking products from concept to market. 
</p>
<p>
Prior to founding ZVI, Zahroof was Chief Engineer for Samsung Techwin, establishing their Center for Turbomachinery Design Worldwide in Houston and overseeing new product 
development in South Korea and the U.S. His vast experience includes developing the core 
technology and roadmap for the process gas centrifugal compressor line for Samsung, and 
serving as the Principal Engineer at Cameron Compression Systems. Zahroof also served as
 an Engineering Specialist at York International.
</p>
<p>
Zahroof`s specialty is the development of compressors, rotordynamics, bearing design, seals, vibration analysis and troubleshooting. He holds a BS in Mechanical Engineering from College of Engineering, Trivandrum, an MS in Mechanical Engineering from Texas A&M University and a diploma in International Management from IFL, Swedish Institute for Management.
</p>
          */}
          </div>
          <div className="section_data_right">
            <Image
              objectFit="cover"
              layout="fill"
              src={data.data.aboutsecondrightImage}
              alt="Picture of the herosection"
            />

            <ul
              dangerouslySetInnerHTML={{
                __html: data.data.aboutsecondrightContent,
              }}
            ></ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Section3;
