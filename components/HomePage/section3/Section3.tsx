import React, { useEffect, useState } from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import AOS from "aos";

import Link from 'next/link'
import { Parallax, Background } from "react-parallax";
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import "aos/dist/aos.css";
const image =
  "https://app.zahroofvalves.com/wp-content/uploads/2021/08/o7rt0bntgyc6nstows3k.jpg";
interface Section3 {
  data: {
    homeThreeLeftHeading: string;
    homeThreeRightHeading: string;
  }; // Change the required prop to an optional prop.
}

import { BrowserView, MobileView } from "react-device-detect";

const Section3: React.FC<Section3> = (data) => {
  const [width, setwidth] = useState(0);

  const [width2, setwidth2] = useState(0);
  const [right, setright] = useState(21);
  const [left, setleft] = useState(21);


  useEffect(() => {
    AOS.init({
      duration: 3000,
    });

    window.addEventListener("scroll", handleScroll);

    // returned function will be called on component unmount

    console.log(window.pageYOffset);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset < 1600) {
      console.log(window.pageYOffset, "0");
    } else if (window.pageYOffset > 1600 && window.pageYOffset < 1610) {
      setwidth(10);
    } else if (window.pageYOffset > 1610 && window.pageYOffset < 1650) {
      setwidth(30);
      setright(15)
      setleft(15)
    }
    else if (window.pageYOffset > 1650 && window.pageYOffset < 1700) {
      setwidth(50);
      setright(0)
      setleft(0)
    }
    else if (window.pageYOffset > 1700 && window.pageYOffset < 1750) {
      setwidth(70);
      setright(-10)
      setleft(-10)
    }
    else if (window.pageYOffset > 1750 && window.pageYOffset < 1800) {
      setwidth(70);
      setright(-15)
      setleft(-15)
    }
    else if (window.pageYOffset > 1800 ) {
      setwidth(100);
      setright(-21)
      setleft(-21)
    }
  };

  return (
    <>
    
        <Section>
          {/* <h1>This is rendered only in browser</h1> */}

          {/* <MobileView>
                <h1>This is rendered only on mobile</h1>
            </MobileView> */}
{/* {window.pageYOffset} */}
          <Parallax bgImage={image} strength={500}>
            <div className="section3">
       
              <div style={{ height: `${width}%` }} className="middle">
                <div className="img-wrapper">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src={
                      "https://app.zahroofvalves.com/wp-content/uploads/2021/08/oj0pfthu3lt2ergdljyf.png"
                    }
                    alt=""
                  />
                </div>
              </div>

              <div style={{ right: `${right}%` }} className="right">
                <div className="img-wrapper">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src={
                      "https://app.zahroofvalves.com/wp-content/uploads/2021/08/wx89iw4xzkq1tffegfgh.png"
                    }
                    alt=""
                  />
                </div>
              </div>

              <div style={{ left: `${left}%` }} className="left">
                <div className="img-wrapper">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src={
                      "https://app.zahroofvalves.com/wp-content/uploads/2021/08/c5qjzndd22pgdc0xpzvg.png"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div
                aos-duration="10000"
                data-aos="zoom-in"
                className="section3_left"
              >
                <h2>{data.data.homeThreeLeftHeading}</h2>
              </div>
              <div
                aos-duration="10000"
                data-aos="zoom-in"
                className="section3_right"
              >
                <h2>{data.data.homeThreeRightHeading}</h2>
                <Link href="/esgbenefits" >Learn More</Link>
              </div>
            </div>
          </Parallax>
        </Section>
     

    
        <Section>
          {/* <h1>This is rendered only in browser</h1> */}

          {/* <MobileView>
                <h1>This is rendered only on mobile</h1>
            </MobileView> */}

          <Parallax bgImage={image} >
            <div className="section3-sm">
              <div  
              data-aos="zoom-in-up"
              
              className="middle-1">
                <div className="img-wrapper">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src={
                      "https://app.zahroofvalves.com/wp-content/uploads/2021/08/oj0pfthu3lt2ergdljyf.png"
                    }
                    alt=""
                  />
                </div>
              </div>

              <div data-aos="fade-right" className="right">
                <div className="img-wrapper">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src={
                      "https://app.zahroofvalves.com/wp-content/uploads/2021/08/wx89iw4xzkq1tffegfgh.png"
                    }
                    alt=""
                  />
                </div>
              </div>

              <div data-aos="fade-left"  className="left">
                <div className="img-wrapper">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src={
                      "https://app.zahroofvalves.com/wp-content/uploads/2021/08/c5qjzndd22pgdc0xpzvg.png"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div
                aos-duration="10000"
                data-aos="zoom-in"
                className="section3_left"
              >
                <h2>{data.data.homeThreeLeftHeading}</h2>
              </div>
              <div
                aos-duration="10000"
                data-aos="zoom-in"
                className="section3_right"
              >
                <h2>{data.data.homeThreeRightHeading}</h2>
                <Link href="/" >Learn More&gt;</Link>
              </div>
            </div>
          </Parallax>
        </Section>
     
    </>
  );
};

export default Section3;
