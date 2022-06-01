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

interface Section2 {
  data: {
    homeSecondLeftContent: string;
    homeSecondRightImageFour: string;
    homeSecondRightImageOne: string;
    homeSecondRightImageThree: string;
    homeSecondRightImageTwo: string;
    homeSecondRightTitleFour: string;
    homeSecondRightTitleOne: string;
    homeSecondRightTitleThree: string;
    homeSecondRightTitleTwo: string;
  }; // Change the required prop to an optional prop.
}
const HeroSection: React.FC<Section2> = (data) => {
  return (
    <Section>
      <div className="section2">
        <div className="section2_data">
          <div
            dangerouslySetInnerHTML={{
              __html: data.data.homeSecondLeftContent,
            }}
            className="section2_data_left"
          >
            {/* <h2>
     A PROVEN PIPELINE
TO GREATER PROFIT
& PERFORMANCE

         </h2>

         <p>
         Discover the broad range of unmatched benefits
exceptional engineering can achieve -- from
performance in the trenches to a bold boost in the
bottom line.
             </p> */}
          </div>

          <div className="section2_data_right">
            <div className="logo">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.homeSecondRightImageOne}
                  alt="Picture of the author"
                />
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: data.data.homeSecondRightTitleOne,
                }}
              />
            </div>

            <div className="logo">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.homeSecondRightImageTwo}
                  alt="Picture of the author"
                />
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: data.data.homeSecondRightTitleTwo,
                }}
              />
            </div>

            <div className="logo">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.homeSecondRightImageThree}
                  alt="Picture of the author"
                />
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: data.data.homeSecondRightTitleThree,
                }}
              />
            </div>
            <div className="logo">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={data.data.homeSecondRightImageFour}
                  alt="Picture of the author"
                />
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: data.data.homeSecondRightTitleFour,
                }}
              />
            </div>
          </div>
        </div>
        <div className="tringle"></div>
      </div>
    </Section>
  );
};

export default HeroSection;
