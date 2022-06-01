import React from "react";
import { Section } from "./Style";

import Navbar from "../../layout/navbar/navbar";

import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <Section>
      <div className="section6">
        <div className="section2_data">
          <div  className="section2_data_left"  >

            <h2>One leak can 
compromise 
productivity,
cause delays and cost more money!
</h2>
<p>
“Once there is a failure, before replacing the existing assembly and changing parts, the customer needs to secure the environment,” Pictures of all parts need to be taken and all parts must be marked with a number. It is also important not to touch the failure surfaces, contact surfaces or threads. We also need a description of the accident and the failure conditions to quickly identify the problem.” 
</p>
<span>
- Chaib, Compliance Expert
</span>
            </div>
          <div className="section2_data_right" >
          <div className="img-wrapper" >

<Image
        objectFit="contain"
        layout="fill"
        src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Product.png"}
        alt="Picture of the herosection"
      />   
</div>
            </div>

         
        </div>
   
      </div>
    </Section>
  );
};

export default HeroSection;
