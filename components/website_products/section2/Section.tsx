import React from "react";
import { Section } from "./Style";
import Image from "next/image";



const SectionOne: React.FC = () => {
  return (
    <Section>
      <div className="section">
        <div className="section_top"
         
        >

          <h2>
          THE STRAIGHTFLO™ UNLOADER VALVE
          </h2>

          <h3>
          Features the same modular design as all StraightFlo™ Valves and delivers the 
same improved performance, serviceability and reliability. An optimal drop-in 
replacement for both finger-type and plug-type unloaders, utilizing the existing 
actuator system. In poppet style and the hollow piston
          </h3>

          </div>
          <div className="products" >


<div className="list" >
<div className="img-wrapper" >

<Image
        objectFit="contain"
        layout="fill"
        src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Layer-7-2.png"}
        alt="Picture of the herosection"
      />   
</div>

<h3>PLUG UNLOADER</h3>
  
</div>

<div className="list" >
<div className="img-wrapper" >

<Image
        objectFit="contain"
        layout="fill"
        src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Layer-8-1-2.png"}
        alt="Picture of the herosection"
      />   
</div>

<h3>INTEGRAL CAGE</h3>
  
</div>

<div className="list" >
<div className="img-wrapper" >

<Image
        objectFit="contain"
        layout="fill"
        src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Layer-9-1-2.png"}
        alt="Picture of the herosection"
      />   
</div>

<h3>SUCTION VALVE
WITH UNLOADER</h3>
  
</div>





</div>
      
      </div>
    </Section>
  );
};

export default SectionOne;
