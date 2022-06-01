import React, { useEffect } from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
interface Valueashero {
  data: {
   
    valveasherobannercontent: string
  

  };
}

const HeroSection: React.FC<Valueashero> = ({data}) => {
  useEffect(() => {
    AOS.init({
      duration: 5000,
    });
  }, []);
  const set:any = " We’re diving deep."
  return (
    
  
    <Section>
      <Navbar />

      <div className="homePage-hero">
        {/* <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624085963/ks5kmugbnmzubbsxoiyc.png'} alt="Picture of the herosection" /> */}

        <div className="homePage-layer">
          <div
            
            
            className="homePage-data"
            dangerouslySetInnerHTML={{
              __html: data.valveasherobannercontent,
            }}
            
          >
            {/* <ul className="text-left">
              <li>ALL THE DETAILS YOU EVER WANTED TO KNOW.</li>
            </ul>
            <ul className="text-right">
              <li>
                BUCKLE UP. <br />
               {set}
              </li>
            </ul>
         
          */}
         
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
