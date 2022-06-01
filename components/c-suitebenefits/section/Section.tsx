import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

interface HeroSectionProps {
  data: {
    enterprisebannercontent: string;
    enterprisefirstcontent: string;
    enterprisefirstbottomcontent: string; // Change the required prop to an optional prop.
  };
}
const HeroSection: React.FC<HeroSectionProps> = (data) => {
  return (
    <Section>
      <div className="section">
        <div className="section_top">
          <div className="section2_data">
            <div
              dangerouslySetInnerHTML={{
                __html: data.data.enterprisebannercontent,
              }}
              className="section2_data_left"
            >
              {/* <h2>The benefits are clear <br/>
even from 30,000 ft. </h2>
<p>
We get it—you’re a big picture person. You care about results, not how we make the sausage. 
So instead of delving into the details of how we do what we do, we’ll topline it for you
</p> */}
            </div>
          </div>
        </div>

        <div className="section_bottom">
          <div className="section2_data">
            <div
              className="section2_data_left"
              dangerouslySetInnerHTML={{
                __html: data.data.enterprisefirstcontent,
              }}
            >
              {/* <h2>Essentially, <br/>
we built a <br/>
better mousetrap.  </h2>
<p>
We’ve changed the way gas is compressed, transferred, processed, and
distributed. Our product greatly improves operational performance, boosts profitability, lowers costs and reduces emissions. 
</p> */}
            
            </div>
            <div className="image-wapper">
                <Image

                  alt="Picture of the author"
                  objectFit="none"
                  layout="fill"
                  src="https://app.zahroofvalves.com/wp-content/uploads/2021/07/mxydeuw45cap9go1nesh-1.png"
                />
            </div>
           
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: data.data.enterprisefirstbottomcontent,
            }}
            className="absol-bottom"
          ></div>

          <div className="triangle-down"></div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
