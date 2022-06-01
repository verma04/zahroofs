import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Section } from "./Style";
import { useRouter } from "next/router";
import Navbar from "./navbar/navbar";
const Landing: React.FC<{}> = () => {
 

  const router = useRouter();
  return (
    <Section>
      <Navbar />
      <div className="flex">
        <div className="section4_bottom">
          {/* <div className="img_absol" >
     <div className="img_wrapper" >
  <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624447543/bdegy1j9jkvghjbzxvxl.png'} alt="Picture of the author" />
        </div>
        </div> */}

          {/* <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624446661/zugr9ahadrsbvxmfoi2v.jpg'} alt="Picture of the author" /> */}

          <div className="section4_bottom_data">
            <div className="section4_mid_left">
              <div className="top">
                <h2>
                  <span>
                    LESS MAINTENANCE.
                    <br />
                    LESS DOWNTIME.
                    <br />
                    FEWER CALL-OUTS.
                    <br />
                  </span>
                  <h3 className="inner"> YES, REALLY.</h3>
                </h2>

                <p>
                  When you&apos;re maintaining rotating equipment, you spend a lot of
                  time knocking down problems. Sometimes, barely getting one
                  solved before another pops up. But Zahroof&apos;s cutting-edge
                  technology offers anywhere from 2x, 5x, 10x, or more mean time
                  between failure and on-site servicing without machining. See how 
                  our customized solutions can make life easier for you.
                </p>
              </div>

              <div  onClick={()=> router.push('/engineeringSolutions')}  className="btn">
                <button >I LIKE EASIER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Landing;
