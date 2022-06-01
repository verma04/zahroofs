import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import Select from "react-select";

const HeroSection: React.FC = () => {
  return (
    <Section>
      <div className="section">

        <div  className="head">
   <h2>standard ValveS</h2>
        </div>
      <div className="products" >


      <div className="list" >
      <div className="img-wrapper" >

<Image
        objectFit="contain"
        layout="fill"
        src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Layer-1-1.png"}
        alt="Picture of the herosection"
      />   
</div>

<h3>standard</h3>
        
</div>
<div className="list" >
      <div className="img-wrapper" >

      <Image
              objectFit="contain"
              layout="fill"
              src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Layer-6-1-2-1.png"}
              alt="Picture of the herosection"
            />   
</div>

<h3>double deck</h3>
        
</div>

<div className="list" >
      <div className="img-wrapper" >

      <Image
              objectFit="contain"
              layout="fill"
              src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Layer-4-1.png"}
              alt="Picture of the herosection"
            />   
</div>

<h3>STACKED</h3>
        
</div>

<div className="list" >
      <div className="img-wrapper" >

      <Image
              objectFit="contain"
              layout="fill"
              src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Layer-3-1-1.png"}
              alt="Picture of the herosection"
            />   
</div>

<h3>CONCENTRIC</h3>
        
</div>


    <div className="list" >
      <div className="img-wrapper" >

      <Image
              objectFit="contain"
              layout="fill"
              src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Layer-18-1.png"}
              alt="Picture of the herosection"
            />   
</div>

<h3>radial</h3>
        
</div>

<div className="list" >
      <div className="img-wrapper" >

      <Image
              objectFit="contain"
              layout="fill"
              src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Layer-2-1.png"}
              alt="Picture of the herosection"
            />   
</div>

<h3>INTEGRAL CAGE 
VALVE WITH COVER</h3>
        
</div>

<div className="list" >
      <div className="img-wrapper" >

      <Image
              objectFit="contain"
              layout="fill"
              src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/poppet_iso.png"}
              alt="Picture of the herosection"
            />   
</div>

<h3>Poppet</h3>
        
</div>



<div className="list" >
      <div className="img-wrapper" >

      <Image
              objectFit="contain"
              layout="fill"
              src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Layer-5-2-1.png"}
              alt="Picture of the herosection"
            />   
</div>

<h3>Valve Protection 
Mesh (VPM)</h3>
        
</div>


<div className="list" >
      <div className="img-wrapper" >

      <Image
              objectFit="contain"
              layout="fill"
              src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Layer-19-1.png"}
              alt="Picture of the herosection"
            />   
</div>

<h3>gas jack</h3>
        
</div>


     
     
     
      </div>
        
      </div>
    </Section>
  );
};

export default HeroSection;
