import React, { useEffect } from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax, Background } from "react-parallax";
interface HeroSectionProps {
  data: {
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
  }; // Change the required prop to an optional prop.
}
const HeroSection: React.FC<HeroSectionProps> = (data) => {
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);
  return (
    <Section>
      <Navbar />
      <Parallax bgImage={data.data.featuredImage.node.sourceUrl} strength={500}>
        <div className="homePage-hero">
          <div className="homePage-layer">
            <div
              aos-duration="10000"
              data-aos="zoom-in"
              className="homePage-data"
            >
              <ul>
                <li>About Us </li>
              </ul>
            </div>
          </div>
        </div>
      </Parallax>
    </Section>
  );
};

export default HeroSection;
