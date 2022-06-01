import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

interface HeroSectionProps {
  data: {
    enterprisethreeTopContent: string;
    enterprisethreebottomleftContent: string;
    enterprisethreebottomrightContent: string;
    enterprisethreeitemOneImage: string;
    enterprisethreeitemOneTitle: string;
    enterprisethreeitemTwoImage: string;
    enterprisethreeitemTwoTitle: string;
    enterprisethreeitemThreeImage: string;
    enterprisethreeitemThreeTitle: string;
    enterprisethreeitemFourImage: string;
    enterprisethreeitemFourTitle: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = (data) => {
  const data1: any =
    '   “ An upgrade in performance is dependent on what valves you are changing from and their existing losses. However, Zahroof can calculate this in advance and they gave us a  pretty accurate idea in advance of the efficiency improvements we ended up seeing. ” ';
  return (
    <Section>
      <div className="section">
        <div className="section_top">
          <span id="top">{data1}</span>
          <span> -ZVI Midstream Oil and Gas Customer</span>
        </div>
        <div className="section-bottom"></div>
        <div className="tringle"></div>
      </div>
    </Section>
  );
};

export default HeroSection;
