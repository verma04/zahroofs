import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

interface HeroSectionProps {
    data : {
       enterprisethreeTopContent: string
       enterprisethreebottomleftContent: string
       enterprisethreebottomrightContent: string
       enterprisethreeitemOneImage: string
       enterprisethreeitemOneTitle: string
       enterprisethreeitemTwoImage: string
       enterprisethreeitemTwoTitle: string
       enterprisethreeitemThreeImage: string
       enterprisethreeitemThreeTitle: string
       enterprisethreeitemFourImage: string
       enterprisethreeitemFourTitle: string
    }  
 }
 
const HeroSection: React.FC<HeroSectionProps> = (data) => {
  return (
    <Section>
      <div className="section2">
        <div className="section2_data">
          <div
            dangerouslySetInnerHTML={{
              __html: data.data.enterprisethreebottomleftContent,
            }}
            className="section2_data_left"
          ></div>

          <div className="triangle" >
            </div> 

          <div className="section2_data_right">
            <div dangerouslySetInnerHTML={{
              __html: data.data.enterprisethreebottomrightContent,
            }} className="data">
           
            </div>
            <div className="logo">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.enterprisethreeitemOneImage}
                  alt="Picture of the author"
                />
              </div>
              <p>{data.data.enterprisethreeitemOneTitle}</p>
            </div>
            <div className="logo">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.enterprisethreeitemTwoImage}
                  alt="Picture of the author"
                />
              </div>
              <p>{data.data.enterprisethreeitemTwoTitle}</p>
            </div>

            <div className="logo">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.enterprisethreeitemThreeImage}
                  alt="Picture of the author"
                />
              </div>
              <p>{data.data.enterprisethreeitemThreeTitle}</p>
            </div>

            <div className="logo">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.enterprisethreeitemFourImage}
                  alt="Picture of the author"
                />
              </div>
              <p>{data.data.enterprisethreeitemFourTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
