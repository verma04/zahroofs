import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

interface AboutUs {
  data: {
    content: string;
  }; // Change the required prop to an optional prop.
}

const HeroSection: React.FC<AboutUs> = (data) => {
  return (
    <Section>
      <div className="aboutus">
        <div
          dangerouslySetInnerHTML={{ __html: data.data.content }}
          className="aboutus_section"
        ></div>
      </div>
    </Section>
  );
};

export default HeroSection;
