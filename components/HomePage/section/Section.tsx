import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import { Parallax, Background } from "react-parallax";
import { useRouter } from "next/router";

import ReactPlayer from "react-player";
interface Section {
  data: {
    firstLeftHeading: string;
    firstLeftIcon: string;
    firstLeftTitle: string;
    firstLeftBgimage: string;
    firstRightBgimage: string;
    firstRightHeading: string;
    firstRightIcon: string;
    firstRightTitle: string;
  }; // Change the required prop to an optional prop.
}

const HeroSection: React.FC<Section> = (data) => {
  const [first, setfirst] = React.useState(false);
  const router = useRouter();

  return (
    <Section>
      <div className="section-1">
        <div className="section_bottom">
          <Parallax bgImage={data.data.firstLeftBgimage} strength={100}>
            <div className="section_top">
              <div className="section_top_">
                <span
                  dangerouslySetInnerHTML={{
                    __html: data.data.firstLeftHeading,
                  }}
                />
                <div className="tringle"></div>
              </div>
            </div>
            <div className="section_bottom_set">
              <div
                onClick={() => router.push("/c-suitebenefits")}
                className="section_bottom_data"
              >
                <li>
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src={data.data.firstLeftIcon}
                    alt="sd"
                  />
                </li>
                <li>
                  <h3>{data.data.firstLeftTitle}</h3>
                </li>
                <li>
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="https://app.zahroofvalves.com/wp-content/uploads/2021/07/arrow-down.png"
                    alt=""
                  />
                </li>
              </div>
            </div>
          </Parallax>

          <Parallax bgImage={data.data.firstRightBgimage} strength={100}>
            <div className="section_top">
              <div className="section_top_">
                <span
                  dangerouslySetInnerHTML={{
                    __html: data.data.firstRightHeading,
                  }}
                />
                <div className="tringle"></div>
              </div>
            </div>
            <div className="section_bottom_set">
              <div
                onClick={() => router.push("/fieldbenefits")}
                className="section_bottom_data"
              >
                <li>
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src={data.data.firstRightIcon}
                    alt="sd"
                  />
                </li>

                <li>
                  <h3>{data.data.firstRightTitle}</h3>
                </li>

                <li>
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="https://app.zahroofvalves.com/wp-content/uploads/2021/07/arrow-down.png"
                    alt=""
                  />
                </li>
              </div>
            </div>
          </Parallax>
        </div>
      </div>

      <div className="section">
        <div className="section_top">
          <div className="section_top_left">
            <span
              dangerouslySetInnerHTML={{ __html: data.data.firstLeftHeading }}
            />
            <div className="tringle"></div>
          </div>
          <div className="section_top_right">
            <span
              dangerouslySetInnerHTML={{ __html: data.data.firstRightHeading }}
            />
            <div className="tringle"></div>
          </div>
        </div>

        <div className="section_bottom">
          <Parallax bgImage={data.data.firstLeftBgimage} strength={300}>
            <div className="section_bottom_set">
              <div
                onClick={() => router.push("/c-suitebenefits")}
                className="section_bottom_data"
              >
                <li>
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src={data.data.firstLeftIcon}
                    alt="sd"
                  />
                </li>

                <li>
                  <h3>{data.data.firstLeftTitle}</h3>
                </li>

                <li>
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="https://app.zahroofvalves.com/wp-content/uploads/2021/07/arrow-down.png"
                    alt=""
                  />
                </li>
              </div>
            </div>
          </Parallax>

          <Parallax bgImage={data.data.firstRightBgimage} strength={300}>
            <div className="section_bottom_set">
              <div
                onClick={() => router.push("/fieldbenefits")}
                className="section_bottom_data"
              >
                <li>
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src={data.data.firstRightIcon}
                    alt="sd"
                  />
                </li>

                <li>
                  <h3>{data.data.firstRightTitle}</h3>
                </li>

                <li>
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src="https://app.zahroofvalves.com/wp-content/uploads/2021/07/arrow-down.png"
                    alt=""
                  />
                </li>
              </div>
            </div>
          </Parallax>
        </div>
      </div>

      <a id="esg_ad_one" className="player-wrapper">
        <h2>
          The patented StraightFlo™ reciprocating compressor valve with Modular
          Reed Technology: <br /> Here’s How It Works
        </h2>

        {first ? (
          <ReactPlayer
            className="react-player"
            url={
              "https://app.zahroofvalves.com/wp-content/uploads/2022/03/ZVI_Animation-Subtitled.mp4"
            }
            width="50%"
            height="100%"
            controls={true}
          />
        ) : (
          <div onClick={() => setfirst(true)} className="wrapper">
            <Image
              objectFit="contain"
              layout="fill"
              src="https://app.zahroofvalves.com/wp-content/uploads/2022/03/zahroof-valves-straightflo-technology.jpg"
              alt=""
            />
            <div style={{ position: "absolute", left: "50%", top: "50%" }}>
              <svg
                height="32px"
                style={{ background: "new 0 0 32 32" }}
                version="1.1"
                viewBox="0 0 32 32"
                width="32px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g id="Layer_1" />
                <g id="play_x5F_alt">
                  <path
                    d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M10,24V8l16.008,8L10,24z   "
                    style={{ fill: "#4E4E50" }}
                  />
                </g>
              </svg>
            </div>
          </div>
        )}
      </a>
    </Section>
  );
};

export default HeroSection;

// import  React from "react"
// interface WelcomeProps {
//    data?: object, // Change the required prop to an optional prop.
// }
// const Welcome: React.FC<WelcomeProps> = (data) => {

//    console.log(data.data)

//  return <h1>Hello, </h1>;
// }

// export default Welcome;
