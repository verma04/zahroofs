import React, { useEffect } from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../../layout/navbar/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax, Background } from "react-parallax";
import Head from "next/head";

const HeroSection = ({data}) => {
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);
  return (
    <Section>

<Head>
<title>{data.heroTitle} - Zahroof Valves Inc.</title>
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
      <Parallax bgImage={data.heroImage} strength={500}>
        <div className="homePage-hero">
          <div className="homePage-layer">
            <div
              aos-duration="10000"
              data-aos="zoom-in"
              className="homePage-data"
            >
              <ul>
                <li>{data.heroTitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </Parallax>
    </Section>
  );
};

export default HeroSection;
