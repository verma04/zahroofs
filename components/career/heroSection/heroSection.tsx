import React, { useEffect } from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax, Background } from "react-parallax";
import Head from "next/head";


interface CareerHeroSectionProps {
  data: {
    title: any
    pageId: any
    uri: any
    status: any
    featuredImage: {
      node: {
        title: any
        sourceUrl: any
      }
    }
    careerPageHeading : string
  }; // Change the required prop to an optional prop.
}

const CareerHeroSectionProps: React.FC<CareerHeroSectionProps> = (data) => {
  
  return (
    <Section>

      <Head>
      <title>Career - Zahroof Valves Inc.</title>
      <meta name="description" content="" />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content="" />
      <meta name="og:description" property="og:description" content="" />
      <meta property="og:site_name" content="" />
      <meta property="og:url" content="" />  
      <meta name="twitter:card" content="summary" /> 
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      </Head>
      <Navbar />
      <Parallax bgImage={"https://app.zahroofvalves.com/wp-content/uploads/2022/01/Banner-1.jpg"} strength={500}>
        <div className="homePage-hero">
          {/* <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624000543/nszogjpikgvufgyx7tar.png'} alt="Picture of the herosection" /> */}

          <div className="homePage-layer">
            <div
              aos-duration="10000"
              data-aos="zoom-in"
              className="homePage-data"
            >
              <ul>
                <li
                  dangerouslySetInnerHTML={{
                    __html: data.data.careerPageHeading,
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

export default CareerHeroSectionProps;
