import React from "react";
import { Section } from "./Style";
import Image from "next/image";


interface SectionThree {
  data: {
    valveasherotwoitemOneImage: string;
    valveasherotwoitemOneTitle: string;
    valveasherotwoitemTwoImage: string;
    valveasherotwoitemTwoTitle: string;
    valveasherotwoitemThreeImage: string;
    valveasherotwoitemThreeTitle: string;
    valveasherotwoitemFourImage: string;
    valveasherotwoitemFourTitle: string;
    valveasherotwoitemFiveImage: string;
    valveasherotwoitemFiveTitle: string;
    valveasherotwoitemSixImage: string;
    valveasherotwoitemSixTitle: string;
    valveasheroTwoContent: string;

  }; // Change the required prop to an optional prop.
}

const SectionThree: React.FC<SectionThree> = (data) => {
  return (
    <Section>
      <div className="section2">
        <div className="section2_data">
          <div className="section2_top">
            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.valveasherotwoitemOneImage}
                  alt={data.data.valveasherotwoitemOneTitle}
                />
              </div>
              <p dangerouslySetInnerHTML={{
                __html: data.data.valveasherotwoitemOneTitle
              }} />
            </div>
            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.valveasherotwoitemTwoImage}
                  alt={data.data.valveasherotwoitemTwoTitle}
                />
              </div>
              <p dangerouslySetInnerHTML={{
                __html: data.data.valveasherotwoitemTwoTitle
              }} />
            </div>
            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.valveasherotwoitemThreeImage}
                  alt={data.data.valveasherotwoitemThreeTitle}
                />
              </div>
              <p dangerouslySetInnerHTML={{
                __html: data.data.valveasherotwoitemThreeTitle
              }} />
            </div>
            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.valveasherotwoitemFourImage}
                  alt={data.data.valveasherotwoitemFourTitle}
                />
              </div>
              <p dangerouslySetInnerHTML={{
                __html: data.data.valveasherotwoitemFourTitle
              }} />
            </div>
            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.valveasherotwoitemFiveImage}
                  alt={data.data.valveasherotwoitemFiveTitle}
                />
              </div>
              <p dangerouslySetInnerHTML={{
                __html: data.data.valveasherotwoitemFiveTitle
              }} />
            </div>
            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.valveasherotwoitemSixImage}
                  alt={data.data.valveasherotwoitemSixTitle}
                />
              </div>
              <p dangerouslySetInnerHTML={{
                __html: data.data.valveasherotwoitemSixTitle
              }} />
            </div>
          </div>
          <div className="section2_bottom">
            <h4 dangerouslySetInnerHTML={{
              __html: data.data.valveasheroTwoContent
            }} />
          </div>
        </div>
        <div className="tringle"></div>
      </div>
    </Section>
  );
};

export default SectionThree;
