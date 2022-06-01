import React, { useEffect } from "react";
import { Section } from "./style";
import Image from "next/image";
import Navbar from "../layout/navbar/navbar";
import AOS from "aos";
import { Parallax, Background } from "react-parallax";
import "aos/dist/aos.css";
import Footer from "../layout/footer/Footer";
import Head from "next/head";

const Under: React.FC = () => {
  const image =
    "https://res.cloudinary.com/dzcmadjl1/image/upload/v1625296161/rfrkr499ec2ow6izav59.jpg";
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);


  return (
    <div>
    <Head>
        <title>Under Construction - Zahroof</title>
    </Head>
    <Section>
      <Navbar />
      <Parallax bgImage={image} strength={500}>
        <div className="homePage-hero">
        <div className="homePage-layer">
        <Image
            objectFit="contain"
            layout="fill"
            src={
              "https://res.cloudinary.com/dzcmadjl1/image/upload/v1628061846/oyfyzqwmcbrqk0iaggqv.png"
            }
            alt="Under Construction"
          />

          </div>
       
        </div>
      </Parallax>

      <Footer/>
    </Section>
    </div>
  );
};

export default Under;
