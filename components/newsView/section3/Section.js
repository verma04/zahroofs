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
    <Section id="jim-ilaria">
      <div className="section4" id="javvad-qasimi" >

  

  <p > 

<h3  >Jim Ilaria, Chief Executive Officer </h3>
Prior to joining ZVI, new Chief Executive Officer Jim Ilaria led seven corporate transformations as CEO or President of private-equity-sponsored middle market firms in industrial and consumer businesses. Ilaria was previously an Operating Partner with Allied Capital, where he worked closely with portfolio company management and deal teams to drive enterprise value. Ilaria earned an MBA from Columbia Business School and a B.S. in Chemical Engineering from Rutgers University. <br></br>

In addressing his role and the company’s strategy, Ilaria said, “Our product line and our approach to the market is a genuine departure from the last 100 years of compressor valve development. In short, what we do best is what the marketplace now needs the most. We have compelling proof of cost savings and efficiency, but what resonates strongly with customers in an ESG-sensitive environment is the ability of our valves to 
stop emissions – not just incrementally, but dramatically across all of their compression assets.”
</p>  
<p > 
<h3  > Javvad Qasimi, Senior Vice President </h3>
Senior Vice President Javvad Qasimi has more than 18 years of industry experience in various leadership roles. Most recently, he served the energy segment as global sales and 
[MORE]
marketing director for ChampionX. Prior to that, Qasimi held roles in engineering, product 
management, sales, and marketing with Eaton Corporation and Honeywell International. He has an M.S. in Electrical Engineering from Northern Illinois University and an MBA from The Ohio State University. He is a Certified Lean Six Sigma Black Belt, a Project Management Professional (PMP), and inventor of more than a dozen patents related to engineering products geared towards the industrial businesses.

“Zahroof Valves, Inc has a powerful value proposition for reciprocating compressor operators,” said Qasimi. “Our valves use patented StraightFlo™ modular reed technology that provides much longer operating intervals than traditional plate or poppet valves. In addition to cost savings, operators now have a significant source reduction opportunity, enabling them to lower their methane intensity and hit their net zero voluntary commitments.”
</p>

<p> 
<h3>  About Zahroof Valves, Inc. </h3>
Zahroof Valves, Inc. (ZVI) is an engineering-focused innovator delivering valve solutions to operators of reciprocating gas compressors. ZVI is based in Houston, Texas, and serves energy and industrial markets worldwide. From its inception, ZVI has remained under the stable leadership of Founder and President Zahroof Mohamed. 

ZVI developed and markets the revolutionary StraightFlo™ reciprocating compressor valve, which delivers a quantum improvement in valve performance, serviceability, and reliability. With upcoming new product launches, ZVI will continue to focus on improving the sustainability, reliability, efficiency, productivity, and cost-effectiveness of compressors in any application.

</p>




      
      </div>
    </Section>
  );
};

export default Section4;
