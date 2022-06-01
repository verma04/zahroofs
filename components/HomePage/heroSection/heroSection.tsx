import React, { useEffect } from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import AOS from "aos";
import { Parallax, Background } from "react-parallax";
import "aos/dist/aos.css";

interface HeroSectionProps {
  data: {
    honebannerimageurl: string;
    homebannercontent: string;
  }; // Change the required prop to an optional prop.
}
const HeroSection: React.FC<HeroSectionProps> = (data) => {
  const image =
    "http://app.zahroofvalves.com/wp-content/uploads/2021/08/fw1lusinju10tx2bapi6.png";
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);
  console.log(data.data);

  return (
    <Section>
      <Navbar />
      <Parallax bgImage={data.data.honebannerimageurl} strength={500}>
        <div className="homePage-hero">
          <div className="homePage-layer">
            <div
              dangerouslySetInnerHTML={{ __html: data.data.homebannercontent }}
              aos-duration="10000"
              data-aos="zoom-in"
              className="homePage-data"
            >
              {/* <ul>
          <span>Extraordinary </span>

           <span>Returns</span>

          <span> <li> From </li> </span>

       </ul>
       <ul className="text-right">
        <span>Reimagined  </span>
         <span>  Engineering</span>
       </ul>
 */}
            </div>
          </div>
        </div>
      </Parallax>
    </Section>
  );
};

export default HeroSection;
