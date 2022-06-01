import React, { useEffect } from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../../layout/navbar/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax, Background } from "react-parallax";

interface CaseStudiesHeroSectionProps {
  data: {
    id: any
    title: string
    featuredImage: {
      node: {
        title: string
        sourceUrl: string
      }
    }
  }; // Change the required prop to an optional prop.
}

const CaseStudiesHeroSectionProps: React.FC<CaseStudiesHeroSectionProps> = (data) => {

  return (
    <Section>
      <Navbar />
      <Parallax bgImage={data.data.featuredImage.node.sourceUrl} strength={500}>
        <div className="homePage-hero">
          {/* <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624000543/nszogjpikgvufgyx7tar.png'} alt="Picture of the herosection" /> */}

          <div className="homePage-layer">
            <div
              aos-duration="10000"
              data-aos="zoom-in"
              className="homePage-data"
            >
              <ul>
                <li>{data.data.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </Parallax>
    </Section>
  );
};

export default CaseStudiesHeroSectionProps;
