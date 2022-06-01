import React, { useEffect , useState } from "react";
import { Section } from "./Style";
import Image from "next/image";
import { Router, useRouter } from "next/router";

import VisibilitySensor from "react-visibility-sensor";

interface SectionTree {
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
    careerPageThreeLeftHeading: string
    careerPageThreeImageurl: string
    careerBenefitsWidget1: string
    careerBenefitsWidget2: string
    careerBenefitsWidget3: string
    careerBenefitsWidget4: string
    careerBenefitsWidget5: string
    careerBenefitsWidget6: string
  }; // Change the required prop to an optional prop.
}

const SectionTree: React.FC<SectionTree> = (data) => {

  const [width, setwidth] = useState(0);
  const [width2, setwidth2] = useState(0);
  const [right, setright] = useState(21);
  const [left, setleft] = useState(21);

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);
    // returned function will be called on component unmount
    console.log(window.pageYOffset);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 1800) {
      console.log(window.pageYOffset, "0");
    } else if ( 1600 && window.pageYOffset < 2703) {
 
    } 
  };

  const router = useRouter();

  return (
    <Section>
      <div className="section4">
        <div className="cover">
          <Image
            objectFit="cover"
            layout="fill"
            src={data.data.careerPageThreeImageurl}
            alt="zahroof"
          />
        </div>
        <div className="section4_mid">
          <div
            dangerouslySetInnerHTML={{
              __html: data.data.careerPageThreeLeftHeading,
            }}
            className="section4_mid_right"
          />       

         <div className="bottom">
          <div className="logo"> </div>
           <div className="set">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.data.careerBenefitsWidget1,
                }}
                className="benefits-widget"
              />    
           </div>
           <div className="set">
             <div className="logo"> </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.data.careerBenefitsWidget2,
                }}
                className="benefits-widget"
              />    
           </div>

            <div className="set">
              <div className="logo"> </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.data.careerBenefitsWidget3,
                }}
                className="benefits-widget"
              />
            </div>

            <div className="set">
              <div className="logo"> </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.data.careerBenefitsWidget4,
                }}
                className="benefits-widget"
              />
            </div>
            <div className="set">
              <div className="logo"> </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.data.careerBenefitsWidget5,
                }}
                className="benefits-widget"
              />
            </div>

            <div className="set">
              <div className="logo"> </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.data.careerBenefitsWidget6,
                }}
                className="benefits-widget"
              />
            </div>
         </div>
          </div>

      
      </div>
    </Section>
  );
};

export default SectionTree;
