import React , {useState} from "react";
import { Section } from "./style";
import Image from "next/image";

import Select from "react-select";

const HeroSection: React.FC = () => {
  
    const [ img1 , setimg1] = useState("https://app.zahroofvalves.com/wp-content/uploads/2021/10/DoubleDecker_iso_RGB-copy-2-1.png")
    const [ img2 , setimg2] = useState("https://app.zahroofvalves.com/wp-content/uploads/2021/10/DoubleDecker_iso_RGB-copy-2-1.png")
    const [ img3 , setimg3] = useState("https://app.zahroofvalves.com/wp-content/uploads/2021/10/DoubleDecker_iso_RGB-copy-2-1.png")
    const [ active , setactive] = useState("https://app.zahroofvalves.com/wp-content/uploads/2021/10/DoubleDecker_iso_RGB-copy-2-1.png")
  return (
    <Section>
         <div className="section6">
        <div className="section2_data">
          <div  className="section2_data_left"  >

<h2>DOUBLE DECK</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisi</p>
            </div>
          <div className="section2_data_right" >
 
  <div className="top" >
  <Image
        objectFit="contain"
        layout="fill"
        src={active}
        alt="Picture of the herosection"
      />   
  </div>
  <div className="bottom"  >

      <div className="bottom-img"  id={active === img1 ? "active" : ""} >
          <div className="img-wrapper" >
      <Image
        objectFit="contain"
        layout="fill"
        src={active}
        alt="Picture of the herosection"
      /> 
     
      </div>
      <h3>Steel</h3>
      </div>

      <div className="bottom-img"  id={active === img1 ? "active" : ""} >
          <div className="img-wrapper" >
      <Image
        objectFit="contain"
        layout="fill"
        src={active}
        alt="Picture of the herosection"
      /> 
     
      </div>
      <h3>Nickel</h3>
      </div>
      <div className="bottom-img"  id={active === img1 ? "active" : ""} >
          <div className="img-wrapper" >
      <Image
        objectFit="contain"
        layout="fill"
        src={active}
        alt="Picture of the herosection"
      /> 
     
      </div>
      <h3>Titanium</h3>
      </div>
  </div>
            </div>

         
        </div>

     
      </div>
    </Section>
  );
};

export default HeroSection;
