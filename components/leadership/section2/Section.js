import React, { useEffect , useState } from "react";
import { Section } from "./Style";
import Image from "next/image";
import { Router, useRouter } from "next/router";

import VisibilitySensor from "react-visibility-sensor";





const Section4 = () => {



  const [width, setwidth] = useState(0);

  const [width2, setwidth2] = useState(0);
  const [right, setright] = useState(21);
  const [left, setleft] = useState(21);


  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    // returned function will be called on component unmount

    console.log(window.pageYOffset);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 1800) {
      console.log(window.pageYOffset, "0");
    } else if ( 1600 && window.pageYOffset < 2703) {
 
    } 
  };

  

  const router = useRouter();

  const senroute = async (slug) => {
  await  router.push(`/careers/${slug}`)
   
  }

 
  

  return (
    <Section>
      <div className="section4">

  

<p>
<span>Houston, TX, February 15, 2022 </span> –    Zahroof Valves, Inc. (ZVI), the gas compression industry’s leading valve technology provider, has appointed two new members to its executive team. Jim Ilaria has been named Chief Executive Officer of the company and Javvad Qasimi has assumed the role of Senior Vice President. 


</p>

<p>
At a time when compressor operators face ever-increasing challenges related to profitability and environmental, social, and governance (ESG) factors, the new executive team will help facilitate ZVI’s proven solutions for true sustainability. In the near term, the team will oversee multiple new product launches while accelerating the company’s growth, customer service, and operational excellence. 
</p>



      
      </div>
    </Section>
  );
};

export default Section4;
