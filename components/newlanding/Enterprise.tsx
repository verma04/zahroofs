import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Section } from "./EnterPriseStyle";
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
                    LOWER COSTS.
                    <br />
                    LESS DOWNTIME.
                    <br />
                    MORE REVENUE.
                    <br />
                  </span>
                  <h3 className="inner">
                    {" "}
                    WE DON&apos;T THINK THAT&apos;S <br/> TOO MUCH TO ASK.
                  </h3>
                </h2>

                <p>
                  Your job is to your operation runs efficiently.. 
                  continuously, and  above all, profitably. It&apos;s a demanding
                  position, expectations are high. But with Zahroof&apos;s 
                  state-of-the-art technology, you can maximize compressor 
                  performance to achieve astounding results in production, 
                  maintenance , and reliability. See how our customized 
                  solutions can improve your bottom line.
                </p>
              </div>

              <div  onClick={()=> router.push('/enterpriseSolutions')} className="btn">
                <button> Tell Me more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Landing;
