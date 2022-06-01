import React, { useEffect } from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax, Background } from "react-parallax";
interface HeroSectionProps {
  data: {
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
    esgbenifitsbannerrightcontent: string;
  }; // Change the required prop to an optional prop.
}

const HeroSection: React.FC<HeroSectionProps> = (data) => {
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);
  return (
    <Section>
      <Navbar />
      <Parallax bgImage={data.data.featuredImage.node.sourceUrl} strength={500}>
        <div className="homePage-hero">
          {/* <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624030696/l0krn6a059mpgqlonf8q.png'} alt="Picture of the herosection" /> */}

          <div className="homePage-layer">
            <div
              dangerouslySetInnerHTML={{
                __html: data.data.esgbenifitsbannerrightcontent,
              }}
              data-aos="zoom-in"
              className="homePage-data"
            >
              {/* <ul>
      


          <li> INNOVATIVE </li> 
           
           <li>EFFICIENT</li>
          <li> GREEN</li>
          
       </ul>
    <p>
    With each passing year, there s growing
concern about the environment.
Legislation has become increasingly
stringent. At Zahroof, we are committed
to improving energy efficiency, reducing
the carbon footprint and protecting the
planet as we benefit our customers. One of
our primary goals is to help you to achieve
as close to net-zero as possible.

    </p>
 */}
            </div>
          </div>

         
        </div>
      </Parallax>
    </Section>
  );
};

export default HeroSection;
