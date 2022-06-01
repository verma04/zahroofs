import React, { useEffect } from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import AOS from "aos";
import { Parallax, Background } from "react-parallax";
import "aos/dist/aos.css";
// const image = 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1625301208/sgogb0rbrec6n3j9trb3.jpg'

interface HeroSectionProps {
  data: {
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
    engineeringbannerleftcontent: string;
    engineeringbannerrightcontent: string;
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
          {/* <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624266802/k8sh87pebodtjyxqy0iy.png'} alt="Picture of the herosection" /> */}

          <div className="homePage-layer">
            <div
              aos-duration="10000"
              data-aos="zoom-in"
              className="homePage-data"
            >
              <ul className="text-left">
                <li 
                
                dangerouslySetInnerHTML={{
                  __html: data.data.engineeringbannerleftcontent,
                }}
                /> 
              </ul>
              <ul className="text-right">
                <li
                  dangerouslySetInnerHTML={{
                    __html: data.data.engineeringbannerrightcontent,
                  }}
                />
              </ul>
            </div>
          </div>
        </div>
      </Parallax>
    </Section>
  );
};

export default HeroSection;
