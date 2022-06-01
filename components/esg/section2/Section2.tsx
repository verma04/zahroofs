import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

interface Section {
  data: {
    esgbenifitstwoleftcontent: string;
    esgbenifitstworightoneicon: string;
    esgbenifitstworighttwoicon: string;
    esgbenifitstworightthreeicon: string;
    esgbenifitstwoRightOneContent: String;
    esgbenifitstwoRightTwoContent: String;
    esgbenifitstwoRightThreeContent: String;
  };
}

const HeroSection: React.FC<Section> = (data) => {
  return (
    <Section>
      <div className="section2">
        <Image
          objectFit="cover"
          layout="fill"
          src={
            "https://res.cloudinary.com/dzcmadjl1/image/upload/v1624030712/siv3vtawwkytzsnfrhnr.png"
          }
          alt="Picture of the author"
        />

        <div className="section_data">
          <div
            className="head"
            dangerouslySetInnerHTML={{
              __html: data.data.esgbenifitstwoleftcontent,
            }}
          >
            {/* <h2>REDUCE NOISE AND VIBRATIONS</h2>
         <p>With no plates, poppets or rings impacting against a valve seat or guard, the
StraightFloTM Valve generates substantially lower vibration and noise levels than
conventional valves.</p> */}
          </div>

          <div className="section_logo">
            <div className="section_logo_top">
              <div className="logo">
                <div className="wrapper">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src={data.data.esgbenifitstworightoneicon}
                    alt="Picture of the author"
                  />
                </div>
              </div>

              <div className="logo-1">
                <p>{data.data.esgbenifitstwoRightOneContent}</p>
              </div>
            </div>
            <div className="section_logo_top">
              <div className="logo">
                <div className="wrapper">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src={data.data.esgbenifitstworighttwoicon}
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <div className="logo-1">
                <p>{data.data.esgbenifitstwoRightTwoContent}</p>
              </div>
            </div>
            <div className="section_logo_top">
              <div className="logo">
                <div className="wrapper">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src={data.data.esgbenifitstworightthreeicon}
                    alt="Picture of the author"
                  />
                </div>
              </div>

              <div className="logo-1">
                <p>{data.data.esgbenifitstwoRightThreeContent}</p>
              </div>


            
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
