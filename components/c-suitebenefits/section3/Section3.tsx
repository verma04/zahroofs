import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
interface HeroSectionProps {
  data: {
    enterprisetwoitemOneImage: string;
    enterprisetwoitemOneTitle: string;
    enterprisetwoitemTwoImage: string;
    enterprisetwoitemTwoTitle: string;
    enterprisetwoitemThreeImage: string;
    enterprisetwoitemThreeTitle: string;
    enterprisetwoitemFourImage: string;
    enterprisetwoitemFourTitle: string;
    enterprisetwoitemFiveImage: string;
    enterprisetwoitemFiveTitle: string;
    enterprisetwoitemSixImage: string;
    enterprisetwoitemSixTitle: string;
  };
}
const HeroSection: React.FC<HeroSectionProps> = (data) => {
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
                  src={data.data.enterprisetwoitemOneImage}
                  alt="Picture of the author"
                />
              </div>
              <p>{data.data.enterprisetwoitemOneTitle}</p>
            </div>

            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.enterprisetwoitemTwoImage}
                  alt="Picture of the author"
                />
              </div>
              <p>{data.data.enterprisetwoitemTwoTitle}</p>
            </div>

            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.enterprisetwoitemThreeImage}
                  alt="Picture of the author"
                />
              </div>
              <p>{data.data.enterprisetwoitemThreeTitle}</p>
            </div>

            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.enterprisetwoitemFourImage}
                  alt="Picture of the author"
                />
              </div>
              <p>{data.data.enterprisetwoitemFourTitle}</p>
            </div>

            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.enterprisetwoitemFiveImage}
                  alt="Picture of the author"
                />
              </div>
              <p>{data.data.enterprisetwoitemFiveTitle}</p>
            </div>

            <div className="logo">
              <div className="wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.enterprisetwoitemSixImage}
                  alt="Picture of the author"
                />
              </div>
              <p>{data.data.enterprisetwoitemSixTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
